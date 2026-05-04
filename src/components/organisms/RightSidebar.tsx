import React from 'react';
import { IconWrapper, GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../atoms';

const RightSidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full py-10 animate-in slide-in-from-right duration-700">
      {/* Sección de título (Vertical) */}
      <div className="flex items-center">
        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Contacto
        </h3>
      </div>
      
      {/* Contenedor de iconos sociales */}
      <nav className="flex flex-col gap-4 items-center mt-4">
        <a 
          href="https://github.com/CarlosCastano33" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="group"
        >
          <IconWrapper>
            <GithubIcon size={20} className="transition-transform group-hover:scale-110" />
          </IconWrapper>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/carlos-casta%C3%B1o-baa94b394/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="group"
        >
          <IconWrapper>
            <LinkedinIcon size={20} className="transition-transform group-hover:scale-110" />
          </IconWrapper>
        </a>
        
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter Profile"
          className="group"
        >
          <IconWrapper>
            <TwitterIcon size={20} className="transition-transform group-hover:scale-110" />
          </IconWrapper>
        </a>
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram Profile"
          className="group"
        >
          <IconWrapper>
            <InstagramIcon size={20} className="transition-transform group-hover:scale-110" />
          </IconWrapper>
        </a>
      </nav>
      
    </div>
  );
};

export default RightSidebar;