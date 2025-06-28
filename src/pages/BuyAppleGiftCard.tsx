import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { AppleUseCase, BuyAppleCardFAQData } from "@/lib/data"

const BuyAppleGiftCard = () => {
  return (
     <div>
      <RusableHerosectionLayout
        Header="Buy Apple Gift Card on XBANKA"
        paragraph="Get your Apple Gift Card instantly on XBANKA—fast, seamless, and hassle-free. Enjoy a smooth purchase process and immediate code delivery, all in one trusted platform."
      />
      <UseCaseLayout
      data={AppleUseCase} 
      header="Use Cases of Apple Gift Cards"
      />
      <FaqLayout
        header="FAQs About Amex Gift Card Purchase"
        data={BuyAppleCardFAQData}
      />
    </div>
  )
}

export default BuyAppleGiftCard