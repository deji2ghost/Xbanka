import FaqLayout from "@/components/layout/FaqLayout";
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout";
import WhyBuyFromUs from "@/components/layout/whyBuyFromUs";
import { BuyCardNigeria, BuyNigeriaCardFAQData } from "@/lib/data";

const BuyGiftCardNigeria = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Gift Cards Online In Nigeria."
        paragraph="Buy gift cards instantly with naira. Xbanka is where to buy any gift cards online in Nigeria with no stress. Cheap gift cards available from over 120 countries."
      />
      <WhyBuyFromUs data={BuyCardNigeria} />
      <div className="px-[80px]">
        <h1 className="mb-[16px] font-[400] text-[28px] leading-[36px] text-center md:text-[48px] md:leading-[62.4px]">
          Xbanka Makes Smart Trading Simple.
        </h1>
        <p className="mb-[32px] text-center md:px-[40px] font-[400] text-[16px] leading-[24px] md:text-[24px] md:leading-[31.2px]">
          You can easily sell various types of gift cards in Nigeria, including
          Apple gift cards, Steam gift cards, Amazon gift cards, Razer Gold gift
          cards, iTunes gift cards, and Google Play gift cards.
        </p>
      </div>
      <FaqLayout
        header="FAQs About Gift Card Purchase"
        data={BuyNigeriaCardFAQData}
      />
    </div>
  );
};

export default BuyGiftCardNigeria;
