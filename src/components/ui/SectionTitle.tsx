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
      className="text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs text-primary font-mono tracking-widest uppercase mb-4">
        {subtitle}
      </div>
      <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
        {title}
      </h2>
      {/* Decorative underline */}
      <div className="flex justify-center mt-4">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>
    </motion.div>
  );
}
