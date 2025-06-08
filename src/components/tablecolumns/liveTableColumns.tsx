"use client"

import type { CoinProps } from "@/lib/types"
import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper<CoinProps>();

export const columns = [
  columnHelper.accessor("name", {
    cell: ({ row }) => {
      const item = row.original;
      return(
        <div className="flex items-start">
            <div className="w-[30px]"><img src={item.image} alt={item.name} /></div>
            <div className="">
                <p className="truncate cursor-pointer ">
                    &#8358;{item.name}
                </p>
                <p className="truncate cursor-pointer ">
                    &#8358;{item.symbol}
                </p>
            </div>
        </div>
      )
    },
    header: () => <span className="">Coin</span>,
  }),
  columnHelper.accessor("current_price", {
    cell: ({ row }) => {
      const item = row.original;
      return(
        <p className="flex items-start">
         { item.current_price }  
        </p>
      )
    },
    header: () => <span className="">Price</span>,
  }),
  columnHelper.accessor("total_volume", {
    cell: ({ row }) => {
      const item = row.original;
      return(
        <p className="flex items-start">
         { item.total_volume }  
        </p>
      )
    },
    header: () => <span className="">Price</span>,
  }),
  columnHelper.accessor("price_change_percentage_24h", {
    cell: ({ row }) => {
      const item = row.original;
      return(
        <p className="flex items-start">
         { item.price_change_percentage_24h }  
        </p>
      )
    },
    header: () => <span className="">Price</span>,
  }),
]