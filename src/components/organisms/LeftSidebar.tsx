import React from 'react';
import { ProgressBar } from '../atoms';
import { Check } from 'lucide-react';
import { LANGUAGES, PROGRAMMING_LANGUAGES, EXTRA_SKILLS } from '@/constants/portafolio';

interface ContactInfoProps {
  label: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ label, value }) => (
  <div className="flex justify-between py-2 text-sm items-center">
    <span className="bg-primary/10 px-2 py-0.5 font-bold text-primary rounded-sm text-[11px] uppercase tracking-wider">{label}:</span>
    <span className="text-muted-foreground font-semibold">{value}</span>
  </div>
);

const LeftSidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 opacity-100 animate-in fade-in duration-700">
      {/* Sección de Perfil */}
      <section className="text-center pb-8 border-b border-border">
        <div className="relative inline-block">
          <div className="w-36 h-36 rounded-full border-4 border-primary mx-auto overflow-hidden shadow-lg mb-6">
            <img 
              src="/profile.jpg" 
              alt="Carlos Castaño" 
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
        </div>
        <h2 className="text-2xl font-black text-foreground tracking-tight leading-tight">Carlos Castaño</h2>
        <p className="text-muted-foreground text-xs font-bold mt-2 uppercase tracking-[0.2em]">Backend Developer</p>
      </section>

      {/* Datos de Contacto */}
      <section className="space-y-2 pb-8 border-b border-border">
        <ContactInfo label="Edad" value="27" />
        <ContactInfo label="Dirección" value="Puerto Berrío, Antioquia" />
        <ContactInfo label="Nacionalidad" value="Colombia" />
      </section>

      {/* Idiomas */}
      <section className="pb-8 border-b border-border">
        <h3 className="text-[12px] font-black uppercase tracking-[0.25em] text-foreground mb-6 flex items-center gap-2">
            Idiomas
        </h3>
        {LANGUAGES.map((lang) => (
          <ProgressBar key={lang.label} label={lang.label} percentage={lang.percentage} />
        ))}
      </section>

      {/* Lenguajes de Programación */}
      <section className="pb-8 border-b border-border">
        <h3 className="text-[12px] font-black uppercase tracking-[0.25em] text-foreground mb-6 flex items-center gap-2">
            Lenguajes
        </h3>
        <div className="space-y-1">
          {PROGRAMMING_LANGUAGES.map((lang) => (
            <ProgressBar key={lang.label} label={lang.label} percentage={lang.percentage} />
          ))}
        </div>
      </section>

      {/* Habilidades Extra */}
      <section className="pb-4">
        <h3 className="text-[12px] font-black uppercase tracking-[0.25em] text-foreground mb-6 flex items-center gap-2">
            Extra Skills
        </h3>
        <ul className="space-y-4">
          {EXTRA_SKILLS.map((skill) => (
            <li key={skill} className="flex items-center gap-4 text-sm text-muted-foreground font-semibold group cursor-default">
              <div className="bg-primary p-0.5 rounded-sm transition-transform group-hover:rotate-12">
                <Check size={12} className="text-primary-foreground" strokeWidth={4} />
              </div>
              <span className="group-hover:text-foreground transition-colors uppercase text-[11px] tracking-wider">{skill}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LeftSidebar;