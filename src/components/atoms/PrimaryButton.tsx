import React from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 uppercase text-[12px] tracking-widest"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;