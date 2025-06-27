import React from "react";
import { Label } from "../ui/label";
import CustomSelect, { type SelectOption } from "./customSelect";

interface SelectBoxProps {
    label: string,
    options: SelectOption[],
    value: string,
    onChange: (val: string) => void;
}

const SelectBox = ({
  label,
  options,
  value,
  onChange,
}: SelectBoxProps) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <Label className="font-[400] text-[16px] leading-[22.4px]">{label}</Label>
      <CustomSelect
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(SelectBox);
