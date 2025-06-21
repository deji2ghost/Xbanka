import { CarouselCustom } from "@/components/layout/FinanceCarousel";
import { BuySell } from "@/lib/data";

const FiveSteps = () => {
  return (
    <div className="bg-[#F2FFFD] md:px-[80px] py-[148px] flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="font-[400] text-[48px] text-center md:px-[248px] leading-[52px]">5-steps to buy crypto with us</h1>
        <p className="font-[400] text-[24px] text-center md:px-[248px] leading-[33.6px]">A step-by-step guide to purchasing cryptocurrency safely and easily. Learn the best platforms, payment methods, and tips for first-time buyers.</p>
      </div>
      <div className="flex items-start gap-10">
      <CarouselCustom items={BuySell} />
        {/* {BuySell.map((item, index) => {
          return (
            <div className="w-[219.77px]" key={index}>
              <div>
                <img src={item.image} alt={item.step} />
              </div>
              <div>
                <h1 className="font-[600] text-[24px]">{index + 1}  {item.header}</h1>
                <p className="font-[400] text-[16px]">{item.body}</p>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  )
}

export default FiveSteps
