import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,245,255,0.05)]'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => scrollTo('home')}
            className="font-heading font-black text-xl tracking-tight text-gradient flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-primary to-secondary shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img src="/profile.png" alt="Bhagabata Brahma" className="w-full h-full object-cover rounded-full" />
            </div>
            <span>BHAGABATA BRAHMA</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative font-body text-sm font-500 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-primary' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Social + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white/70 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-0 right-0 z-40 bg-dark/95 backdrop-blur-2xl border-b border-primary/10 px-6 py-6"
          >
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`text-lg font-heading font-600 w-full text-left transition-colors ${
                      activeSection === item.id ? 'text-primary' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
