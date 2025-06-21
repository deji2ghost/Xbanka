import { FadeUp } from "@/lib/animations";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-[148px] px-[80px] flex flex-col gap-[48px]"
    >
      <h1 className="font-[400] text-[48px] text-center">A little about us</h1>
      <iframe
      className="mx-auto"
        width="1100"
        height="539"
        src="https://www.youtube.com/embed/ob0oUY-nxAM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};

export default AboutUs;
