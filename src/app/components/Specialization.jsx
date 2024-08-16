import React from "react";
import Image from "next/image";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Specialization = () => {
  return (
    <div>
      {/* 1st row  */}
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          <div className="lg:w-[44.5%] ml-16 flex flex-col items-start justify-center gap-1">
            <h1 className="font-bold text-5xl text-customTeal items-center">
              <LocalHospitalIcon className="text-playred text-4xl" />
              CREATE PERFECT
            </h1>
            <h2 className=" text-customTeal text-4xl font-bold">
              {" "}
              AND HEALTHY SOLUTIONS
            </h2>
            <h3 className="mt-2 text-playred font-medium text-lg">
              Let&#39;s make you healthy together
            </h3>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className=" border-gray-100/30 flex  w-full  flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
              <a
                className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                href="#"
              >
                <Image
                  className="peer absolute top-0 right-0 h-full w-full object-cover"
                  src="/Images/fever.jpg" // Path to your image
                  alt="Description of the image"
                  width={340} // Width of the image
                  height={60} // Height of the image
                />
                <Image
                  className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                  src="/Images/one.jpg" // Path to your image
                  alt="Description of the image"
                  width={340} // Width of the image
                  height={60} // Height of the image
                />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a
                  href="#"
                  className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Fever
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className=" border-gray-100/30 flex  w-full  flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
              <a
                className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                href="#"
              >
                <Image
                  className="peer absolute top-0 right-0 h-full w-full object-cover"
                  src="/Images/stomach.jpg" // Path to your image
                  alt="Description of the image"
                  width={340} // Width of the image
                  height={60} // Height of the image
                />
                <Image
                  className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                  src="/Images/two.jpg" // Path to your image
                  alt="Description of the image"
                  width={340} // Width of the image
                  height={60} // Height of the image
                />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a
                  href="#"
                  className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Stomach Pain
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd row start */}

      <div>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className=" border-gray-100/30 flex  w-full  flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <a
                  className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="/Images/blood.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                  <Image
                    className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                    src="/Images/three.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a
                    href="#"
                    className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    High Blood Pressure
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className=" border-gray-100/30 flex  w-full  flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <a
                  className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="/Images/hands.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                  <Image
                    className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                    src="/Images/four.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a
                    href="#"
                    className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Allergies
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className=" border-gray-100/30 flex  w-full  flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <a
                  className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="/Images/fracture.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                  <Image
                    className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                    src="/Images/five.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a
                    href="#"
                    className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Fracture
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className=" border-gray-100/30 flex  w-full   flex-col self-center overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <a
                  className="relative mx-4 mt-3 flex h-48 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src="/Images/liver.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                  <Image
                    className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                    src="/Images/six.jpg" // Path to your image
                    alt="Description of the image"
                    width={340} // Width of the image
                    height={60} // Height of the image
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a
                    href="#"
                    className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-customTeal px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Liver problem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
