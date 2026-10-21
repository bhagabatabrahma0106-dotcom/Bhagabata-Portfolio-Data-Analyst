import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../constants/data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import SectionTitle from '../ui/SectionTitle';
import {
  Database,
  Terminal,
  ShieldCheck,
  BarChart3,
  Cpu,
  Search,
  Grid,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

// Enhanced category icon map
const categoryIconMap: Record<string, React.ReactNode> = {
  'SQL & Databases': <Database className="text-cyan-400" size={22} />,
  'Python & Analytics': <Terminal className="text-purple-400" size={22} />,
  'Data Governance & ERP': <ShieldCheck className="text-emerald-400" size={22} />,
  'BI & Reporting': <BarChart3 className="text-amber-400" size={22} />,
  'Concepts & Practices': <Cpu className="text-pink-400" size={22} />,
};

// Category theme colors
const categoryThemeMap: Record<string, {
  border: string;
  glow: string;
  badge: string;
  gradient: string;
  textColor: string;
}> = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    glow: 'hover:shadow-[0_0_25px_rgba(0,245,255,0.25)]',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    gradient: 'linear-gradient(90deg, #00F5FF 0%, #3B82F6 100%)',
    textColor: '#00F5FF',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-400/60',
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    gradient: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)',
    textColor: '#A78BFA',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    glow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    gradient: 'linear-gradient(90deg, #10B981 0%, #14B8A6 100%)',
    textColor: '#34D399',
  },
  orange: {
    border: 'border-amber-500/30 hover:border-amber-400/60',
    glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    gradient: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)',
    textColor: '#FBBF24',
  },
      pink: {
      border: 'border-pink-500/30 hover:border-pink-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]',
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      gradient: 'linear-gradient(90deg, #EC4899 0%, #F43F5E 100%)',
      textColor: '#F472B6',
    },
    indigo: {
      border: 'border-indigo-500/30 hover:border-indigo-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
      badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      gradient: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
      textColor: '#818CF8',
    },
};

// Individual skill proficiency ratings for detailed visual matrix
const skillProficiencyMap: Record<string, { level: number; label: string }> = {
  'SQL Server': { level: 95, label: 'Advanced' },
  'DDL / DML': { level: 92, label: 'Advanced' },
  'Joins & Subqueries': { level: 95, label: 'Advanced' },
  'Aggregations': { level: 90, label: 'Advanced' },
  'Data Validation': { level: 88, label: 'Proficient' },
  'ETL Scripting': { level: 85, label: 'Proficient' },
  'Query Profiling': { level: 82, label: 'Proficient' },
  'Python': { level: 88, label: 'Advanced' },
  'Pandas': { level: 90, label: 'Advanced' },
  'NumPy': { level: 85, label: 'Proficient' },
  'Data Cleaning': { level: 92, label: 'Advanced' },
  'Exploratory Analysis': { level: 85, label: 'Proficient' },
  'Statistical Analysis': { level: 80, label: 'Proficient' },
  'K-Means Clustering': { level: 80, label: 'Intermediate' },
  'Collibra': { level: 88, label: 'Advanced' },
  'Metadata Management': { level: 85, label: 'Advanced' },
  'Business Glossary': { level: 90, label: 'Advanced' },
  'Data Lineage': { level: 85, label: 'Proficient' },
  'Data Quality': { level: 92, label: 'Advanced' },
  'Microsoft Dynamics 365 F&O': { level: 85, label: 'Advanced' },
  'SSRS': { level: 82, label: 'Proficient' },
  'X++ (Basic)': { level: 75, label: 'Intermediate' },
  'Tableau': { level: 88, label: 'Advanced' },
  'Power BI': { level: 90, label: 'Advanced' },
  'MS Excel (VLOOKUP, Pivot)': { level: 95, label: 'Expert' },
  'Google Sheets': { level: 90, label: 'Advanced' },
  'PowerPoint': { level: 88, label: 'Advanced' },
  'DAX (Basic)': { level: 78, label: 'Intermediate' },
  'Report Design': { level: 85, label: 'Proficient' },
  'ETL Pipelines': { level: 88, label: 'Advanced' },
  'Data Warehousing': { level: 85, label: 'Proficient' },
  'Data Quality Management': { level: 90, label: 'Advanced' },
  'Business Requirements': { level: 90, label: 'Advanced' },
  'Root Cause Analysis': { level: 88, label: 'Advanced' },
  'Git / GitHub': { level: 85, label: 'Proficient' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  // Filter skills based on tab & search
  const filteredCategories = skillCategories.filter((cat) => {
    const matchesCategory = activeCategory === 'All' || cat.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle title="Technical Skills" subtitle="Interactive Skillset & Proficiency Matrix" />

        {/* Controls Toolbar — Category Filter Tabs & Action Bar */}
        <div className="mt-10 space-y-4">
          {/* Top Row: Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 glass p-2.5 rounded-2xl border border-white/10 shadow-xl">
            {['All', ...skillCategories.map((c) => c.category)].map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === catName
                    ? 'bg-primary text-dark font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)] scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search Bar & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/70" size={15} />
              <input
                type="text"
                placeholder="Search skills (e.g., SQL, Power BI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl glass border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 glass p-1 rounded-xl border border-white/10 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'cards'
                    ? 'bg-primary text-dark font-bold shadow-[0_0_12px_rgba(0,245,255,0.3)]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Grid size={14} /> Cards View
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'matrix'
                    ? 'bg-primary text-dark font-bold shadow-[0_0_12px_rgba(0,245,255,0.3)]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <SlidersHorizontal size={14} /> Matrix View
              </button>
            </div>
          </div>
        </div>

        {/* Content Views */}
        <AnimatePresence mode="wait">
          {viewMode === 'cards' ? (
            /* Cards View */
            <motion.div
              key="cards-view"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredCategories.map((cat) => {
                const theme = categoryThemeMap[cat.color] || categoryThemeMap.cyan;
                const itemsToDisplay = searchQuery
                  ? cat.items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
                  : cat.items;

                return (
                  <motion.div
                    key={cat.category}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    className={`glass rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden group ${theme.border} ${theme.glow}`}
                  >
                    {/* Top gradient glow bar */}
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: theme.gradient }} />

                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl glass border border-white/10 shadow-md">
                          {categoryIconMap[cat.category] || cat.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-white text-base leading-tight">
                            {cat.category}
                          </h3>
                          <div className="text-[11px] font-mono text-white/40 mt-0.5">
                            {cat.items.length} Core Skills
                          </div>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${theme.badge}`}>
                        Active
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {itemsToDisplay.map((skill) => {
                        const prof = skillProficiencyMap[skill];
                        return (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 border ${theme.badge} hover:shadow-md cursor-default`}
                          >
                            <CheckCircle2 size={12} className="opacity-70" />
                            <span>{skill}</span>
                            {prof && (
                              <span className="text-[10px] font-mono opacity-60 ml-0.5">
                                • {prof.level}%
                              </span>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Detailed Matrix View */
            <motion.div
              key="matrix-view"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {filteredCategories.map((cat) => {
                const theme = categoryThemeMap[cat.color] || categoryThemeMap.cyan;
                return (
                  <div
                    key={cat.category}
                    className={`glass rounded-2xl p-6 border ${theme.border} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="p-2 rounded-xl glass border border-white/10" style={{ color: theme.textColor }}>
                        {categoryIconMap[cat.category] || cat.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-white text-lg">{cat.category}</h3>
                        <div className="text-xs font-mono text-white/50">Proficiency Breakdown</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {cat.items.map((skill) => {
                        const prof = skillProficiencyMap[skill] || { level: 85, label: 'Proficient' };
                        return (
                          <div key={skill} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-white/90 font-medium flex items-center gap-1.5">
                                <Sparkles size={11} style={{ color: theme.textColor }} />
                                {skill}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-white/40 px-2 py-0.5 rounded bg-white/5">
                                  {prof.label}
                                </span>
                                <span className="font-bold" style={{ color: theme.textColor }}>
                                  {prof.level}%
                                </span>
                              </div>
                            </div>
                            {/* Animated Skill Bar */}
                            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ background: theme.gradient }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${prof.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


