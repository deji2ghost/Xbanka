import FaqLayout from "@/components/layout/FaqLayout";
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout";
import UseCaseLayout from "@/components/layout/useCaseLayout";
import WhyBuyFromUs from "@/components/layout/whyBuyFromUs";
import { BuySteamCard, BuySteamCardFAQData, steamUseCase } from "@/lib/data";

const BuySteamGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Steam Gift Cards in Nigeria"
        paragraph="Level up your gaming experience! Get your Steam Gift Card instantly on Xbanka and unlock a universe of games, upgrades, and endless adventures."
      />
      <WhyBuyFromUs data={BuySteamCard} />
      <UseCaseLayout
      data={steamUseCase} 
      header="Use Cases of Steam Gift Cards"
      />
      <FaqLayout
        header="FAQs About Steam Gift Card Purchase"
        data={BuySteamCardFAQData}
      />
    </div>
  )
}

export default BuySteamGiftCard
