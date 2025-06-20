import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import type { BlogCardProps } from "@/lib/types";
import { client } from "@/lib/contentful";

export const usePosts = (itemsPerPage = 9) => {
  const [posts, setPosts] = useState<BlogCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageTotal, setPageTotal] = useState<number>(0);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const entries = await client.getEntries();
      const totalPages = Math.ceil(entries?.total / itemsPerPage);
      setPageTotal(totalPages);

        const items = entries.items.map((item) => ({
        title: item.fields.title,
        summary: item.fields.summary,
        readTime: item.fields.readTime,
        likes: item.fields.likes,
        date: item.fields.date,
        comments: item.fields.comments,
        blogImage: item.fields.blogImage,
        author: item.fields.author,
        id: item.sys.id,
      }));

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setPosts(items);
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
        errorMessage = "You are offline. Please check your internet connection.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, pageTotal, refetch: fetchPosts };
};