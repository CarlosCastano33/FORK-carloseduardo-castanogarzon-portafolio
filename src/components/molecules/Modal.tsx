'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Componente Modal (Molécula/Organismo)
 * Diálogo superpuesto con animaciones y diseño creativo.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Superposición con efecto de desenfoque */}
      <div 
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Contenedor de Modal Creativo */}
      <div className="relative bg-white rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 
                      w-full max-w-lg overflow-hidden z-10 border border-gray-100/50
                      animate-in zoom-in-90 slide-in-from-bottom-10 fade-in duration-500 ease-out">
        
        {/* Barra de acento superior Primaria */}
        <div className="h-2 w-full bg-primary"></div>

        {/* Botón de Cerrar */}
        <div className="absolute top-6 right-6 z-20">
            <button 
              onClick={onClose}
              className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 group hover:rotate-90 active:scale-90"
              aria-label="Cerrar modal"
            >
              <X size={20} className="text-muted-foreground group-hover:text-primary-foreground" />
            </button>
        </div>

        {/* Envoltorio de contenido con padding generoso */}
        <div className="p-8 sm:p-12">
          {children}
        </div>

        {/* Elemento decorativo de esquina */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};

export default Modal;