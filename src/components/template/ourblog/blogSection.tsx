import Blogcard from "@/components/ui/blogcard";
import Pagination from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/contentful";
import { formatDate } from "@/lib/dateFormatter";
import type { BlogCardProps } from "@/lib/types";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogCardProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>();
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9

  const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedPosts = posts.slice(startIndex, endIndex);

  const fetchPosts = async () => {
    setLoading(true);
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
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div className="">
      <h1 className="text-[32px] font-[600] leading-[44.8px]">Recent post</h1>
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
