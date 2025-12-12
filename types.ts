export interface Project {
  id: string;
  title: string;
  category: string;
  description: string[];
  imageUrl: string;
  tags: string[];
}

export interface Service {
  name: string;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact',
}