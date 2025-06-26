import { Label } from '../ui/label'
import CustomSelect from './customSelect'

// interface SelectBoxProps {
//     label: string, 
//     image: string, 
//     text: string, 
//     item: string
// } 

const SelectBox = ({label, options, value, onChange, placeholder}: SelectBoxProps) => {
  return (
    <div className='w-full flex flex-col gap-2 p-2'>
        <Label className='font-[400] text-[16px] leading-[22.4px]'>{label}</Label>
        <CustomSelect options={options} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default SelectBox
