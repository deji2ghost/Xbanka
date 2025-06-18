import SubHeader from "@/components/layout/subHeader";
import BoxHeader from "@/components/ui/boxHeader";
import { UserSaying } from "@/lib/data";
import CustomCarousel from "@/components/layout/customCarousel";
import React from "react";
import { motion } from "motion/react"
import { FadeUp } from "@/lib/animations";

const UsersSaying = React.memo(() => {
  return (
    <motion.div
     variants={FadeUp(0.2)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
     className="px-[120px] pt-[148px] pb-[46px] flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[24px]">
        <BoxHeader text="20K + HAPPY USERS" />
        <SubHeader text="What our users are saying" />
      </div>
      <CustomCarousel items={UserSaying} />
    </motion.div>
  );
});

export default UsersSaying;
