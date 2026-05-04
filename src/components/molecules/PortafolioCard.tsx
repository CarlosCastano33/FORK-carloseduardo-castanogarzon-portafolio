import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton';

interface PortafolioCardProps {
  title: string;
  description: string;
  imageColor: string;
  onClick: () => void;
}

/**
 * Molécula PortafolioCard
 * Una tarjeta de proyecto diseñada para el desplazamiento horizontal.
 */
const PortafolioCard: React.FC<PortafolioCardProps> = ({ title, description, imageColor, onClick }) => {
  return (
    <div className="flex-none w-[300px] sm:w-[350px] bg-background rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group snap-center">
      {/* Cabecera Visual */}
      <div className={`h-48 ${imageColor} relative flex items-center justify-center p-8 transition-transform group-hover:scale-105 duration-500`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl w-full h-full border border-white/30 flex items-center justify-center">
            <span className="text-white font-black text-2xl uppercase tracking-tighter opacity-50">Preview</span>
        </div>
      </div>

      {/* Cuerpo de Contenido */}
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-medium line-clamp-2 h-10">
          {description}
        </p>
        <div className="pt-2">
          <PrimaryButton text="Saber más" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default PortafolioCard;