import React from 'react';

interface KnowledgeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Molécula KnowledgeCard
 * Una tarjeta estilo servicio con icono, título y descripción.
 */
const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-background p-10 rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] 
                    hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 
                    border border-border flex flex-col items-center text-center group 
                    hover:-translate-y-3 cursor-default relative overflow-hidden">
      
      {/* Fondo decorativo al pasar el cursor */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-primary/10"></div>
      
      {/* Contenedor de Icono */}
      <div className="text-primary mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-primary/10">
            {icon}
        </div>
      </div>

      {/* Contenido */}
      <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
        {description}
      </p>

      {/* Indicador inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-1/3"></div>
    </div>
  );
};

export default KnowledgeCard;