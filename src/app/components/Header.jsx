"use client"; // This line makes the component a client component

import React, { useState } from "react";
import HeadsetIcon from "@mui/icons-material/Headset";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Navbar start */}
      <div className="justify-between mx-24 my-6 navbar hidden lg:flex">
        {/* Left top navbar */}
        <div className="flex gap-2">
          <InstagramIcon className="text-customTeal w-[18px] h-[18px]" />
          <LinkedInIcon className="w-[18px] h-[18px] text-customTeal" />
          <FacebookIcon className="w-[18px] h-[18px] text-customTeal" />
          <TwitterIcon className="w-[18px] h-[18px] text-customTeal" />
        </div>
        {/* Right top navbar */}
        <div className="flex gap-8">
          <div className="flex gap-2">
            <HeadsetIcon className="w-[18px] h-[18px] text-customTeal" />
            <span className="text-[13px]">Call Us: 93857425329</span>
          </div>
          <div className="flex gap-2">
            <MailIcon className="w-[18px] h-[18px] text-customTeal" />
            <span className="text-[13px]">
              Email Us: info@developersinfotech.com
            </span>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex justify-between mx-24 my-6">
        <div className="text-customTeal font-bold flex gap-4 items-center">
          <Image
            src="/Images/logo.png" // Path to your image
            alt="Description of the image" // Alt text for accessibility
            width={40} // Width of the image
            height={40} // Adjusted height of the image
          />
          <span className="text-3xl">Swasth</span>
        </div>
        {/* Menu Icon for smaller screens */}
        <div className="lg:hidden flex items-center">
          <MenuIcon
            className="cursor-pointer text-customTeal"
            onClick={toggleMenu}
          />
        </div>
        {/* Navigation menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex items-center absolute lg:relative bg-white lg:bg-transparent top-0 left-0 pl-16 w-full lg:w-auto z-50`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-6 lg:p-0">
            <li className="cursor-pointer font-medium">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About us
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="specialities" smooth={true} duration={500}>
                Our Specialities
              </Link>
            </li>
            {/* <li className="cursor-pointer">
              <Link to="services" smooth={true} duration={500}>
                Healthcare Services
              </Link>
            </li> */}
            <li className="cursor-pointer">
              <Link to="testimonials" smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="faq" smooth={true} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="working" smooth={true} duration={500}>
                Working hours
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
