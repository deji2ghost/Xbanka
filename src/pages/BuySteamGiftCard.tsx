import FaqLayout from "@/components/layout/FaqLayout";
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout";
import WhyBuyFromUs from "@/components/layout/whyBuyFromUs";
import { BuyNigeriaCardFAQData, BuySteamCard } from "@/lib/data";

const BuySteamGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Steam Gift Cards in Nigeria"
        paragraph="Level up your gaming experience! Get your Steam Gift Card instantly on Xbanka and unlock a universe of games, upgrades, and endless adventures."
      />
      <WhyBuyFromUs data={BuySteamCard} />
      <div className="px-[80px]">
        <h1 className="mb-[16px] font-[400] text-[28px] leading-[36px] text-center md:text-[48px] md:leading-[62.4px]">
          Xbanka Makes Smart Trading Simple.
        </h1>
        <p className="mb-[32px] text-center md:px-[40px] font-[400] text-[16px] leading-[24px] md:text-[24px] md:leading-[31.2px]">
          You can purchase all kinds of gift cards in Nigeria conveniently with XBANKA. They include but are not limited to Steam gift card, Amazon gift card, Razer Gold gift card, iTunes gift card, and Google Play gift card. Purchase A Gift Card
        </p>
      </div>
      <FaqLayout
        header="FAQs About Gift Card Purchase"
        data={BuyNigeriaCardFAQData}
      />
    </div>
  )
}

export default BuySteamGiftCard
