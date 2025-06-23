import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React, { useState } from "react";
import { Link } from "react-router";

export interface itemDataProps{
  linkName: string,
        link: string
}

export interface dataProps{
    linkHeader: string
    items: itemDataProps[]
}

interface DropdownProp {
  data: dataProps[];
  item: string;
}

const DropdownLayoutCustomContent = React.memo(
  ({ data, item }: DropdownProp) => {
    const [open, setOpen] = useState(false);
    return (
      <DropdownMenu onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div className="text-[16px] cursor-pointer font-[600] flex items-center gap-2">
            {item}
            <FaChevronDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="inline-flex mx-auto p-2 items-start justify-start gap-10 z-90"
          align="start"
        >
            {data.map((item) => (
              <div>
                <h1 className="text-[20px] font-[500] leading-[28px] mb-2">{item.linkHeader}</h1>
                <div className="flex flex-col">
                  {item.items.map((item) => (
                    <Link className="text-[14px] font-[500] leading-[28px] hover:underline hover:text-subCyan" to={item.link}>{item.linkName}</Link>
                  ))}
                </div>
              </div>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

export default DropdownLayoutCustomContent;
