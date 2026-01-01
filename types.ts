export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface SkillData {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'واجهة أمامية' | 'خلفية' | 'أدوات';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export type Language = 'en' | 'ar';

export interface ContentData {
  hero: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    availability: string;
    action: string;
  };
  about: {
    title: string;
    text: string;
    stats: { label: string; value: string }[];
    resumeBtn: string;
  };
  experience: {
    title: string;
    list: Experience[];
  };
  projects: {
    title: string;
    list: Project[];
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    chartTitle: string;
    list: SkillData[];
  };
  contact: {
    title: string;
    text: string;
    action: string;
    footer: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
}