import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const roles = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Initialize text on mount
  useEffect(() => {
    setText(roles[0]);
  }, []);

  // Dot animation with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let dots = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      const dotCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.3,
          color: `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createDots();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      dots = [];
      createDots();
    });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      tick();
    }, delta);
    return () => clearTimeout(timer);
  }, [text, delta, currentRole, isDeleting]);

  const tick = () => {
    const currentFullText = roles[currentRole];

    if (isDeleting) {
      if (text.length > 0) {
        setText(currentFullText.substring(0, text.length - 1));
        setDelta(50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setDelta(150);
      }
    } else {
      if (text.length < currentFullText.length) {
        setText(currentFullText.substring(0, text.length + 1));
        setDelta(150);
      } else {
        setDelta(2000);
        setIsDeleting(true);
      }
    }
  };

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <main
        id="home"
        className="relative grid place-items-center px-6 pb-20 pt-10 text-center md:px-10 min-h-screen z-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          {/* Logo with blinking border */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full border-2 border-sky-500 animate-pulse"></div>
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 animate-spin-slow opacity-50"></div>

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-4xl text-sky-300 shadow-[0_0_60px_rgba(59,130,246,0.2)] animate-glow">
              &lt;/&gt;
            </div>
          </div>

          <div className="space-y-5">
            {/* Animated Role Text */}
            <div className="text-sm uppercase tracking-[0.35em] text-sky-300/80 min-h-[28px]">
              <span className="inline-flex items-center gap-1">
                <span className="animate-pulse">✦</span>
                {text || roles[0]}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Web{" "}
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
                Developer
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Building modern web applications with React, Node.js, and Express.
              Continuously learning and mastering new web technologies.
            </p>
          </div>

          {/* Buttons - Now Functional */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-8 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-105 hover:border-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/abirhammuch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 transition-all duration-300 hover:scale-110 hover:border-sky-400/50 hover:text-white hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://et.linkedin.com/in/abirham-muche-4aa7a6320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 transition-all duration-300 hover:scale-110 hover:border-violet-400/50 hover:text-white hover:shadow-lg hover:shadow-violet-500/20 cursor-pointer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:abirhammuch526@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 transition-all duration-300 hover:scale-110 hover:border-sky-400/50 hover:text-white hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.2); }
          50% { box-shadow: 0 0 50px rgba(56, 189, 248, 0.6); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;