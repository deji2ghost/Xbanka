import HeroSection from "@/components/template/home/HeroSection"
import SellGift from "@/components/template/home/SellGift"
import { Button } from "@/components/ui/button"
import pattern from "@/assets/pattern2.svg"
import { rowFive, rowFour, rowOne, rowSix, rowThree, rowTwo } from "@/lib/data"
import GiftCards from "@/components/ui/giftCards"
import OurServices from "@/components/template/home/OurServices"
import MostTraded from "@/components/template/home/MostTraded"
import WhyChooseUs from "@/components/template/home/WhyChooseUs"
import AboutUs from "@/components/template/home/AboutUs"
import ComingSoon from "@/components/template/home/ComingSoon"
import UsersSaying from "@/components/template/home/UsersSaying"
import FAQ from "@/components/template/home/FAQ"

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <SellGift />
      <div
      style={{
        backgroundColor: "#04153E",
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }} className="flex flex-col gap-[56px] justify-center items-center text-center overflow-hidden bg-no-repeat bg-cover bg-center px-[120px] py-[148px]">
        <div className="flex flex-col gap-6 px-[180px]">
            <h3 className="font-[600] text-[20px] text-abstractCyan py-2 px-4 leading-[22.4px]">WE GOT YOU COVERED</h3>
            <h1 className="font-[400] text-[48px] text-offWhite leading-[52px]">No more waiting. Get paid in Naira, crypto, or USD — your choice.</h1>
        </div>
        <Button>
            Start trading gift cards
        </Button>
      </div>
      <div className="px-[120px] py-[148px] flex flex-col gap-[48px]">
        <h1 className="text-foreground font-[400] text-[32px] leading-[41.6px]">Top gift cards in demand:</h1>
        <div className="flex flex-col gap-[45px]">
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowOne.map((item, index) => (
                        <GiftCards route={item?.route} key={index} Icon={<div><img className="w-[22.36px] overflow-hidden h-[24px] object-contain flex items-center" loading="lazy" src={item.image} alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowTwo.map((item, index) => (
                        <GiftCards route={item.route} key={index} Icon={<div><img className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center" src={item.image} loading="lazy" alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowThree.map((item, index) => (
                        <GiftCards route={item.route} key={index} Icon={<div><img className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center" src={item.image} alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowFour.map((item, index) => (
                        <GiftCards route={item.route} key={index} Icon={<div><img className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center" loading="lazy" src={item.image} alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowFive.map((item, index) => (
                        <GiftCards route={item.route} key={index} Icon={<div><img className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center" loading="lazy" src={item.image} alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
            <div className="flex items-center p-[3px] gap-[45px]">
                {
                    rowSix.map((item, index) => (
                        <GiftCards route={item.route} key={index} Icon={<div><img className="min-w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center" loading="lazy" src={item.image} alt={item.text} /></div>} text={item.text} />
                    ))
                }
            </div>
        </div>
      </div>
      <OurServices />
      <MostTraded />
      <WhyChooseUs />
      <AboutUs />
      <ComingSoon />
      <UsersSaying />
      <FAQ />
    </div>
  )
}
export default Home
