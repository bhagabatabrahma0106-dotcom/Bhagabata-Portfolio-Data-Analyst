import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { statistics } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { Trophy, Package, LayoutDashboard, CheckCircle2 } from 'lucide-react';

/* ── Animated counter ─────────────────────────────────── */
function CountUp({ to, suffix = '' }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
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

/* ── Per-stat config ──────────────────────────────────── */
const statConfig = [
  {
    icon: <Trophy size={22} />,
    accent: '#00F5FF',
    second: '#3B82F6',
    bar: 85,
    tag: 'Experience',
  },
  {
    icon: <Package size={22} />,
    accent: '#F59E0B',
    second: '#F97316',
    bar: 92,
    tag: 'Data Scale',
  },
  {
    icon: <LayoutDashboard size={22} />,
    accent: '#8B5CF6',
    second: '#EC4899',
    bar: 78,
    tag: 'Visualization',
  },
  {
    icon: <CheckCircle2 size={22} />,
    accent: '#10B981',
    second: '#14B8A6',
    bar: 96,
    tag: 'Data Quality',
  },
];

export default function Statistics() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background strip */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,245,255,0.03) 50%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06), transparent)' }}
      />
      {/* Right glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent)' }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
                className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
                style={{
                  background: 'rgba(7,11,20,0.9)',
                  border: `1px solid ${isHov ? cfg.accent + '38' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: isHov
                    ? `0 0 40px ${cfg.accent}14, 0 20px 50px rgba(0,0,0,0.5)`
                    : '0 4px 24px rgba(0,0,0,0.35)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Top gradient bar */}
                <motion.div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.second})` }}
                  animate={{ opacity: isHov ? 1 : 0.3 }}
                />

                {/* Corner glow */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${cfg.accent}10, transparent 70%)`,
                  }}
                  animate={{ opacity: isHov ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-6 flex flex-col items-center text-center relative">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${cfg.accent}14`,
                      border: `1px solid ${cfg.accent}28`,
                    }}
                    animate={{
                      boxShadow: isHov ? `0 0 20px ${cfg.accent}30` : 'none',
                    }}
                  >
                    <span style={{ color: cfg.accent }}>{cfg.icon}</span>
                  </motion.div>

                  {/* Big number */}
                  <div
                    className="font-heading font-black text-4xl md:text-5xl mb-1 leading-none"
                    style={{
                      background: `linear-gradient(135deg, ${cfg.accent} 0%, ${cfg.second} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-xs text-white/40 font-mono mb-4">{stat.label}</div>

                  {/* Progress bar */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[9px] font-mono uppercase tracking-widest"
                        style={{ color: cfg.accent + '70' }}
                      >
                        {cfg.tag}
                      </span>
                      <span
                        className="text-[9px] font-mono font-bold"
                        style={{ color: cfg.accent + 'aa' }}
                      >
                        {cfg.bar}%
                      </span>
                    </div>
                    <div
                      className="w-full h-1 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
