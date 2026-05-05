import React, { useEffect, useState, useRef } from "react";
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
  // State for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, threshold: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm mb-4">
            <span className="animate-pulse">✦</span> What I Use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Tech <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3">
            Technologies I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, threshold: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}
                  >
                    <category.icon className="text-white text-lg" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300"
                    >
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.3,
                          rotate: 10,
                          transition: { duration: 0.2 }
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-md"
                      >
                        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      </motion.div>

                      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
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