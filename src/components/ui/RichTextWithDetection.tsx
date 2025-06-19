import {
  BLOCKS,
  MARKS,
  type Document,
  type Block,
  type Inline,
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import type { ReactNode } from "react";
import { slugify } from "@/lib/slugify";

type Props = {
  richTextDocument: Document;
  onHeaderFound?: (headerText: string, level: number, slug: string) => void;
  onBoldFound?: (boldText: string) => void;
};

let boldKey = 0;

// Type guard for Block
const isBlock = (node: Block | Inline): node is Block =>
  "content" in node && Array.isArray(node.content);

const RichTextWithDetection = ({
  richTextDocument,
  onHeaderFound,
  onBoldFound,
}: Props) => {
  const renderHeading =
    (level: number) => (node: Block | Inline, children: ReactNode) => {
      if (!isBlock(node)) return null;

      const text = node.content
        .map((c) => ("value" in c ? c.value : ""))
        .join("");
      const slug = slugify(text);
      onHeaderFound?.(text, level, slug);

      const Tag = `h${level}` as React.ElementType;
      return <Tag id={slug}>{children}</Tag>;
    };

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: renderHeading(1),
      [BLOCKS.HEADING_2]: renderHeading(2),
      [BLOCKS.HEADING_3]: renderHeading(3),
      [BLOCKS.HEADING_4]: renderHeading(4),
      [BLOCKS.HEADING_5]: renderHeading(5),
      [BLOCKS.HEADING_6]: renderHeading(6),
    },
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => {
        const str = typeof text === "string" ? text : "";
        if (str) onBoldFound?.(str);
        return (
          <p className="mt-5 mb-1" key={`bold-${boldKey++}`}>
            <strong className="text-[22px] font-[600] leading-[34px]">{text}</strong>
          </p>
        );
      },
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};

export default RichTextWithDetection;

// export default RichTextWithDetection;
// function onHeaderFound(text, arg1) {
//     throw new Error('Function not implemented.');
// }

// function onBoldFound(text: string) {
//     throw new Error('Function not implemented.');
// }
