import BoxHeader from "@/components/ui/boxHeader";
import Card from "@/components/ui/card";
import { competitiveAdvantage } from "@/lib/data";

const WhyChooseUs = () => {
  return (
    <div className="py-[148px] px-[120px] flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[24px] px-[215px]">
            <BoxHeader text="WHY CHOOSE US?" />
            <p className="text-[48px] font-[400] text-center leading-[52px]">Our Competitive Advantage</p>
        </div>
      <div className="grid grid-cols-3 gap-x-[48px] gap-y-[29px]">
        {
            competitiveAdvantage.map((item, index) => (
                <Card className={index % 2 === 1 ? "bg-abstractCyan" : "bg-background"} key={index} image={item.image} head={item.heading} paragraph={item.paragraph} />
            ))
        }
      </div>
    </div>
  );
};

export default WhyChooseUs;
