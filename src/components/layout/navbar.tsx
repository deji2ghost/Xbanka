import { Link, useLocation } from "react-router";
import Logo from "../../assets/xBankaLogo.svg";
import { Button } from "../ui/button";
import DropdownLayout from "./dropdownLayout";
import { CryptoAndFinance, TradingCenter } from "@/lib/data";

const Navbar = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locationPath = location.pathname;
  return (
    <div className="sticky top-0 z-50 bg-background overflow-y-hidden flex items-center justify-between px-[120px] py-[8px] shadow-sm">
      <div className="w-[84px] cursor-pointer min-h-[84px]">
        <img src={Logo} loading="lazy" alt="XBanka" />
      </div>
      <div className="text-[16px] font-[600] flex items-center gap-6 text-foreground">
        <Link className="cursor-pointer" to="/">Home</Link>
        <DropdownLayout data={TradingCenter} item="Trading E-center" />
        <Link className="cursor-pointer" to="/rateCalculator">Rate Calculator</Link>
        <DropdownLayout data={CryptoAndFinance} item="Crypto & finance" />
        <Link className="cursor-pointer" to="/blogs">Our blog</Link>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="destructive" size="sm" className="cursor-not-allowed">Login</Button>
        <Link className="" to="https://wa.me/2349039716418">
        <Button size="sm">Get started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
