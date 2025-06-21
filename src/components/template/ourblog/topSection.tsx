import { Input } from "@/components/ui/input";
import { List } from "@/lib/data";
import { useState } from "react";

const TopSection = () => {
    const [ blogContent, setBlogContent ] = useState("")
  return (
    <div className="mb-[64px] px-[60.5px]">
      <div className="md:px-[80px] mb-[48px]">
        <h1 className="font-[400] text-[64px] leading-[76.8px] text-center mb-[24px]">Latest Crypto & Gift Card News And Blog</h1>
        <p className="font-[400] text-[24px] leading-[33.6px] text-center mb-[64px]">
          Get expert tips and updates on crypto trading, gift card exchange, and
          digital finance — all in one place.
        </p>
        <Input
        className="md:w-[651px] mx-auto"
          type="text"
          placeholder="Search by topic, category"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:flex md:gap-8">
        {List.map((item, index) => (
          <p className="border py-[10px] px-[14px] font-[600] text-[16px] inline-flex leading-[25.35px] bg-white border-[#D9D9D9] rounded-[9.05px]" key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
