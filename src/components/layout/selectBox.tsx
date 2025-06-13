import { Label } from '../ui/label'
import CustomSelect from './customSelect'

interface SelectBoxProps {
    label: string, 
    image: string, 
    text: string, 
    item: string
} 

const SelectBox = ({label, image, text, item}: SelectBoxProps) => {
  return (
    <div className='w-full flex flex-col gap-2 p-2'>
        <Label className='font-[400] text-[16px] leading-[22.4px]'>{label}</Label>
        <CustomSelect image={image} text={text} item={item} />
    </div>
  )
}

export default SelectBox
