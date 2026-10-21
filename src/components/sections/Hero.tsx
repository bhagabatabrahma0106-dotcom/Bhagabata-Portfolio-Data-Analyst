import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowDown, Mail, ChevronRight, Database, BarChart3,
  Sparkles, CheckCircle2, MessageSquare, Terminal, Shield, ArrowUpRight
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';

export default function Hero() {
  const [activeMode, setActiveMode] = useState<'analytics' | 'executive'>('analytics');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const openMessenger = () => {
    window.dispatchEvent(new CustomEvent('open-messenger'));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 sm:pt-36 pb-16 overflow-hidden studio-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Studio Cursor Pills (Positioned safely below the fixed navbar) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20 max-w-7xl mx-auto">
        {/* Cursor 1: Data Analyst */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: [0, 8, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 left-8"
        >
          <div className="flex items-start gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#00F5FF" className="drop-shadow-md">
              <path d="M4 0l16 12-7 2-4 9-2-8-8-5 5-10z" />
            </svg>
            <div className="cursor-pill bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              <span>Bhagabata</span>
              <span className="text-white/40">·</span>
              <span className="text-cyan-400 font-bold">Data Analyst</span>
            </div>
          </div>
        </motion.div>

        {/* Cursor 2: Power BI Developer */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -20 }}
          animate={{ opacity: 1, x: [0, -10, 0], y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-44 right-10"
        >
          <div className="flex items-start gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" className="drop-shadow-md">
              <path d="M4 0l16 12-7 2-4 9-2-8-8-5 5-10z" />
            </svg>
            <div className="cursor-pill bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
              <span>DAX & Modeling</span>
              <span className="text-white/40">·</span>
              <span className="text-amber-400 font-bold">Power BI</span>
            </div>
          </div>
        </motion.div>

        {/* Cursor 3: SQL & ETL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, x: [0, 6, 0], y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-28 left-14"
        >
          <div className="flex items-start gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981" className="drop-shadow-md">
              <path d="M4 0l16 12-7 2-4 9-2-8-8-5 5-10z" />
            </svg>
            <div className="cursor-pill bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <span>20+ T-SQL Queries</span>
              <span className="text-white/40">·</span>
              <span className="text-emerald-400 font-bold">98%+ Accuracy</span>
            </div>
          </div>
        </motion.div>

        {/* Cursor 4: Data Governance */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, x: [0, -8, 0], y: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-24 right-16"
        >
          <div className="flex items-start gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#8B5CF6" className="drop-shadow-md">
              <path d="M4 0l16 12-7 2-4 9-2-8-8-5 5-10z" />
            </svg>
            <div className="cursor-pill bg-purple-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
              <span>DAMA-DMBOK</span>
              <span className="text-white/40">·</span>
              <span className="text-purple-400 font-bold">Governance</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-container w-full relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column — Editorial Typography & Positioning */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Top Interactive Mode & Status Bar with Clear Clearance */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6"
            >
              {/* Studio Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Analyst & BI Roles</span>
                <span className="text-white/30 hidden sm:inline">·</span>
                <span className="text-white/60 hidden sm:inline">Bengaluru / Remote</span>
              </div>

              {/* Mode Toggle Switch */}
              <div className="inline-flex p-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono">
                <button
                  onClick={() => setActiveMode('analytics')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeMode === 'analytics'
                      ? 'bg-primary text-dark font-bold shadow-sm'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  Data View
                </button>
                <button
                  onClick={() => setActiveMode('executive')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeMode === 'executive'
                      ? 'bg-secondary text-white font-bold shadow-sm'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  BI View
                </button>
              </div>
            </motion.div>

            {/* Massive Statement Headline */}
            <motion.div variants={staggerItem} className="mb-4">
              <span className="block text-xs sm:text-sm font-mono text-primary uppercase tracking-[0.25em] mb-1 font-semibold">
                Portfolio · Data & Business Intelligence
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-white">
                turning raw <span className="text-gradient">data.</span>
                <br />
                into verified <span className="text-gradient-purple">decisions.</span>
              </h1>
            </motion.div>

            {/* Subheading with Dynamic Typing */}
            <motion.div variants={staggerItem} className="mb-6 flex items-center gap-2 text-base sm:text-lg text-white/70">
              <span className="font-mono text-primary font-medium">{'>'}</span>
              <TypeAnimation
                sequence={[
                  'Data Analyst · SQL & Python Pipelines',
                  2200,
                  'Power BI Developer · DAX & Interactive Dashboards',
                  2200,
                  'Data Governance Analyst · DAMA-DMBOK Standards',
                  2200,
                  'D365 F&O Developer · Treasury Management',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-sm sm:text-base text-primary/95 font-semibold"
              />
            </motion.div>

            {/* Professional Narrative */}
            <motion.p
              variants={staggerItem}
              className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Hi, I'm <strong className="text-white font-semibold">Bhagabata Brahma</strong>. B.Tech Computer Science graduate (CGPA 8.04, Class of 2026) with hands-on internship experience profiling 5,000+ B2B customer records, authoring 20+ production T-SQL queries, and publishing 3 interactive Power BI dashboards.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary cursor-pointer shadow-[0_0_25px_rgba(0,245,255,0.3)]"
              >
                <span>Explore Projects</span>
                <ChevronRight size={17} />
              </button>

              <button
                onClick={openMessenger}
                className="btn-outline cursor-pointer border-white/20 text-white hover:border-primary/50 hover:text-primary flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Chat with Bhagabata</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </button>

              <a
                href="https://wa.me/916371206662?text=Hi%20Bhagabata,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-8"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <FaLinkedinIn size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Dynamic Verified Metrics Row (Reflecting activeMode toggle) */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl"
            >
              {(activeMode === 'analytics'
                ? [
                    { value: '5,000+', label: 'B2B Records Profiled' },
                    { value: '98%+', label: 'Master Accuracy' },
                    { value: '20+', label: 'T-SQL Queries Authored' },
                    { value: '8.04', label: 'B.Tech CS CGPA' },
                  ]
                : [
                    { value: '$817.86K', label: 'Pizza Sales Analyzed' },
                    { value: '3', label: 'Power BI Reports' },
                    { value: '48.6K', label: 'Transaction Rows' },
                    { value: '300+', label: 'Duplicates Cleared' },
                  ]
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="studio-card rounded-xl p-3 text-center border border-white/10 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="font-heading font-black text-xl text-gradient group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Studio Card Composition & Profile Artifact */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/25 via-secondary/20 to-purple-500/20 rounded-[35px] blur-2xl opacity-60 pointer-events-none" />

              {/* Photo Card Container */}
              <div className="relative w-full h-full rounded-[28px] p-1 bg-gradient-to-b from-primary/50 via-white/10 to-secondary/30 shadow-2xl overflow-hidden studio-card group">
                <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-card">
                  <img
                    src="/profile.png"
                    alt="Bhagabata Brahma"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent" />

                  {/* Floating Notification Snippet inside Image */}
                  <div className="absolute top-4 left-4 right-4 p-2.5 rounded-xl bg-dark/85 border border-white/10 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-mono text-white/50">Latest Project Milestone</span>
                    </div>
                    <p className="text-[11px] font-medium text-white/90 mt-1 leading-tight">
                      Validated 5,000+ customer records to 98%+ master-data accuracy.
                    </p>
                  </div>

                  {/* Bottom Info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-dark/90 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-primary font-bold">Bhagabata Brahma</div>
                        <div className="text-[11px] text-white/70">Data Analyst & Power BI Developer</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Class of 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 studio-card px-3 py-2 rounded-xl border border-primary/30 shadow-xl flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                  <Database size={15} />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-white/50">SQL & Governance</div>
                  <div className="text-xs font-bold text-white">DAMA-DMBOK</div>
                </div>
              </motion.div>

              {/* Floating Live Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 studio-card px-3 py-2 rounded-xl border border-secondary/30 shadow-xl flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary">
                  <BarChart3 size={15} />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-white/50">Interactive BI</div>
                  <div className="text-xs font-bold text-white">Power BI & DAX</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="relative z-10 pt-8 flex flex-col items-center gap-1.5 text-white/40 hover:text-primary transition-colors cursor-pointer"
        onClick={() => scrollTo('highlights')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase font-semibold">DISCOVER MORE</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
