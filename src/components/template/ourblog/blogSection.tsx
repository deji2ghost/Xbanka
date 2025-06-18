import Blogcard from "@/components/ui/blogcard";
import Pagination from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/contentful";
import { formatDate } from "@/lib/dateFormatter";
import type { BlogCardProps } from "@/lib/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogCardProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>();
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9
  const [error, setError] = useState<string | null>(null);

  const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedPosts = posts.slice(startIndex, endIndex);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const entries = await client.getEntries();
      console.log(entries)
      const totalPages = Math.ceil(entries?.total / itemsPerPage)
      setPageTotal(totalPages)
      const items = entries.items.map((item) => ({
        title: item.fields.title,
        summary: item.fields.summary,
        readTime: item.fields.readTime,
        likes: item.fields.likes,
        date: item.fields.date,
        comments: item.fields.comments,
        blogImage: item?.fields?.blogImage,
        author: item?.fields?.author,
        id: item.sys.id,
      }));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setPosts(items);
      setLoading(false);
    } catch (error) {
      let errorMessage = "Failed to load posts. Please try again later.";

  if (error instanceof AxiosError) {
    if (error.code === "ERR_NETWORK") {
      errorMessage = "Network Error";
    } else if (error.response) {
      // Server responded with status code outside 2xx
      errorMessage = `Server error: ${error.response.status} ${error.response.statusText}`;
    } else if (error.request) {
      // Request made, no response received
      errorMessage = "No response received from the server.";
    }
  } else if (typeof window !== "undefined" && !navigator.onLine) {
    errorMessage = "You are offline. Please check your internet connection.";
  }

  setError(errorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-[500px]">
      <h1 className="text-[32px] font-[600] leading-[44.8px] mb-[20px]">Recent post</h1>
      {error && (
      <div className="text-red-700 text-center mt-10">
        {error}
      </div>
    )}
      {loading ? (
        <div className="flex flex-wrap">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-[370px] rounded-[7.65px] p-[22.95px] flex flex-col gap-[15.3px]"
          >
            <Skeleton className="w-full h-[125px]" />
            <div className="flex items-center gap-[11.48px]">
              <Skeleton className="w-full h-[15px]" />
              <Skeleton className="w-full h-[15px]" />
              <Skeleton className="w-full h-[15px]" />
            </div>
          </div>
        ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-[38px]">
          {paginatedPosts.map((item, index) => (
            <Blogcard
              id={item?.id}
              key={index}
              name={item?.author}
              readTime={item?.readTime}
              date={formatDate(item?.date)}
              image={item?.blogImage.fields?.file.url}
              title={item?.title}
              body={item?.summary}
            />
          ))}
        </div>
      )}
      <Pagination currentPage={page} onPageChange={setPage} totalPages={pageTotal || 0} />
    </div>
  );
};

export default BlogSection;
