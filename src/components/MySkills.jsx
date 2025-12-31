import React from "react";
import { motion } from "framer-motion";
import {
  fadeInLeftVariant,
  fadeInTopVariant,
} from "../animations/Variants";

import {
  FaBrain,
  FaBook,
  FaUserGraduate,
  FaClock,
  FaBalanceScale,
} from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { MdBiotech } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";
import fadeImage from "../assets/right.png";

/* ===================== SKILLS DATA ===================== */
const skills = [
  {
    category: "Core Subjects (CBSE + NEET)",
    items: [
      {
        name: "Biology",
        icon: <MdBiotech />,
        level: 9,
        color: "#22C55E",
      },
      {
        name: "Physics",
        icon: <FaBalanceScale />,
        level: 8,
        color: "#38BDF8",
      },
      {
        name: "Chemistry",
        icon: <GiChemicalDrop />,
        level: 8,
        color: "#F97316",
      },
    ],
  },
  {
    category: "Academic Skills",
    items: [
      {
        name: "NCERT Concept Clarity",
        icon: <FaBook />,
        level: 9,
        color: "#FACC15",
      },
      {
        name: "Problem Solving",
        icon: <FaBrain />,
        level: 8,
        color: "#A78BFA",
      },
      {
        name: "Revision & Retention",
        icon: <FaUserGraduate />,
        level: 8,
        color: "#84AB91",
      },
    ],
  },
  {
    category: "Programming (External Subject)",
    items: [
      {
        name: "Python (Basics)",
        icon: <SiPython />,
        level: 6,
        color: "#3776AB",
      },
    ],
  },
  {
    category: "Competitive Exam Skills",
    items: [
      {
        name: "Time Management",
        icon: <FaClock />,
        level: 8,
        color: "#F59E0B",
      },
      {
        name: "Exam Strategy",
        icon: <TbMathSymbols />,
        level: 7.5,
        color: "#EF4444",
      },
      {
        name: "Consistency & Discipline",
        icon: <FaBrain />,
        level: 9,
        color: "#22C55E",
      },
    ],
  },
];

/* ===================== COMPONENT ===================== */
const MySkills = () => {
  return (
    <section
      id="skills"
      className="w-full overflow-hidden py-20 relative"
    >
      {/* Right Fade Image */}
      <div className="absolute top-0 right-0 w-1/3 pointer-events-none">
        <img
          src={fadeImage}
          alt="fade"
          className="h-full w-full object-cover object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h3
          className="text-[18px] sm:text-2xl font-bold dark:text-white text-gray-600 pb-3 text-center md:text-left"
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          SKILLS & STRENGTHS
        </motion.h3>

        <motion.h1
          className="text-4xl sm:text-6xl font-bold dark:text-white text-gray-600 pb-14 text-center md:text-left"
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          What <span className="text-[#84AB91]">I’m building every day</span>
        </motion.h1>

        {/* Skills Section */}
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="mt-10"
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-semibold dark:text-white text-gray-600 mb-6">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[260px] backdrop-blur-xl dark:bg-[#0b1220] bg-black/10 border border-[#1f2937] rounded-lg p-4 hover:border-[#84AB91] transition"
                >
                  {/* Skill Header */}
                  <div className="flex items-center gap-3 dark:text-white text-gray-600 mb-3">
                    <span className="text-2xl" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                    <span className="ml-auto text-sm text-gray-400">
                      {item.level}/10
                    </span>
                  </div>

                  {/* Rating Bar */}
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#84AB91]"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.level * 10}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
