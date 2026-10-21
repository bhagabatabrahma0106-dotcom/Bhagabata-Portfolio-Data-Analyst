import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto mb-14"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-primary font-mono tracking-[0.2em] uppercase mb-3 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span>{subtitle}</span>
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
        {title}
      </h2>
      <div className="flex justify-center mt-3">
        <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>
    </motion.div>
  );
}
