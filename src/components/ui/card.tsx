import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  head?: string;
  paragraph: string;
  className?: string;
  none?: boolean;
  image: string;
  userName?: string;
  userHandle?: string;
  imageStyle?: string
}

const Card: React.FC<CardProps> = React.memo(({
  image,
  head,
  paragraph,
  className,
  none,
  userName,
  userHandle,
  imageStyle
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[16px] gap-6 py-6 px-8 text-left bg-background",
        className
      )}
      style={
        none ? undefined : { boxShadow: "0px 6px 12px 6px rgba(0, 0, 0, 0.12)" }
      }
    >
      <div className="flex items-start gap-2">
      <div className={ imageStyle && imageStyle }>
        <img src={image} loading="lazy" alt={userName} />
      </div>
      {
        (userName || userHandle) &&
        <div className="flex flex-col gap-[2px]">
            <h2 className="font-[700] text-[16px]">{userName}</h2> 
            <p className="font-[600] text-[12px] text-[#1DA1F2]">{userHandle}</p>
        </div>
      }
      </div>
      <div>
        <div className="flex flex-col gap-[16px]">
          {head && (
            <h1
              className={`text-[24px] leading-[31.2px] ${
                none ? "text-background" : "text-foreground"
              } font-[600]`}
            >
              {head}
            </h1>
          )}
          <p
            className={`text-[16px] ${
              none ? "text-background" : "text-foreground"
            } font-[400] leading-[22.4px]`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Card;
