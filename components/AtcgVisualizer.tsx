import React, { useState } from 'react';
import { ElementType } from '../types';
import { HIVE_ELEMENTS } from '../constants';
import { HexButton } from './HexButton';
import { Heart, FlaskConical, Network, Zap, ArrowRight } from 'lucide-react';

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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12 px-4">
      {/* Interactive Hive */}
      <div className="relative w-80 h-80 flex-shrink-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
           <HexButton 
            active={selectedId === ElementType.TRANSFORMATION}
            onClick={() => setSelectedId(ElementType.TRANSFORMATION)}
            colorClass="bg-blue-300"
           >
             <div className="flex flex-col items-center">
                <span className="text-2xl">T</span>
                <span className="text-xs">Enzyme</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
           <HexButton 
            active={selectedId === ElementType.GENESIS}
            onClick={() => setSelectedId(ElementType.GENESIS)}
            colorClass="bg-purple-300"
           >
             <div className="flex flex-col items-center">
                <span className="text-2xl">G</span>
                <span className="text-xs">Event</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
           <HexButton 
            active={selectedId === ElementType.AGGREGATE}
            onClick={() => setSelectedId(ElementType.AGGREGATE)}
            colorClass="bg-red-300"
           >
             <div className="flex flex-col items-center">
                <span className="text-2xl">A</span>
                <span className="text-xs">Organ</span>
             </div>
           </HexButton>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
           <HexButton 
            active={selectedId === ElementType.CONNECTOR}
            onClick={() => setSelectedId(ElementType.CONNECTOR)}
            colorClass="bg-amber-300"
           >
             <div className="flex flex-col items-center">
                <span className="text-2xl">C</span>
                <span className="text-xs">Bridge</span>
             </div>
           </HexButton>
        </div>
        
        {/* Connection Lines (Decorative SVG) */}
        <svg className="absolute inset-0 pointer-events-none -z-10 opacity-30" viewBox="0 0 100 100">
          <line x1="50" y1="20" x2="50" y2="80" stroke="#000" strokeWidth="1" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#000" strokeWidth="1" />
          <line x1="30" y1="35" x2="70" y2="65" stroke="#000" strokeWidth="1" />
          <line x1="30" y1="65" x2="70" y2="35" stroke="#000" strokeWidth="1" />
        </svg>
      </div>

      {/* Info Card */}
      <div className="flex-1 max-w-lg bg-white p-8 rounded-2xl shadow-xl border-l-8 border-hive-gold transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-full ${selectedElement.color}`}>
            <Icon size={32} />
          </div>
          <div>
            <h3 className="text-3xl serif font-bold text-slate-900">{selectedElement.name}</h3>
            <div className="flex gap-2 text-sm mt-1 font-mono text-slate-500">
               <span>ID: {selectedElement.id}</span>
               <span>•</span>
               <span>{selectedElement.chemistry}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Biological Metaphor</h4>
            <p className="text-lg italic serif text-slate-700">"{selectedElement.biology}"</p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Technical Definition</h4>
            <p className="text-slate-800 font-medium">{selectedElement.tech}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg text-slate-600 text-sm leading-relaxed">
            {selectedElement.description}
          </div>
        </div>
      </div>
    </div>
  );
};