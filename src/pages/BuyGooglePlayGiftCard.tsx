import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { BuyGoogleCardFAQData, GoogleUseCase } from "@/lib/data"

const BuyGooglePlayGiftCard = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Buy Google Play Gift Card Online"
        paragraph="Unlock a world of digital content with a Google Play Gift Card. From apps and games to movies, books, and more—there’s something for everyone. Purchase your Google Play Gift Card easily and securely online via Xbanka."
      />
      <UseCaseLayout
      data={GoogleUseCase} 
      header="Use Cases of Steam Gift Cards"
      />
      <FaqLayout
        header="FAQs About Google Play Gift Card Purchase"
        data={BuyGoogleCardFAQData}
      />
    </div>
  )
}

export default BuyGooglePlayGiftCard
