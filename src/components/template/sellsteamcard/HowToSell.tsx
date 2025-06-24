import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { HowToSellSteam } from "@/lib/data";
import { Link } from "react-router";

const HowToSell = () => {
  return (
    <div className="px-4 md:px-[80px] mb-[80px]">
      <h1 className="font-[400] text-[28px] leading-[36px] md:text-[48px] md:leading-[62.4px] mb-[16px]">How To Sell steam Gift Card Online</h1>
      <div className="flex flex-col md:flex-row gap-3 mb-[32px]">
        {HowToSellSteam.map((item, index) => (
          <Card
            className="bg-background w-[600px]"
            key={index}
            image={item.image}
            imageStyle="bg-subCyan p-2 rounded-full"
            head={item.header}
            paragraph={item.paragraph}
          />
        ))}
      </div>
      <Link className="" to="https://wa.me/2349039716418">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default HowToSell;
