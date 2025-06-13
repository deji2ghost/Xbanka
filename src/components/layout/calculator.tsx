import { useState } from "react";
import { Button } from "../ui/button";
import SelectBox from "./selectBox";
import usa from "@/assets/USA.svg";
import btc from "@/assets/btc.svg";

const Calculator = () => {
  const [text, setText] = useState<string | undefined>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="rounded-[8px] p-4 bg-[#F7F7F7] flex flex-col gap-4">
      <div className="w-[103px] flex flex-col">
        <h1 className="font-[400] text-[16px] leading-[22.4px]">
          Enter amount
        </h1>
        <input
          type="text"
          className="text-[32px] font-[600] border border-white rounded-[8px] leading-[41.6px]"
          name="name"
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-[22px]">
        <div className="bg-white border-none rounded-[8px]">
          <SelectBox
            image={usa}
            item="Bitcoin"
            label="Select coin"
            text="BTC"
          />
        </div>
        <div className="bg-white border-none rounded-[8px]">
          <SelectBox
            image={btc}
            item="US Dollar"
            label="Select currency"
            text="USD"
          />
        </div>
        <Button size="sm" className="border border-[#0EA08E] flex items-center justify-between w-full p-2 rounded-[8px]">
          <div className="flex items-center font-[600] text-[22px] leading-[33.6px]">
            <p>130 BTC</p>
            <span>=</span>
            <p>$108,401.50</p>
          </div>
          <p className="flex items-center font-[400] text-[14px] leading-[20.8px]">Last updated at 12:05 AM UTC</p>
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
