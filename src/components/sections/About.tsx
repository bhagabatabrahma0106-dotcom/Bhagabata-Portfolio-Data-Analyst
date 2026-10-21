import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { objective, education, achievements, coreCompetencies } from '../../constants/data';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle title="Academic Foundation & Trajectory" subtitle="Section 06 // Education & Profile" />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column — Summary & Core Strengths */}
          <motion.div
            className="lg:col-span-6 studio-card rounded-2xl p-6 sm:p-8 border border-white/10"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-primary via-secondary to-purple-500 shrink-0 shadow-lg">
                <img
                  src="/profile.png"
                  alt="Bhagabata Brahma"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                  Bhagabata Brahma
                </h3>
                <div className="text-xs text-primary font-mono mt-0.5">
                  B.Tech Computer Science &amp; Engineering · Class of 2026
                </div>
              </div>
            </div>

            <p className="text-sm text-white/65 leading-relaxed mb-6 font-body">
              {objective}
            </p>

            {/* Core Competencies */}
            <div className="mb-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>Core Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-2.5 py-1 rounded-xl text-xs font-mono font-medium bg-white/5 border border-white/10 text-white/80 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Award size={12} />
                <span>Verified Milestones</span>
              </h4>
              <ul className="space-y-2.5">
                {achievements.map((ach, i) => (
                  <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-white/60 leading-relaxed font-body">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column — Education Timeline & Academic Metrics */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="studio-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                <span>Formal Education</span>
              </h3>

              <div className="space-y-6 relative pl-6 border-l border-white/10">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-dark border-2 border-primary" />

                    <div className="p-4 rounded-xl bg-white/5 border border-white/8 hover:border-primary/30 transition-all duration-200">
                      <div className="flex items-center justify-between text-xs font-mono text-primary/80 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
                          {edu.score}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-white text-base mb-1">
                        {edu.degree}
                      </h4>
                      <div className="text-xs font-semibold text-secondary mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-white/40">
                        <MapPin size={11} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Info Tiles */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Degree CGPA', value: '8.04' },
                { label: 'Passing Year', value: '2026' },
                { label: 'Discipline', value: 'CS & Eng.' },
              ].map((t) => (
                <div
                  key={t.label}
                  className="studio-card rounded-xl p-3.5 text-center border border-white/10"
                >
                  <div className="font-heading font-black text-xl text-gradient">{t.value}</div>
                  <div className="text-[11px] font-mono text-white/40 mt-1">{t.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
