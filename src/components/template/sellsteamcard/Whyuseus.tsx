import Card from "@/components/ui/card";
import { xbankasteamcard } from "@/lib/data";

const WhyUseUs = () => {
  return (
    <div className="px-4 py-7 md:px-[80px] md:py-[90px]">
      <div>
        <h1 className="mb-[16px] font-[400] text-[28px] leading-[36px] md:text-[48px] md:leading-[62.4px]">Why Use xbanka For steam Gift Card Sale?</h1>
        <p className="mb-[32px] font-[400] text-[16px] leading-[24px] md:text-[24px] md:w-[900px] md:leading-[31.2px]">
          Nosh is the best place to trade steam gift cards in Nigeria. It's
          winning over more and more users who trust its reputation. As one of
          our users, you get to enjoy these benefits:
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
        {
          xbankasteamcard.map((item, index) => (
            <Card
            className="bg-background"
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
