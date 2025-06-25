import { Link } from "react-router"
import { Button } from "../ui/button"

interface MoreQuestionCardProps{
    Header: string, 
    body: string, 
    text: string
}

const Morequestioncard:React.FC<MoreQuestionCardProps> = ({Header, body, text}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[90%] gap-[15px] md:gap-[32px] mt-[48px] bg-lightCyan md:w-[619px] mx-auto rounded-[8px] py-[32px] px-[20px] md:py-[48px] md:px-[80px]">
      <div className="flex flex-col justify-center items-center gap-[10px] md:gap-4">
        <h1 className="text-[24px] md:text-[32px] font-[600]">{Header}</h1>
        <p className="text-[16px] md:text-[24px] font-[400] text-center">{body}</p>
      </div>
      <Link to="https://wa.me/2349039716418">
        <Button className="w-full max-w-[300px] md:w-[350px] mx-auto">
          {text}
        </Button>
      </Link>
    </div>
  )
}

export default Morequestioncard
