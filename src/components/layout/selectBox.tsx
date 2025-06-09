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
    <div className='w-full flex flex-col gap-2 p-4'>
        <Label>{label}</Label>
        <CustomSelect image={image} text={text} item={item} />
    </div>
  )
}

export default SelectBox
