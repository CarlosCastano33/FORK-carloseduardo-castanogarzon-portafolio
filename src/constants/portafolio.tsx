import { 
  DatabaseZap, 
  Globe, 
  Workflow, 
} from 'lucide-react';
import { Project, EducationItem, Skill, Language, ProgrammingLanguage } from '../types';

export const PROJECTS: Project[] = [
  {
     id: 1,
     title: "MedDiag",
     description: "Sistema de Apoyo Diagnostico Medico basado en Inteligencia Artificial.",
     longDescription: "Se desarrolló como un Producto Minimo Viable (MVP) durante el curso de Proyecto Integrador. La aplicación permite que los usuarios ingresen información sobre sus sintomas y obtener predicciones preliminares de posibles diagnosticos.",
     color: "bg-blue-600",
     tech: ["Streamlit", "Python"],
     link: "https://github.com/CarlosCastano33/MedDiag.git"
  },
  {
     id: 2,
     title: "fleetguard360F3",
     description: "Sistema Inteligente de Monitoreo Satelital para Transporte de Pasajeros.",
     longDescription: "Plataforma orientada a la gestión y monitoreo de flotas de transporte, diseñada para centralizar la administración de vehículos, rutas y operaciones en un solo sistema. Permite supervisar y optimizar el funcionamiento de una flota mediante el seguimiento de información clave como el estado de los vehículos, la asignación de rutas y el control de operaciones logísticas.",
     color: "bg-emerald-600",
     tech: ["Spring Boot", "Java", "Docker"],
     link: "https://github.com/CarlosCastano33/fleetguard360F3.git"
  }
];

export const EDUCATION: EducationItem[] = [
  {
     date: "2020 - Presente",
     title: "Ingeniería de Sistemas",
     institution: "Universidad de Antioquia",
     description: "Enfoque en desarrollo backend, desarrollo web, y optimización de procesos. Participación en proyectos académicos y desarrollo de habilidades técnicas avanzadas."
  }
];

export const SKILLS: Skill[] = [
  {
    icon: <DatabaseZap size={42} strokeWidth={1.5} />,
    title: "Desarrollo Backend",
    description: "Infraestructuras Backend sólidas y escalables con Spring Boot, enfocadas en rendimiento, seguridad e integración eficiente."
  },
  {
    icon: <Globe size={42} strokeWidth={1.5} />,
    title: "Desarrollo Web",
    description: "Soluciones robustas y escalables apoyadas en React, Next.js y Tailwind CSS para experiencias digitales de alto impacto."
  },
  {
    icon: <Workflow size={42} strokeWidth={1.5} />,
    title: "Automatización de Procesos",
    description: "Automatización de flujos operativos y tareas repetitivas para transformar procesos manuales en sistemas eficientes."
  }
];

export const LANGUAGES: Language[] = [
  { label: "Español", percentage: 100 },
  { label: "Inglés", percentage: 70 }
];

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  { label: "Java", percentage: 90 },
  { label: "Python", percentage: 50 },
  { label: "JavaScript", percentage: 55 },
  { label: "CSS", percentage: 35 }
];

export const EXTRA_SKILLS = [
  'Leadership, Power skills', 
  'SonarQube',
  'GitHub', 
  'Docker',
];