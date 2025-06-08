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
      <SelectTrigger className="w-full bg-transparent">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="flex items-center" value={item}>
            <div><img src={image} alt={item} /></div>
            <p>{item}</p>
            <p>{text}</p>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
