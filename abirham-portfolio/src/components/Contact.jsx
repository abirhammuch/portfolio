import React, { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // State for scroll animations
  const [isVisible, setIsVisible] = useState({
    contactInfo: false,
    socialLinks: false,
    contactForm: false
  });
  
  const sectionRef = useRef(null);

  // Get credentials from .env file
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('data-animate');
            setIsVisible(prev => ({ ...prev, [targetId]: true }));
          }
        });
      },
      { threshold: 0.2, triggerOnce: true }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      formRef.current.reset();
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abirhammuch526@gmail.com",
      link: "mailto:abirhammuch526@gmail.com",
      color: "from-sky-500 to-blue-500",
      delay: 0
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bahir Dar, Ethiopia",
      link: null,
      color: "from-emerald-500 to-teal-500",
      delay: 0.1
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 973 769 266",
      link: "tel:+251973769266",
      color: "from-violet-500 to-purple-500",
      delay: 0.2
    }
  ];

  const socialIcons = [
    { icon: FaGithub, link: "https://github.com/abirhammuch", label: "GitHub", color: "hover:bg-gray-800", delay: 0 },
    { icon: FaLinkedin, link: "https://et.linkedin.com/in/abirham-muche-4aa7a6320", label: "LinkedIn", color: "hover:bg-blue-700", delay: 0.1 },
    { icon: MdEmail, link: "mailto:abirhammuch526@gmail.com", label: "Email", color: "hover:bg-red-600", delay: 0.2 },
    { icon: FaTelegramPlane, link: "https://t.me/ma_rsh_al", label: "Telegram", color: "hover:bg-sky-600", delay: 0.3 }
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm mb-4">
            <span className="animate-pulse">✦</span> Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Let's <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Looking for collaboration or have a project idea? Let's connect!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div 
              data-animate="contactInfo"
              className={`bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg transition-all duration-700 transform ${
                isVisible.contactInfo 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 transition-all duration-500 hover:translate-x-2"
                    style={{ transitionDelay: `${info.delay}s` }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-slate-900 dark:text-white hover:text-sky-500 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Card */}
            <div 
              data-animate="socialLinks"
              className={`bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg transition-all duration-700 transform ${
                isVisible.socialLinks 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Connect Socially
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} hover:text-white shadow-md hover:shadow-lg`}
                    style={{ transitionDelay: `${social.delay}s` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div 
            data-animate="contactForm"
            className={`bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg transition-all duration-700 transform ${
              isVisible.contactForm 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="transition-all duration-300 hover:translate-x-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div className="transition-all duration-300 hover:translate-x-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div className="transition-all duration-300 hover:translate-x-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 focus:scale-[1.02] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaTelegramPlane className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 text-sm text-center animate-bounce">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 text-red-500 text-sm text-center">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Contact;