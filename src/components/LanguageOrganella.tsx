import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageOrganella: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { i18n } = useTranslation();
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleLanguage = () => {
    setIsSpinning(true);
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    
    // Delay language switch slightly to match animation apex
    setTimeout(() => {
      i18n.changeLanguage(newLang);
    }, 150);

    setTimeout(() => {
      setIsSpinning(false);
    }, 500);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={`relative group w-12 h-12 flex items-center justify-center focus:outline-none ${className}`}
      title={i18n.language === 'en' ? "Switch to Russian" : "Switch to English"}
    >
      {/* Pollen Glow (Hover Effect) */}
      <div className="absolute inset-0 bg-hive-gold blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full scale-150"></div>

      {/* The Organella Membrane */}
      <div 
        className={`relative w-full h-full bg-white/80 backdrop-blur-md hex-clip border-2 border-hive-amber/30 flex items-center justify-center shadow-sm transition-all duration-500 ease-in-out group-hover:border-hive-amber group-hover:bg-hive-pollen ${isSpinning ? 'rotate-180 scale-90' : 'rotate-0 scale-100'}`}
      >
        <div className={`flex flex-col items-center justify-center transition-opacity duration-300 ${isSpinning ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-[10px] font-bold text-hive-amber uppercase tracking-widest leading-none mb-0.5">
            {i18n.language}
          </span>
          <Globe size={14} className="text-slate-600" />
        </div>
      </div>

      {/* Connection Synapse (Visual decoration) */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-hive-amber/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></div>
    </button>
  );
};