import { Copyright } from "lucide-react";
import pattern from "@/assets/footerPattern.svg";
import logo from "@/assets/footerLogo.svg";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import React from "react";

const Footer = React.memo(() => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat px-4 py-7 md:py-[99px] text-offWhite md:px-[120px] bg-cover bg-center"
      style={{
        backgroundColor: "#04153E",
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="md:hidden">
          <img src={logo} alt="logo" />
      </div>
      <div className="flex items-start justify-between mb-[116px]">
        <div className="hidden md:flex flex-col items-center gap-[33px]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-[33px]">
            <Link to="https://www.instagram.com/xbanka.ng?igsh=MTJxbmlqdjQ0ZHp2MA%3D%3D&utm_source=qr">
              <BsInstagram className="text-offWhite" />
            </Link>
            <Link to="https://x.com/xbankang?s=21">
              <FaXTwitter className="text-offWhite" />
            </Link>
            <Link to="https://www.facebook.com/share/15YnD6RX1x/?mibextid=wwXIfr">
              <BsYoutube className="text-offWhite" />
            </Link>
            <Link to="https://www.linkedin.com/company/xbanka-ltd/">
              <FaFacebook className="text-offWhite" />
            </Link>
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
            <Link to="https://wa.me/2349039716418">Contact Us</Link>
            <p>Live Chat / Help Center</p>
            <Link to="/blogs">Blog</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center font-[400] text-[16px] justify-center gap-[15px] md:gap-[56px] mb-[10px] md:mb-0">
        <p>Terms of Service</p>
        <p>Privacy policy</p>
        <div className="flex items-center gap-[8px]">
          <Copyright /> <p>2025 Xbanka</p>
        </div>
      </div>
      <div className="flex gap-[33px] md:hidden">
        <Link to="https://www.instagram.com/xbanka.ng?igsh=MTJxbmlqdjQ0ZHp2MA%3D%3D&utm_source=qr">
          <BsInstagram className="text-offWhite" />
        </Link>
        <Link to="https://x.com/xbankang?s=21">
          <FaXTwitter className="text-offWhite" />
        </Link>
        <Link to="https://www.linkedin.com/company/xbanka-ltd/">
          <FaLinkedin className="text-offWhite" />
        </Link>
        <Link to="https://www.facebook.com/share/15YnD6RX1x/?mibextid=wwXIfr">
          <FaFacebook className="text-offWhite" />
        </Link>
      </div>
    </div>
  );
});

export default Footer;
