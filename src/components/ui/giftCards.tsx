import type { JSX } from "react";
import React from "react";
import { Link } from "react-router";

interface GiftCardsProp {
  Icon: JSX.Element;
  text: string;
  route?: string;
}

const GiftCards: React.FC<GiftCardsProp> = React.memo(({ Icon, text, route }) => {
  return (
    <Link
      to={route ? route : ""}
      style={{
        boxShadow: `
      0px 1.13px 3.4px 1.13px rgba(0, 0, 0, 0.15),
      0px 1.13px 2.26px 0px rgba(0, 0, 0, 0.3)
    `,
      }}
      className="gap-[9.05px] rounded-[9.05px] p-[9.05px] inline-flex bg-background z-20 hover:bg-customCyan transition-transform duration-300 ease-in-out"
    >
      {Icon}
      <p className="text-[16px] font-[600] leading-[25.35px]">{text}</p>
    </Link>
  );
});

export default GiftCards;
