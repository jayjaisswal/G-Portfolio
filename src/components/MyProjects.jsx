import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Zap, Calendar } from "lucide-react";
import { useState } from "react";
// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Hosteller Homies (Acedmic Major Project)",
    description: "A hostel management platform for attendance, mess tracking, complaints, and student management with secure role-based access.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind", "Express"],
    liveLink: "https://hostellerhomiess.netlify.app/",
    codeLink: "https://github.com/CoderRaushan/HostellerHomies",
    status: "In Development",
    category: "Full Stack"
  },
  {
    title: "Padho India (Personal Major Project)",
    description: "A smart MERN-based education platform offering courses, learning resources, and scalable backend APIs for students.",
    image: "https://images.unsplash.com/photo-1604872412583-53667c1a6fcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React.js", "Redux", "Node.js", "Express", "Tailwind", "MongoDB"],
    liveLink: "https://padho-india.vercel.app/",
    codeLink: "https://github.com/jayjaisswal/MERN-Smart-Education-Platform",
    status: "In Development",
    category: "Full Stack"
  },
  {
    title: "TalkSphere",
    description: "A real-time video conferencing and chat application using WebRTC and Socket.io for seamless communication.",
    image: "https://plus.unsplash.com/premium_photo-1661541254566-3b7cf5ceaf66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    technologies: ["React", "MongoDB", "Express", "Node.js", "socket-io", "WebRTC", "Tailwind"],
    liveLink: "https://video-conference-beige.vercel.app/",
    codeLink: "https://github.com/jayjaisswal/video-conference",
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Portfolio",
    description: "A responsive personal portfolio showcasing projects, skills, and experience with modern UI and smooth animations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fHww",
    technologies: ["React", "Tailwind"],
    liveLink: "https://jay-portfolio-dev.vercel.app/",
    codeLink: "https://github.com/jayjaisswal/Portfolio",
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Weather App (Mini Project)",
    description: "A weather forecasting app that fetches real-time data using APIs and displays location-based weather details.",
    image: "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["React.js", "API", "CSS",],
    liveLink: "https://quiet-lokum-05ed36.netlify.app/",
    codeLink: "https://github.com/jayjaisswal/weather-app-react",
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Password Generator (Mini Project)",
    description: "A secure password generator allowing users to create strong, customizable passwords using core JavaScript logic.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://passwordgeneratorxyz0.netlify.app/",
    codeLink: "https://github.com/jayjaisswal/Password-Generator-app",
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "ShopCart - E-commerce Website (Mini Project)",
    description: "A frontend e-commerce application with product listing, cart management, and state handling using Redux.",
    image: "https://images.unsplash.com/photo-1713256752744-fad1d7a8684c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["React.js", "Redux", "Tailwind"],
    liveLink: "https://shop-cart-react62.netlify.app/",
    codeLink: "https://github.com/jayjaisswal/ShopCart-React-Redux",
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "GIFS Generator (Mini Project)",
    description: "A fun GIF generator that fetches random GIFs from an external API with search functionality.",
    image: "https://plus.unsplash.com/premium_photo-1670371134797-35dacfaf9dd4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmc3xlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["React.js", "API", "Tailwind"],
    liveLink: "https://random-gif-generator-acfshw.netlify.app/",
    codeLink: "https://github.com/jayjaisswal/React-GIFS-generator",
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "Code Snippet CRUD (Mini Project)",
    description: "A full-stack CRUD application to create, update, and manage code snippets using MERN stack.",
    image: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGUlMjBzbmlwcGV0fGVufDB8fDB8fHww",
    technologies: ["React.js", "Express", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://mern-code-snippet-client-side.vercel.app/",
    codeLink: "https://mern-code-snippet-client-side.vercel.app/",
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Auth (Mini Project)",
    description: "A simple authentication UI demonstrating login and signup flows with protected routes in React.",
    image: "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww",
    technologies: ["React.js", "Tailwind"],
    liveLink: "https://reactauthapplication.netlify.app/",
    codeLink: "https://github.com/jayjaisswal/ReactAuth",
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "Testimonial (Mini Project)",
    description: "A responsive testimonial slider component built with React and Tailwind for smooth user experience.",
    image: "https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D",
    technologies: ["React.js", "Tailwind"],
    liveLink: "https://jayjaisswal.github.io/Testimonial-react-app/",
    codeLink: "https://github.com/jayjaisswal/Testimonial-react-app",
    status: "Completed",
    category: "Frontend"
  },
  {
    title: "Courses (Mini Project)",
    description: "A course listing application with filtering, API data handling, and clean UI built using React.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    technologies: ["React.js", "Tailwind", "API", "Filter", "Toaster"],
    liveLink: "https://jayjaisswal.github.io/react-top-courses/",
    codeLink: "https://github.com/jayjaisswal/react-top-courses",
    status: "Completed",
    category: "Frontend"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: "rgba(132, 171, 145, 0.1)" },
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(132, 171, 145, 0.2)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};


const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (

    <div id='projects' className=' py-0 relative overflow-hidden'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-[#84AB91] to-[#A1C1AE] mx-auto mb-6"
          />
          {/* <h3 className="text-lg font-semibold mb-4 text-[#84AB91] tracking-wider  uppercase">
            Portfolio
          </h3> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 dark:text-[#84AB91] text-gray-800">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84AB91] to-[#A1C1AE]">Projects</span>
          </h1>
          <p className="dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my latest work in full-stack development, featuring modern technologies and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              {/* bg-gradient-to-br from-[#0F1629] to-[#1A2332] */}
              <div className="bg-black/15 dark:bg-gradient-to-br from-[#0F1629] to-[#1A2332] backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl 
                h-full flex flex-col border border-gray-800/50 hover:border-[#84AB91]/30 transition-all">

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    className="h-48 sm:h-56 w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                      }`}>
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#84AB91]/20 text-white border border-[#84AB91]/30 backdrop-blur-sm">
                      <Zap className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-xl font-bold mb-3 dark:text-white text-black/65 group-hover:text-[#84AB91] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="text-xs sm:text-sm bg-gradient-to-r from-[#1E293B] to-[#334155] text-gray-300 px-3 py-1 rounded-full border border-gray-700/50 hover:border-[#84AB91]/30 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">

                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 px-2 py-2 dark:bg-gradient-to-r from-[#84AB91] to-[#A1C1AE] bg-green-400 text-black rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#84AB91]/25 flex-1"
                    >
                      <ExternalLink className="w-2 h-2" />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 px-2 py-2 border-2 border-[#84AB91]/30 dark:text-[#84AB91] text-black/75 rounded-xl font-medium transition-all duration-300 hover:bg-[#84AB91]/10 hover:border-[#84AB91]/50 flex-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-[#84AB91] dark:text-[#84AB91] text-black cursor-pointer rounded dark:hover:bg-[#84AB91]/10 hover:bg-gray-300 backdrop-blur-xl transition-colors  duration-300"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;