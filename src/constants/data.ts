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

// Personal Info
export const personalInfo: PersonalInfo = {
  name: 'Bhagabata Brahma',
  firstName: 'Bhagabata',
  initials: 'BB',
  title: 'Data Analyst | Power BI Developer | Data Governance Analyst',
  titles: [
    'Data Analyst',
    'Power BI Developer',
    'Data Governance Analyst',
    'SQL Developer',
    'D365 F&O Developer',
  ],
  tagline:
    'Turning raw data into reliable decisions — through SQL, Power BI, and data governance.',
  email: 'bhagabatabrahma0106@gmail.com',
  phone: '+91 6371206662',
  location: 'Whitefield, Bengaluru, Karnataka, India — 560066',
  github: 'https://github.com/bhagabatabrahma0106-dotcom',
  linkedin: 'https://www.linkedin.com/in/bhagabata-brahma/',
  portfolio: 'https://bhagabata-brahma-data-analyst.vercel.app/',
};

// Navigation
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'services', label: 'Services' },
  { id: 'skilllab', label: 'Skill Lab' },
  { id: 'contact', label: 'Contact' },
];


// Professional Objective
export const objective =
  'Data Analyst and Power BI Developer with hands-on internship experience in SQL, Excel, Power BI, Python/pandas, and data governance. Profiled and segmented 5,000+ B2B customer records, removed 300+ duplicates, and validated master data to 98%+ accuracy. Built and published three interactive Power BI reports using DAX and Power Query. Authored 20+ T-SQL queries and developed five reusable Excel/Google Sheets templates for multi-source data consolidation. Also developed a custom Fixed Deposit Treasury Management capability in Microsoft Dynamics 365 Finance & Operations using X++. B.Tech in Computer Science & Engineering (CGPA 8.04) from Biju Patnaik University of Technology (BPUT), Odisha, graduating 2026.';

// Education
export const education: Education[] = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2022 – 2026',
    institution: 'Satyasai Engineering College (Affiliated to BPUT, Odisha)',
    location: 'Balasore, Odisha',
    score: 'CGPA: 8.04',
  },
  {
    degree: 'Intermediate (+2) — Science (CHSE, Odisha)',
    period: '2020 – 2022',
    institution: 'Council of Higher Secondary Education (CHSE)',
    location: 'Odisha',
    score: '77%',
  },
];

// Experience
export const experience: ExperienceItem[] = [
  {
    role: 'Finance Operations Analyst Intern & D365 F&O Developer (Trainee)',
    company: 'Gohra Technologies',
    location: 'Bengaluru, Karnataka',
    period: 'Oct 2025 – Present',
    type: 'Internship & Training',
    bullets: [
      'Developed a custom Fixed Deposit Treasury Management capability in Microsoft Dynamics 365 Finance & Operations, centralising deposit bank details, principal amount, interest rate, tenure, maturity date, and lifecycle status.',
      'Structured two linked data tables — an FD register and an interest schedule — enabling clean separation of master data and transactional accrual records.',
      'Implemented automatic FD numbering and configurable Actual/365 or 360-day interest, accrual, and maturity calculations to support standard treasury accounting practices.',
      'Connected approval and lifecycle workflows covering accrual, payment, renewal, maturity, and premature closure, ensuring authorised progression through each stage.',
      'Incorporated voucher references, posting dates, audit history, and error logs to support traceability and analyst reconciliation across finance and treasury teams.',
      'Used X++, AOT tables, forms, and workflow extensions to translate finance business requirements into maintainable, scalable Dynamics 365 F&O functionality.',
    ],
    tags: ['D365 F&O', 'X++', 'AOT', 'Treasury Management', 'Finance Workflows', 'SQL Server'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Data Gyan',
    location: 'Bengaluru, Karnataka',
    period: 'Oct 2025 – Feb 2026',
    type: 'Internship',
    bullets: [
      'Analysed and segmented 5,000+ B2B customer records into three targeting groups, aligning data collection scope and KPI definitions with stakeholders across three project phases.',
      'Authored 20+ T-SQL queries and built five reusable Excel/Google Sheets templates for consolidating, cleaning, and structuring multi-source data from LinkedIn, conference, and vendor customer lists.',
      'Built and published three interactive Power BI reports using Power Query and DAX to track lead volume, conversion rates, and campaign reach across multiple periods.',
      'Automated deduplication, null handling, and column standardisation using Python/pandas, removing 300+ duplicate records before SQL loading.',
      'Validated six data-quality issue categories using pre-load and post-load SQL checks, achieving 98%+ final master-data accuracy across the consolidated dataset.',
      'Documented data lineage, 15+ business glossary terms, and metadata for 12 data assets in line with DAMA-DMBOK data governance principles.',
    ],
    tags: ['SQL Server', 'Power BI', 'DAX', 'Power Query', 'Python', 'pandas', 'Excel', 'Data Governance'],
  },
];

// Projects
export const projects: Project[] = [
  {
    title: 'Pizza Sales Performance Analysis',
    description:
      'Analysed 48,620 transaction rows and 21,350 distinct orders from 2015 using T-SQL to surface daily, hourly, and monthly demand patterns, category and size mix, and best- and worst-selling products. Combined with a filterable Power BI dashboard, the solution gives operators a clear view of revenue drivers ($817.86K total), peak periods, and menu performance — supporting promotional planning and operational decisions. Total pizzas sold: 49,574; average order value: $38.31; average pizzas per order: 2.32.',
    period: '2025',
    source: 'Personal Project',
    tools: ['Microsoft SQL Server', 'Power BI', 'DAX', 'T-SQL'],
    featured: true,
  },
  {
    title: 'E-Commerce Order Performance Analysis',
    description:
      'Cleaned and standardised 199 raw order lines in Excel — checking inconsistent categories, invalid dates, non-numeric prices, missing values, and outliers — before loading into SQL Server. Authored T-SQL KPI queries covering revenue, order volume, average order value, returns and cancellations, and repeat customers. Built interactive Power BI views for product, category, and country trends; monthly performance; payment mix; and order status filters.',
    period: '2025',
    source: 'Personal Project',
    tools: ['Excel', 'Microsoft SQL Server', 'Power BI', 'DAX', 'T-SQL'],
    featured: true,
  },
  {
    title: 'Fixed Deposit Treasury Management (D365 F&O)',
    description:
      'Designed and implemented a custom treasury management capability within Microsoft Dynamics 365 Finance & Operations. Built an FD register and linked interest schedule as AOT tables, implemented automatic FD numbering and configurable Actual/365 or 360-day interest calculations, and connected approval workflows for accrual, payment, renewal, maturity, and premature closure. Voucher references, audit history, and error logs provide full traceability.',
    period: 'Oct 2025 – Present',
    source: 'Gohra Technologies — Professional Project',
    tools: ['Microsoft Dynamics 365 F&O', 'X++', 'AOT', 'Finance Workflows', 'SQL Server'],
    featured: true,
  },
  {
    title: 'Data Management & BI Pipeline',
    description:
      'End-to-end data management and BI project at Data Gyan: consolidated B2B customer data from multiple sources into a SQL Server master dataset, applied Python/pandas for deduplication and standardisation, built DAX-powered Power BI reports for marketing analytics, and documented data assets using DAMA-DMBOK governance principles. Delivered 98%+ master-data accuracy across 5,000+ records.',
    period: 'Oct 2025 – Feb 2026',
    source: 'Data Gyan, Bengaluru — Internship Project',
    tools: ['SQL Server', 'Power BI', 'DAX', 'Power Query', 'Python', 'pandas', 'Excel', 'Google Sheets'],
    featured: true,
  },
  {
    title: 'EdTech App Market Analysis',
    description:
      "Analysed EdTech mobile app market data (installs, ratings, reviews) through a full analytics pipeline covering data cleaning, exploratory data analysis, SQL insights, and K-Means clustering. Applied K-Means to segment apps into three performance tiers — identifying top performers like Duolingo and BYJU'S. Built an interactive Power BI dashboard visualising installs, scores, content ratings, and release trends.",
    period: 'Ongoing',
    source: 'Personal Project',
    tools: ['Python', 'pandas', 'NumPy', 'SQL Server', 'Power BI', 'K-Means'],
    github: 'https://github.com/bhagabatabrahma0106-dotcom/EdTech-Analysis',
    featured: false,
  },
];

// Skills
export const skillCategories: SkillCategory[] = [
  {
    category: 'Business Intelligence & Visualisation',
    icon: 'chart',
    color: 'cyan',
    items: [
      'Microsoft Power BI',
      'DAX Measures & Calculated Columns',
      'Power Query / M',
      'Data Modelling',
      'Interactive Dashboards',
      'KPI Reporting',
    ],
  },
  {
    category: 'SQL & Databases',
    icon: 'database',
    color: 'purple',
    items: [
      'Microsoft SQL Server',
      'T-SQL',
      'DDL / DML / DCL',
      'JOINs, CTEs & Window Functions',
      'Stored Procedures',
      'Query Optimisation',
      'Data Validation Scripts',
    ],
  },
  {
    category: 'Python & Data Processing',
    icon: 'python',
    color: 'emerald',
    items: [
      'Python',
      'pandas',
      'NumPy',
      'Data Cleaning & Deduplication',
      'Exploratory Analysis',
      'Basic ETL Scripting',
      'X++ Customisation',
    ],
  },
  {
    category: 'Excel & Google Sheets',
    icon: 'sheets',
    color: 'orange',
    items: [
      'VLOOKUP / XLOOKUP',
      'SUMIFS',
      'PivotTables & Power Pivot',
      'Conditional Formatting',
      'Google Sheets QUERY',
      'ARRAYFORMULA',
      'Data Validation',
    ],
  },
  {
    category: 'Data Governance',
    icon: 'shield',
    color: 'pink',
    items: [
      'DAMA-DMBOK Principles',
      'Data Stewardship',
      'Metadata Management',
      'Data Lineage',
      'Business Glossary & Cataloguing',
      'Data Quality',
      'Data Lifecycle Management',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'tools',
    color: 'indigo',
    items: [
      'D365 Finance & Operations',
      'Power BI Desktop',
      'SQL Server Management Studio',
      'Microsoft Excel',
      'Google Sheets',
      'Python / VS Code',
      'Git & GitHub',
    ],
  },
];

// Core Competencies
export const coreCompetencies = [
  'Data Profiling & Cleaning',
  'Power BI Development',
  'T-SQL Authoring',
  'Stakeholder Communication',
  'Data Governance (DAMA-DMBOK)',
  'Root Cause Analysis',
  'Business Requirements Gathering',
  'Attention to Detail',
];

// Certifications & Professional Development
export const certifications: Certification[] = [
  {
    title: 'Power BI & DAX — Power Query, Data Modelling & KPI Design',
    issuer: 'Applied through project delivery at Data Gyan',
    date: '2024 – 2025',
    color: 'cyan',
  },
  {
    title: 'SQL for Data Analysis',
    issuer: 'JOINs, Window Functions, CTEs, Stored Procedures & Validation — Microsoft SQL Server',
    date: '2024 – 2025',
    color: 'purple',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'pandas / NumPy, Data Cleaning & CSV Automation',
    date: '2024 – 2025',
    color: 'emerald',
  },
  {
    title: 'Data Governance Fundamentals',
    issuer: 'DAMA-DMBOK, Stewardship, Metadata, Lineage & Cataloguing — Data Gyan',
    date: '2024 – 2025',
    color: 'orange',
  },
  {
    title: 'Google Sheets Advanced Analytics',
    issuer: 'QUERY, ARRAYFORMULA, Data Validation & Pivot Tables — Self-directed',
    date: 'Ongoing',
    color: 'pink',
  },
  {
    title: 'Database Management Systems — Grade A',
    issuer: 'B.Tech Coursework, BPUT Odisha',
    date: '2024',
    color: 'indigo',
  },
];

// Services
export const services: Service[] = [
  {
    title: 'Data Analytics & Reporting',
    description:
      'End-to-end analytics pipelines — data profiling, cleaning, transformation, and interactive BI dashboards using SQL Server, Python/pandas, and Power BI.',
    icon: 'chart',
    color: 'cyan',
  },
  {
    title: 'Power BI Dashboard Development',
    description:
      'Designing and publishing interactive Power BI reports with DAX measures, Power Query transformations, and data-model optimisation for business stakeholders.',
    icon: 'bar',
    color: 'purple',
  },
  {
    title: 'SQL Development & Query Optimisation',
    description:
      'Authoring T-SQL scripts, CTEs, stored procedures, and validation queries against Microsoft SQL Server for reporting, ETL, and data-quality workflows.',
    icon: 'database',
    color: 'emerald',
  },
  {
    title: 'Data Governance Consulting',
    description:
      'Implementing DAMA-DMBOK-aligned governance: metadata management, business glossary creation, data lineage mapping, and data-quality frameworks.',
    icon: 'shield',
    color: 'orange',
  },
  {
    title: 'D365 F&O Development & Analysis',
    description:
      'Microsoft Dynamics 365 Finance & Operations customisation using X++ and AOT — translating finance and treasury business requirements into maintainable ERP functionality.',
    icon: 'gear',
    color: 'pink',
  },
  {
    title: 'Data Quality Management',
    description:
      'Profiling, validation, deduplication, and reconciliation of large-scale datasets — improving master-data accuracy for business-critical reporting and decisions.',
    icon: 'check',
    color: 'indigo',
  },
];

// Statistics
export const statistics: Statistic[] = [
  { value: 5000, suffix: '+', label: 'Records Profiled & Segmented', icon: 'records' },
  { value: 3, suffix: '', label: 'Power BI Reports Published', icon: 'chart' },
  { value: 20, suffix: '+', label: 'T-SQL Queries Authored', icon: 'database' },
  { value: 98, suffix: '%', label: 'Master Data Accuracy', icon: 'check' },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    name: 'Mentor — Data Gyan',
    role: 'Senior Data Analyst',
    company: 'Data Gyan, Bengaluru',
    text: 'Bhagabata demonstrated exceptional attention to detail in data validation and T-SQL scripting. His ability to apply data governance principles in a real-world B2B analytics project and achieve 98%+ master-data accuracy was impressive for an intern.',
    avatar: 'DG',
  },
  {
    name: 'Technical Lead',
    role: 'D365 F&O Technical Trainer',
    company: 'Gohra Technologies',
    text: 'Bhagabata showed strong analytical thinking and quickly grasped complex D365 F&O concepts. His SQL skills and understanding of enterprise finance workflows were well above the training cohort average.',
    avatar: 'GT',
  },
];

// Languages
export const languages = [
  { name: 'Odia', proficiency: 'Native / Mother Tongue' },
  { name: 'English', proficiency: 'Professional Working Proficiency' },
];

// Achievements
export const achievements = [
  'Validated six data-quality issue categories using pre- and post-load SQL checks, achieving 98%+ master-data accuracy across 5,000+ B2B customer records.',
  'Removed 300+ duplicate records and standardised multi-source data using Python/pandas before SQL Server loading.',
  'Built and published three interactive Power BI reports with DAX and Power Query, delivering actionable marketing analytics insights to stakeholders at Data Gyan.',
  'Developed a custom Fixed Deposit Treasury Management module in Microsoft Dynamics 365 F&O using X++ — connecting FD lifecycle, approval workflows, and audit traceability.',
];

// Professional Interests
export const professionalInterests = [
  'Data storytelling and dashboard design',
  'Open data projects and SQL query challenges',
  'Data governance standards, DAMA-DMBOK, and data mesh architecture',
];
