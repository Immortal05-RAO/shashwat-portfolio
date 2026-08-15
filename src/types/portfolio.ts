export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  color: string; // Tailwind text color class e.g. 'text-emerald-400'
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  university: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface HeroData {
  tagline: string;
  badgeText: string;
}

export interface AboutData {
  bioText: string;
  highlightWords: string[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  capabilities: CapabilityItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  contact: ContactInfo;
}
