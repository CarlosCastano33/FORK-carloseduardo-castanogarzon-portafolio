'use client';

import React, { useState } from 'react';
import { PrimaryButton } from '../atoms';
import { Modal } from '../molecules';
import { HeartHandshake, Compass } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Manejadores para la gestión del estado del Modal
   * Nomenclatura estandarizada según los requisitos de auditoría del Tech Lead.
   */
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="bg-background rounded-[2.5rem] p-8 lg:p-14 flex flex-col md:flex-row items-center gap-5 overflow-hidden relative shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-border">
      {/* Degradados decorativos */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent opacity-5 blur-[100px] rounded-full"></div>
      
      {/* Columna de Contenido */}
      <div className="flex-[1.2] space-y-8 z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-[11px] font-black rounded-full uppercase tracking-[0.2em] animate-pulse">
            <Compass size={14} />
            Siempre de cara al futuro
        </div>
        
        <h1 className="text-4xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tighter">
          Soy <span className="text-primary">Carlos Castaño</span> <br />
          <span className="text-3xl lg:text-5xl text-muted-foreground">Desarrollador Backend</span>
        </h1>
        
        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
          Me gusta crear soluciones eficientes y escalables, con un enfoque en la calidad del código y la experiencia del usuario.
        </p>
        
        <div className="pt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <PrimaryButton 
            text="¿CÓMO TRABAJO?" 
            onClick={handleOpenModal} 
          />
        </div>
      </div>

      {/* Columna Visual */}
      <div className="flex-1 relative flex justify-center">
        {/* Forma de fondo */}
        <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-6 scale-95 opacity-5 animate-pulse"></div>
        
          {/* Tarjeta de Perfil / Ilustración */}
          <div className="group relative w-full aspect-square max-w-[320px]">
            {/* Marco decorativo trasero */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.8rem] bg-accent/40 border border-border transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              {/* Marco principal */}
              <div className="relative w-full h-full rounded-[2.8rem] bg-background border border-border shadow-[0_20px_50px_rgba(120,70,30,0.18)] overflow-hidden transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-[1.015]">
                {/* Fondo interior cálido */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-10"></div>
                  <img
                    src="/profile.jpg"
                    alt="Carlos Castaño"
                    className="w-full h-full object-cover"
                  />
            </div>
        </div>
      </div>

        {/* Modal Interactivo */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="text-center space-y-8">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary rotate-3 shadow-inner">
              <HeartHandshake size={48} strokeWidth={2.5} />
            </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-none">¿Cómo trabajo?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-left font-medium">
               Mi metodología se basa en la colaboración estrecha con los clientes para entender sus necesidades y objetivos, aplicando las mejores prácticas de desarrollo backend para crear soluciones robustas, escalables y mantenibles. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-left font-medium">
               Mis mayores virtudes son la atención al detalle, la pasión por el código limpio y la capacidad de resolver problemas complejos de manera eficiente. Me esfuerzo por entregar un trabajo de alta calidad que no solo cumpla, sino que supere las expectativas de mis clientes.
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
             <PrimaryButton text="OK" onClick={handleCloseModal} />
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default HeroSection;