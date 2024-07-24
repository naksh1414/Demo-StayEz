import { useState } from "react";
import FImg from "../../assets/Footer.png";
import Logo from "../../assets/FooterLogo.png";
import BtnImg from "../../assets/Play stote and app store icon for website .png";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <main className="bg-[#152038] flex-col flex justify-center items-center w-full h-[250px] px-3">
      {/* <img className="object-cover w-full" src={FImg} alt="" /> */}
      <div className="text-white text-[1.2rem] font-semibold flex justify-around w-[80%] mt-10">
        <h1>Help</h1>
        <h1>About</h1>
        <h1>Company</h1>
        <h1>Services</h1>
        <h1>Contact Us</h1>
      </div>
      <div className="mt-5 flex flex-row items-center justify-between w-full">
        <div className="pl-5">
          <img className="h-[140px] w-[170px]" src={Logo} alt="" />
        </div>
        <div className="mt-10">
          <img src={BtnImg} alt="" />
        </div>
        <div className="text-white font-semibold text-[1rem] mt-[-30px] pr-5 items-center justify-center flex flex-col">
          <h1 className="text-[1.1rem]">Subscribe For Updates </h1>
          <div className="mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/30 placeholder:text-white px-5 py-3 rounded-tl-2xl rounded-bl-2xl"
              placeholder="Your Mail"
            />
            <button className="text-[#03A9F4] bg-white px-5 py-3 rounded-tr-2xl rounded-br-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full mt-5 pb-3 flex items-center justify-between">
        <div className="flex justify-between font-semibold space-x-3 w-[200px] mt-3 text-white">
          <h1>Terms</h1>
          <h1>Conditions</h1>
          <h1>Privacy</h1>
        </div>
        <div>
          <p className="text-white mt-3">@ 2024 StayEz , ALL RIGHTS RESERVED</p>
        </div>
        <div className="text-white flex space-x-8 mt-3">
          <FaTwitter className="h-6 w-6"></FaTwitter>
          <FaYoutube className="h-6 w-6"></FaYoutube>
          <FaFacebook className="h-6 w-6"></FaFacebook>
          <FaInstagram className="h-6 w-6"></FaInstagram>
        </div>
      </div>
    </main>
  );
};

export default Footer;
