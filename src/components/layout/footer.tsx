import { Copyright } from "lucide-react";
import pattern from "@/assets/footerPattern.svg";
import logo from "@/assets/footerLogo.svg";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat py-[99px] text-offWhite px-[120px] bg-cover bg-center"
      style={{
        backgroundColor: "#04153E",
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex items-start justify-between mb-[116px]">
        <div className="flex flex-col items-center gap-[33px]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-[33px]">
            <BsInstagram className="text-offWhite" />
            <FaXTwitter className="text-offWhite" />
            <BsYoutube className="text-offWhite" />
            <FaFacebook className="text-offWhite" />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] font-[400]">
          <h1 className="text-[20px]">Why choose us</h1>
          <div className="flex flex-col gap-[16px] text-[16px]">
            <p>Top-tier Security</p>
            <p>Global Access</p>
            <p>Fast Transaction Speed</p>
            <p>Business-Ready Platform</p>
            <p>24/7 Customer Support</p>
            <p>Real-Time Market Rates</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[20px]">Support</h1>
          <div className="flex flex-col gap-[16px] text-[16px]">
            <p>Contact Us</p>
            <p>Live Chat / Help Center</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div className="flex items-center font-[400] text-[16px] justify-center gap-[56px]">
        <p>Terms of Service</p>
        <p>Privacy policy</p>
        <div className="flex items-center gap-[8px]">
          <Copyright /> <p>2025 Xbanka</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
