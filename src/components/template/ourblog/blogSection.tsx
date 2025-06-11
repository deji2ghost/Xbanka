import Blogcard from "@/components/ui/blogcard";
import { blogsData } from "@/lib/data";

const BlogSection = () => {
  return (
    <div>
      <h1 className="text-[32px] font-[600] leading-[44.8px]">Recent post</h1>
      <div className="flex flex-wrap">
        {
            blogsData.map((item, index)=> (
                <Blogcard key={index} name={item.author} readTime={item.readTime} date={item.date} image={item.image} title={item.title} body={item?.body} />
            ))
        }
      </div>
    </div>
  );
};

export default BlogSection;
