import FiveSteps from "@/components/template/CryptoFinance/FiveSteps";
import Sellcrypto from "@/components/template/CryptoFinance/Buysellcrypto";
import FAQ from "@/components/template/home/FAQ";
import { Button } from "@/components/ui/button";
import { FaceBookAds } from "@/lib/data";
import InfoRotator from "@/components/layout/InfoRotator";

const BuySellCrypto = () => {
  return (
    <div>
      <Sellcrypto />
      <FiveSteps />
      <div className="px-[120px] py-[148px] flex items-start gap-[143.99px]">
        <div className="font-[400] flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-4">
                <h1 className="text-[48px] leading-[62.4px]">How Ads Facebook billing works</h1>
                <p className="text-[24px] leading-[33.6px]">Facebook charges advertisers based on how much they spend and under certain billing conditions.</p>
            </div>
            <Button>Get started</Button>
        </div>
        <div className="h-[450px]">
            <InfoRotator billingItems={FaceBookAds} />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default BuySellCrypto;
