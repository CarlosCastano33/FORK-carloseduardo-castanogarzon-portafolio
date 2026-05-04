import React from 'react';
import { EducationCard } from '../molecules';
import { EDUCATION } from '@/constants/portafolio';

const EducationSection: React.FC = () => {

  return (
    <section className="py-7 space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">Educación</h2>
        <div className="h-px flex-1 bg-primary"></div>
      </div>

      <div className="flex flex-col gap-8">
        {EDUCATION.map((item, index) => (
          <EducationCard 
            key={index}
            date={item.date}
            title={item.title}
            institution={item.institution}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;