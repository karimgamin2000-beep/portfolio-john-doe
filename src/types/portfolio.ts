export type ProjectCategory = 'Tous' | 'Frontend' | 'Backend' | 'Full-Stack';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: 'Frontend' | 'Backend' | 'Full-Stack';
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  metrics: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  quote: string;
  relation: string;
}
