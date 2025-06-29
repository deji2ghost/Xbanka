import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router";
import React, { useState } from "react";

interface DropdownItemsProp {
  link: string;
  linkName: string;
}

interface DropdownProp {
  data: DropdownItemsProp[];
  item: string;
}

const DropdownLayout = React.memo(({ data, item }: DropdownProp) => {
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
        className="w-56 p-2 flex flex-col gap-2 z-90"
        align="start"
      >
        {data.map((item) => (
          <DropdownMenuItem
            key={item.link}
            className="text-[14px] font-[500] cursor-pointer leading-[28px] hover:underline hover:text-subCyan hover:bg-none p-1"
            asChild
            onSelect={() => setOpen(false)}
          >
            <Link
              onClick={() => {
                requestAnimationFrame(() => setOpen(false));
              }}
              className="hover:bg-abstractCyan w-full p-1 text-[17px] font-normal rounded-md"
              to={item.link}
            >
              {item.linkName}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

export default DropdownLayout;
