import React, { useState } from 'react';
import { ElementType } from '../types';
import { HIVE_ELEMENTS } from '../constants';
import { HexButton } from './HexButton';
import { Heart, FlaskConical, Network, Zap } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Heart,
  FlaskConical,
  Network,
  Zap
};

export const AtcgVisualizer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<ElementType>(ElementType.AGGREGATE);
  const selectedElement = HIVE_ELEMENTS.find(e => e.id === selectedId) || HIVE_ELEMENTS[0];
  const Icon = iconMap[selectedElement.iconName];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-16 py-12 px-4">
      {/* Interactive Hive - Using a fixed size container to ensure SVG alignment */}
      <div className="relative w-[340px] h-[340px] flex-shrink-0 select-none">
        
        {/* Connection Lines (Behind Buttons) */}
        <svg className="absolute inset-0 pointer-events-none z-0" viewBox="0 0 340 340">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>
          {/* Connecting lines drawn specifically for these coordinates */}
          {/* Center (Aggregate) to others */}
          <line x1="170" y1="170" x2="170" y2="40" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="170" y1="170" x2="170" y2="300" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="170" y1="170" x2="290" y2="170" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Buttons positioned absolutely */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
           <HexButton 
            active={selectedId === ElementType.TRANSFORMATION}
            onClick={() => setSelectedId(ElementType.TRANSFORMATION)}
            colorClass="bg-blue-100"
            className="hover:drop-shadow-[0_10px_15px_rgba(59,130,246,0.3)]"
           >
             <div className="flex flex-col items-center text-blue-900">
                <span className="text-3xl font-serif">T</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Enzyme</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
           <HexButton 
            active={selectedId === ElementType.GENESIS}
            onClick={() => setSelectedId(ElementType.GENESIS)}
            colorClass="bg-purple-100"
            className="hover:drop-shadow-[0_10px_15px_rgba(147,51,234,0.3)]"
           >
             <div className="flex flex-col items-center text-purple-900">
                <span className="text-3xl font-serif">G</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Event</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
           <HexButton 
            active={selectedId === ElementType.AGGREGATE}
            onClick={() => setSelectedId(ElementType.AGGREGATE)}
            colorClass="bg-red-100"
            className="hover:drop-shadow-[0_10px_15px_rgba(239,68,68,0.3)]"
           >
             <div className="flex flex-col items-center text-red-900">
                <span className="text-3xl font-serif">A</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Organ</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
           <HexButton 
            active={selectedId === ElementType.CONNECTOR}
            onClick={() => setSelectedId(ElementType.CONNECTOR)}
            colorClass="bg-amber-100"
            className="hover:drop-shadow-[0_10px_15px_rgba(245,158,11,0.3)]"
           >
             <div className="flex flex-col items-center text-amber-900">
                <span className="text-3xl font-serif">C</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Bridge</span>
             </div>
           </HexButton>
        </div>
      </div>

      {/* Info Card */}
      <div className="flex-1 max-w-lg w-full bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl border-l-8 border-hive-gold transition-all duration-300 ring-1 ring-slate-900/5">
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-2xl shadow-inner ${selectedElement.color}`}>
            <Icon size={36} />
          </div>
          <div>
            <h3 className="text-4xl serif font-bold text-slate-900">{selectedElement.name}</h3>
            <div className="flex items-center gap-2 text-sm mt-1 font-mono text-slate-500 uppercase tracking-wide">
               <span className="bg-slate-100 px-2 py-0.5 rounded">ID: {selectedElement.id}</span>
               <span className="text-slate-300">•</span>
               <span>{selectedElement.chemistry}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex gap-4">
             <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Biological Metaphor</h4>
               <p className="text-lg italic serif text-slate-800">"{selectedElement.biology}"</p>
             </div>
             <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Technical Definition</h4>
               <p className="text-sm font-bold text-slate-800">{selectedElement.tech}</p>
             </div>
          </div>

          <div className="text-slate-600 text-lg leading-relaxed">
            {selectedElement.description}
          </div>
        </div>
      </div>
    </div>
  );
};