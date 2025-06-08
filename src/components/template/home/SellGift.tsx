import RotatingCardOrbit from "@/components/layout/giftcardcarousel";
import { Button } from "@/components/ui/button";

const SellGift = () => {
  return (
    <div className="flex gap-[90px] px-[120px] py-[148px]">
      <div className="w-[535px]">
        <h1 className="mb-[16px] font-[400] text-[48px] leading-[62.4px]">Sell gift cards instantly</h1>
        <p className="mb-[32px] font-[400] text-[24px] leading-[31.2px]">Trade all your favorite gift cards at the best rates in Nigeria:</p>
        <Button>Get Started</Button>
      </div>
      <RotatingCardOrbit />
    </div>
  );
};

export default SellGift;
