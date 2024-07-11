import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEllipsis,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import logo_bn from "../assets/logo_bn.png";
import mobile from "../assets/icons/smartphone.png";

const Menu = [
  {
    id: 1,
    name: "কার্যক্রম সম্পর্কে",
    link: "/#",
  },
  {
    id: 2,
    name: "আপনার মতামত",
    link: "/opinio",
  },
  {
    id: 3,
    name: "সরকারি আদেশ",
    link: "/faq",
  },
  {
    id: 4,
    name: "যোগাযোগ",
    link: "/about",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border border-[#ddd] bg-[#0c3a30] dark:text-white duration-200 z-40 fixed w-full mt-0">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0 flex-wrap gap-2 md:gap-0">
          {/* Left side icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-white flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.whatsapp.com"
              className="text-white flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-white flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20"
            >
              <FaLinkedinIn />
            </a>
          </div>
          {/* Right side information */}
          <div className="flex items-center gap-4 md:gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <img src={mobile} alt="mobile icon" className="w-6 h-6" />
              <p className="text-[14px] font-bold text-[#ddd]">মোবাইল অ্যাপ</p>
            </div>

            <div className="h-[30px] w-[1px] bg-[#bdbdbd]"></div>

            <div className="text-[#ddd] flex items-center">
              <div className="flex flex-col items-end">
                <span className="font-bold text-[14px]">হেল্প লাইন নম্বরঃ +09638 111 888</span>
                <span className="text-[12px] font-semibold pr-10">(9:00AM-6:00PM)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-0">
          {/* Left side logo */}
          <div className="flex gap-3 items-center">
            <a href="/" className="text-black text-lg font-bold">
              <img className="w-15 h-12" src={logo_bn} alt="Logo" />
            </a>
            <div className="text-black">
              <h2 className="font-extrabold">হাতের মুঠোয় টিসিবি পণ্য</h2>
              <p className="semibold">অনলাইন সেবা বাতায়ন</p>
            </div>
          </div>

          {/* Right side navlinks */}
          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineEllipsis className="text-2xl" />
              )}
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex space-x-4 items-center`}
          >
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 font-serif hover:text-primary text-black duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
