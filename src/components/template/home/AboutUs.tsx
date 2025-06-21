import { FadeUp } from "@/lib/animations";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-4 md:py-[148px] md:px-[80px] flex flex-col gap-[48px]"
    >
      <h1 className="font-[400] text-[28px] md:text-[48px] text-center">A little about us</h1>
      <div className="w-full max-w-[1100px] aspect-video mx-auto">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/ob0oUY-nxAM"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

    </motion.div>
  );
};

export default AboutUs;
