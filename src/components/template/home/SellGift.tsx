import RotatingCardOrbit from "@/components/layout/giftcardcarousel";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/animations";
import { motion } from "motion/react";
import { Link } from "react-router";

const SellGift = () => {
  return (
    <div className="flex flex-col gap-[60px] md:flex-row md:gap-[90px] px-4 py-7 md:px-[80px] md:py-[148px]">
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:w-[535px] mb-14 md:mb-0"
      >
        <h1 className="mb-[16px] font-[400] text-[28px] leading-[36px] md:text-[48px] md:leading-[62.4px]">
          Sell gift cards instantly
        </h1>
        <p className="mb-[32px] font-[400] text-[16px] leading-[24px] md:text-[24px] md:leading-[31.2px]">
          Trade all your favorite gift cards at the best rates in Nigeria:
        </p>
        <Link to="https://wa.me/2349039716418">
          <Button className="mx-auto md:mx-0 flex justify-center md:justify-start">
            Get Started
          </Button>
        </Link>
      </motion.div>
      <RotatingCardOrbit />
    </div>
  );
};

export default SellGift;
