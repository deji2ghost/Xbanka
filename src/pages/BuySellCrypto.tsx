import FiveSteps from "@/components/template/CryptoFinance/FiveSteps";
import Sellcrypto from "@/components/template/CryptoFinance/Buysellcrypto";
import FAQ from "@/components/template/home/FAQ";
import { Button } from "@/components/ui/button";

const BuySellCrypto = () => {
  return (
    <div>
      <Sellcrypto />
      <FiveSteps />
      <div>
        <div>
            <h1>How Ads Facebook billing works</h1>
            <p>Facebook charges advertisers based on how much they spend and under certain billing conditions.</p>
            <Button>Get started</Button>
        </div>
        <div></div>
      </div>
      <FAQ />
    </div>
  );
};

export default BuySellCrypto;
