import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectOption {
  id: string;
  label: string;
  description: string;
  image: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (val: string) => void;
}

const CustomSelect = ({
  options,
  value,
  onChange
}: CustomSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-transparent border-none rounded-none text">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.id}
            value={option.id}
            className="flex items-center"
          >
            <div className="w-[20px] h-[20px]">
              <img loading="lazy" src={option.image} alt={option.label} />
            </div>
            <p className="font-[600] text-[22px] leading-[33.6px]">
              {option.label}
            </p>
            <p className="font-[400] text-[14px] leading-[20.8px]">
              {option.description}
            </p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default React.memo(CustomSelect);;
