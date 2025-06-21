import { Link } from "react-router";
import Logo from "../../assets/xBankaLogo.svg";
import { Button } from "../ui/button";
import DropdownLayout from "./dropdownLayout";
import { CryptoAndFinance, ResourceCenter, TradingCenter } from "@/lib/data";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  // const location = useLocation();
  // const locationPath = location.pathname;
  return (
    <div className="sticky top-0 z-50 bg-background overflow-x-hidden border md:overflow-y-hidden flex items-center justify-between px-2 md:px-[80px] md:py-[8px] md:shadow-sm">
      <div className="w-[50px] md:w-[100px] cursor-pointer">
        <img src={Logo} className="w-full" loading="lazy" alt="XBanka" />
      </div>
      <div className="hidden text-[16px] font-[600] md:flex items-center gap-6 text-foreground">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        <DropdownLayout data={TradingCenter} item="Gift cards" />
        <DropdownLayout data={ResourceCenter} item="Resource center" />
        <DropdownLayout data={CryptoAndFinance} item="Crypto & finance" />
        <Link className="cursor-pointer" to="/blogs">
          Our blog
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Button variant="destructive" size="sm" className="cursor-not-allowed">
          Login
        </Button>
        <Link className="" to="https://wa.me/2349039716418">
          <Button size="sm">Get started</Button>
        </Link>
      </div>
      <FaBars />
      <div className="hidden">
        <div className="text-[16px] font-[600] flex flex-col items-center gap-6 text-foreground">
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
          <DropdownLayout data={TradingCenter} item="Gift cards" />
          <DropdownLayout data={ResourceCenter} item="Resource center" />
          <DropdownLayout data={CryptoAndFinance} item="Crypto & finance" />
          <Link className="cursor-pointer" to="/blogs">
            Our blog
          </Link>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="destructive"
            size="sm"
            className="cursor-not-allowed"
          >
            Login
          </Button>
          <Link className="" to="https://wa.me/2349039716418">
            <Button size="sm">Get started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;