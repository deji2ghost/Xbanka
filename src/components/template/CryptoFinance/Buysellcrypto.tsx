import { Button } from "@/components/ui/button";
import phone from "@/assets/phoneCoin.svg";
import { Link } from "react-router";

const Sellcrypto = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:pl-[80px]">
      <div className="w-full md:w-[625px] flex flex-col gap-12">
        <div className="flex flex-col gap md:gap-6">
          <h1 className="font-[400] text-[32px] md:text-[64px] md:leading-[83.2px]">Buy & Sell Cryptocurrency</h1>
          <p className="font-[400] text-[16px] leading-[24px] md:text-[24px] md:leading-[33.6px]">Convert your unused gift cards to cash or crypto in minutes. Fast payouts, secure transactions, and the best market rates — all in one place.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link className="" to="https://wa.me/2349039716418">
            <Button size="lg">Get started</Button>
          </Link>
          <Link className="" to="https://wa.me/2349039716418">
            <Button size="lg" className="bg-transparent">Start trading</Button>
          </Link>
        </div>
      </div>
      <div className="md:w-[835px] w-full"><img src={phone} className="w-full" alt="phone"/></div>
    </div>
  );
};

export default Sellcrypto;
