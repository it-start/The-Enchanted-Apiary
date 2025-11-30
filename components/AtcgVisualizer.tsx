import React from 'react';
import { ElementType } from '../types';
import { HIVE_ELEMENTS } from '../constants';
import { HexButton } from './HexButton';
import { Heart, FlaskConical, Network, Zap, Dna } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, React.FC<any>> = {
  Heart,
  FlaskConical,
  Network,
  Zap
};

interface AtcgVisualizerProps {
  activeId?: ElementType;
  onSelect?: (id: ElementType) => void;
}

export const AtcgVisualizer: React.FC<AtcgVisualizerProps> = ({ 
  activeId = ElementType.AGGREGATE, 
  onSelect 
}) => {
  const { t } = useTranslation();
  const selectedElement = HIVE_ELEMENTS.find(e => e.id === activeId) || HIVE_ELEMENTS[0];
  const Icon = iconMap[selectedElement.iconName];

  // Helper to render a specific element button
  const RenderButton = ({ type, className }: { type: ElementType, className?: string }) => {
    const el = HIVE_ELEMENTS.find(e => e.id === type);
    if (!el) return null;
    
    // Extract bg color for the button base (e.g., "bg-red-100")
    const bgClass = el.color.split(' ').find(c => c.startsWith('bg-')) || 'bg-slate-100';
    const textClass = el.color.split(' ').find(c => c.startsWith('text-')) || 'text-slate-900';

    return (
      <div className={className}>
        <HexButton 
          active={activeId === type}
          onClick={() => onSelect && onSelect(type)}
          colorClass={bgClass}
          className={`hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]`}
        >
          <div className={`flex flex-col items-center ${textClass}`}>
            <span className="text-3xl font-serif">{el.id}</span>
            <span className="text-[10px] font-bold tracking-widest uppercase truncate max-w-[80px]">{t(`elements.${el.id}.tech`).split(' ')[0]}</span>
          </div>
        </HexButton>
      </div>
    );
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-16 py-12 px-4 transition-all duration-500">
      {/* Interactive Hive */}
      <div className="relative w-[340px] h-[340px] flex-shrink-0 select-none">
        
        {/* Connection Lines (Behind Buttons) */}
        <svg className="absolute inset-0 pointer-events-none z-0" viewBox="0 0 340 340">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>
          <line x1="170" y1="170" x2="170" y2="40" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="170" y1="170" x2="170" y2="300" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="170" y1="170" x2="290" y2="170" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Buttons positioned absolutely */}
        <RenderButton type={ElementType.TRANSFORMATION} className="absolute top-0 left-1/2 transform -translate-x-1/2" />
        <RenderButton type={ElementType.GENESIS} className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        <RenderButton type={ElementType.AGGREGATE} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
        <RenderButton type={ElementType.CONNECTOR} className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2" />
      </div>

      {/* Info Card */}
      <div className="flex-1 max-w-lg w-full bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl border-l-8 border-hive-gold transition-all duration-500 ring-1 ring-slate-900/5 animate-in fade-in slide-in-from-right-4">
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-2xl shadow-inner transition-colors duration-500 ${selectedElement.color}`}>
            <Icon size={36} />
          </div>
          <div className="flex-1">
            <h3 className="text-4xl serif font-bold text-slate-900 transition-all duration-300">{t(`elements.${selectedElement.id}.name`)}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm mt-2 font-mono text-slate-500 uppercase tracking-wide">
               <span className="bg-slate-100 px-2 py-0.5 rounded">ID: {selectedElement.id}</span>
               <span className="text-slate-300">•</span>
               <span>{t(`elements.${selectedElement.id}.chemistry`)}</span>
               <span className="text-slate-300">•</span>
               <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                 <Dna size={12} /> {t(`elements.${selectedElement.id}.dnaBase`)}
               </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex gap-4">
             <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Biological Metaphor</h4>
               <p className="text-lg italic serif text-slate-800">"{t(`elements.${selectedElement.id}.biology`)}"</p>
             </div>
             <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Technical Definition</h4>
               <p className="text-sm font-bold text-slate-800">{t(`elements.${selectedElement.id}.tech`)}</p>
             </div>
          </div>

          <div className="text-slate-600 text-lg leading-relaxed transition-opacity duration-300">
            {t(`elements.${selectedElement.id}.description`)}
          </div>
        </div>
      </div>
    </div>
  );
};