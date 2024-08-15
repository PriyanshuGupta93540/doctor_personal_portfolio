import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-slate-50 py-20 sm:py-2"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-customTeal sm:text-4xl">
              What Our Patient Are Saying
            </h2>
            <h1 className="text-playred font-medium text-lg">
              Words of Wellness from Our Patients
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-12 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }} // Fixed style prop
                          src="https://randomuser.me/api/portraits/men/15.jpg"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }} // Fixed style prop
                          src="https://randomuser.me/api/portraits/men/15.jpg"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }} // Fixed style prop
                          src="https://randomuser.me/api/portraits/men/15.jpg"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
