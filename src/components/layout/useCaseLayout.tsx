import UseCaseCard from "../ui/UseCaseCard";

interface dataProps {
  data: { header: string; paragraph: string }[];
  header: string
}

const UseCaseLayout = ({ data, header }: dataProps) => {
  return (
    <div className="px-[80px]">
      <h1 className="mb-[16px] font-[400] text-[28px] leading-[36px] text-center md:text-[48px] md:leading-[62.4px]">
        {header}
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-y-6 md:px-[140px]">
        {data.map((item, index) => (
          <UseCaseCard
          className="w-[400px] mx-auto"
            key={index}
            num={index + 1}
            head={item.header}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCaseLayout;
