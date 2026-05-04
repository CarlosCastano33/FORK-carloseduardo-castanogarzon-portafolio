import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground 
                    hover:bg-primary/90 hover:scale-110 active:scale-95
                    transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
      <span className="flex items-center justify-center w-5 h-5">
        {children}
      </span>
    </div>
  );
};

export default IconWrapper;