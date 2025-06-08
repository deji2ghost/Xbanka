interface SubHeaderProps{
    text: string
}

const SubHeader = ({text}: SubHeaderProps) => {
  return (
    <p className="leading-[52px] font-[400] text-[48px] mt-[24px] text-center">
      {text}
    </p>
  )
}

export default SubHeader
