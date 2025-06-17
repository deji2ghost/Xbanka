import Blogcard from "@/components/ui/blogcard";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/contentful";
import { blogsData } from "@/lib/data";
import { useEffect, useState } from "react";

const BlogSection = () => {
  //  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const entries = await client.getEntries();
      console.log(entries)
      const items = entries.items.map((item: any) => ({
        title: item.fields.title,
        body: item.fields.body,
        summary: item.fields.summary,
        readTime: item.fields.readTime,
        likes: item.fields.likes,
        date: item.fields.date,
        comments: item.fields.comments,
        blogImage: item.fields.blogImage,
        authorImage: item.fields.authorImage,
        author: item.fields.author,
        id: item.sys.id,
      }));
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
          {posts.map((item, index) => (
            <Blogcard
              id={item?.id}
              key={index}
              name={item?.author}
              readTime={item?.readTime}
              date={item?.date}
              image={item?.blogImage.fields.file.url}
              title={item?.title}
              body={item?.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
