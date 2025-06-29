import FaqLayout from "@/components/layout/FaqLayout"
import RusableHerosectionLayout from "@/components/layout/rusableHerosectionLayout"
import UseCaseLayout from "@/components/layout/useCaseLayout"
import { BtcToCashFAQData, BtcToCashUseCase } from "@/lib/data"

const ConvertBTCToCash = () => {
  return (
    <div>
      <RusableHerosectionLayout
        Header="Instantly Convert Bitcoin to Cash with XBANKA"
        paragraph="Cashing out your BTC just got faster, smarter, and stress-free. At XBANKA, we offer top market rates and a seamless experience to help you turn your Bitcoin into cash in just minutes."
      />
      <UseCaseLayout
      data={BtcToCashUseCase} 
      header="Why you should convert your BTC with Xbanka"
      />
      <FaqLayout
        header="FAQs About Bitcoin Exchange To Cash"
        data={BtcToCashFAQData}
      />
    </div>
  )
}

export default ConvertBTCToCash
