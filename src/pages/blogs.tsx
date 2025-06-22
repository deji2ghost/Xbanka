import BlogSection from "@/components/template/ourblog/blogSection"
import TopSection from "@/components/template/ourblog/topSection"

const Blogs = () => {
    
  return (
    <div className="px-4 md:px-[80px] py-7 md:pt-[164px] md:pb-[148px]">
        <div>
            <TopSection />
            <BlogSection />
        </div>
    </div>
  )
}

export default Blogs
