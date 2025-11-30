import React, { useState, useEffect } from 'react';
import { ARCH_LAYERS } from '../constants';
import { ElementType } from '../types';
import { Shield, Crown, Globe, ArrowDownUp } from 'lucide-react';

interface HoneycombArchitectureProps {
  activeElement?: ElementType;
}

export const HoneycombArchitecture: React.FC<HoneycombArchitectureProps> = ({ activeElement }) => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  // Sync internal layer state with external element state
  useEffect(() => {
    if (!activeElement) return;
    
    // Map ATCG Elements to Architectural Layers
    if (activeElement === ElementType.CONNECTOR) {
      setActiveLayer('adapters');
    } else if (activeElement === ElementType.AGGREGATE || activeElement === ElementType.TRANSFORMATION || activeElement === ElementType.GENESIS) {
      setActiveLayer('domain');
    } else {
      setActiveLayer(null);
    }
  }, [activeElement]);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
      
      {/* Visual Map */}
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
        
        {/* Layer 1: External World (The Garden) */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-dashed border-stone-300 transition-all duration-500 ${activeLayer === 'external' ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}`}
        ></div>
        
        {/* External Hexagons */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div 
            key={i}
            className={`absolute w-24 h-24 transition-all duration-500 cursor-pointer ${activeLayer === 'external' || activeLayer === null ? 'opacity-100' : 'opacity-30 blur-sm'}`}
            style={{ 
              transform: `rotate(${deg}deg) translate(160px) rotate(-${deg}deg)`,
            }}
            onMouseEnter={() => setActiveLayer('external')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            <div className="w-full h-full bg-stone-800 hex-clip flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
               <Globe className="text-stone-400" size={32} />
            </div>
          </div>
        ))}

        {/* Layer 2: Adapters (Worker Bees) */}
        {[30, 90, 150, 210, 270, 330].map((deg, i) => (
          <div 
            key={i}
            className={`absolute w-24 h-24 transition-all duration-500 cursor-pointer ${activeLayer === 'adapters' || activeLayer === null ? 'opacity-100' : 'opacity-30 blur-sm'}`}
            style={{ 
              transform: `rotate(${deg}deg) translate(95px) rotate(-${deg}deg)`,
            }}
            onMouseEnter={() => setActiveLayer('adapters')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            <div className="w-full h-full bg-amber-400 hex-clip flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
               <Shield className="text-amber-900" size={32} />
            </div>
          </div>
        ))}

        {/* Layer 3: Domain (Queen) */}
        <div 
          className={`relative z-20 w-32 h-32 cursor-pointer transition-all duration-500 ${activeLayer === 'domain' || activeLayer === null ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
          onMouseEnter={() => setActiveLayer('domain')}
          onMouseLeave={() => setActiveLayer(null)}
        >
           <div className="w-full h-full bg-yellow-300 hex-clip flex items-center justify-center shadow-2xl ring-4 ring-white">
              <Crown className="text-yellow-800" size={48} />
           </div>
        </div>

      </div>

      {/* Legend / Details */}
      <div className="flex-1 space-y-6 w-full">
        <h3 className="text-3xl serif font-bold text-slate-900 mb-6">The Queen's Chamber</h3>
        <p className="text-slate-600 mb-8">
          The Hive Architecture strictly enforces the dependency rule. The Queen (Business Logic) knows nothing of the outside world. Workers (Adapters) protect her and translate all communication.
        </p>

        <div className="space-y-4">
          {ARCH_LAYERS.map((layer) => (
            <div 
              key={layer.id}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeLayer === layer.id 
                  ? 'bg-white border-hive-amber shadow-lg scale-105' 
                  : 'bg-stone-50 border-stone-200 opacity-80 hover:opacity-100'
              }`}
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${layer.color}`}>
                    {layer.name}
                  </span>
                  <span className="font-serif font-bold text-slate-800">{layer.analogy}</span>
                </div>
                {activeLayer === layer.id && <ArrowDownUp size={16} className="text-slate-400" />}
              </div>
              <p className="text-sm text-slate-600 mb-3">{layer.role}</p>
              <div className="flex flex-wrap gap-2">
                {layer.components.map((comp, i) => (
                  <span key={i} className="text-xs bg-white px-2 py-1 rounded border border-stone-200 text-slate-500 font-mono">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};