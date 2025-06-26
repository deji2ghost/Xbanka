import Card from "@/components/ui/card";
import { xbankasteamcard } from "@/lib/data";

const WhyUseUs = () => {
  return (
    <div className="px-4 py-7 md:px-[80px] md:py-[90px]">
      <div>
        <h1 className="mb-[30px] font-[400] text-[28px] leading-[36px] text-center md:text-[48px] md:leading-[62.4px]">Why you should sell your gift card <br /> on Xbanka</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-y-6 md:px-[140px]">
        {
          xbankasteamcard.map((item, index) => (
            <Card
            className="bg-background w-[400px] mx-auto"
            key={index}
            image={item.image}
            head={item.header}
            paragraph={item.paragraph}
          />
          ))
        }
      </div>
    </div>
  );
};

export default WhyUseUs;
