import { Link } from "react-router";
import Logo from "../../assets/xBankaLogo.svg";
import { Button } from "../ui/button";
import DropdownLayout from "./dropdownLayout";
import { CryptoAndFinance } from "@/lib/data";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background flex items-center justify-between px-[120px] py-[8px] shadow-sm">
      <div className="w-[84px] min-h-[84px]">
        <img src={Logo} loading="lazy" alt="XBanka" />
      </div>
      <div className="text-[16px] font-[600] flex items-center gap-6 text-foreground">
        <Link className="cursor-pointer" to="/">Home</Link>
        <Link className="cursor-pointer" to="/">Trading E-center</Link>
        <Link className="cursor-pointer" to="/rateCalculator">Rate Calculator</Link>
        <DropdownLayout data={CryptoAndFinance} item="Crypto & finance" />
        <Link className="cursor-pointer" to="/">Our blog</Link>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="destructive" size="sm">Login</Button>
        <Button size="sm">Get started</Button>
      </div>
    </div>
  );
};

export default Navbar;
