import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { BuyEbayCardFAQData, EbayUseCase } from "@/lib/data"


const BuyEbayGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy eBay Gift Card in Nigeria"
        paragraph="Love to shop? Fuel your shopping spree with an eBay Gift Card from Xbanka. Fast, secure, and hassle-free—get yours instantly and start exploring endless deals online."
      />
      <UseCaseLayout
      data={EbayUseCase} 
      header="Use Cases of eBay Gift Cards"
      />
      <FaqLayout
        header="FAQs About Amex Gift Card Purchase"
        data={BuyEbayCardFAQData}
      />
    </div>
  )
}

export default BuyEbayGiftCard
