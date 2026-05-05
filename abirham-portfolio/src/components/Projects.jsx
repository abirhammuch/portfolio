import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import groceryImage from "../assets/grocery1.png";
import portfolioImage from "../assets/portfolio.png";
import manageImage from "../assets/manage.png";

const Projects = () => {
  const projects = [
    {
      title: "Modern Grocery Shopping Platform",
      description:
        "Modern grocery shopping platform with intuitive UI, product search and filtering, shopping cart functionality, and seamless checkout experience. Built with MERN stack.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "stripe",
      ],
      github: "https://github.com/abirhammuch/grocery",
      live: "https://grocery-neon-kappa.vercel.app/",
      image: groceryImage,
    },
    {
      title: "My Portfolio Website",
      description:
        "Full-stack portfolio website built with React frontend and Node.js backend. Features project showcase, blog functionality, and contact form with email integration.",
      tech: ["React", "Tailwind CSS", "node.js", "Express"],
      github: "https://github.com/abirhammuch/portfolio",
      live: "https://portfolio-ten-sepia-94.vercel.app/",
      image: portfolioImage,
    },
    {
      title: "On Progress...",
      description:
        "Manage is a productivity platform that helps software teams plan day-to-day tasks while keeping larger team goals in view.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abirhammuch/tailwind",
      live: "https://manage-beige-ten.vercel.app/",
      image: manageImage,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-10 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm mb-4">
            <span className="animate-pulse">✦</span> My Work
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Web applications and solutions I've developed for real-world needs
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:scale-[1.03]
              hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)]
              hover:rotate-[0.3deg]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-500/20 to-violet-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaGithub className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
                  >
                    <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 active:scale-95"
          >
            View All Projects
            <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;