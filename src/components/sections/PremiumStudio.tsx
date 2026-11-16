import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, BarChart3, Database, ShieldCheck, Layers3, Target, Mail, BookOpen, GitBranch } from 'lucide-react';

type ShowcaseProject = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  repo: string;
  docs: string;
  accent: string;
};

const projects: ShowcaseProject[] = [
  {
    title: 'UrbanCart', category: 'Retail Analytics',
    description: 'Synthetic retail data, SQL reporting views, customer analysis and Power BI reporting. Data-quality limitations documented.',
    tools: ['Excel', 'SQL Server', 'Power BI'],
    image: '/portfolio-assets/urbancart-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/UrbanCartAnalysis',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/UrbanCartAnalysis/blob/main/docs/SETUP.md',
    accent: '#A78BFA'
  },
  {
    title: 'Pizza Sales', category: 'Sales Performance',
    description: 'Order patterns, category mix and product performance, using T-SQL queries and a Power BI report package.',
    tools: ['T-SQL', 'Power BI'],
    image: '/portfolio-assets/pizza-sales-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/Pizza_Sales_Analysis',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/Pizza_Sales_Analysis/blob/main/docs/REPRODUCTION.md',
    accent: '#F59E0B'
  },
  {
    title: 'EdTech App', category: 'Market Analysis',
    description: 'Historical app sample: ratings, installs, Python exploration, SQL insights and descriptive K-Means clustering.',
    tools: ['Python', 'pandas', 'SQL', 'Power BI'],
    image: '/portfolio-assets/edtech-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/EdTech-Analysis',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/EdTech-Analysis/blob/main/docs/REPRODUCTION.md',
    accent: '#5EEAD4'
  },
  {
    title: 'SuperStore', category: 'Data Management',
    description: 'Data preparation and modeling with Python, SQL Server and Excel; repository includes a dashboard image and demo video.',
    tools: ['Python', 'SQL Server', 'Excel'],
    image: '/portfolio-assets/superstore-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/End-To-End-Data-Management',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/End-To-End-Data-Management/blob/main/docs/REPRODUCTION.md',
    accent: '#60A5FA'
  },
  {
    title: 'Banking Transactions', category: 'Transaction Analysis',
    description: 'Sample transaction trends, digital channels and exploratory risk indicators; not a deployed fraud detection system.',
    tools: ['Python', 'Excel', 'SQL Server'],
    image: '/portfolio-assets/banking-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/Python-Data_Anlysis',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/Python-Data_Anlysis/blob/main/docs/REPRODUCTION.md',
    accent: '#C4B5FD'
  },
  {
    title: 'Dynamics 365 F&O', category: 'ERP & Reporting Samples',
    description: 'X++ export artifacts and functional-design samples. Compilation, reports and deployment require a compatible sandbox.',
    tools: ['D365 F&O', 'X++', 'SSRS'],
    image: '/portfolio-assets/dynamics-365-fo-premium.svg',
    repo: 'https://github.com/bhagabatabrahma0106-dotcom/ERP-Reporting-Data-Analysis-using-Microsoft-Dynamics-365-F-O',
    docs: 'https://github.com/bhagabatabrahma0106-dotcom/ERP-Reporting-Data-Analysis-using-Microsoft-Dynamics-365-F-O/blob/main/docs/SETUP_AND_REVIEW.md',
    accent: '#93C5FD'
  }
];

const workflow = [
  { name: 'Collect', detail: 'Identify source files, tables, business questions and data ownership.', icon: Database },
  { name: 'Clean', detail: 'Profile duplicates, blanks, invalid fields and unexpected records.', icon: ShieldCheck },
  { name: 'Model', detail: 'Define grain, relationships, transformations and reproducible metrics.', icon: Layers3 },
  { name: 'Visualize', detail: 'Create readable KPI dashboards and check them against source totals.', icon: BarChart3 },
  { name: 'Decide', detail: 'Explain insights, uncertainty and practical next actions.', icon: Target }
];

const topics = ['SQL Server', 'T-SQL', 'Power BI', 'DAX', 'Power Query', 'Excel', 'Python', 'pandas', 'Data Quality', 'Data Governance', 'D365 F&O', 'X++'];

export default function PremiumStudio() {
  const reducedMotion = useReducedMotion() === true;
  const [activeStage, setActiveStage] = useState(0);
  const show = reducedMotion ? false : { opacity: 0, y: 16 };
  const visible = { opacity: 1, y: 0 };

  return (
    <>
      <section id="home" aria-labelledby="premium-name" className="relative isolate overflow-hidden bg-[#080E1C] px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 80% 25%, rgba(124,58,237,.16), transparent 36%), radial-gradient(circle at 30% 100%, rgba(34,211,238,.08), transparent 40%)' }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <motion.div initial={show} whileInView={visible} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : .65 }}>
            <p className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[.15em] text-violet-200 sm:text-sm">BRAHMA-ANALYTICS · DATA PORTFOLIO</p>
            <h1 id="premium-name" className="max-w-2xl break-words font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">Bhagabata <span className="text-[#C4B5FD]">Brahma</span></h1>
            <p className="mt-5 text-lg font-semibold text-white sm:text-xl">Data Analyst <span aria-hidden="true" className="text-violet-400">/</span> Power BI Developer</p>
            <p className="mt-2 text-base font-medium text-cyan-200">Data Quality &amp; Governance</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">Turning complex data into clear, dependable reporting through SQL Server, Power BI, Excel, Python and documented quality checks.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">Explore projects <ArrowDown size={17}/></a>
              <a href="https://github.com/bhagabatabrahma0106-dotcom" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-900 px-5 py-3 font-semibold text-slate-100 hover:border-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">GitHub profile <ArrowUpRight size={17}/></a>
            </div>
          </motion.div>

          <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : .75 }} aria-label="Illustrative analytics dashboard with bars and trend line; not live business data" role="img" className="relative min-w-0 rounded-3xl border border-indigo-400/35 bg-[#101A2E] p-5 shadow-[0_28px_90px_rgba(41,30,104,.28)] sm:p-7">
            <div className="flex items-center justify-between gap-3 border-b border-slate-700/70 pb-4">
              <span className="text-sm font-semibold text-slate-100">Analytics workspace</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Illustrative</span>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-700/60 bg-[#080E1C] p-4"><Database className="mb-3 text-violet-300" size={24} aria-hidden="true" /><div className="h-2 w-3/4 rounded-full bg-slate-700" /><div className="mt-3 h-2 w-1/2 rounded-full bg-violet-500/50" /></div>
              <div className="rounded-xl border border-slate-700/60 bg-[#080E1C] p-4"><ShieldCheck className="mb-3 text-teal-300" size={24} aria-hidden="true" /><div className="h-2 w-4/5 rounded-full bg-slate-700" /><div className="mt-3 h-2 w-2/3 rounded-full bg-teal-500/50" /></div>
            </div>
            <div className="mt-4 rounded-xl border border-slate-700/60 bg-[#080E1C] px-5 pb-5 pt-4">
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">Conceptual dashboard</div>
              <div className="flex h-36 items-end justify-between gap-2 border-b border-slate-600/70 pb-1">
                {[31,56,40,71,58,82,66,95].map((value, i) => (
                  <motion.span key={i} aria-hidden="true" className="min-w-0 flex-1 rounded-t bg-gradient-to-t from-indigo-700 to-cyan-400" style={reducedMotion ? { height: `${value}%` } : undefined} initial={reducedMotion ? false : { height: 0 }} whileInView={reducedMotion ? undefined : { height: `${value}%` }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : .75, delay: reducedMotion ? 0 : i * .08 }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="highlights" aria-labelledby="studio-workflow-title" className="relative scroll-mt-24 bg-[#0B1326] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={show} whileInView={visible} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : .55 }}>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">How I approach data</p>
            <h2 id="studio-workflow-title" className="mt-2 font-heading text-3xl font-bold text-slate-50 sm:text-4xl">A clear path from source to insight</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">Five steps, with quality checks and documented assumptions throughout. Select a step to explore its purpose.</p>
          </motion.div>
          <div role="group" aria-label="Analytics workflow stages" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {workflow.map(({ name, icon: Icon }, i) => (
              <button type="button" key={name} aria-pressed={activeStage === i} onClick={() => setActiveStage(i)} className={`flex min-h-28 flex-col items-start justify-between rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${activeStage === i ? 'border-violet-400 bg-[#211B46] shadow-[0_8px_36px_rgba(124,58,237,.18)]' : 'border-slate-700 bg-[#101A2E] hover:border-slate-500'}`}>
                <Icon size={24} className={activeStage === i ? 'text-violet-300' : 'text-cyan-300'} aria-hidden="true" />
                <span className="mt-4 text-sm font-bold text-slate-100"><span className="mr-2 text-slate-400">0{i + 1}</span>{name}</span>
              </button>
            ))}
          </div>
          <div aria-live="polite" className="mt-4 min-h-[72px] rounded-2xl border border-slate-700/80 bg-[#101A2E] px-5 py-4 text-sm leading-relaxed text-slate-200 sm:text-base"><strong className="text-violet-300">{workflow[activeStage].name}.</strong> {workflow[activeStage].detail}</div>
          <div className="mt-10 flex flex-wrap gap-2" aria-label="Technical specialties">{topics.map(topic => <span key={topic} className="rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200">{topic}</span>)}</div>
          <p className="mt-6 text-xs leading-relaxed text-slate-400">Illustrations and example charts in this section are conceptual, not reported client metrics or live dashboard data.</p>
        </div>
      </section>

      <section id="projects" aria-labelledby="premium-projects-title" className="relative scroll-mt-24 bg-[#080E1C] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={show} whileInView={visible} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : .55 }}>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Selected work</p>
            <h2 id="premium-projects-title" className="mt-2 font-heading text-3xl font-bold text-slate-50 sm:text-4xl">Six analytics case studies</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">Real repository links and documented scope. Thumbnails are illustrative; not every project has a public live demo or a validated runtime.</p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article key={project.repo} initial={show} whileInView={visible} viewport={{ once: true, amount: .12 }} transition={{ duration: reducedMotion ? 0 : .5, delay: reducedMotion ? 0 : (i % 3) * .06 }} whileHover={reducedMotion ? undefined : { y: -4 }} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#334155] bg-[#101A2E] transition-colors hover:border-indigo-400/60">
                <img src={project.image} alt={`Illustrative visual for ${project.title}, not a screenshot of a live analytics system`} loading="lazy" decoding="async" className="aspect-[720/260] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[.12em]" style={{ color: project.accent }}>{project.category}</p>
                  <h3 className="mt-2 break-words text-xl font-bold text-slate-50">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tools.map(tool => <span key={tool} className="rounded-full border border-slate-600/60 px-2.5 py-1 text-xs text-slate-200">{tool}</span>)}</div>
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-700 pt-4 text-sm font-semibold">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><GitBranch size={15} aria-hidden="true" /> Code <ArrowUpRight size={14} aria-hidden="true" /></a>
                    <a href={project.docs} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"><BookOpen size={15} aria-hidden="true" /> Docs <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-indigo-400/30 bg-[#101A2E] px-6 py-5">
            <div className="mr-auto"><h3 className="font-semibold text-slate-50">Interested in these projects?</h3><p className="mt-1 text-sm text-slate-300">Explore the source files or discuss my analytics work.</p></div>
            <a href="https://github.com/bhagabatabrahma0106-dotcom?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-500 px-4 py-2 font-semibold text-slate-50 hover:border-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">All repositories <ArrowUpRight size={17}/></a>
            <a href="mailto:bhagabatabrahma0106@gmail.com" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-semibold text-slate-50 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"><Mail size={16}/> Email me</a>
          </div>
        </div>
      </section>
    </>
  );
}
