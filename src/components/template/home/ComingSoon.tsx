import BoxHeader from "@/components/ui/boxHeader";
import { Button } from "@/components/ui/button";
import AppleWhite from "@/assets/AppleWhite.svg";
import googlePlay from "@/assets/PlaystoreDark.svg";
import iphone12 from "@/assets/iPhone12Pro.svg";
import { motion } from "motion/react";
import { FadeUp } from "@/lib/animations";

const ComingSoon = () => {
  return (
    <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-[80px] flex md:flex-row flex-col gap-[64.38px]"
    >
      <div className="flex flex-col gap-[56px]">
        <div className="">
          <BoxHeader text="COMING SOON" />
          <p className="leading-[52px] font-[400] text-[48px] mt-[24px]">
            Explore more on Xbanka on our mobile app...
          </p>
        </div>
        <div className="flex flex-col items-start gap-[42px]">
          <div className="flex items-center gap-8">
            <div className="flex items-center bg-black border-[1.29px] border-[#A6A6A6] rounded-[7.74px] px-[2px] py-[1px] w-[154.85px] justify-center gap-2">
              <div className="">
                <img src={AppleWhite} alt="phone" />
              </div>
              <div className="text-white">
                <p className="text-[12px]">Download on the</p>
                <h1 className="text-[14px]">App Store</h1>
              </div>
            </div>
            <div className="flex items-center bg-black border-[1.29px] border-[#A6A6A6] rounded-[7.74px] px-[2px] py-[1px] w-[154.85px] justify-center gap-2">
              <div className="">
                <img src={googlePlay} alt="phone" />
              </div>
              <div className="text-white">
                <p className="text-[12px]">GET IT ON</p>
                <h1 className="text-[14px]">Google Pay</h1>
              </div>
            </div>
          </div>
          <Button>Join the waitlist</Button>
        </div>
      </div>
      <div>
        <img src={iphone12} alt="phone" />
      </div>
    </motion.div>
  );
};

export default ComingSoon;
