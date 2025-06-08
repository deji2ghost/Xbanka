import { Link } from "react-router";
import Logo from "../../assets/xBankaLogo.svg";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background flex items-center justify-between px-[120px] py-[8px] shadow-sm">
      <div className="w-[84px] min-h-[84px]">
        <img src={Logo} loading="lazy" alt="XBanka" />
      </div>
      <div className="text-[16px] font-[600] flex items-center gap-6 text-foreground">
        <Link to="/">Home</Link>
        <Link to="/">Trading E-center</Link>
        <Link to="/">Rate Calculator</Link>
        <Link to="/">Crypto & finance</Link>
        <Link to="/">Our blog</Link>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="destructive" size="sm">Login</Button>
        <Button size="sm">Get started</Button>
      </div>
    </div>
  );
};

export default Navbar;
