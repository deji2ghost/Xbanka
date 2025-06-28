import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { AmexUseCase, BuyAmexCardFAQData } from "@/lib/data"

const BuyAmexGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Amex Gift Card Instantly"
        paragraph="Looking to get an Amex Gift Card? You're not alone—it's one of the most popular gift cards globally. With Xbanka, you can buy your Amex Gift Card instantly, securely, and hassle-free."
      />
      <UseCaseLayout
      data={AmexUseCase} 
      header="Use Cases of Amex Gift Cards"
      />
      <FaqLayout
        header="FAQs About Amex Gift Card Purchase"
        data={BuyAmexCardFAQData}
      />
    </div>
  )
}

export default BuyAmexGiftCard
