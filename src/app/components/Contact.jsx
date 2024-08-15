import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="mb-24 flex flex-wrap justify-center md:gap-28 gap-12 items-center mx-4">
      {/* Left side */}
      <div className="flex flex-col">
        <div className="flex gap-2 flex-col">
          <h1 className="text-3xl font-bold tracking-tight text-customTeal sm:text-4xl">
            Contact Info
          </h1>
          <span className="text-playred font-medium text-lg">
            We want to help you pass and get back on the road!
          </span>
        </div>
        <div className="flex my-4 gap-3 items-center">
          <div>
            <LocationOnIcon className="text-customTeal" />
          </div>
          <div>
            <h1>A-2/30, Sector-4 Rohini</h1>
            <h2>New Delhi Delhi - 110085</h2>
          </div>
        </div>
        <div className="flex my-4 gap-3 items-center">
          <div>
            <EmailIcon className="text-customTeal" />
          </div>
          <div>
            <h1>info@developersinfotech.com</h1>
          </div>
        </div>
        <div className="flex my-4 gap-3 items-center">
          <div>
            <CallIcon className="text-customTeal" />
          </div>
          <div>
            <h1>9354076036</h1>
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <InstagramIcon className="text-customTeal w-[22px] h-[22px]" />
          <LinkedInIcon className="w-[22px] h-[22px] text-customTeal" />
          <FacebookIcon className="w-[22px] h-[22px] text-customTeal" />
          <TwitterIcon className="w-[22px] h-[22px] text-customTeal" />
        </div>
      </div>
      {/* Right side */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.925792588165!2d77.22612407549857!3d28.571990975697872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzE5LjIiTiA3N8KwMTMnNDMuMyJF!5e0!3m2!1sen!2sin!4v1720028170564!5m2!1sen!2sin"
          width="100"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-96 md:w-96 h-96 md:h-96 lg:h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
