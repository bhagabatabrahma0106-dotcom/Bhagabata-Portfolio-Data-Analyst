import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Database, RefreshCw, LayoutDashboard, ShieldCheck, CheckSquare, ChevronRight } from 'lucide-react';
import { services } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

const themeMap: Record<string, { accent: string; second: string }> = {
  cyan:    { accent: '#00F5FF', second: '#3B82F6' },
  purple:  { accent: '#8B5CF6', second: '#EC4899' },
  emerald: { accent: '#10B981', second: '#14B8A6' },
  orange:  { accent: '#F59E0B', second: '#F97316' },
  pink:    { accent: '#EC4899', second: '#F43F5E' },
  indigo:  { accent: '#6366F1', second: '#8B5CF6' },
};

const iconMap: Record<string, React.ReactNode> = {
  'Data Analytics & Reporting':      <BarChart2 size={20} />,
  'Data Governance Consulting':      <ShieldCheck size={20} />,
  'ETL Pipeline Development':        <RefreshCw size={20} />,
  'Dashboard Development':           <LayoutDashboard size={20} />,
  'ERP Data Analysis':               <Database size={20} />,
  'Data Quality Management':         <CheckSquare size={20} />,
};

// Matching bullet highlights per service
const bulletMap: Record<string, string[]> = {
  'Data Analytics & Reporting':    ['SQL-driven pipelines', 'Tableau & Power BI dashboards', 'Python EDA & insights'],
  'Data Governance Consulting':    ['Collibra platform', 'Metadata & lineage mapping', 'Policy & glossary mgmt'],
  'ETL Pipeline Development':      ['50+ SQL ETL scripts', 'Multi-source consolidation', 'Data validation & cleaning'],
  'Dashboard Development':         ['Interactive BI dashboards', 'KPI storytelling', '~30% less manual reporting'],
  'ERP Data Analysis':             ['D365 F&O analysis', 'SSRS report development', 'AOT/QBDS queries'],
  'Data Quality Management':       ['500+ issues resolved', 'Dedup & reconciliation', '~25% accuracy improvement'],
};

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full blur-[90px] md:blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04), transparent)' }} />

      <div className="section-container relative z-10">
        <SectionTitle title="Services" subtitle="What I Offer" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, i) => {
            const theme = themeMap[service.color] || themeMap.cyan;
            const bullets = bulletMap[service.title] || [];
            const isHovered = hovered === i;

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
                  border: `1px solid ${isHovered ? theme.accent + '38' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: isHovered
                    ? `0 0 40px ${theme.accent}12, 0 20px 60px rgba(0,0,0,0.4)`
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Top gradient bar */}
                <motion.div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.second})` }}
                  animate={{ opacity: isHovered ? 1 : 0.28 }}
                />

                {/* Corner glow */}
                <motion.div
                  className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${theme.accent}0e, transparent 70%)` }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                />

                <div className="p-6 flex flex-col flex-1 relative">
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{ background: `${theme.accent}14`, border: `1px solid ${theme.accent}28` }}
                      animate={{ boxShadow: isHovered ? `0 0 20px ${theme.accent}28` : 'none' }}
                    >
                      <span style={{ color: theme.accent }}>{iconMap[service.title]}</span>
                    </motion.div>
                    <span
                      className="text-[11px] font-mono font-bold px-2 py-1 rounded-full"
                      style={{
                        background: `${theme.accent}0e`,
                        border: `1px solid ${theme.accent}20`,
                        color: theme.accent + '80',
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-white text-base mb-2 leading-snug">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed mb-5 flex-1">{service.description}</p>

                  {/* Bullet highlights */}
                  <div className="space-y-1.5 mb-5">
                    {bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <ChevronRight size={11} style={{ color: theme.accent + 'aa' }} className="shrink-0" />
                        <span className="text-[11px] font-mono text-white/40">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${theme.accent}14, ${theme.second}14)`,
                        border: `1px solid ${theme.accent}25`,
                        color: theme.accent,
                      }}
                    >
                      Available
                    </span>
                    <motion.div
                      className="flex items-center gap-1 text-[11px] font-mono cursor-pointer"
                      style={{ color: theme.accent + '60' }}
                      whileHover={{ color: theme.accent, x: 2 }}
                      transition={{ duration: 0.15 }}
                    >
                      Hire me <ArrowUpRight size={11} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
