import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface CustomSelectProps{
    item: string
    image: string
    text: string
}

const CustomSelect = ({item, text, image}: CustomSelectProps) => {
  return (
    <Select defaultValue={item}>
      <SelectTrigger className="w-full bg-transparent border-none rounded-none">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="flex items-center" value={item}>
            <div><img src={image} alt={item} /></div>
            <p className="font-[600] text-[24px] leading-[33.6px]">{item}</p>
            <p className="font-[400] text-[16px] leading-[20.8px]">{text}</p>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
