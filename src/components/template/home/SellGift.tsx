import RotatingCardOrbit from "@/components/layout/giftcardcarousel";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";
import { motion } from "motion/react";

const SellGift = () => {
  return (
    <div className="flex gap-[90px] px-[80px] py-[148px]">
      <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-[535px]">
        <h1 className="mb-[16px] font-[400] text-[48px] leading-[62.4px]">Sell gift cards instantly</h1>
        <p className="mb-[32px] font-[400] text-[24px] leading-[31.2px]">Trade all your favorite gift cards at the best rates in Nigeria:</p>
        <Button>Get Started</Button>
      </motion.div>
      <RotatingCardOrbit />
    </div>
  );
};

export default SellGift;
