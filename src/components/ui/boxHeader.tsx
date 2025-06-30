import { cn } from "@/lib/utils"
import React from "react"

interface BoxHeaderProps{
    text: string,
    className?: string
}

const BoxHeader:React.FC<BoxHeaderProps> = React.memo(({text, className}) => {
  return (
    <p className={cn("text-background inline-flex leading-[22.4px] mx-auto rounded-[8px] font-[600] text-[14px] md:text-[20px] py-1 px-[10px] md:py-2 md:px-4 bg-subCyan", className)}>{text}</p>
  )
})

export default BoxHeader
