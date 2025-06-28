import { cn } from "@/lib/utils";

interface CardProps {
  head?: string;
  paragraph: string;
  className?: string;
  none?: boolean;
  num: number
}

const UseCaseCard: React.FC<CardProps> = ({
  num,
  head,
  paragraph,
  className,
  none,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[16px] gap-6 py-6 px-8 text-left bg-background",
        className
      )}
      style={{ boxShadow: "0px 6px 12px 6px rgba(0, 0, 0, 0.12)" }}
    >
      <p className="flex justify-start text-[60px] font-Bold md:text-Hero md:font-Bold">
        {num}
      </p>
      <div>
        <div className="flex flex-col gap-[16px]">
          {head && (
            <h1
              className={`text-[24px] leading-[31.2px] ${
                none ? "text-background" : "text-foreground"
              } font-[600]`}
            >
              {head}
            </h1>
          )}
          <p
            className={`text-[16px] ${
              none ? "text-background" : "text-foreground"
            } font-[400] leading-[22.4px]`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
