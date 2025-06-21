import pattern from "@/assets/pattern1.svg";
import BoxHeader from "@/components/ui/boxHeader";
import Card from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";
import { services } from "@/lib/data";
import { motion } from "motion/react";

const OurServices = () => {
  return (
    <div
      style={{
        backgroundColor: "#CFF7F2",
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
      className="flex flex-col gap-[56px] justify-center items-center text-center overflow-hidden bg-no-repeat bg-cover bg-center md:px-[80px] pt-[148px] pb-[102px]"
    >
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <div className="px-[215px] flex flex-col gap-6">
          <BoxHeader text="OUR SERVICES" />

          <h1 className="font-[400] text-[48px] leading-[52px]">
            What you can do on Xbanka
          </h1>
        </div>
        <div className="px-[248px]">
          <p className="font-[400] text-[24px] leading-[33.6px]">
            Simplify your digital transactions with tools built for gift card
            trading, crypto conversion, and seamless payments. All in one secure
            and efficient platform.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={FadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:grid md:grid-cols-2 gap-x-[48px] gap-y-[29px] px-[106px] bg-transparent"
      >
        {services.map((item, index) => (
          <Card
            className="bg-[linear-gradient(to_bottom,_#04153E_0%,_#04153E_70%,_#492279_100%)]"
            key={index}
            none
            image={item.image}
            head={item.header}
            paragraph={item.paragraph}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OurServices;
