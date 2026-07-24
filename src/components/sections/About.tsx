import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { objective, education, achievements, coreCompetencies } from '../../constants/data';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="section-container">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">
          {/* Left — Summary */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-primary via-secondary to-purple-500 shrink-0 shadow-lg">
                <img
                  src="/profile.png"
                  alt="Bhagabata Brahma"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  A Passionate <span className="text-gradient">Data Professional</span>
                </h3>
                <div className="text-xs text-primary font-mono mt-0.5">B.Tech Computer Science & Engineering</div>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">{objective}</p>

            {/* Core Competencies */}
            <div className="mb-8">
              <h4 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 rounded-full text-xs font-semibold glass border border-secondary/20 text-secondary/90"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((ach, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs">
                      ✓
                    </span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Education Timeline */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-8">
              Education{' '}
              <span className="text-gradient">Journey</span>
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px timeline-line opacity-30" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-14"
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 top-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <GraduationCap size={10} className="text-primary" />
                    </div>

                    <div className="glass rounded-2xl p-5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs text-primary font-mono mb-2">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                      <h4 className="font-heading font-bold text-white text-base mb-1">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-semibold text-secondary/80 mb-1">
                        {edu.institution}
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/40">
                        <div className="flex items-center gap-1">
                          <MapPin size={11} />
                          {edu.location}
                        </div>
                        <span className="text-emerald font-semibold">{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              {[
                { label: 'CGPA', value: '80%' },
                { label: 'Batch', value: '2026' },
                { label: 'Branch', value: 'CS' },
              ].map((t) => (
                <div
                  key={t.label}
                  className="glass rounded-xl p-3 text-center border border-white/5"
                >
                  <div className="text-xl font-black text-gradient">{t.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{t.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
