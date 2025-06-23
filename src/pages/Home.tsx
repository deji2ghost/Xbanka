import pattern from "@/assets/pattern1.webp";
import { Button } from "@/components/ui/button";
import { rowFive, rowFour, rowOne, rowSix, rowThree, rowTwo } from "@/lib/data";
import { motion } from "motion/react";
import { FadeUp } from "@/lib/animations";
import HeroSection from "@/components/template/home/HeroSection";
import SellGift from "@/components/template/home/SellGift";
import OurServices from "@/components/template/home/OurServices";
import MostTraded from "@/components/template/home/MostTraded";
import WhyChooseUs from "@/components/template/home/WhyChooseUs";
import AboutUs from "@/components/template/home/AboutUs";
import ComingSoon from "@/components/template/home/ComingSoon";
import GiftCards from "@/components/ui/giftCards";
import UsersSaying from "@/components/template/home/UsersSaying";
import FAQ from "@/components/template/home/FAQ";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <SellGift />
      <div
        style={{
          backgroundColor: "#04153E",
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
        className="flex flex-col gap-[56px] justify-center items-center text-center overflow-hidden bg-no-repeat bg-cover bg-center px-4 py-7 md:px-[80px] md:py-[148px]"
      >
        <motion.div
          variants={FadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:px-[180px]"
        >
          <h3 className="font-[600] text-[16px] md:text-[20px] text-abstractCyan py-2 px-4 leading-[22.4px]">
            WE GOT YOU COVERED
          </h3>
          <h1 className="font-[400] text-[28px] leading-[36px] md:text-[48px] text-offWhite md:leading-[52px]">
            No more waiting. Get paid in Naira, crypto, or USD — your choice.
          </h1>
        </motion.div>
        <Link to="https://wa.me/2349039716418">
          <Button>Start trading gift cards</Button>
        </Link>
      </div>
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-7 md:px-[80px] md:py-[148px] flex flex-col gap-[48px]"
      >
        <h1 className="text-foreground font-[400] text-[32px] leading-[41.6px]">
          Top gift cards in demand:
        </h1>
        <div className="flex flex-col gap-[45px]">
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowOne.map((item, index) => (
              <GiftCards
                route={item?.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="w-[22.36px] overflow-hidden h-[24px] object-contain flex items-center"
                      loading="lazy"
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowTwo.map((item, index) => (
              <GiftCards
                route={item.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"
                      src={item.image}
                      loading="lazy"
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowThree.map((item, index) => (
              <GiftCards
                route={item.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowFour.map((item, index) => (
              <GiftCards
                route={item.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"
                      loading="lazy"
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowFive.map((item, index) => (
              <GiftCards
                route={item.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"
                      loading="lazy"
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
          <div className="md:flex items-center p-[3px] md:gap-[45px] flex-wrap">
            {rowSix.map((item, index) => (
              <GiftCards
                route={item.route}
                key={index}
                Icon={
                  <div>
                    <img
                      className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"
                      loading="lazy"
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                }
                text={item.text}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <OurServices />
      <MostTraded />
      <WhyChooseUs />
      <AboutUs />
      <ComingSoon />
      <UsersSaying />
      <FAQ />
    </div>
  );
};
export default Home;
