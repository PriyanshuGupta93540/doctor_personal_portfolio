import React from "react";

const Working = () => {
  return (
    <div>
      <div className="bg-customTeal py-24 sm:py-6 my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Working Hours
              </h2>
              <h1 className="text-lg leading-8 text-pausered">
                We will be available for 24hours in emergency
              </h1>
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-7">
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white">
                  Monday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white ">
                  Tuesday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white ">
                  Wednesday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white">
                  Thursday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white">
                  Friday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white">
                  Saturday
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 items-center justify-center  py-1">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  9Am - 6PM
                </dt>
                <dd className="order-first text-lg font-semibold tracking-tight text-white">
                  Sunday
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
