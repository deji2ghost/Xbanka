import React from "react"

interface SubHeaderProps{
    text: string
}

const SubHeader = React.memo(({text}: SubHeaderProps) => {
  return (
    <p className="md:leading-[52px] text-[28px] leading-[36px] font-[400] md:text-[48px] mt-[24px] text-center">
      {text}
    </p>
  )
})

export default SubHeader
