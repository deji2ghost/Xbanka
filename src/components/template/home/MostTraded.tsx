import MostTradedLayout from "@/components/layout/MostTradedLayout";
import { Button } from "@/components/ui/button";
import { mostTraded } from "@/lib/data";
import blur from "@/assets/purpleSpread.svg";
import { FadeLeft, FadeRight } from "@/lib/animations";
import { motion } from "motion/react";

const MostTraded = () => {
  return (
    <div className="flex items-center justify-between py-[148px] gap-[17px] px-[120px]">
      <motion.div 
      variants={FadeRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
      className="flex flex-col items-start gap-8">
          <h1 className="leading-[62.4px] font-[400] text-[48px]">Most traded cards this week</h1>
          <Button>Get started</Button>
      </motion.div>
      <div className="relative">
        <div>
          <img src={blur} alt="blur" />
        </div>
        <motion.div 
        variants={FadeLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
        className="absolute top-0 flex flex-col gap-3">
          {mostTraded.map((item, index) => (
            <MostTradedLayout
              color={item.color}
              key={index}
              image={item.image}
              index={index}
              text={item.text}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MostTraded;
