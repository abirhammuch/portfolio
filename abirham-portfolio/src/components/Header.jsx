import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === activeSection);
    if (activeIndex !== -1) {
      const navContainer = document.querySelector(".nav-container");
      if (navContainer) {
        const buttons = navContainer.querySelectorAll("button");
        const activeButton = buttons[activeIndex];
        if (activeButton) {
          const containerRect = navContainer.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          setUnderlineStyle({
            width: buttonRect.width,
            left: buttonRect.left - containerRect.left,
          });
        }
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const navContainer = document.querySelector(".nav-container");
      if (navContainer) {
        const buttons = navContainer.querySelectorAll("button");
        const activeButton = buttons[0];
        if (activeButton) {
          const containerRect = navContainer.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          setUnderlineStyle({
            width: buttonRect.width,
            left: buttonRect.left - containerRect.left,
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getActiveClass = (sectionId) => {
    return activeSection === sectionId
      ? "text-blue-600 text-lg font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-lg";
  };

  const getActiveClassForMobile = (sectionId) => {
    return activeSection === sectionId
      ? "text-blue-600 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 pl-4 py-3 rounded-md"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md transition-all duration-200";
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-lg font-semibold cursor-pointer"
          >
            <img src="/logo.png" alt="Logo" className="h-20 w-20 rounded-full" />
            <span className="text-slate-900 dark:text-white"></span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex relative nav-container">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer ${getActiveClass(item.id)}`}
              >
                {item.name}
              </button>
            ))}
            <div
              className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
              style={{
                width: underlineStyle.width,
                left: underlineStyle.left,
                transform: "translateY(2px)",
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}

            {/* 
             <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:border-blue-500 hover:text-blue-600 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
             */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition hover:border-blue-500 hover:text-blue-600 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl z-50 md:hidden animate-slide-in">
            <div className="flex justify-between items-center p-6 border-b dark:border-slate-700">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full cursor-pointer ${getActiveClassForMobile(item.id)}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
