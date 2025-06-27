import pattern from "@/assets/pattern1.webp";
import card from "@/assets/card-bg-preview.svg";
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/lib/animations"
import { motion } from "motion/react"
import { Link } from "react-router"

interface RusableHerosectionLayoutProps{
    Header: string, 
    paragraph: string
}

const RusableHerosectionLayout = ({ Header, paragraph }: RusableHerosectionLayoutProps) => {
  return (
      <div
      className="relative overflow-hidden bg-no-repeat pt-8 pb-[100px] md:pt-[196px] md:pb-[241px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(4, 21, 62, 0.93) 0%, rgba(4, 21, 62,0.93) 20%, rgba(73,34,121,0.93) 70%), url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:w-[888px] flex flex-col text-center items-center justify-center mx-auto text-offWhite"
      >
        <h1 className="mb-[24px] text-[32px] md:text-[64px] font-[400] text-offWhite md:leading-[76.8px]">
           {Header}
        </h1>
        <p className="mb-[32px] text-center md:px-[40px] font-[400] text-[16px] leading-[24px] md:text-[24px] md:leading-[31.2px]">
          {paragraph}
        </p>
        <Link className="" to="https://wa.me/2349039716418">
          <Button size="lg">Get started</Button>
        </Link>
      </motion.div>
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full absolute bottom-0 pointer-events-none left-1/2 translate-x-[-50%] translate-y-[45%]"
      >
        <img src={card} loading="lazy" className="w-full" alt="gift cards" />
      </motion.div>
    </div>
  )
}

export default RusableHerosectionLayout