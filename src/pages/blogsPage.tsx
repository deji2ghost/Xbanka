import { client } from "@/lib/contentful";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
    <div className="border border-red-800 px-[120px] pt-[56px] pb-[60px]">
      <div>
        <p>bread crumbs</p>
        <h1>{blogDetails.title}</h1>
        <p>
          Getting started with Bitcoin is easier than you think. This guide
          breaks down the process of buying Bitcoin, explaining the key steps,
          covering wallets, exchanges, and essential tips to get started.
        </p>
        <p>
          Buying Bitcoin for the first time can seem complicated with so many
          platforms, wallets, and security considerations to navigate. This
          article will tell you how to buy Bitcoin step by step, covering
          everything from choosing a wallet to completing your purchase.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div>
            <img
              src={blogDetails?.authorImage?.fields?.file?.url}
              alt={blogDetails?.author}
              loading="lazy"
            />
          </div>
          <div>
            <h1>Kim Karry</h1>
            <div className="flex">
              <p>published 23 May 2025</p>
              <p>8 mins read</p>
            </div>
          </div>
        </div>
        <div>
          <p>25 comments</p>
          <h1>123 likes</h1>
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
  );
};

export default BlogsPage;
