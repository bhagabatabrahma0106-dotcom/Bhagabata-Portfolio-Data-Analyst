import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ExternalLink,
  Database,
  TrendingUp,
  BarChart2,
  GitBranch,
  Shield,
  Layers,
  Star,
  Activity,
  PieChart as PieChartIcon,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  RefreshCw,
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';

/* ═══════════════════════════════════════════════════════════
   ANIMATED NUMBER COUNTER
═══════════════════════════════════════════════════════════ */
function CountUp({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(decimals)));
    }, 35);
    return () => clearInterval(timer);
  }, [inView, to, decimals]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════
   MINI POWER BI DASHBOARD — EdTech Project
═══════════════════════════════════════════════════════════ */
type DashTab = 'installs' | 'ratings' | 'clusters';

const EdTechDashboard = () => {
  const [activeTab, setActiveTab] = useState<DashTab>('installs');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [hoveredSeg, setHoveredSeg] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const installData = [
    { label: 'Duolingo',      installs: 500, rating: 4.7, color: '#00F5FF' },
    { label: "BYJU'S",        installs: 100, rating: 4.2, color: '#8B5CF6' },
    { label: 'Khan Academy',  installs:  10, rating: 4.6, color: '#10B981' },
    { label: 'Coursera',      installs:  50, rating: 4.1, color: '#F59E0B' },
    { label: 'Udemy',         installs: 200, rating: 4.4, color: '#EC4899' },
  ];
  const maxInstalls = Math.max(...installData.map(d => d.installs));

  const ratingData = [
    { label: 'Jan', value: 3.8 }, { label: 'Feb', value: 4.1 },
    { label: 'Mar', value: 4.3 }, { label: 'Apr', value: 4.0 },
    { label: 'May', value: 4.5 }, { label: 'Jun', value: 4.2 },
    { label: 'Jul', value: 4.7 },
  ];
  const maxRating = 5, minRating = 3.5;

  const clusterData = [
    { label: 'Top Tier',  pct: 29,  color: '#00F5FF', apps: 12, desc: 'High install & rating' },
    { label: 'Mid Tier',  pct: 45,  color: '#8B5CF6', apps: 19, desc: 'Average performance'  },
    { label: 'Low Tier',  pct: 26,  color: '#F59E0B', apps: 11, desc: 'Needs improvement'    },
  ];

  const tabs: { key: DashTab; label: string; icon: React.ReactNode }[] = [
    { key: 'installs', label: 'Installs',       icon: <TrendingUp size={10} />  },
    { key: 'ratings',  label: 'Rating Trend',   icon: <Activity size={10} />    },
    { key: 'clusters', label: 'K-Means',        icon: <PieChartIcon size={10} /> },
  ];

  /* Donut path helper */
  const buildDonut = (data: { pct: number }[]) => {
    const r = 15.9, cx = 18, cy = 18, circ = 2 * Math.PI * r;
    let offset = 0;
    return data.map((seg) => {
      const dash = (seg.pct / 100) * circ;
      const gap  = circ - dash;
      const el = { dash, gap, offset };
      offset += dash + 1.2;
      return el;
    });
  };
  const donutSegs = buildDonut(clusterData);

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-white/10 bg-[#070B14] select-none">

      {/* ── Window Chrome ── */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0C1020] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
          <span className="ml-2 text-[10px] font-mono text-white/25 tracking-wider">
            EdTech Analysis · Power BI Dashboard
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-green-400/70">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          LIVE
        </div>
      </div>

      {/* ── KPI Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04] border-b border-white/5">
        {[
          { label: 'Apps Analyzed', value: 42,  suffix: '',   dec: 0, delta: '↑ +12%',  color: '#00F5FF' },
          { label: 'Avg Rating',    value: 4.3, suffix: '★',  dec: 1, delta: '↑ +0.4',  color: '#8B5CF6' },
          { label: 'ML Accuracy',   value: 91,  suffix: '%',  dec: 0, delta: '↑ +3%',   color: '#10B981' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-[#070B14] px-3 py-2.5">
            <div className="text-[8.5px] font-mono text-white/25 uppercase tracking-wide mb-0.5">{kpi.label}</div>
            <div className="text-sm font-bold font-mono" style={{ color: kpi.color }}>
              {inView ? <CountUp to={kpi.value} suffix={kpi.suffix} decimals={kpi.dec} /> : '0'}
            </div>
            <div className="text-[8.5px] font-mono text-green-400/80">{kpi.delta}</div>
          </div>
        ))}
      </div>

      {/* ── Tab Bar ── */}
      <div className="flex items-center gap-1 px-3 pt-2.5 pb-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-mono transition-all duration-200 cursor-pointer"
            style={{
              background:  activeTab === t.key ? 'rgba(139,92,246,0.15)' : 'transparent',
              border:      activeTab === t.key ? '1px solid rgba(139,92,246,0.4)' : '1px solid transparent',
              color:       activeTab === t.key ? '#A78BFA' : 'rgba(255,255,255,0.3)',
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── Chart Area ── */}
      <div className="px-3 pb-3 pt-1 min-h-[110px]">
        <AnimatePresence mode="wait">

          {/* INSTALLS BAR CHART */}
          {activeTab === 'installs' && (
            <motion.div
              key="installs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2 pt-1"
            >
              <div className="text-[8.5px] font-mono text-white/20 uppercase tracking-widest mb-1">
                Installs (M) by App
              </div>
              {installData.map((d, i) => {
                const w = (d.installs / maxInstalls) * 100;
                return (
                  <div
                    key={d.label}
                    className="flex items-center gap-2 cursor-pointer group/bar"
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <span className="text-[9px] font-mono text-white/40 w-20 shrink-0 group-hover/bar:text-white/70 transition-colors">
                      {d.label}
                    </span>
                    <div className="flex-1 h-3.5 bg-white/[0.04] rounded-sm overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-sm"
                        style={{ background: `linear-gradient(90deg, ${d.color}cc, ${d.color}66)` }}
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${w}%` : '0%' }}
                        transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
                      />
                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredBar === i && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute right-1 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold z-10"
                            style={{ background: d.color, color: '#000' }}
                          >
                            {d.installs}M · ★{d.rating}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span
                      className="text-[9px] font-mono font-bold w-8 text-right"
                      style={{ color: d.color }}
                    >
                      {d.installs}M
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* RATINGS LINE CHART */}
          {activeTab === 'ratings' && (
            <motion.div
              key="ratings"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="pt-1"
            >
              <div className="text-[8.5px] font-mono text-white/20 uppercase tracking-widest mb-2">
                Average Rating Trend (Jan–Jul)
              </div>
              <div className="relative h-[80px]">
                <svg width="100%" height="100%" viewBox="0 0 260 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00F5FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0, 25, 50, 75].map((y) => (
                    <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  ))}
                  {/* Area fill */}
                  <motion.path
                    d={`M ${ratingData.map((d, i) => {
                      const x = (i / (ratingData.length - 1)) * 250 + 5;
                      const y = 75 - ((d.value - minRating) / (maxRating - minRating)) * 65;
                      return `${x},${y}`;
                    }).join(' L ')} L 255,75 L 5,75 Z`}
                    fill="url(#areaGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                  {/* Line */}
                  <motion.polyline
                    points={ratingData.map((d, i) => {
                      const x = (i / (ratingData.length - 1)) * 250 + 5;
                      const y = 75 - ((d.value - minRating) / (maxRating - minRating)) * 65;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: inView ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  {/* Data point dots */}
                  {ratingData.map((d, i) => {
                    const x = (i / (ratingData.length - 1)) * 250 + 5;
                    const y = 75 - ((d.value - minRating) / (maxRating - minRating)) * 65;
                    return (
                      <motion.circle
                        key={i} cx={x} cy={y} r="2.5"
                        fill="#8B5CF6" stroke="#070B14" strokeWidth="1"
                        initial={{ scale: 0 }}
                        animate={{ scale: inView ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
                      />
                    );
                  })}
                </svg>
                {/* X-axis labels */}
                <div className="flex justify-between mt-1 px-0.5">
                  {ratingData.map((d) => (
                    <span key={d.label} className="text-[8px] font-mono text-white/20">{d.label}</span>
                  ))}
                </div>
              </div>
              {/* Peak annotation */}
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-[8.5px] font-mono text-white/30">Peak: 4.7 in Jul · Avg: 4.2</span>
              </div>
            </motion.div>
          )}

          {/* K-MEANS DONUT */}
          {activeTab === 'clusters' && (
            <motion.div
              key="clusters"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="pt-1"
            >
              <div className="text-[8.5px] font-mono text-white/20 uppercase tracking-widest mb-2">
                K-Means Clustering · 42 Apps · 3 Segments
              </div>
              <div className="flex items-center gap-4">
                {/* Donut */}
                <div className="relative w-[72px] h-[72px] shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    {clusterData.map((seg, i) => (
                      <motion.circle
                        key={i}
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={hoveredSeg === i ? 4.5 : 3.5}
                        strokeDasharray={`${donutSegs[i].dash} ${donutSegs[i].gap}`}
                        strokeDashoffset={-donutSegs[i].offset}
                        strokeLinecap="butt"
                        style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
                        initial={{ strokeDasharray: `0 ${2 * Math.PI * 15.9}` }}
                        animate={{
                          strokeDasharray: inView
                            ? `${donutSegs[i].dash} ${donutSegs[i].gap}`
                            : `0 ${2 * Math.PI * 15.9}`,
                        }}
                        transition={{ duration: 0.8, delay: i * 0.25, ease: 'easeOut' }}
                        onMouseEnter={() => setHoveredSeg(i)}
                        onMouseLeave={() => setHoveredSeg(null)}
                      />
                    ))}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xs font-bold text-white">42</span>
                    <span className="text-[7px] font-mono text-white/30">apps</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex-1 space-y-1.5">
                  {clusterData.map((c, i) => (
                    <motion.div
                      key={c.label}
                      className="flex items-center justify-between cursor-pointer rounded px-1.5 py-1 transition-all duration-200"
                      style={{
                        background: hoveredSeg === i ? `${c.color}14` : 'transparent',
                        border: `1px solid ${hoveredSeg === i ? c.color + '30' : 'transparent'}`,
                      }}
                      onMouseEnter={() => setHoveredSeg(i)}
                      onMouseLeave={() => setHoveredSeg(null)}
                    >
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                        <div>
                          <div className="text-[9px] font-mono" style={{ color: c.color }}>{c.label}</div>
                          <div className="text-[7.5px] font-mono text-white/25">{c.desc}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-bold font-mono" style={{ color: c.color }}>{c.pct}%</div>
                        <div className="text-[7.5px] font-mono text-white/25">{c.apps} apps</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   DATA PIPELINE VISUAL — Data Management Project
═══════════════════════════════════════════════════════════ */
const PipelineVisual = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [flow, setFlow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setFlow(true), 400);
    }
  }, [inView]);

  const stages = [
    {
      icon: <Database size={14} />,
      label: 'Sources',
      sub: '8+ channels',
      color: '#00F5FF',
      detail: 'LinkedIn · Conferences · Vendor lists · 10K+ records',
    },
    {
      icon: <GitBranch size={14} />,
      label: 'ETL',
      sub: '50+ scripts',
      color: '#8B5CF6',
      detail: 'SQL Server ETL scripts for extraction, transform & load',
    },
    {
      icon: <Shield size={14} />,
      label: 'Governance',
      sub: 'Collibra',
      color: '#10B981',
      detail: 'Policy mgmt · Asset onboarding · Business glossary',
    },
    {
      icon: <Layers size={14} />,
      label: 'Master DB',
      sub: 'SQL Server',
      color: '#F59E0B',
      detail: 'Unified master dataset reducing 8+ source fragmentation',
    },
    {
      icon: <BarChart2 size={14} />,
      label: 'Dashboards',
      sub: '5+ Tableau',
      color: '#EC4899',
      detail: 'Tableau dashboards · Reduced reporting time by ~30%',
    },
  ];

  return (
    <div ref={ref} className="rounded-xl border border-white/10 bg-[#070B14] p-3.5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[8.5px] font-mono text-white/25 uppercase tracking-widest">
          End-to-End Data Pipeline
        </span>
        <div className="flex items-center gap-1 text-[8.5px] font-mono text-green-400/70">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
          ACTIVE
        </div>
      </div>

      {/* Stage Cards */}
      <div className="flex items-stretch gap-1">
        {stages.map((s, i) => (
          <React.Fragment key={s.label}>
            <motion.div
              className="flex-1 flex flex-col items-center gap-1.5 rounded-lg p-2 cursor-pointer transition-all duration-200"
              style={{
                background: activeStage === i ? `${s.color}18` : 'rgba(255,255,255,0.02)',
                border: `1px solid ${activeStage === i ? s.color + '40' : 'rgba(255,255,255,0.05)'}`,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActiveStage(i)}
              onMouseLeave={() => setActiveStage(null)}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}35` }}
              >
                <span style={{ color: s.color }}>{s.icon}</span>
              </div>
              <div className="text-[8px] font-bold font-mono text-white/60 text-center">{s.label}</div>
              <div className="text-[7px] font-mono text-center" style={{ color: s.color + 'cc' }}>{s.sub}</div>
            </motion.div>

            {/* Flow Arrow */}
            {i < stages.length - 1 && (
              <div className="flex flex-col items-center justify-center w-5 shrink-0 relative">
                <div className="w-full h-px bg-white/10" />
                {/* Animated particle */}
                {flow && (
                  <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{ background: stages[i].color }}
                    animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.4,
                      delay: i * 0.28,
                      ease: 'linear',
                    }}
                  />
                )}
                <ChevronRight size={8} className="text-white/20 absolute" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Detail Tooltip */}
      <AnimatePresence>
        {activeStage !== null && (
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2.5 px-2.5 py-1.5 rounded-lg overflow-hidden"
            style={{
              background: `${stages[activeStage].color}10`,
              border: `1px solid ${stages[activeStage].color}30`,
            }}
          >
            <div className="flex items-start gap-1.5">
              <Zap size={9} style={{ color: stages[activeStage].color }} className="shrink-0 mt-0.5" />
              <span className="text-[8.5px] font-mono" style={{ color: stages[activeStage].color + 'cc' }}>
                {stages[activeStage].detail}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact metrics */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-1.5">
        {[
          { label: 'Records',     value: 10000, suffix: '+', color: '#00F5FF' },
          { label: 'Quality ↑',   value: 25,    suffix: '%', color: '#10B981' },
          { label: 'Issues Fixed',value: 500,   suffix: '+', color: '#8B5CF6' },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg px-2 py-1.5 text-center"
            style={{ background: `${m.color}0a`, border: `1px solid ${m.color}20` }}
          >
            <div className="text-xs font-bold font-mono" style={{ color: m.color }}>
              {inView ? <CountUp to={m.value} suffix={m.suffix} /> : '0'}
            </div>
            <div className="text-[7.5px] font-mono text-white/30">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════════════════════════ */
interface ProjCardProps {
  title: string;
  description: string;
  period: string;
  source: string;
  tools: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  accent: string;
  second: string;
  icon: React.ReactNode;
  viz: React.ReactNode;
  tag: string;
}

const ProjectCard = ({ title, description, period, source, tools, featured, github, demo, accent, second, icon, viz, tag }: ProjCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      whileHover={{ y: -5 }}
      style={{
        background: 'rgba(7,11,20,0.9)',
        border: `1px solid ${hovered ? accent + '35' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered
          ? `0 0 0 1px ${accent}15, 0 20px 60px rgba(0,0,0,0.5), 0 0 80px ${accent}08`
          : '0 4px 30px rgba(0,0,0,0.4)',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Top gradient bar */}
      <motion.div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${accent}, ${second})` }}
        animate={{ opacity: hovered ? 1 : 0.35 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner glow */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${accent}0e, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <motion.div
              className="p-2.5 rounded-xl shrink-0"
              style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
              animate={{ boxShadow: hovered ? `0 0 16px ${accent}30` : 'none' }}
            >
              <span style={{ color: accent }}>{icon}</span>
            </motion.div>
            <div>
              <h3 className="font-heading font-bold text-white text-base leading-snug mb-1">{title}</h3>
              <div className="text-[11px] font-mono" style={{ color: accent + '90' }}>{source}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="text-[10px] font-mono text-white/20">{period}</span>
            {featured && (
              <div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                style={{ background: `${accent}14`, border: `1px solid ${accent}30`, color: accent }}
              >
                <Star size={8} fill="currentColor" /> Featured
              </div>
            )}
          </div>
        </div>

        {/* Description with expand */}
        <div className="mb-4">
          <p className={`text-sm text-white/50 leading-relaxed ${!expanded ? 'line-clamp-2' : ''}`}>
            {description}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-[10px] font-mono flex items-center gap-0.5 transition-colors hover:opacity-100 opacity-50"
            style={{ color: accent }}
          >
            {expanded ? 'Show less' : 'Read more'}
            <motion.span animate={{ rotate: expanded ? 90 : 0 }}>
              <ChevronRight size={10} />
            </motion.span>
          </button>
        </div>

        {/* Visualization */}
        <div className="mb-4">{viz}</div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tools.map((tool) => (
            <motion.span
              key={tool}
              className="px-2.5 py-1 rounded-lg text-[10px] font-semibold font-mono cursor-default"
              style={{ background: `${accent}0d`, border: `1px solid ${accent}22`, color: `${accent}bb` }}
              whileHover={{ scale: 1.06, background: `${accent}1a` }}
              transition={{ duration: 0.15 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-white/5">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-white/35 hover:text-white transition-colors group/gh"
              whileHover={{ x: 2 }}
            >
              <FiGithub size={13} />
              GitHub
              <ArrowUpRight size={10} className="opacity-0 group-hover/gh:opacity-100 transition-opacity" />
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-white/35 hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={13} /> Live Demo
            </motion.a>
          )}
          <div className="ml-auto">
            <span
              className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${accent}18, ${second}18)`,
                border: `1px solid ${accent}28`,
                color: accent,
              }}
            >
              <CheckCircle2 size={9} /> {tag}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════ */
export default function Projects() {
  const projects = [
    {
      title: 'Data Management & Governance Pipeline',
      description:
        'Designed an end-to-end data management pipeline, sourcing raw data from 8+ channels (LinkedIn, conferences, vendor lists) and consolidating into a structured master dataset via SQL Server. Implemented Data Governance workflows using Collibra — policy management, asset onboarding, business glossary creation, and data lineage mapping. Reduced reporting fragmentation across 8+ source categories and improved data quality by ~25%.',
      period: 'Oct 2024 – Feb 2025',
      source: 'Data Gyan, Bengaluru',
      tools: ['SQL Server', 'MS Excel', 'Tableau', 'Collibra', 'Google Sheets'],
      featured: true,
      accent: '#00F5FF',
      second: '#8B5CF6',
      icon: <Database size={16} />,
      viz: <PipelineVisual />,
      tag: 'Data Pipeline',
    },
    {
      title: 'EdTech App Market Analysis',
      description:
        'Analyzed EdTech mobile app market data (installs, ratings, reviews) for 42 apps through a full analytics pipeline covering data cleaning, EDA, SQL insights, and K-Means ML clustering. Segmented apps into 3 performance tiers — identifying top performers like Duolingo (500M installs, ★4.7) and BYJU\'S. Built an interactive Power BI dashboard visualizing installs, scores, content ratings, and release trends.',
      period: 'Ongoing',
      source: 'Personal Project',
      tools: ['Python', 'Pandas', 'NumPy', 'SQL Server', 'Power BI', 'K-Means'],
      featured: true,
      github: 'https://github.com/bhagabatabrahma0106-dotcom/EdTech-Analysis',
      accent: '#8B5CF6',
      second: '#EC4899',
      icon: <BarChart2 size={16} />,
      viz: <EdTechDashboard />,
      tag: 'ML + BI',
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-cyan-500/3 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/3 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle title="Key Projects" subtitle="Featured Work & Real-World Impact" />

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/bhagabatabrahma0106-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-semibold border border-white/10 text-white/50 glass transition-all duration-300"
            whileHover={{
              scale: 1.04,
              color: '#fff',
              borderColor: 'rgba(0,245,255,0.4)',
              boxShadow: '0 0 24px rgba(0,245,255,0.12)',
            }}
          >
            <FiGithub size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
