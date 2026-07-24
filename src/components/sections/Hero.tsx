import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail, ChevronRight, Database, BarChart3 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-28 pb-12 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] bg-secondary/8 rounded-full blur-[90px] md:blur-[120px] pointer-events-none" />

      <div className="section-container w-full relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column — Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full glass border border-emerald/30 bg-emerald/10 text-xs sm:text-sm text-emerald font-mono font-medium shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
              </span>
              Available for Entry-Level Roles
            </motion.div>

            {/* Main name */}
            <motion.h1
              variants={staggerItem}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary via-cyan-300 to-secondary bg-clip-text text-transparent">
                Bhagabata
              </span>
              <span className="text-white block mt-1">Brahma</span>
            </motion.h1>

            {/* Typing animation for roles */}
            <motion.div
              variants={staggerItem}
              className="text-lg sm:text-2xl lg:text-3xl font-heading font-semibold text-white/90 mb-6 flex items-center justify-center lg:justify-start min-h-[52px]"
            >
              <TypeAnimation
                sequence={[
                  'Data Analyst', 2000,
                  'Data Governance Specialist', 2000,
                  'D365 F&O Technical Consultant', 2000,
                  'Business Intelligence Analyst', 2000,
                  'SQL & Python Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-secondary text-dark font-bold flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Mail size={17} /> Let's Talk
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 rounded-full glass border border-primary/30 text-primary font-semibold flex items-center gap-2 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Projects <ChevronRight size={17} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-10"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl glass border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl glass border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaLinkedinIn size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3.5 py-2 rounded-xl glass border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-xl"
            >
              {[
                { value: '1+', label: 'Year Experience' },
                { value: '10K+', label: 'Records Processed' },
                { value: '5+', label: 'BI Dashboards' },
                { value: '80%', label: 'B.Tech CGPA' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-3.5 text-center border border-white/10 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="font-heading font-black text-xl sm:text-2xl text-gradient group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                  <div className="text-[11px] text-white/50 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — AI Photo Showcase */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-purple-500/20 rounded-[35px] blur-2xl opacity-70 animate-pulse pointer-events-none" />

              {/* Photo Card Container */}
              <div className="relative w-full h-full rounded-[28px] p-1 bg-gradient-to-b from-primary/60 via-secondary/40 to-primary/20 shadow-2xl overflow-hidden glass group">
                <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-card">
                  <img
                    src="/profile.png"
                    alt="Bhagabata Brahma AI Portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80" />

                  {/* Bottom Info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-primary font-semibold">Bhagabata Brahma</div>
                        <div className="text-[11px] text-white/70">Data & BI Professional</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald/20 border border-emerald/40 text-[10px] text-emerald font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
                        AI Profile
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-primary/30 shadow-lg flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                  <Database size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/50">Expertise</div>
                  <div className="text-xs font-bold text-white">SQL & Data Analytics</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-secondary/30 shadow-lg flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary">
                  <BarChart3 size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/50">Specialization</div>
                  <div className="text-xs font-bold text-white">Power BI & D365</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 pt-8 flex flex-col items-center gap-1.5 text-white/40 hover:text-primary transition-colors cursor-pointer"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-semibold">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
