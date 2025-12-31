import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Nav = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    // { name: "Projects", href: "#projects" },
    // { name: "Contact", href: "#contact" },
  ];

  /* apply theme */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);


 

  useEffect(() => {
  document.body.style.overflowY = menuOpen ? "hidden" : "auto";
  return () => {
    document.body.style.overflowY = "auto";
  };
}, [menuOpen]);


  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg
        bg-transparent
        border-b border-white/10
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl font-semibold uppercase tracking-[0.25em]
            dark:text-white/90 text-gray-400
          "
        >
          Neet
          <span className="ml-1 text-[#84AB91] font-normal tracking-normal">
            Aspirant
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  dark:text-white/90
                  text-[#84AB91] 
                  hover:text-[#84AB91]
                  transition duration-300
                  relative group
                "
              >
                {link.name}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-[#84AB91]
                    scale-x-0 group-hover:scale-x-100
                    transition-transform origin-left duration-300
                  "
                />
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
              ml-4
              dark:text-white/90
              cursor-pointer
              text-gray-800
              hover:text-[#84AB91]
              transition
            "
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </ul>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="dark:text-white/90 text-black cursor-pointer hover:text-[#84AB91] transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="dark:text-white/90  text-[#84AB91] cursor-pointer "
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul
          className="
            flex flex-col items-center space-y-4
            dark:bg-black/70 bg-white/70
            backdrop-blur-xl
            border-t border-white/10
            py-6
          "
        >
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <a
                href={link.href}
                className="
                  block w-full py-2
                  dark:text-white/90
                  text-[#84AB91]
                  font-semibold
                  hover:text-[#84AB91]
                  transition
                "
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
