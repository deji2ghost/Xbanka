import BoxHeader from "@/components/ui/boxHeader";
import Card from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";
import { competitiveAdvantage } from "@/lib/data";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  return (
    <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:py-[148px] md:px-[80px] px-4 py-7 flex flex-col gap-[48px]"
    >
      <div className="flex flex-col gap-[24px] md:px-[215px]">
        <BoxHeader text="WHY CHOOSE US?" />
        <p className="md:text-[48px] text-[28px] leading-[36px] font-[400] text-center md:leading-[52px]">
          Our Competitive Advantage
        </p>
      </div>
      <div className="flex flex-col md:grid gap-6 md:grid-cols-3 md:gap-x-[48px] md:gap-y-[29px]">
        {competitiveAdvantage.map((item, index) => (
          <Card
            className={index % 2 === 1 ? "bg-abstractCyan" : "bg-background"}
            key={index}
            image={item.image}
            head={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
