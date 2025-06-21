import { Button } from "../ui/button"

interface MoreQuestionCardProps{
    Header: string, 
    body: string, 
    text: string
}

const Morequestioncard:React.FC<MoreQuestionCardProps> = ({Header, body, text}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px] mt-[48px] bg-lightCyan md:w-[619px] mx-auto rounded-[8px] py-[48px] md:px-[80px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-[32px] font-[600]">{Header}</h1>
        <p className="text-[24px] font-[400]">{body}</p>
      </div>
      <Button className="w-[350px] mx-auto">
        {text}
      </Button>
    </div>
  )
}

export default Morequestioncard
