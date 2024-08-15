import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="bg-customTeal py-24 sm:py-6 my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by patients worldwide
              </h2>
              <p className="text-lg leading-8 text-pausered">
                We can help you achieve your health goals, no matter the
                challenge.
              </p>
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Patients treated in 2023
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  12,000
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Surgeries performed
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  1,000
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Consultation hours
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  6,600
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Patient satisfaction
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  98%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
