import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaDatabase, FaServer, FaTools, FaCode
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMysql, SiMongodb 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      gradient: "from-sky-500 to-blue-500",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "React", icon: FaReact, color: "#61DAFB" }
      ]
    },
    {
      title: "Backend",
      icon: FaServer,
      gradient: "from-violet-500 to-purple-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "REST APIs", icon: FaServer, color: "#00B4D8" }
      ]
    },
    {
      title: "Database",
      icon: FaDatabase,
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ]
    },
    {
      title: "Tools",
      icon: FaTools,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
        { name: "GitHub", icon: FaGithub, color: "#ffffff" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">
            Tech Stack
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I use to build modern applications
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-slate-900 p-6 rounded-2xl border border-slate-800">

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}
                  >
                    <category.icon className="text-white text-lg" />
                  </motion.div>

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"
                    >

                      {/* Animated Icon */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          y: [0, -3, 0]
                        }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                          y: {
                            duration: 2,
                            repeat: Infinity
                          }
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 10
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 shadow-md"
                      >
                        <skill.icon style={{ color: skill.color }} />
                      </motion.div>

                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>

                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;