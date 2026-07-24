import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../../constants/data';
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-card/20">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <SectionTitle title="Professional Experience" subtitle="My Work History" />

        <div className="mt-16 relative">
          {/* Vertical Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-20 hidden md:block" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary mt-6 z-10" />

                {/* Date Pill (desktop) */}
                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} items-start pt-6`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary font-mono">
                    <Calendar size={13} />
                    {item.period}
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    className="glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -4, boxShadow: '0 0 30px rgba(0,245,255,0.08)' }}
                  >
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">
                          {item.type}
                        </span>
                        <div className="md:hidden flex items-center gap-1 text-xs text-white/40 font-mono">
                          <Calendar size={11} /> {item.period}
                        </div>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white mb-1">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-secondary/80 mb-4">
                        <span className="font-semibold">{item.company}</span>
                        <span className="text-white/20">·</span>
                        <span className="flex items-center gap-1 text-white/40 text-xs">
                          <MapPin size={11} /> {item.location}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/5 border border-primary/15 text-primary/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Toggle bullets */}
                      <button
                        className="flex items-center gap-1 text-xs text-white/40 hover:text-primary transition-colors"
                        onClick={() => setExpanded(expanded === i ? null : i)}
                      >
                        {expanded === i ? (
                          <>
                            <ChevronUp size={14} /> Hide details
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} /> View details
                          </>
                        )}
                      </button>
                    </div>

                    {/* Bullets (expandable) */}
                    <motion.div
                      initial={false}
                      animate={{ height: expanded === i ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 pb-6 space-y-3 border-t border-white/5 pt-4">
                        {item.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                            <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
