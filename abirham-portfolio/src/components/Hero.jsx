import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const roles = [
    "Aspiring Full-Stack Developer",
    "React & Node.js Developer",
    "MERN Stack Enthusiast",
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setText(roles[0]);
  }, []);

  // Canvas animation
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
      const dotCount = Math.min(
        120,
        Math.floor((canvas.width * canvas.height) / 10000),
      );

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

    const handleResize = () => {
      resizeCanvas();
      dots = [];
      createDots();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <main
        id="home"
        className="relative grid place-items-center px-6 pb-20 pt-10 text-center md:px-10 min-h-screen z-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full border-2 border-sky-500 animate-pulse"></div>
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 animate-spin-slow opacity-50"></div>

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-4xl text-sky-300 shadow-[0_0_60px_rgba(59,130,246,0.2)]">
              &lt;/&gt;
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <div className="text-sm uppercase tracking-[0.35em] text-sky-300/80 min-h-[28px]">
              <span className="inline-flex items-center gap-1">
                <span className="animate-pulse">✦</span>
                {text}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Aspiring{" "}
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
                Full-Stack Developer
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Abirham, an IT student and aspiring full-stack developer
              passionate about building scalable and user-friendly web
              applications. I specialize in React, Node.js, and MongoDB, and
              enjoy transforming ideas into real-world digital solutions.
            </p>

            <p className="text-sm text-sky-400/80">
              React • Node.js • Express • MongoDB • Tailwind CSS
            </p>

            <p className="text-xs text-slate-400">
              Built a MERN-based grocery shopping platform with authentication,
              product filtering, and cart system.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:scale-105 hover:bg-slate-800"
            >
              Contact Me
            </button>

            {/* Download CV */}
            <a
              href="/Abirham_Muche_CV.pdf"
              download="Abirham_Muche_CV.pdf"
              className="rounded-full border border-sky-500 px-8 py-3 text-sm font-semibold text-sky-300 transition hover:scale-105 hover:bg-sky-500/10"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/abirhammuch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 transition hover:scale-125 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://et.linkedin.com/in/abirham-muche-4aa7a6320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 transition hover:scale-125 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:abirhammuch526@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 transition hover:scale-125 hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 animate-bounce text-slate-400">
            ↓
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
