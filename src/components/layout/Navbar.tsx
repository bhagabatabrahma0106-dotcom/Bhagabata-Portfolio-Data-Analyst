import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { personalInfo, navItems } from '../../constants/data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  const openMessenger = () => {
    window.dispatchEvent(new CustomEvent('open-messenger'));
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div
            className={`px-4 sm:px-6 py-2 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 ${
              scrolled
                ? 'bg-dark/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                : 'bg-dark/60 backdrop-blur-md border border-white/8 shadow-lg'
            }`}
          >
            {/* Brand Logo with Integrated Status Dot (Clean & Non-overlapping) */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group cursor-pointer text-left shrink-0"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-primary to-secondary shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img src="/profile.png" alt="Bhagabata Brahma" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-sm sm:text-base text-white tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">
                  bhagabata brahma<span className="text-primary font-mono">.</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 -mt-0.5 flex items-center gap-1 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>open to work · data & bi</span>
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links — Compact & Non-wrapping */}
            <ul className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
              {navItems.map((item) => (
                <li key={item.id} className="shrink-0">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative font-body text-xs xl:text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap py-1 ${
                      activeSection === item.id ? 'text-primary font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions: Social + Hablemos / Messenger Button */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub size={13} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={13} />
                </a>
              </div>

              {/* Studio Hablemos / Let's Talk CTA */}
              <motion.button
                onClick={openMessenger}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-mono font-semibold text-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.15)] cursor-pointer whitespace-nowrap"
              >
                <MessageSquare size={13} />
                <span>Chat</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </motion.button>

              {/* Mobile Menu Hamburger */}
              <button
                className="lg:hidden w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Studio Style) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-50 bg-dark/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Navigation</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open for Work
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`text-base font-heading font-semibold w-full text-left py-1 transition-colors flex items-center justify-between ${
                      activeSection === item.id ? 'text-primary' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-40" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={openMessenger}
                className="flex-1 py-2 rounded-xl bg-primary/15 border border-primary/30 text-xs font-mono font-semibold text-primary flex items-center justify-center gap-2"
              >
                <MessageSquare size={13} />
                <span>Open Messenger</span>
              </button>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70"
                >
                  <FiGithub size={15} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70"
                >
                  <FaLinkedinIn size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
