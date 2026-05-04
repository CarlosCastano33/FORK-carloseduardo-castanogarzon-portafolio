import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

/**
 * Estructura de 3 columnas..
 * - Izquierda: Menú
 * - Centro: Contenido principal
 * - Derecha: Redes sociales
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children, leftSidebar, rightSidebar }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden lg:grid lg:grid-cols-[260px_1fr_80px] xl:grid-cols-[300px_1fr_90px]">
      {/* 
        Columna Izquierda - Menú Lateral
      */}
      <aside className="w-full bg-background border-b lg:border-b-0 lg:border-r border-border lg:sticky lg:top-0 lg:h-screen z-40">
        <div className="px-6 py-8">
          {leftSidebar || (
            <div className="flex flex-col gap-6">
              <div className="text-xl font-bold border-b border-border pb-4">Menu</div>
              <nav className="flex flex-col gap-3">
                <span className="text-muted-foreground italic">Elementos del menú aquí...</span>
              </nav>
            </div>
          )}
        </div>
      </aside>

      {/* Columna Central */}
      <main className="w-full min-h-screen">
        <div className="px-5 py-10 md:px-10 lg:px-14 xl:px-20 mx-auto max-w-5xl">
          {children}
        </div>
      </main>

      {/* Columna Derecha, Redes */}
      <aside className="hidden lg:flex flex-col items-center bg-background border-l border-border sticky top-0 h-screen z-40">
        <div className="flex flex-col gap-6 py-10">
          {rightSidebar || (
            <>
               <span className="text-xs uppercase tracking-widest vertical-text transform -rotate-180 font-bold text-muted-foreground mb-4 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                SOCIAL
               </span>
               <div className="h-20 w-px bg-border mx-auto"></div>
            </>
          )}
        </div>
      </aside>
      
      {/* Barra Social Móvil*/}
      <div className="lg:hidden sticky bottom-0 z-50 flex justify-center items-center py-4 bg-background/90 backdrop-blur-md border-t border-border gap-4">
        {rightSidebar}
      </div>
    </div>
  );
};

export default MainLayout;