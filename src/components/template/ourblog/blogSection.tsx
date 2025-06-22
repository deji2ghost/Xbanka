import Blogcard from "@/components/ui/blogcard";
import Pagination from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { usePosts } from "@/hooks/PostHook";
import { formatDate } from "@/lib/dateFormatter";
import { useState } from "react";

const BlogSection = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 9;
   const { posts, loading, error, pageTotal } = usePosts(9);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="min-h-[500px]">
      <h1 className="text-[32px]  font-[600] leading-[44.8px] mb-[20px]">
        Recent post
      </h1>
      {error && <div className="text-red-700 text-center mt-10">{error}</div>}
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
        <div className="flex flex-wrap justify-center gap-[38px]">
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
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={pageTotal || 0}
      />
    </div>
  );
};

export default BlogSection;
