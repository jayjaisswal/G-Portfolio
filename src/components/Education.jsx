import React from "react";
import { motion } from "framer-motion";
import {
  fadeInLeftVariant,
  fadeInRightVariant,
  fadeInTopVariant,
} from "../animations/Variants";

import skol1 from "../assets/skol1.png";
import skol2 from "../assets/skol2.png";

const educationData = [
  {
    side: "left",
    title: "ABC Public School (Placeholder)",
    degree: "10th (CBSE)",
    duration: "Completed",
    score: "Details will be updated",
    logo: skol1,
  },
  {
    side: "right",
    title: "Saraswati Shishu Mandir, Pakkibag",
    degree: "12th (CBSE – Biology Stream)",
    duration: "Currently Studying",
    score: "NEET Aspirant",
    logo: skol2,
  },
  {
    side: "left",
    title: "Career Goal",
    degree: "Medical Entrance – NEET",
    duration: "Target: NEET 2027",
    score: "Aim: Join AIIMS Delhi",
    logo: skol1,
  },
];

function Education() {
  return (
    <section id="education" className="py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-lg sm:text-2xl font-bold dark:text-white text-gray-600 pb-2">
            MY EDUCATION
          </h3>
          <h1 className="text-3xl sm:text-6xl font-bold dark:text-white text-gray-600 pb-14">
            Where <span className="text-[#84AB91]">I’m Learning</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Center Line */}
          <div className="absolute w-1 bg-gradient-to-b from-[#84AB91] to-white h-full"></div>

          {educationData.map((edu, index) => {
            const isLeft = edu.side === "left";
            const MotionVariant = isLeft
              ? fadeInLeftVariant
              : fadeInRightVariant;

            return (
              <motion.div
                key={index}
                variants={MotionVariant}
                initial="hidden"
                whileInView="visible"
                className="w-full flex justify-between items-center mb-14 relative z-10"
              >
                {/* LEFT CARD */}
                {isLeft && (
                  <div className="w-[45%] text-center sm:text-right">
                    <EducationCard edu={edu} />
                  </div>
                )}

                {/* CENTER GAP */}
                <div className="w-[10%]"></div>

                {/* RIGHT CARD */}
                {!isLeft && (
                  <div className="w-[45%] text-center sm:text-left">
                    <EducationCard edu={edu} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

const EducationCard = ({ edu }) => {
  return (
    <div className="dark:bg-[#101828] backdrop-blur-xl bg-black/10 p-4 sm:p-6 rounded-2xl dark:text-white text-gray-600 shadow-xl">
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
        <img
          src={edu.logo}
          alt="logo"
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
        />
        <h2 className="text-sm sm:text-xl font-semibold">
          {edu.title}
        </h2>
      </div>

      {/* Details */}
      <p className="text-xs sm:text-base">{edu.degree}</p>
      <p className="italic text-xs sm:text-sm dark:text-gray-300 text-green-400">
        {edu.duration}
      </p>
      <p className="font-semibold text-xs sm:text-base mt-1">
        {edu.score}
      </p>
    </div>
  );
};

export default Education;
