import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 mt-8 border-t border-primary bg-background rounded-t-[7rem]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-2">
        
        <p className="text-muted-foreground/60 text-sm font-bold uppercase tracking-[0.3em]">
          © 2026 Carlos Castaño
        </p>
        <p className="text-[10px] text-muted-foreground/40 font-medium">
          Hecho con Next.js y Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;