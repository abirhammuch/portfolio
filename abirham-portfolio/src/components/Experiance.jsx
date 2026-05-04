import React from "react";
import { GraduationCap, Code2, Calendar, Briefcase, Search } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development (Self-Taught)",
      period: "2024 - Present",
      organization: "Personal Projects",
      description: "Building portfolio projects with React, Node.js, Tailwind CSS, and MongoDB. Actively developing skills through personal projects and online resources.",
      icon: Code2,
      iconColor: "bg-sky-500"
    },
    {
      title: "IT Student (3rd Year)",
      period: "2023 - Present",
      organization: "Bahir Dar University",
      description: "3rd year IT student. Learning web development, databases, and software engineering principles.",
      icon: GraduationCap,
      iconColor: "bg-emerald-500"
    },
    {
      title: "Job Seeking",
      period: "2026",
      organization: "Available for Work",
      description: "Actively searching for web development positions. Ready to contribute, learn, and grow as a junior developer.",
      icon: Search,
      iconColor: "bg-violet-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Self-learning and job seeking journey
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${exp.iconColor} flex items-center justify-center shadow-lg`}>
                  <exp.icon className="w-5 h-5 text-white" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-sky-500 to-violet-500 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-sky-500 mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-violet-500">{exp.organization}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open for Work Banner */}
        <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-500/20 text-center">
          <p className="text-slate-700 dark:text-slate-300">
            🚀 <span className="font-semibold">Open for Work (2026)</span> - Looking for Junior Web Developer or Internship roles
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Available for remote, hybrid, or on-site positions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;