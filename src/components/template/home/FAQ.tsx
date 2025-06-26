import { AccordionLayout } from "@/components/layout/accordionlayout";
import Morequestioncard from "@/components/layout/morequestioncard";
import BoxHeader from "@/components/ui/boxHeader";
import { FAQData } from "@/lib/data";

const FAQ = () => {
  return (
    <div className="py-7 px-4 md:py-[80px] md:px-[80px] gap-12">
      <div className="flex flex-col justify-center gap-6">
        <BoxHeader text="YOUR FAQ" />
        <p className="text-[28px] font-[400] md:text-[48px] text-center">
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-[48px] rounded-[8px]">
        {FAQData.map((item, index) => (
          <AccordionLayout
            key={index}
            defaultValue={FAQData[0].header}
            header={item.header}
            content={item.body}
          />
        ))}
      </div>

      <Morequestioncard
        Header="Still have questions?"
        body="Can’t find the answers you’re looking for?"
        text="Contact support team"
      />
    </div>
  );
};

export default FAQ;
