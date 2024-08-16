import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="bg-customTeal sm:w-full h-auto text-white flex px-[45px] pt-16 flex-col sm:flex-row">
        <div className="flex flex-col ">
          <span className="text-pauseredone">
            Navigate Your Path To Wellness
          </span>
          <span className="text-4xl font-bold my-2">
            We Prioritise, Your Health Here
          </span>
          <span className="my-2">
            Get a home visit by our experienced &amp; dedicated General
            Physicians who are available 24X7. Kyno brings you the reliability
            of a &#39;family doctor&#39; along with a wide range of at-home
            medical services.
          </span>
          <button className="bg-red-500 text-white w-[200px] py-2 rounded-lg my-6">
            Call me: 93540760365
          </button>
        </div>
        <div className="flex relative items-end ">
          <Image
            className="w-full z-30 image "
            src="/Images/doctor.png" // Path to your image
            alt="Description of the image" // Alt text for accessibility
            width={400} // Width of the image
            height={200} // Height of the image
          />
          <span className="bg-customTeallatest rounded-t-full w-72 h-[122px] absolute bottom-0 left-1/2 top-[137px] transform -translate-x-1/2 translate-y-1/2"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
