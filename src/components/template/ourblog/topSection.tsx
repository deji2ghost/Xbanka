import { Input } from "@/components/ui/input";
import { List } from "@/lib/data";
import { useState } from "react";

const TopSection = () => {
    const [ blogContent, setBlogContent ] = useState("")
  return (
    <div className="mb-[64px]">
      <h1>Latest Crypto & Gift Card News And Blog</h1>
      <p>
        Get expert tips and updates on crypto trading, gift card exchange, and
        digital finance — all in one place.
      </p>
      <Input
        type="text"
        placeholder="Search by topic, category"
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
      />
      <div className="flex">
        {List.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
