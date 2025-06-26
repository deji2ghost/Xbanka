import { AccordionLayout } from "@/components/layout/accordionlayout"
import { steamFAQData } from "@/lib/data"

const FAQ = () => {
  return (
    <div className="px-4 py-10 md:px-[80px]">
        <p className="text-[28px] font-[400] md:text-[48px] text-center">
          Frequently Asked Questions
        </p>
    <div className="flex flex-col gap-4 mt-[48px] rounded-[8px]">
            {steamFAQData.map((item, index) => (
              <AccordionLayout
                key={index}
                defaultValue={steamFAQData[0].header}
                header={item.header}
                content={item.body}
              />
            ))}
          </div>
    </div>
  )
}

export default FAQ
