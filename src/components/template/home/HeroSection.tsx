import pattern from "@/assets/pattern1.svg";
import card from "@/assets/card-bg-preview.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FadeUp } from "@/lib/animations";

const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat pt-[196px] pb-[241px] bg-cover bg-center"
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
      className="md:w-[888px] flex flex-col text-center items-center justify-center mx-auto text-offWhite">
        <h1 className="mb-[24px] text-[32px] md:text-[64px] font-[400] text-offWhite leading-[76.8px]">
          Xbanka: Trade Apple Gift Card, Crypto & More — Instantly in Nigerian
          Naira
        </h1>
        <p className="mb-[48px] font-[600] text-[24px] text-offWhite leading-[33.6px]">
          Xbanka makes it easy to trade gift cards, convert crypto, and pay for
          services — all in Naira, USD, or Crypto.{" "}
          <span className="font-[400]">
            Fast, flexible, and transparent digital asset management, all in one
            place.
          </span>
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
       className="w-full absolute bottom-0 pointer-events-none left-1/2 translate-x-[-50%] translate-y-[45%]">
        <img src={card} loading="lazy" className="w-full" alt="gift cards" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
