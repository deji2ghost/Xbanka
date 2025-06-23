import { client } from "@/lib/contentful";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import RichTextWithDetection from "@/components/ui/RichTextWithDetection";
import { AxiosError } from "axios";
import { formatDate } from "@/lib/dateFormatter";
import { BreadcrumbWithCustomSeparator } from "@/components/layout/breadCrumbLayout";
import { slugify } from "@/lib/slugify";
import { usePosts } from "@/hooks/PostHook";
import { Skeleton } from "@/components/ui/skeleton";
import Blogcard from "@/components/ui/blogcard";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import type { BlogPostFields } from "@/lib/types";
// import type { Document } from '@contentful/rich-text-types';

const BlogsPage = () => {
  const [headings, setHeadings] = useState<
    { text: string; level: number; slug: string }[]
  >([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [blogDetails, setBlogDetails] = useState<BlogPostFields>();
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState<string | null>("");
  const { id } = useParams();
  const { posts, loading, error } = usePosts(9);
  const firstThreePosts = posts?.slice(0, 3);
  useEffect(() => {
    console.log(posts);
  }, []);

  const handleHeaderFound = (text: string, level: number, slug: string) => {
    setHeadings((prev) => {
      if (prev.find((h) => h.slug === slug)) return prev;
      return [...prev, { text, level, slug }];
    });
  };

  const handleBoldFound = (text: string) => {
    const slug = slugify(text);
    setHeadings((prev) => {
      if (prev.find((h) => h.slug === slug)) return prev;
      return [...prev, { text, level: 7, slug }];
    });
  };

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px", // Trigger when heading reaches 30% from top
      threshold: 1.0,
    });

    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headingElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [blogDetails]);

  const getEntriesById = async () => {
    if (!id) return;
    setBlogLoading(true);
    setBlogError(null);
    try {
      const response = await client.getEntry(id);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setBlogDetails(response.fields);
      if (response.fields.title) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const titleSlug = slugify(response.fields.title);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setHeadings((prev) => [
          ...prev,
          { text: response.fields.title, level: 1, slug: titleSlug },
        ]);
      }

      setBlogLoading(false);
    } catch (error) {
      let errorMessage = "Failed to load posts. Please try again later.";

      if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
          errorMessage = "Network Error";
        } else if (error.response) {
          errorMessage = `Server error: ${error.response.status} ${error.response.statusText}`;
        } else if (error.request) {
          errorMessage = "No response received from the server.";
        }
      } else if (typeof window !== "undefined" && !navigator.onLine) {
        errorMessage =
          "You are offline. Please check your internet connection.";
      }

      setBlogError(errorMessage);
      setBlogLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      setBlogError("No blog ID provided.");
      return;
    }
    getEntriesById();
  }, [id]);

  if (blogError) {
    <div>{blogError}</div>;
  }

  if (blogLoading) {
    <div className="flex flex-wrap">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="w-[370px] rounded-[7.65px] p-[22.95px] flex flex-col gap-[15.3px]"
        >
          <div className="flex items-center gap-[11.48px]">
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
          </div>
          <Skeleton className="w-full h-[125px]" />
          <div className="flex items-center gap-[11.48px]">
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
            <Skeleton className="w-full h-[15px]" />
          </div>
        </div>
      ))}
    </div>;
  }

  return (
    <div className="relative px-[80px] pt-[56px] pb-[148px]">
      <div className="flex items-start gap-[24px]">
        <div className="w-[793px] mb-[60px] flex flex-col gap-6">
          <div className="">
            <BreadcrumbWithCustomSeparator
              home="blog"
              breadCrumbPage={blogDetails?.title || ""}
            />
            <h1
              id={slugify(blogDetails?.title)}
              className="text-[48px] font-[400] leading-[62.4px] mb-4"
            >
              {blogDetails?.title}
            </h1>
            <p className="text-[16px] font-[400] leading-[32px]">
              {blogDetails?.summary}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <div className="w-[40px] h-[40px]">
                <img
                  src={blogDetails?.authorImage?.fields?.file?.url}
                  alt={blogDetails?.author}
                  loading="lazy"
                />
              </div>
              <div>
                <h1 className="font-[600] text-[16px]">Kim Karry</h1>
                <div className="flex items-center gap-[18.5px] font-[400] text-[12px] text-[#757575]">
                  <p>published {formatDate(blogDetails?.date || "")}</p>
                  <p>{blogDetails?.readTime} mins read</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-[400] text-[15px]">25 comments</p>
              <h1 className="font-[400] text-[15px]">123 likes</h1>
            </div>
          </div>
          <div className="">
            <img
              src={blogDetails?.blogImage?.fields?.file?.url}
              alt={blogDetails?.author}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="text-[16px]">
            {blogDetails?.body && (
              <RichTextWithDetection
                onBoldFound={handleBoldFound}
                onHeaderFound={handleHeaderFound}
                richTextDocument={blogDetails.body}
              />
            )}
          </div>
        </div>
        <div className="">
          <div className="mb-[64px]">
            <p className="font-[400] text-[16px] leading-[22.4px] text-[#23262F] mb-4">
              In this article:
            </p>
            <ul className="text-sm space-y-2 font-[600] text-[16px] leading-[22.4px] text-[#1E1E1E]">
              {headings.map(({ text, slug, level }, index) => (
                <li key={`${slug}-${index}`} className={`pl-${(level - 1) * 4}`}>
                  <a
                    href={`#${slug}`}
                    className={`hover:underline ${
                      activeId === slug ? "text-subCyan" : "text-foreground"
                    }`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-[400] text-[32px] leading-[41.6px] text-[#23262F]">
                Suggested posts
              </h1>
              <div className="flex items-center gap-4">
                <p className="font-[400] text-[16px] leading-[22.4px]">
                  Share on:
                </p>
                <div className="flex gap-[14.61px]">
                  <BsTwitterX className="w-[24px] h-[24px] text-white cursor-pointer bg-[#492279] rounded-[4.87px] p-[4.87px]" />
                  <FaInstagram className="w-[24px] h-[24px] text-white cursor-pointer bg-[#492279] rounded-[4.87px] p-[4.87px]" />
                  <FaYoutube className="w-[24px] h-[24px] text-white cursor-pointer bg-[#492279] rounded-[4.87px] p-[4.87px]" />
                  <FaFacebook className="w-[24px] h-[24px] text-white cursor-pointer bg-[#492279] rounded-[4.87px] p-[4.87px]" />
                </div>
              </div>
            </div>
            <div>
              {loading ? (
                <div className="flex flex-wrap">
                  {Array.from({ length: 3 }).map((_, index) => (
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
              ) : error ? (
                <p>{error}</p>
              ) : (
                <div>
                  {firstThreePosts.map((item, index) => (
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] w-[793px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p>Comments</p>
            <div className="w-full h-[1.5px] bg-[#DBE0E5]"></div>
          </div>
          <div>
            <p className="font-[400] text-[14px] leading-[19.6px]">
              Write comment here
            </p>
            <textarea className="border border-[#DBE0E5] rounded-[6px]" />
          </div>
        </div>
        <Button
          size="sm"
          className="w-[103px] py-[16px] px-[24px] leading-[22.4px] min-h-[5px]"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BlogsPage;
