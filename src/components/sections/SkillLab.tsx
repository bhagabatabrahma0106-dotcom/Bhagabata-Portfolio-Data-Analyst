import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, FileSpreadsheet, BarChart2, Terminal,
  ChevronRight, Trophy, RotateCcw,
  CheckCircle2, XCircle, BookOpen, Gamepad2,
  Sparkles, Zap, Clock, Target,
  GraduationCap, Flame, Rocket,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import {
  QuizQuestion, NoteSection,
  sqlQuestions, excelQuestions, powerbiQuestions, pythonQuestions,
  sqlNotes, excelNotes, powerbiNotes, pythonNotes,
} from '../../constants/skillLabData';

/* ═══════════════════════════════════════════════════════════
   TYPES & CONFIG
═══════════════════════════════════════════════════════════ */
type Difficulty = 'beginner' | 'intermediate' | 'advanced';

interface ToolConfig {
  key: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  second: string;
  questions: QuizQuestion[];
  notes: NoteSection[];
}

const DIFFICULTIES: { key: Difficulty; label: string; icon: React.ReactNode; color: string }[] = [
  { key: 'beginner', label: 'Beginner', icon: <GraduationCap size={12} />, color: '#10B981' },
  { key: 'intermediate', label: 'Intermediate', icon: <Flame size={12} />, color: '#F59E0B' },
  { key: 'advanced', label: 'Advanced', icon: <Rocket size={12} />, color: '#EF4444' },
];

const toolConfigs: ToolConfig[] = [
  { key: 'sql', label: 'SQL', icon: <Database size={16} />, accent: '#00F5FF', second: '#3B82F6', questions: sqlQuestions, notes: sqlNotes },
  { key: 'excel', label: 'Excel', icon: <FileSpreadsheet size={16} />, accent: '#10B981', second: '#14B8A6', questions: excelQuestions, notes: excelNotes },
  { key: 'powerbi', label: 'Power BI', icon: <BarChart2 size={16} />, accent: '#F59E0B', second: '#F97316', questions: powerbiQuestions, notes: powerbiNotes },
  { key: 'python', label: 'Python', icon: <Terminal size={16} />, accent: '#8B5CF6', second: '#EC4899', questions: pythonQuestions, notes: pythonNotes },
];

/* ═══════════════════════════════════════════════════════════
   QUIZ GAME COMPONENT
═══════════════════════════════════════════════════════════ */
function QuizGame({ config, difficulty }: { config: ToolConfig; difficulty: Difficulty }) {
  const questions = config.questions.filter((q) => q.difficulty === difficulty);
  const total = questions.length;

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExpl, setShowExpl] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [finished, setFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(difficulty === 'advanced' ? 20 : difficulty === 'intermediate' ? 25 : 30);
  const [timerActive, setTimerActive] = useState(true);
  const [bestScore, setBestScore] = useState(0);

  const q = questions[qIndex];
  const timeLimit = difficulty === 'advanced' ? 20 : difficulty === 'intermediate' ? 25 : 30;

  // Timer countdown
  useEffect(() => {
    if (!timerActive || finished || !q) return;
    if (timer <= 0) {
      handleSelect(-1);
      return;
    }
    const t = setTimeout(() => setTimer((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, timerActive, finished, q]);

  // Reset on tool/difficulty switch
  useEffect(() => {
    setQIndex(0); setSelected(null); setShowExpl(false);
    setScore(0); setAnswered(0); setFinished(false);
    setStreak(0); setTimer(timeLimit); setTimerActive(true);
  }, [config.key, difficulty]);

  const handleSelect = useCallback((idx: number) => {
    if (selected !== null || !q) return;
    setSelected(idx);
    setShowExpl(true);
    setTimerActive(false);
    setAnswered((p) => p + 1);
    if (idx === q.answer) {
      setScore((p) => p + 1);
      setStreak((p) => p + 1);
    } else {
      setStreak(0);
    }
  }, [selected, q]);

  const handleNext = () => {
    if (qIndex + 1 >= total) {
      setFinished(true);
      if (score + (selected === q?.answer ? 0 : 0) > bestScore) {
        setBestScore(score);
      }
    } else {
      setQIndex((p) => p + 1);
      setSelected(null);
      setShowExpl(false);
      setTimer(timeLimit);
      setTimerActive(true);
    }
  };

  const handleRestart = () => {
    setQIndex(0); setSelected(null); setShowExpl(false);
    setScore(0); setAnswered(0); setFinished(false);
    setStreak(0); setTimer(timeLimit); setTimerActive(true);
  };

  if (!q || total === 0) {
    return <div className="text-center text-white/40 py-10 font-mono text-sm">No questions available for this level.</div>;
  }

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  /* ── Finished Screen ── */
  if (finished) {
    const grade = pct >= 90 ? 'S' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D';
    const gradeColor = pct >= 75 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';
    const diffLabel = DIFFICULTIES.find((d) => d.key === difficulty)?.label || '';

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-8 text-center gap-4">
        <motion.div className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: `${gradeColor}18`, border: `1px solid ${gradeColor}40` }}
          initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ type: 'spring' }}>
          <Trophy size={36} style={{ color: gradeColor }} />
        </motion.div>
        <div>
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">
            {config.label} · {diffLabel} · Final Score
          </div>
          <div className="text-5xl font-heading font-black mb-1" style={{ color: gradeColor }}>
            {score}/{total}
          </div>
          <div className="text-sm text-white/40">
            {pct}% Accuracy · Grade <span className="font-bold" style={{ color: gradeColor }}>{grade}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-1 flex-wrap justify-center">
          {[
            { label: 'Correct', value: score, color: '#10B981' },
            { label: 'Wrong', value: total - score, color: '#EF4444' },
            { label: 'Accuracy', value: `${pct}%`, color: config.accent },
          ].map((s) => (
            <div key={s.label} className="px-3 py-2 rounded-lg text-center"
              style={{ background: `${s.color}10`, border: `1px solid ${s.color}25` }}>
              <div className="text-sm font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[8px] font-mono text-white/30">{s.label}</div>
            </div>
          ))}
        </div>
        <motion.button onClick={handleRestart}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold mt-2 cursor-pointer"
          style={{ background: `${config.accent}18`, border: `1px solid ${config.accent}35`, color: config.accent }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <RotateCcw size={13} /> Play Again
        </motion.button>
      </motion.div>
    );
  }

  /* ── Active Question ── */
  const timerPct = (timer / timeLimit) * 100;

  return (
    <div>
      {/* Progress + Stats */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-white/30">Q{qIndex + 1}/{total}</span>
          <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${config.accent}, ${config.second})` }}
              animate={{ width: `${((qIndex + 1) / total) * 100}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {streak >= 2 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="flex items-center gap-1 text-[10px] font-mono font-bold" style={{ color: '#F59E0B' }}>
              <Zap size={10} /> {streak}x
            </motion.div>
          )}
          {/* Timer bar */}
          <div className="flex items-center gap-1.5">
            <Clock size={10} style={{ color: timer <= 10 ? '#EF4444' : 'rgba(255,255,255,0.3)' }} />
            <div className="w-12 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div className="h-full rounded-full"
                style={{ background: timer <= 10 ? '#EF4444' : timer <= 15 ? '#F59E0B' : config.accent }}
                animate={{ width: `${timerPct}%` }} transition={{ duration: 0.3 }} />
            </div>
            <span className="text-[10px] font-mono" style={{ color: timer <= 10 ? '#EF4444' : 'rgba(255,255,255,0.3)' }}>
              {timer}s
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-white/30">
            <Target size={10} /> {score}
          </div>
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={`${config.key}-${difficulty}-${q.id}`}
          initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.25 }}>

          <h4 className="text-sm font-semibold text-white/90 mb-3 leading-relaxed">{q.question}</h4>

          {q.code && (
            <div className="rounded-lg px-3.5 py-2.5 mb-4 text-[11px] font-mono leading-relaxed overflow-x-auto"
              style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <pre className="whitespace-pre-wrap" style={{ color: config.accent + 'dd' }}>{q.code}</pre>
            </div>
          )}

          {/* Options */}
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = i === q.answer;
              const isRevealed = selected !== null;
              let bg = 'rgba(255,255,255,0.03)';
              let border = 'rgba(255,255,255,0.06)';
              let textColor = 'rgba(255,255,255,0.7)';
              if (isRevealed) {
                if (isCorrect) { bg = 'rgba(16,185,129,0.12)'; border = 'rgba(16,185,129,0.4)'; textColor = '#10B981'; }
                else if (isSelected) { bg = 'rgba(239,68,68,0.1)'; border = 'rgba(239,68,68,0.35)'; textColor = '#EF4444'; }
                else { textColor = 'rgba(255,255,255,0.3)'; }
              }
              return (
                <motion.button key={i} onClick={() => handleSelect(i)} disabled={isRevealed}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-mono transition-all duration-200 cursor-pointer disabled:cursor-default"
                  style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
                  whileHover={!isRevealed ? { background: `${config.accent}12`, borderColor: `${config.accent}40` } : {}}
                  whileTap={!isRevealed ? { scale: 0.98 } : {}}>
                  <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-[10px] font-bold"
                    style={{
                      background: isRevealed && isCorrect ? '#10B98130' : `${config.accent}15`,
                      border: `1px solid ${isRevealed && isCorrect ? '#10B98150' : config.accent + '30'}`,
                      color: isRevealed && isCorrect ? '#10B981' : config.accent,
                    }}>
                    {isRevealed ? (isCorrect ? <CheckCircle2 size={11} /> : (isSelected ? <XCircle size={11} /> : String.fromCharCode(65 + i))) : String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExpl && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                className="mt-3 rounded-lg px-3.5 py-2.5 overflow-hidden"
                style={{
                  background: selected === q.answer ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
                  border: `1px solid ${selected === q.answer ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
                }}>
                <div className="flex items-start gap-2">
                  <Sparkles size={12} className="shrink-0 mt-0.5" style={{ color: selected === q.answer ? '#10B981' : '#EF4444' }} />
                  <p className="text-[11px] font-mono text-white/50 leading-relaxed">{q.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next */}
          {selected !== null && (
            <motion.button initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold ml-auto cursor-pointer"
              style={{ background: `${config.accent}1a`, border: `1px solid ${config.accent}35`, color: config.accent }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              {qIndex + 1 >= total ? 'See Results' : 'Next Question'} <ChevronRight size={12} />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NOTES ACCORDION
═══════════════════════════════════════════════════════════ */
function NotesAccordion({ sections, accent }: { sections: NoteSection[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {sections.map((sec, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="rounded-xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <button onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-2.5 px-4 py-3 text-left cursor-pointer transition-colors"
              style={{ color: isOpen ? accent : 'rgba(255,255,255,0.6)' }}>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronRight size={13} />
              </motion.div>
              <BookOpen size={13} style={{ color: accent + (isOpen ? 'cc' : '60') }} />
              <span className="text-xs font-mono font-semibold flex-1">{sec.title}</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full"
                style={{ background: `${accent}10`, color: accent + '80' }}>
                {sec.content.length} points
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                  <div className="px-4 pb-3.5 space-y-1.5 border-t border-white/5 pt-3">
                    {sec.content.map((line, j) => (
                      <motion.div key={j} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.04 }}
                        className="text-[11px] font-mono text-white/45 leading-relaxed pl-1">{line}</motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════ */
export default function SkillLab() {
  const [activeTool, setActiveTool] = useState(0);
  const [mode, setMode] = useState<'game' | 'notes'>('game');
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const cfg = toolConfigs[activeTool];

  const qByDiff = cfg.questions.filter((q) => q.difficulty === difficulty);

  return (
    <section id="skilllab" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cfg.accent}06, transparent)` }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cfg.second}06, transparent)` }} />

      <div className="section-container relative z-10">
        <SectionTitle title="Skill Lab" subtitle="Learn by Playing · 400 Interactive Challenges & Study Notes" />

        {/* Tool Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-10 glass p-2 rounded-2xl border border-white/8 shadow-xl max-w-xl mx-auto">
          {toolConfigs.map((t, i) => (
            <motion.button key={t.key}
              onClick={() => { setActiveTool(i); setMode('game'); setDifficulty('beginner'); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer"
              style={{
                background: activeTool === i ? `${t.accent}20` : 'transparent',
                border: `1px solid ${activeTool === i ? t.accent + '40' : 'transparent'}`,
                color: activeTool === i ? t.accent : 'rgba(255,255,255,0.4)',
                boxShadow: activeTool === i ? `0 0 16px ${t.accent}18` : 'none',
              }}
              whileHover={{ color: '#fff' }} whileTap={{ scale: 0.96 }}>
              {t.icon} {t.label}
              <span className="text-[8px] text-white/20 ml-0.5">{t.questions.length}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={cfg.key}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="mt-8 max-w-4xl mx-auto">

            {/* Header */}
            <div className="rounded-2xl overflow-hidden mb-6"
              style={{ background: 'rgba(7,11,20,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.second})` }} />

              <div className="p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl"
                      style={{ background: `${cfg.accent}14`, border: `1px solid ${cfg.accent}28` }}>
                      <span style={{ color: cfg.accent }}>{cfg.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">{cfg.label} Learning Lab</h3>
                      <div className="text-[10px] font-mono text-white/30">
                        {cfg.questions.length} total challenges · {cfg.notes.length} note sections
                      </div>
                    </div>
                  </div>

                  {/* Mode Toggle */}
                  <div className="flex items-center gap-1 p-1 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {[
                      { key: 'game' as const, label: 'Quiz Game', icon: <Gamepad2 size={12} /> },
                      { key: 'notes' as const, label: 'Study Notes', icon: <BookOpen size={12} /> },
                    ].map((m) => (
                      <button key={m.key} onClick={() => setMode(m.key)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-semibold transition-all duration-200 cursor-pointer"
                        style={{
                          background: mode === m.key ? `${cfg.accent}1a` : 'transparent',
                          color: mode === m.key ? cfg.accent : 'rgba(255,255,255,0.35)',
                          border: `1px solid ${mode === m.key ? cfg.accent + '35' : 'transparent'}`,
                        }}>
                        {m.icon} {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Tabs — only in game mode */}
                {mode === 'game' && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {DIFFICULTIES.map((d) => {
                      const count = cfg.questions.filter((q) => q.difficulty === d.key).length;
                      const isActive = difficulty === d.key;
                      return (
                        <motion.button key={d.key}
                          onClick={() => setDifficulty(d.key)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-semibold transition-all duration-200 cursor-pointer"
                          style={{
                            background: isActive ? `${d.color}1a` : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isActive ? d.color + '40' : 'rgba(255,255,255,0.06)'}`,
                            color: isActive ? d.color : 'rgba(255,255,255,0.35)',
                            boxShadow: isActive ? `0 0 12px ${d.color}15` : 'none',
                          }}
                          whileHover={{ borderColor: d.color + '50' }}
                          whileTap={{ scale: 0.96 }}>
                          {d.icon} {d.label}
                          <span className="text-[8px] opacity-60">{count}Q</span>
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Game / Notes Panel */}
            <div className="rounded-2xl p-6"
              style={{ background: 'rgba(7,11,20,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <AnimatePresence mode="wait">
                {mode === 'game' ? (
                  <motion.div key={`game-${difficulty}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <QuizGame config={cfg} difficulty={difficulty} />
                  </motion.div>
                ) : (
                  <motion.div key="notes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="mb-4 flex items-center gap-2">
                      <BookOpen size={14} style={{ color: cfg.accent }} />
                      <span className="text-xs font-mono font-bold text-white/50">{cfg.label} Reference Notes</span>
                    </div>
                    <NotesAccordion sections={cfg.notes} accent={cfg.accent} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
