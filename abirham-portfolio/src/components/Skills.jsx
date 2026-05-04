import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "React", level: 85 }
      ]
    },
    {
      title: "⚙️ Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "REST APIs", level: 87 }
      ]
    },
    {
      title: "🗄️ Database",
      skills: [
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "🛠️ Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "GitHub", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Gradient bar with from-sky-500 to-violet-500 */}
                        <div className="w-full h-full bg-gradient-to-r from-sky-500 to-violet-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;