import { client } from "@/lib/contentful";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@/components/ui/button";
// import type { Document } from '@contentful/rich-text-types';

const BlogsPage = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getEntriesById = async () => {
    setLoading(true);
    try {
      const response = await client.getEntry(id);
      console.log(response);
      setBlogDetails(response.fields);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getEntriesById();
    console.log(id);
  }, [id]);
  return (
    <div className="px-[80px] pt-[56px] pb-[148px]">
      <div className="flex items-start gap-[24px]">
          <div className="w-[793px] mb-[60px]">
            <div>
              <p>bread crumbs</p>
              <h1 className="text-[48px] font-[400] leading-[62.4px]">{blogDetails.title}</h1>
              <p className="text-[16px] font-[400] leading-[32px]">
                Getting started with Bitcoin is easier than you think. This guide
                breaks down the process of buying Bitcoin, explaining the key steps,
                covering wallets, exchanges, and essential tips to get started.
                Buying Bitcoin for the first time can seem complicated with so many
                platforms, wallets, and security considerations to navigate. This
                article will tell you how to buy Bitcoin step by step, covering
                everything from choosing a wallet to completing your purchase.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
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
                    <p>published 23 May 2025</p>
                    <p>8 mins read</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="font-[400] text-[15px]">25 comments</p>
                <h1 className="font-[400] text-[15px]">123 likes</h1>
              </div>
            </div>
            <div>
              <img
                src={blogDetails?.blogImage?.fields?.file?.url}
                alt={blogDetails?.author}
              />
            </div>
            <div className="prose prose-neutral max-w-none">
              {blogDetails?.body && documentToReactComponents(blogDetails.body)}
            </div>
          </div>
          <div>
            sidebar
          </div>
      </div>
      <div className="flex flex-col gap-[32px] w-[793px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p>Comments</p>
            <div className="w-full h-[1.5px] bg-[#DBE0E5]"></div>
          </div>
          <div>
            <p className="font-[400] text-[14px] leading-[19.6px]">Write comment here</p>
            <textarea className="border border-[#DBE0E5] rounded-[6px]" />
          </div>
        </div>
        <Button size="sm" className="w-[103px] py-[16px] px-[24px] leading-[22.4px] min-h-[5px]">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BlogsPage;
