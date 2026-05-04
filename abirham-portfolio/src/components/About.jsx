import React from "react";
import { MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">
            About <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">Me</span> 
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
             <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a <span className="text-sky-500 font-semibold">web developer</span> based in Bahir Dar, Ethiopia, 
                passionate about building modern, responsive web applications using the latest technologies. 
                I'm actively seeking a <span className="text-violet-500 font-semibold">web development internship</span> 
                to apply my skills and grow professionally.
              </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently pursuing my IT degree at Bahir Dar University (3rd year), 
              I combine academic knowledge with hands-on professional experience. 
              I'm passionate about web development and continuously expanding my 
              skills in <span className="text-violet-500 font-semibold">React, Node.js, and full-stack development</span>.
            </p>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-sky-500">✦</span> Quick Facts
            </h3>
            
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-slate-900 dark:text-white font-medium">Bahir Dar, Ethiopia</p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</p>
                  <p className="text-slate-900 dark:text-white font-medium">Web Developer</p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Education</p>
                  <p className="text-slate-900 dark:text-white font-medium">Bahir Dar University (3rd Year)</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;