// TypeScript interfaces for portfolio data

export interface PersonalInfo {
  name: string;
  firstName: string;
  initials: string;
  title: string;
  titles: string[];
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  location: string;
  score: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  period: string;
  source: string;
  tools: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface NavItem {
  id: string;
  label: string;
}
