import { Button } from "@/components/ui/button";
import phone from "@/assets/phoneCoin.svg";

const Sellcrypto = () => {
  return (
    <div className="flex items-center pl-[120px]">
      <div className="w-[625px] flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="font-[400] text-[64px] leading-[83.2px]">Buy & Sell Cryptocurrency</h1>
          <p className="font-[400] text-[24px] leading-[33.6px]">Convert your unused gift cards to cash or crypto in minutes. Fast payouts, secure transactions, and the best market rates — all in one place.</p>
        </div>
        <div className="flex items-center gap-6">
          <Button size="lg">Get started</Button>
          <Button size="lg" className="bg-transparent">Start trading</Button>
        </div>
      </div>
      <div className="w-[835px"><img src={phone} className="w-full" alt="phone"/></div>
    </div>
  );
};

export default Sellcrypto;
