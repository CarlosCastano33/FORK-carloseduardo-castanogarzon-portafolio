import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  tech: string[];
  link: string;
}

export interface EducationItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface Skill {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Language {
  label: string;
  percentage: number;
}

export interface ProgrammingLanguage {
  label: string;
  percentage: number;
}