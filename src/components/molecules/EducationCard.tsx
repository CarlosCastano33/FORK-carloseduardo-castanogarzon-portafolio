import React from 'react';

interface EducationCardProps {
  date: string;
  title: string;
  institution: string;
  description: string;
}

/**
 * Molécula EducationCard
 * Muestra hitos educativos con una etiqueta de fecha e información detallada.
 */
const EducationCard: React.FC<EducationCardProps> = ({ date, title, institution, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 bg-background rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group">
      {/* Izquierda: Etiqueta de Fecha */}
      <div className="md:w-1/4">
        <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-[11px] font-black rounded-lg uppercase tracking-[0.15em] shadow-sm transform group-hover:scale-110 transition-transform">
          {date}
        </span>
      </div>

      {/* Derecha: Información */}
      <div className="flex-1 space-y-3">
        <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-primary font-bold text-xs uppercase tracking-widest">{institution}</p>
        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;