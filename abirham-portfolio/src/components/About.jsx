import React, { useEffect, useState } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const itemClass = (delay = "0ms") =>
    `transition-all duration-700 ease-out will-change-transform
     ${isVisible
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-10 blur-sm"}
     `;

  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className={`text-center mb-12 ${itemClass("0ms")}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className={`space-y-6 ${itemClass("150ms")}`}>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a <span className="text-sky-500 font-semibold">web developer</span> based in Bahir Dar, Ethiopia,
              passionate about building modern, responsive web applications.
              I'm actively seeking a{" "}
              <span className="text-violet-500 font-semibold">web development internship</span>.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently pursuing my IT degree at Bahir Dar University (3rd year),
              I combine academic knowledge with hands-on experience in
              <span className="text-violet-500 font-semibold"> React, Node.js, and full-stack development</span>.
            </p>
          </div>

          {/* Right Card */}
          <div
            className={`bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm
            transition-all duration-700 ${itemClass("300ms")}`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-sky-500">✦</span> Quick Facts
            </h3>

            <div className="space-y-4">

              {/* ITEM 1 */}
              <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800">
                <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition">
                  <MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Bahir Dar, Ethiopia
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800">
                <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center group-hover:scale-110 transition">
                  <Briefcase className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Role
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Web Developer
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Education
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Bahir Dar University (3rd Year)
                  </p>
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