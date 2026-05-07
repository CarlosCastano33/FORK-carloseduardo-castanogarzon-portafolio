import React from 'react';
import { KnowledgeCard } from '../molecules';
import { SKILLS } from '@/constants/portafolio';

const KnowledgeSection: React.FC = () => {

  return (
    <section className="py-7 space-y-14">
      {/* Sección de cabecera */}
      <div className="text-center space-y-5 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight uppercase tracking-tight">
          <span className="text-primary">Conocimientos</span>
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground text-lg lg:text-xl font-medium leading-relaxed">
          Soluciones digitales a medida diseñadas para optimizar el rendimiento técnico de tu producto.
        </p>
      </div>

      {/* Contenedor de cuadrícula */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
        {SKILLS.map((skill, index) => (
          <div 
            key={index} 
            className="animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <KnowledgeCard 
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;