export interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  sparkline_in_7d?: { price: number[] };
}

export interface BlogCardProps {
  title: string;
  summary: string;
  readTime: string;
  likes: number;
  date: string;
  comments: number;
  blogImage: ContentfulImageProps
  author: string;
  id: string;
}

export interface ContentfulImageProps{
  metadata: {
    tags: unknown[];
    concepts: unknown[];
  };
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    publishedVersion: number;
    revision: number;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    space: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
      size: number;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}

// types.ts or within same file
export interface BlogPostFields {
  title: string;
  body: string;
  summary: string;
  readTime: string;
  likes: number;
  date: string;
  comments: number;
  blogImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  authorImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  author: string;
}

