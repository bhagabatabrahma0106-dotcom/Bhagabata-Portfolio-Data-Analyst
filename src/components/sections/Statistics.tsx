import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { statistics } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { Trophy, Package, LayoutDashboard, CheckCircle2, Sparkles } from 'lucide-react';

function CountUp({ to, suffix = '' }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const steps = 60;
    const increment = to / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const statConfig = [
  {
    icon: <Package size={20} />,
    accent: '#00F5FF',
    second: '#3B82F6',
    bar: 95,
    tag: 'Data Scale',
    detail: '5,000+ B2B customer records across 6 quality categories',
  },
  {
    icon: <LayoutDashboard size={20} />,
    accent: '#F59E0B',
    second: '#F97316',
    bar: 88,
    tag: 'Power BI Reports',
    detail: 'DAX measures, Star Schema modeling & KPI storytelling',
  },
  {
    icon: <Trophy size={20} />,
    accent: '#8B5CF6',
    second: '#EC4899',
    bar: 90,
    tag: 'T-SQL Production',
    detail: 'CTEs, window functions, and pre/post load validation scripts',
  },
  {
    icon: <CheckCircle2 size={20} />,
    accent: '#10B981',
    second: '#14B8A6',
    bar: 98,
    tag: 'Quality Benchmark',
    detail: '300+ duplicates eliminated & DAMA-DMBOK metadata mapped',
  },
];

export default function Statistics() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="highlights" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,245,255,0.02) 50%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        className="absolute left-1/3 top-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04), transparent)' }}
      />

      <div className="section-container relative z-10">
        {/* Studio Editorial Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-[0.25em] mb-2 font-semibold">
              <Sparkles size={13} />
              <span>Section 02 // Proof of Work</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              verified <span className="text-gradient">impact.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 font-mono max-w-md">
            Measurable data outcomes achieved across internship, client projects, and published analytics repositories.
          </p>
        </div>

        {/* 4 Studio Metric Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {statistics.map((stat, i) => {
            const cfg = statConfig[i] || statConfig[0];
            const isHov = hovered === i;

            return (
              <motion.div
                key={i}
                variants={staggerItem}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden flex flex-col studio-card p-6 border transition-all duration-300"
                style={{
                  borderColor: isHov ? `${cfg.accent}50` : 'rgba(255,255,255,0.08)',
                  boxShadow: isHov
                    ? `0 0 35px ${cfg.accent}18, 0 20px 40px rgba(0,0,0,0.5)`
                    : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top Glowing Indicator */}
                <div
                  className="h-1 w-full absolute top-0 left-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.second})`,
                    opacity: isHov ? 1 : 0.4,
                  }}
                />

                {/* Top Row: Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                    style={{
                      background: `${cfg.accent}12`,
                      borderColor: `${cfg.accent}30`,
                      color: cfg.accent,
                      boxShadow: isHov ? `0 0 18px ${cfg.accent}30` : 'none',
                    }}
                  >
                    {cfg.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      background: `${cfg.accent}0e`,
                      borderColor: `${cfg.accent}25`,
                      color: `${cfg.accent}cc`,
                    }}
                  >
                    {cfg.tag}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div
                  className="font-heading font-black text-4xl sm:text-5xl mb-2 leading-none"
                  style={{
                    background: `linear-gradient(135deg, #ffffff 30%, ${cfg.accent} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-white/90 mb-2 leading-tight">
                  {stat.label}
                </div>

                {/* Detail Description */}
                <p className="text-xs text-white/45 font-mono mb-5 flex-1 leading-relaxed">
                  {cfg.detail}
                </p>

                {/* Mini Visual Progress Strip */}
                <div className="w-full pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1.5">
                    <span>Performance</span>
                    <span style={{ color: cfg.accent }}>{cfg.bar}%</span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.second})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cfg.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.1 }}
                    />
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
