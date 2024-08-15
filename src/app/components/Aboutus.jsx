import React from "react";
import Image from "next/image";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HealingIcon from "@mui/icons-material/Healing";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Aboutus = () => {
  return (
    <div className="mt-24 md:justify-center relative flex flex-col md:flex-row md:gap-16 w-full md:px-8 justify-center items-center ">
      <div className="relative">
        <Image
          className="about rounded-lg shadow-lg transform hover:scale-95 transition duration-300 ease-in-out"
          src="/Images/pulse.jpg" // Path to your image
          alt="Description of the image"
          width={340} // Width of the image
          height={60} // Height of the image
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <PlayCircleFilledIcon className="absolute w-[80px] h-[80px] text-playred cursor-pointer transform hover:scale-110 hover:text-red-600 transition duration-300 ease-in-out" />
        </div>
      </div>
      <div className="sm:w-[50%] w-[70%]  sm:pt-4 pt-16">
        <span className="text-4xl font-bold my-2 text-customTeal ">
          About Us...
        </span>
        <p className="pt-4 text-sm text-justify">
          <span className="text-playred font-medium text-lg">
            Dr. Vipul Rustgi&nbsp;
          </span>{" "}
          has been providing Healthcare solutions to his patients ever since
          2010. With over a decade of experience in medicine, Dr. Vipul is one
          of the most trusted and reputable Physicians. Patient care and
          satisfaction are of utmost priority.
        </p>
        <div className="flex my-4 gap-4">
          <HealthAndSafetyIcon className="text-playred" />
          <p className=" text-sm text-justify">
            Dr. Vipul Rustgi has been providing Healthcare solutions to his
            patients ever since 2010. With over a decade of experience in
            medicine, Dr. Vipul is one of the most trusted and reputable
            Physicians. Patient care and satisfaction are of utmost priority.
          </p>
        </div>
        <div className="flex my-4 gap-4">
          <HealingIcon className="text-playred" />
          <p className=" text-sm text-justify">
            Dr. Vipul Rustgi has been providing Healthcare solutions to his
            patients ever since 2010. With over a decade of experience in
            medicine, Dr. Vipul is one of the most trusted and reputable
            Physicians. Patient care and satisfaction are of utmost priority.
          </p>
        </div>
        <div className="flex my-4 gap-4">
          <LocalHospitalIcon className="text-playred" />
          <p className=" text-sm text-justify">
            Dr. Vipul Rustgi has been providing Healthcare solutions to his
            patients ever since 2010. With over a decade of experience in
            medicine, Dr. Vipul is one of the most trusted and reputable
            Physicians. Patient care and satisfaction are of utmost priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
