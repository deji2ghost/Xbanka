import React from "react"

interface BoxHeaderProps{
    text: string
}

const BoxHeader:React.FC<BoxHeaderProps> = React.memo(({text}) => {
  return (
    <p className="text-background inline-flex leading-[22.4px] mx-auto rounded-[8px] font-[600] text-[20px] py-2 px-4 bg-subCyan">{text}</p>
  )
})

export default BoxHeader
