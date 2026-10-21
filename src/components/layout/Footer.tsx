import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-card/50 border-t border-primary/10 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="font-heading font-black text-lg text-gradient mb-1">BHAGABATA BRAHMA</div>
          <div className="text-sm text-white/40">
            Data Analyst · Power BI Developer · Class of 2026
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Copyright + Back to Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-white/30 font-mono">
            © {new Date().getFullYear()} Bhagabata Brahma. Built with React + Vite.
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: '0 0 20px rgba(0,245,255,0.4)' }}
            className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

