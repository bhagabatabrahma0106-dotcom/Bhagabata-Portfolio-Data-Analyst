import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-dark/95 border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="font-heading font-black text-xl text-white tracking-tight mb-1">
            bhagabata brahma<span className="text-primary font-mono">.</span>
          </div>
          <div className="text-xs sm:text-sm text-white/50 font-mono">
            Data Analyst · Power BI Developer · Class of 2026
          </div>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-mono text-white/35 mt-1">
            <MapPin size={11} className="text-primary/70" />
            <span>Whitefield, Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={15} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all duration-200"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={15} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-white/35 font-mono text-center md:text-right">
            &copy; {new Date().getFullYear()} Bhagabata Brahma. Studio Portfolio.
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: '0 0 20px rgba(0,245,255,0.35)' }}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary hover:border-primary/40 transition-all duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
