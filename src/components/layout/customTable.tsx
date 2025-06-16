"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "../ui/skeleton"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[] | undefined
  data: TData[] | undefined
  loading: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data: data ?? [],
    columns: columns ?? [],
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-[8px]">
      <Table>
        <TableHeader className="rounded-tl-[8px] rounded-tr-[8px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="bg-[#F2F2F7] py-2 px-6 gap-6 w-full font-[600] text-[17px] leading-[28px] rounded-[8px]" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border border-[#D9D9D9] font-[600] text-[17px] leading-[28px]">
          { loading ? <Skeleton className="w-full" /> : (table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-none"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns?.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}