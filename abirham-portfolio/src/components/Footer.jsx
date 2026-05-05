import React from "react";
import { FaGithub , FaLinkedin , FaHeart  } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent mb-6 cursor-pointer hover:opacity-80 transition-opacity"
          >
            Abirham's Portfolio
          </button>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <Link
              to="https://github.com/abirhammuch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              to="https://et.linkedin.com/in/abirham-muche-4aa7a6320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              to="mailto:abirhammuch526@gmail.com"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <MdEmail className="w-5 h-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Abirham's Portfolio.  All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;