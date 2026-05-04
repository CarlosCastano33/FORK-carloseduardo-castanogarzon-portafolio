import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  // Limitar el porcentaje entre 0 y 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full mb-4 group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{label}</span>
        <span className="text-sm font-bold text-gray-400">{clampedPercentage}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className="bg-primary h-full rounded-full transition-all duration-700 ease-out shadow-sm group-hover:bg-primary/80"
          style={{ width: `${clampedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;