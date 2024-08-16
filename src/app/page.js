"use client";

import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";

import Aboutus from "./components/Aboutus";
import Specialization from "./components/Specialization";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Working from "./components/Working";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll"; // Import Element from react-scroll

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Element name="about" className="py-4">
        <Aboutus />
      </Element>
      <Element name="specialities" className="py-4">
        <Specialization />
      </Element>
      <Element name="stats" className="py-4">
        <Stats />
      </Element>
      <Element name="testimonials" className="py-4">
        <Testimonials />
      </Element>
      <Element name="faq" className="py-4">
        <Faq />
      </Element>
      <Element name="working" className="py-4">
        <Working />
      </Element>
      <Element name="contact" className="py-4">
        <Contact />
      </Element>
      <Footer />
    </main>
  );
}
