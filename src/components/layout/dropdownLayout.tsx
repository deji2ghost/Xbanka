import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router";

interface DropdownItemsProp{
    link: string, 
    linkName: string
}

interface DropdownProp{
    data: DropdownItemsProp[], 
    item: string
}

const DropdownLayout = ({data, item}: DropdownProp) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-[16px] cursor-pointer font-[600]">{item}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 px-2" align="start">
        {
            data.map((item) => (
                <DropdownMenuItem>
                    <Link to={item.link}>{item.linkName}</Link>
                </DropdownMenuItem>
            ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownLayout;
