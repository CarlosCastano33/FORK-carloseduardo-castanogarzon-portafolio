'use client';

import React, { useState } from 'react';
import PortafolioCard from '../molecules/PortafolioCard';
import Modal from '../molecules/Modal';
import { ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '@/constants/portafolio';
import { Project } from '@/types';

const PortafolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => setSelectedProject(project);
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <section id="portafolio" className="py-10 space-y-10 overflow-hidden">
      {/* Cabecera */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">Portafolio</h2>
            <div className="h-px flex-1 bg-primary"></div>
        </div>
        <p className="text-muted-foreground font-medium">Proyectos.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 scrollbar-hide -mx-4 px-4 overflow-y-hidden">
        {PROJECTS.map((project) => (
          <PortafolioCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageColor={project.color}
            onClick={() => handleSelectProject(project)}
          />
        ))}
        {/* Espaciador para permitir que la última tarjeta sea totalmente visible durante el scroll */}
        <div className="flex-none w-10"></div>
      </div>

      {/* Modal de Detalle del Proyecto */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={handleCloseProject}
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className={`h-32 ${selectedProject.color} rounded-2xl flex items-center justify-center`}>
                <Code size={48} className="text-white opacity-40" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground tracking-tight">{selectedProject.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                {selectedProject.longDescription}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">Tecnologías Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-muted text-muted-foreground text-[11px] font-bold rounded-full uppercase border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 flex gap-4">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-foreground text-background font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors uppercase text-xs tracking-widest"
                >
                    <ExternalLink size={16} /> Ver en GitHub
                </a>
                <button 
                  onClick={handleCloseProject}
                  className="px-8 py-3 bg-muted text-muted-foreground font-bold rounded-2xl hover:bg-border transition-colors uppercase text-xs tracking-widest"
                >
                  Cerrar
                </button>
            </div>
          </div>
        )}
      </Modal>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default PortafolioSection;