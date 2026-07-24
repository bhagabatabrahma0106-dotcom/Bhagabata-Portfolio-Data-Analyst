import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { certifications } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

const themeMap: Record<string, { accent: string; second: string; badge: string }> = {
  cyan:    { accent: '#00F5FF', second: '#3B82F6', badge: 'Certified' },
  purple:  { accent: '#8B5CF6', second: '#EC4899', badge: 'Completed' },
  emerald: { accent: '#10B981', second: '#14B8A6', badge: 'Certified' },
  orange:  { accent: '#F59E0B', second: '#F97316', badge: 'Completed' },
  pink:    { accent: '#EC4899', second: '#F43F5E', badge: 'Completed' },
};

const allCerts = [
  ...certifications,
  { title: 'Data Analytics Essentials',  issuer: 'LinkedIn Learning',  date: 'Completed', color: 'purple' },
  { title: 'Power BI for Beginners',     issuer: 'Microsoft Learn',    date: 'Completed', color: 'orange' },
  { title: 'Python for Data Science',    issuer: 'Coursera',           date: 'Completed', color: 'pink'   },
];

export default function Certificates() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04), transparent)' }} />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04), transparent)' }} />

      <div className="section-container relative z-10">
        <SectionTitle title="Certifications" subtitle="Credentials & Achievements" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {allCerts.map((cert, i) => {
            const theme = themeMap[cert.color] || themeMap.cyan;
            const isReal = i < certifications.length;

            return (
              <motion.div
                key={i}
                variants={staggerItem}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
                style={{
                  background: 'rgba(7,11,20,0.9)',
                  border: `1px solid ${hovered === i ? theme.accent + '35' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: hovered === i
                    ? `0 0 40px ${theme.accent}12, 0 20px 60px rgba(0,0,0,0.4)`
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  opacity: isReal ? 1 : 0.65,
                }}
              >
                {/* Top gradient bar */}
                <motion.div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.second})` }}
                  animate={{ opacity: hovered === i ? 1 : 0.3 }}
                />

                {/* Corner glow */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${theme.accent}10, transparent 70%)` }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-6 flex flex-col flex-1 relative">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Icon */}
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{ background: `${theme.accent}14`, border: `1px solid ${theme.accent}28` }}
                      animate={{ boxShadow: hovered === i ? `0 0 20px ${theme.accent}28` : 'none' }}
                    >
                      <Award size={22} style={{ color: theme.accent }} />
                    </motion.div>

                    {/* Status badge */}
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono"
                      style={{
                        background: isReal ? `${theme.accent}15` : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isReal ? theme.accent + '30' : 'rgba(255,255,255,0.08)'}`,
                        color: isReal ? theme.accent : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {isReal ? <BadgeCheck size={9} /> : <Star size={9} />}
                      {isReal ? theme.badge : 'Learning'}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-white text-base mb-2 leading-snug flex-1">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono mb-3">
                    <ShieldCheck size={11} style={{ color: theme.accent + '80' }} />
                    {cert.issuer}
                  </div>

                  {/* Bottom: date + sparkle */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono font-semibold" style={{ color: theme.accent + 'cc' }}>
                      {cert.date}
                    </span>
                    {isReal && (
                      <div className="flex items-center gap-1 text-[10px] font-mono text-white/20">
                        <Sparkles size={10} style={{ color: theme.accent + '60' }} />
                        Verified
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={`https://linkedin.com/in/bhagabata-brahma`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white/40 hover:text-white border border-white/8 hover:border-cyan-500/30 glass transition-all duration-300"
          >
            <ExternalLink size={13} /> View on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
