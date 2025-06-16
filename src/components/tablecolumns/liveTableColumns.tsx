import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CoinProps } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";


export const columns: ColumnDef<CoinProps, unknown>[] = [
  {
    accessorKey: "current_price",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Coin",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="flex items-start gap-1">
          <div className="w-[24px] h-[24px]">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="cursor-pointer">
              {item.name}
            </p>
            <p className="cursor-pointer">
              {item.symbol}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: "Price",
    cell: ({ getValue }) => `$${getValue<number>().toLocaleString()}`,
  },
   {
    accessorKey: "total_volume",
    header: "Volume",
    cell: ({ getValue }) => `$${getValue<number>().toLocaleString()}`,
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: "Change",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      const isPositive = value >= 1;
      return (
        <span className={isPositive ? "text-mainGreen" : "text-mainRed"}>
          {isPositive ? "▲" : "▼"} {value.toFixed(2)}%
        </span>
      );
    },
  },
  {
    accessorKey: "symbol",
    header: "Action",
    cell: ({ getValue }) => {
      const item = getValue();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => console.log(item)} className="cursor-pointer" asChild>
            <div className="h-[24px] w-[24px] p-0">
              {/* <span className="sr-only">Open menu</span> */}
              <MoreHorizontal />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 text-[13px] leading-[28px]" align="center">
            <DropdownMenuItem className="py-1 px-2 text-[12px]">Delete details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-1 px-2 text-[12px]">View Details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-1 px-2 text-[12px]">View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
