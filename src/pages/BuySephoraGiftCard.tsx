import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { BuySephoraCardFAQData, SephoraUseCase } from "@/lib/data"

const BuySephoraGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Sephora Gift Card in Nigeria"
        paragraph="Ready to elevate your beauty game? Buy a Sephora Gift Card instantly on XBANKA and unlock access to top skincare, makeup, and fragrance brands—all in one place."
      />
      <UseCaseLayout
      data={SephoraUseCase} 
      header="Use Cases of Sephora Gift Cards"
      />
      <FaqLayout
        header="FAQs About Amex Gift Card Purchase"
        data={BuySephoraCardFAQData}
      />
    </div>
  )
}

export default BuySephoraGiftCard
