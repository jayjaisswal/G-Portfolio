import React from 'react';
import { RiGroupLine } from "react-icons/ri";
import { motion } from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";
import fadeImage from '../assets/right.png'

function MyInvolvement() {

  const involvements = [
    {
      title: "ISTE SC MANIT BHOPAL",
      description: "Organized and promoted ISTE MANIT events, developing marketing campaigns that increased attendance by over 150+ at recent functions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#84AB91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ) // Group/team icon to represent organizing student chapter
    },
    {
      title: "Head Coordinator T&P Cell",
      description: "Directed a team of 10 coordinators to organize and execute 50+ campus recruitment drives, increasing placement opportunities for 200+ students",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#84AB91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ) // Leadership/coordination icon to represent heading the T&P cell
    },
    {
      title: "Technical Lead",
      description: "Led a team of 5 developers to build and deploy a campus-wide event management system, used by 1000+ students for 20+ events",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#84AB91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ) // Tech/computer icon to represent technical leadership
    },
  ];

  return (

    <>
      <section className="bg-[#000111] pb-20 pt-20 w-full">
       <div className="absolute top- right-0  w-1/3 flex items-center pointer-events-none">
               <img 
                 src={fadeImage}
                 alt="Background fade" 
                 className="h-full w-full object-cover object-left"
               />
             </div>
        <div className="max-w-[90%] mx-auto px-4">
          <motion.div className="mb-20" variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible">
            <h2 className="sm:text-2xl text-[18px] font-bold text-white uppercase tracking-wide">COMMUNITY INVOLVEMENTS</h2>
            <h3 className="sm:text-6xl text-4xl font-bold mt-2 text-white">
              Building <span className="text-[#84AB91]">beyond code</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {involvements.map((item, index) => (
              <div
                key={index}
                className="bg-[#111218] rounded-xl p-6 border-l-4 border-[#84AB91] transition-transform hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#84AB91]/10"
              >
                <motion.div className="flex items-start space-x-4" variants={fadeInTopVariant}
                  initial="hidden"
                  whileInView="visible">
                  <div className="bg-[#0E0E14] p-3 rounded-full">

                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#84AB91] text-xl font-bold mb-2 text-">{item.title}</h4>
                    <p className=" leading-relaxed text-white">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default MyInvolvement;
