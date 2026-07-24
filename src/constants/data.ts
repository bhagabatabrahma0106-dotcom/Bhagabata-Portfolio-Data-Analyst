import type {
  PersonalInfo,
  Education,
  ExperienceItem,
  Project,
  SkillCategory,
  Certification,
  Service,
  Statistic,
  Testimonial,
  NavItem,
} from '../types';

// ─── Personal Info ─────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: 'BHAGABATA BRAHMA',
  firstName: 'Bhagabata',
  initials: 'BB',
  title: 'Data Analyst & Data Governance Specialist',
  titles: [
    'Data Analyst',
    'Data Governance Specialist',
    'MS Dynamics 365 F&O Consultant',
    'Business Intelligence Analyst',
    'SQL & Python Developer',
  ],
  tagline:
    'I build scalable data solutions, business intelligence dashboards, enterprise ERP customizations, and modern analytics pipelines.',
  email: 'bhagabatabrahma0106@gmail.com',
  phone: '+91 6371206662',
  location: 'Whitefield, Bengaluru, Karnataka',
  github: 'https://github.com/bhagabatabrahma0106-dotcom',
  linkedin: 'https://linkedin.com/in/bhagabata-brahma',
  portfolio: 'https://jerry-s-portfolio-web.vercel.app',
};

// ─── Navigation ────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'services', label: 'Services' },
  { id: 'skilllab', label: 'Skill Lab' },
  { id: 'contact', label: 'Contact' },
];

// ─── Career Objective ──────────────────────────────────────────
export const objective =
  "B.Tech graduate in Computer Science (Class of 2026) with close to 1 year of hands-on internship experience as a Data Analyst — Data Management, Data Governance, Data Quality, and Reporting using SQL, MS Excel, Tableau, PowerPoint, and Python. Also completed structured Microsoft Dynamics 365 Finance & Operations training and hands-on Collibra Data Governance & Data Catalog training. Seeking an entry-level Data Analyst or Data Governance Analyst role to apply analytical thinking and data governance expertise to solve real-world business problems.";

// ─── Education ─────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    period: '2022 – 2026',
    institution: 'Satyasai Engineering College (SSEC)',
    location: 'Balasore, Odisha',
    score: 'Aggregate: 80%',
  },
  {
    degree: 'Higher Secondary Certificate (+2 / Class XII)',
    period: '2020 – 2022',
    institution: 'Council of Higher Secondary Education (CHSE)',
    location: 'Odisha',
    score: 'Aggregate: 77%',
  },
];

// ─── Experience ────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    role: 'Technical Trainee – Microsoft Dynamics 365 F&O',
    company: 'Ghora Technologies',
    location: 'Bengaluru, Karnataka',
    period: 'Jan 2025 – Jun 2025',
    type: 'Training Program',
    bullets: [
      'Completed a structured 6-month technical training program in Microsoft Dynamics 365 Finance & Operations, covering architecture, data modelling, and enterprise module configuration across 100+ guided sessions.',
      'Mastered advanced SQL concepts including multi-table joins (Simple, FK, Field Fixed, Related Field Fixed), subqueries, and aggregations, completing 100+ practice problems.',
      'Developed and customized SSRS (SQL Server Reporting Services) reports for Purchase Orders and Sales Orders, applying report design, data source configuration, and query optimization.',
      'Analyzed and debugged Functional Design Documents (FDDs) for real-world client implementations (Bangladesh, Zimbabwe), translating requirements into structured data deliverables.',
      'Gained hands-on proficiency with QBDS, AOT Queries, Views, Maps, and Container objects, building runnable test classes to validate and profile data.',
      'Studied end-to-end AR and AP business flows, strengthening understanding of enterprise financial data pipelines and master data management.',
    ],
    tags: ['D365 F&O', 'X++', 'SSRS', 'AOT', 'SQL Server', 'Data Modeling', 'AR/AP'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Data Gyan',
    location: 'Bengaluru, Karnataka',
    period: 'Oct 2024 – Feb 2025',
    type: 'Internship',
    bullets: [
      'Gathered and consolidated 10,000+ records from LinkedIn, industry conferences, and vendor customer lists to support business development and marketing.',
      'Authored and executed 50+ SQL scripts for ETL operations, building a consolidated master dataset in SQL Server that reduced data fragmentation across 8+ source categories.',
      'Developed 5+ Tableau dashboards to communicate key business insights, reducing manual reporting time by ~30%.',
      'Identified and resolved 500+ data quality issues (duplicates, null values, inconsistencies, format errors) through SQL-based validation, improving dataset accuracy by ~25%.',
      'Applied Data Governance principles — data stewardship, governance workflow management, asset onboarding, policy management, and Data Catalog administration using Collibra.',
    ],
    tags: ['SQL', 'Tableau', 'ETL', 'Collibra', 'Excel', 'Python', 'Data Quality'],
  },
];

// ─── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Data Management & Governance Pipeline',
    description:
      'Designed an end-to-end data management pipeline, sourcing raw data from multiple channels and consolidating into a structured master dataset via SQL Server. Implemented Data Governance workflows using Collibra including policy management, asset onboarding, and business glossary creation.',
    period: 'Oct 2024 – Feb 2025',
    source: 'Data Gyan, Bengaluru',
    tools: ['SQL Server', 'MS Excel', 'Tableau', 'Collibra', 'Google Sheets'],
    featured: true,
  },
  {
    title: 'EdTech App Market Analysis',
    description:
      'Analyzed EdTech mobile app market data (installs, ratings, reviews) through a full analytics pipeline covering data cleaning, EDA, SQL insights, and K-Means ML clustering. Applied K-Means clustering to segment apps into 3 performance tiers — identifying top performers like Duolingo and BYJU\'S. Built an interactive Power BI dashboard visualizing installs, scores, content ratings, and release trends.',
    period: 'Ongoing',
    source: 'Personal Project',
    tools: ['Python', 'Pandas', 'NumPy', 'SQL Server', 'Power BI', 'K-Means'],
    github: 'https://github.com/bhagabatabrahma0106-dotcom/EdTech-Analysis',
    featured: true,
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: 'SQL & Databases',
    icon: '🗃️',
    color: 'cyan',
    items: ['SQL Server', 'DDL / DML', 'Joins & Subqueries', 'Aggregations', 'Data Validation', 'ETL Scripting', 'Query Profiling'],
  },
  {
    category: 'Python & Analytics',
    icon: '🐍',
    color: 'purple',
    items: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Analysis', 'Statistical Analysis', 'K-Means Clustering'],
  },
  {
    category: 'Data Governance & ERP',
    icon: '🛡️',
    color: 'emerald',
    items: ['Collibra', 'Metadata Management', 'Business Glossary', 'Data Lineage', 'Data Quality', 'Microsoft Dynamics 365 F&O', 'SSRS', 'X++ (Basic)'],
  },
  {
    category: 'BI & Reporting',
    icon: '📊',
    color: 'orange',
    items: ['Tableau', 'Power BI', 'MS Excel (VLOOKUP, Pivot)', 'Google Sheets', 'PowerPoint', 'DAX (Basic)', 'Report Design'],
  },
  {
    category: 'Concepts & Practices',
    icon: '⚙️',
    color: 'pink',
    items: ['ETL Pipelines', 'Data Warehousing', 'Data Quality Management', 'Business Requirements', 'Root Cause Analysis', 'Git / GitHub'],
  },
];

// ─── Core Competencies ─────────────────────────────────────────
export const coreCompetencies = [
  'Stakeholder Communication',
  'Business Requirements Gathering',
  'Analytical Thinking',
  'Attention to Detail',
  'Team Collaboration',
  'Root Cause Analysis',
];

// ─── Certifications ────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    title: 'Collibra Data Governance & Data Catalog',
    issuer: 'Collibra Platform',
    date: 'Completed',
    color: 'cyan',
  },
  {
    title: 'Data Management Internship Program',
    issuer: 'Data Gyan, Bengaluru',
    date: 'Oct 2024 – Feb 2025',
    color: 'purple',
  },
  {
    title: 'SQL for Data Analysis',
    issuer: 'SQL Server – Hands-On Practice',
    date: 'Completed',
    color: 'emerald',
  },
];

// ─── Services ──────────────────────────────────────────────────
export const services: Service[] = [
  {
    title: 'Data Analytics & Reporting',
    description: 'End-to-end analytics pipelines — data acquisition, cleaning, transformation, and BI dashboards using SQL, Python, Tableau, and Power BI.',
    icon: '📊',
    color: 'cyan',
  },
  {
    title: 'Data Governance Consulting',
    description: 'Collibra-based governance workflows, metadata management, business glossary creation, data lineage mapping, and stewardship policy implementation.',
    icon: '🛡️',
    color: 'purple',
  },
  {
    title: 'ETL Pipeline Development',
    description: 'Building and optimizing SQL-based ETL scripts to consolidate data from multiple sources into unified, validated master datasets.',
    icon: '🔄',
    color: 'emerald',
  },
  {
    title: 'Dashboard Development',
    description: 'Designing interactive dashboards in Tableau and Power BI to communicate key business insights and reduce manual reporting time.',
    icon: '📈',
    color: 'orange',
  },
  {
    title: 'ERP Data Analysis',
    description: 'Microsoft Dynamics 365 F&O data analysis, SSRS report development, and custom queries using AOT, QBDS, and X++ basics.',
    icon: '🏢',
    color: 'pink',
  },
  {
    title: 'Data Quality Management',
    description: 'Profiling, validation, deduplication, and reconciliation of large-scale datasets — improving accuracy and reliability for business-critical decisions.',
    icon: '✅',
    color: 'indigo',
  },
];

// ─── Statistics ────────────────────────────────────────────────
export const statistics: Statistic[] = [
  { value: 1, suffix: '+', label: 'Year Experience', icon: '🏆' },
  { value: 10000, suffix: '+', label: 'Records Processed', icon: '📦' },
  { value: 5, suffix: '+', label: 'BI Dashboards', icon: '📊' },
  { value: 500, suffix: '+', label: 'Quality Issues Resolved', icon: '✅' },
];

// ─── Testimonials ──────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    name: 'Mentor – Data Gyan',
    role: 'Senior Data Analyst',
    company: 'Data Gyan, Bengaluru',
    text: 'Bhagabata demonstrated exceptional attention to detail in data validation and ETL scripting. His ability to quickly learn Collibra and apply governance workflows in a real-world setting was impressive for a fresher.',
    avatar: 'DG',
  },
  {
    name: 'Technical Lead',
    role: 'D365 F&O Technical Trainer',
    company: 'Ghora Technologies',
    text: 'Bhagabata showed strong analytical thinking and quickly grasped complex D365 F&O concepts. His SQL skills and understanding of enterprise data flows were well above the training cohort average.',
    avatar: 'GT',
  },
];

// ─── Languages ─────────────────────────────────────────────────
export const languages = [
  { name: 'Odia', proficiency: 'Native / Mother Tongue' },
  { name: 'English', proficiency: 'Professional Working Proficiency' },
  { name: 'Hindi', proficiency: 'Professional Working Proficiency' },
];

// ─── Achievements ──────────────────────────────────────────────
export const achievements = [
  'Maintained a strong 80% academic score throughout B.Tech, demonstrating consistent excellence.',
  'Successfully completed a full-cycle Data Management project during internship — from raw data acquisition to dashboard-ready insights.',
  'Earned hands-on Collibra platform expertise covering Data Governance workflows and Data Catalog management.',
  'Independently built a consolidated master dataset in SQL Server combining 8+ source categories, reducing data fragmentation and enabling unified business reporting.',
];
