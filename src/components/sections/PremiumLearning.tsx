import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Database, BarChart3, ShieldCheck, GitBranch } from 'lucide-react';

const learningPaths = [
  { title: 'SQL Server & Data Modeling', detail: 'Query optimization, relational design, CTEs and window functions.', Icon: Database },
  { title: 'Power BI & Advanced DAX', detail: 'Semantic models, careful KPI definitions and Power Query transformations.', Icon: BarChart3 },
  { title: 'Data Quality & Governance', detail: 'Metadata, lineage, completeness, stewardship and validation patterns.', Icon: ShieldCheck },
  { title: 'Reproducible Analytics', detail: 'Clear READMEs, project checks, versioned data workflows and testing.', Icon: GitBranch }
];

export default function PremiumLearning() {
  const reduceMotion = useReducedMotion() === true;
  return (
    <section id="learning" aria-labelledby="learning-title" className="scroll-mt-24 bg-[#0B1326] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 text-violet-300"><BookOpen aria-hidden="true" size={20}/><span className="text-xs font-bold uppercase tracking-[.18em]">Continued development</span></div>
        <h2 id="learning-title" className="mt-3 font-heading text-3xl font-bold text-slate-50 sm:text-4xl">Currently exploring</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">These are skills and topics I am developing through study and portfolio practice. They are not presented as certifications or awards.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {learningPaths.map(({ title, detail, Icon }, index) => (
            <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .45, delay: reduceMotion ? 0 : index * .08 }} className="rounded-2xl border border-slate-700 bg-[#101A2E] p-6">
              <Icon aria-hidden="true" className="text-cyan-300" size={25} />
              <h3 className="mt-4 text-lg font-semibold text-slate-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
