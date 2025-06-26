import { AccordionLayout } from "./accordionlayout";

export interface DataProps{
    header:string,
    body: string
}

export interface FaqLayoutProp{
    data: DataProps[]
    header: string
}

const FaqLayout = ({data, header}: FaqLayoutProp) => {
  return (
    <div className="px-4 py-10 md:px-[80px]">
      <p className="text-[28px] font-[400] md:text-[48px] text-center">
        {header}
      </p>
      <div className="flex flex-col gap-4 mt-[48px] rounded-[8px]">
        {data.map((item, index) => (
          <AccordionLayout
            key={index}
            defaultValue={data[0].header}
            header={item.header}
            content={item.body}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqLayout;
