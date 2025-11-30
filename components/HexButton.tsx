import React from 'react';

interface HexButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  colorClass?: string;
  className?: string;
}

export const HexButton: React.FC<HexButtonProps> = ({ 
  children, 
  onClick, 
  active = false, 
  colorClass = "bg-hive-gold",
  className = ""
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-24 h-28 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <div 
        className={`absolute inset-0 hex-clip transition-colors duration-300 ${active ? 'bg-slate-800' : colorClass} hover:bg-slate-700 shadow-lg`}
      />
      <div className={`relative z-10 font-bold ${active ? 'text-white' : 'text-slate-900'}`}>
        {children}
      </div>
    </div>
  );
};

export const HexDisplay: React.FC<{
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
  color?: string;
}> = ({ label, subLabel, icon, color = "bg-white" }) => {
  return (
    <div className="relative w-32 h-36 flex flex-col items-center justify-center p-2 text-center drop-shadow-xl">
       <div 
        className={`absolute inset-0 hex-clip ${color} border-4 border-slate-100 opacity-90`}
      />
      <div className="relative z-10 flex flex-col items-center">
        {icon && <div className="mb-1 text-slate-700">{icon}</div>}
        <span className="font-serif font-bold text-lg leading-none text-slate-900">{label}</span>
        {subLabel && <span className="text-xs uppercase tracking-wider text-slate-600 mt-1">{subLabel}</span>}
      </div>
    </div>
  );
};
