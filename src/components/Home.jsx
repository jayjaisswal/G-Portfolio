import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuMouse } from "react-icons/lu";
import { motion } from "framer-motion";

import profileImage from "../assets/garima3.png";
import fadeImage from "../assets/top.png";

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from "../animations/Variants";

function Home() {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-[100px] pb-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={fadeImage}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center relative z-10 mb-10">
        <img
          src={profileImage}
          alt="Garima"
          className="w-52 h-52 rounded-full object-cover object-top border-4 border-[#84AB91]
          shadow-[0_0_25px_rgba(132,171,145,0.4)]"
        />

        <h2 className="text-white text-xl font-semibold mt-3 tracking-wide">
          Garima
        </h2>

        <p className="dark:text-gray-300 text-gray-900 text-sm mt-2 px-6 leading-relaxed">
          I'm <span className="text-pink-400 font-medium">Garima</span>, a{" "}
          <span className="text-green-400 font-medium">Class 12 student</span>{" "}
          preparing for{" "}
          <span className="text-[#FACC15] font-medium">NEET 2027</span>.  
          Along with my interest in{" "}
          <span className="text-[#A78BFA] font-medium">
            Biology, Physics, and Chemistry
          </span>, I also aspire to become an{" "}
          <span className="text-blue-400 font-medium">IAS Officer</span>.  
          My goal is to serve society through{" "}
          <span className="text-[#84AB91] font-medium">
            medicine, leadership, and integrity
          </span>.
        </p>

        <div className="flex gap-5 mt-4">
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
          <MdEmail className="text-[#EA4335] text-2xl cursor-pointer" />
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 justify-between items-center relative z-10">
        {/* Left Section */}
        <motion.div
          className="w-1/2 flex flex-col -mt-14"
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h1 className="md:text-4xl font-bold text-gray-400 dark:text-white mb-6">
            Hello, I'm{" "}
            <span className="text-[#84AB91] md:text-[64px] font-bold">
              Garima
            </span>
          </h1>

          <h2 className="md:text-[38px] font-bold text-[#84AB91] mb-6">
            A{" "}
            <TypeAnimation
              sequence={[
                "NEET 2027 Aspirant",
                1000,
                "Future Doctor",
                1000,
                "IAS Aspirant",
                1000,
                "Service-Driven Mindset",
                1000,
                "Social Influencer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-justify text-lg dark:text-white text-[#84AB91] leading-relaxed mb-6">
            I'm <span className="text-pink-400 font-medium">Garima</span>, currently
            studying in{" "}
            <span className="text-green-400 font-medium">Class 12</span> and
            preparing for{" "}
            <span className="text-[#FACC15] font-medium">NEET 2027</span>.  
            Alongside my journey in{" "}
            <span className="text-[#A78BFA] font-medium">
              Biology, Physics, and Chemistry
            </span>, I dream of becoming an{" "}
            <span className="text-blue-400 font-medium">IAS Officer</span> to
            contribute towards{" "}
            <span className="text-red-400 font-medium">nation building</span>.  
            I believe true success lies in{" "}
            <span className="text-[#84AB91] font-medium">
              knowledge, discipline, and service to society
            </span>.
          </p>

          <div className="flex gap-4 items-center">
  <a
    href="https://www.instagram.com/official.garima_singh?igsh=MXdubXluNW95ZWhxeQ=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition-transform" />
  </a>

  <a
    href="mailto:garima13833@gmail.com.com"
    aria-label="Email"
  >
    <MdEmail className="text-[#EA4335] text-2xl cursor-pointer hover:scale-110 transition-transform" />
  </a>
</div>

        </motion.div>
{/* https://www.instagram.com/official.garima_singh?igsh=MXdubXluNW95ZWhxeQ== */}
        {/* Right Image */}
        <motion.div
          className="w-1/2 flex justify-center"
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={profileImage}
            alt="Garima"
            className="max-w-[450px] lg:max-w-[650px] rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`mt-16 mb-8 flex flex-col items-center relative z-10 transition-opacity duration-500 ${
          showScrollDown ? "opacity-100" : "opacity-0"
        }`}
      >
        <LuMouse className="dark:text-white text-black text-3xl animate-bounce" />
        <p className="dark:text-white text-black text-sm mt-1">Scroll Down</p>
      </div>
    </div>
  );
}

export default Home;
