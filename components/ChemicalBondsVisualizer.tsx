import React from 'react';
import { Heart, FlaskConical, Network, Zap } from 'lucide-react';
import { HIVE_ELEMENTS } from '../constants';
import { ElementType } from '../types';

interface AtomProps {
  id: string;
  symbol: string;
  color: string;
  icon: React.ReactNode;
  position: { x: number; y: number }; // Percentage 0-100
  isActive: boolean;
  onClick: () => void;
}

const iconMap: Record<string, React.FC<any>> = {
  Heart,
  FlaskConical,
  Network,
  Zap
};

const Atom: React.FC<AtomProps> = ({ 
  symbol, 
  color, 
  icon, 
  position, 
  isActive, 
  onClick 
}) => {
  return (
    <div 
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 z-20`}
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
      onClick={onClick}
    >
      {/* Electron Orbit Effect (Active Only) */}
      <div className={`absolute inset-0 -m-4 rounded-full border border-dashed border-slate-300 pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100 animate-spin-slow' : 'opacity-0'}`} />
      
      {/* Atom Core */}
      <div className={`relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl border-4 transition-transform duration-300 ${isActive ? 'scale-110 ring-4 ring-offset-4 ring-offset-white ring-blue-200' : 'scale-100 hover:scale-105'} ${color}`}>
        <div className="text-white drop-shadow-md">
          {icon}
        </div>
        {/* Atomic Symbol Badge */}
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif font-bold border-2 border-white shadow-lg">
          {symbol}
        </div>
      </div>
    </div>
  );
};

interface BondProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  type: 'single' | 'double' | 'ionic';
  active: boolean;
}

const ChemicalBond: React.FC<BondProps> = ({ start, end, type, active }) => {
  // Helper to calculate perpendicular offset for double bonds
  const getOffset = (offset: number) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len === 0) return { x: 0, y: 0 };
    return {
      x: (-dy / len) * offset,
      y: (dx / len) * offset
    };
  };

  const offset = getOffset(1.5); // 1.5% offset for parallel lines

  return (
    <g className="transition-all duration-500">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={active ? "#9333EA" : "#CBD5E1"} />
        </marker>
      </defs>

      {/* Single Bond */}
      {type === 'single' && (
        <>
          <line 
            x1={`${start.x}%`} y1={`${start.y}%`} 
            x2={`${end.x}%`} y2={`${end.y}%`} 
            stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round"
          />
          <line 
            x1={`${start.x}%`} y1={`${start.y}%`} 
            x2={`${end.x}%`} y2={`${end.y}%`} 
            stroke={active ? "#3B82F6" : "transparent"} strokeWidth="2" strokeLinecap="round"
            strokeDasharray="8,8" className={active ? "animate-pulse-fast" : ""}
          />
        </>
      )}

      {/* Double Bond */}
      {type === 'double' && (
        <>
          {/* Line 1 */}
          <line 
            x1={`${start.x + offset.x}%`} y1={`${start.y + offset.y}%`} 
            x2={`${end.x + offset.x}%`} y2={`${end.y + offset.y}%`} 
            stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"
          />
          {/* Line 2 */}
          <line 
            x1={`${start.x - offset.x}%`} y1={`${start.y - offset.y}%`} 
            x2={`${end.x - offset.x}%`} y2={`${end.y - offset.y}%`} 
            stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"
          />
          
          {/* Active Effect */}
          {active && (
            <g>
               <line 
                x1={`${start.x + offset.x}%`} y1={`${start.y + offset.y}%`} 
                x2={`${end.x + offset.x}%`} y2={`${end.y + offset.y}%`} 
                stroke="#F59E0B" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse-fast"
              />
              <line 
                x1={`${start.x - offset.x}%`} y1={`${start.y - offset.y}%`} 
                x2={`${end.x - offset.x}%`} y2={`${end.y - offset.y}%`} 
                stroke="#F59E0B" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse-fast"
              />
            </g>
          )}
        </>
      )}

      {/* Ionic / Directional Bond */}
      {type === 'ionic' && (
        <>
          <line 
            x1={`${start.x}%`} y1={`${start.y}%`} 
            x2={`${end.x}%`} y2={`${end.y}%`} 
            stroke="#CBD5E1" strokeWidth="4" strokeDasharray="8,6"
            markerEnd="url(#arrowhead)"
          />
           <line 
            x1={`${start.x}%`} y1={`${start.y}%`} 
            x2={`${end.x}%`} y2={`${end.y}%`} 
            stroke={active ? "#9333EA" : "transparent"} strokeWidth="2" strokeDasharray="4,4"
            className={active ? "animate-[dash_1s_linear_infinite]" : ""}
            markerEnd="url(#arrowhead)"
          />
          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: -20;
              }
            }
          `}</style>
        </>
      )}
    </g>
  );
};

interface ChemicalBondsVisualizerProps {
  activeId?: ElementType;
  onSelect?: (id: ElementType) => void;
}

export const ChemicalBondsVisualizer: React.FC<ChemicalBondsVisualizerProps> = ({
  activeId = ElementType.AGGREGATE,
  onSelect
}) => {
  // Defined positions for a stable layout
  const positions: Record<string, { x: number; y: number }> = {
    [ElementType.AGGREGATE]: { x: 50, y: 50 },
    [ElementType.TRANSFORMATION]: { x: 50, y: 15 },
    [ElementType.CONNECTOR]: { x: 80, y: 75 },
    [ElementType.GENESIS]: { x: 20, y: 75 }
  };

  const atoms = HIVE_ELEMENTS.map(el => {
    const Icon = iconMap[el.iconName];
    
    let bondType: 'single' | 'double' | 'ionic' | undefined;
    if (el.id === ElementType.TRANSFORMATION) bondType = 'single';
    else if (el.id === ElementType.CONNECTOR) bondType = 'double';
    else if (el.id === ElementType.GENESIS) bondType = 'ionic';

    return {
      id: el.id,
      symbol: el.symbol,
      name: el.name,
      role: el.chemistryRole,
      chemistry: el.chemistry,
      desc: el.detailedDescription || el.description,
      color: el.gradientColor || el.color,
      icon: <Icon size={32} />,
      position: positions[el.id],
      bondType
    };
  });

  const activeData = atoms.find(a => a.id === activeId) || atoms[0];

  return (
    <div className="flex flex-col xl:flex-row items-center gap-12 p-8 lg:p-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-xl ring-1 ring-slate-900/5 transition-all duration-500">
      
      {/* Molecule Visualization Stage */}
      <div className="relative w-full max-w-[500px] aspect-square flex-shrink-0">
        <div className="absolute inset-0 bg-slate-50 rounded-full border border-slate-100 shadow-inner opacity-50"></div>
        
        {/* Bonds Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
           {/* H Bond (Single) - Aggregate to Transformation */}
           <ChemicalBond 
             start={positions[ElementType.AGGREGATE]} 
             end={positions[ElementType.TRANSFORMATION]} 
             type="single"
             active={activeId === ElementType.AGGREGATE || activeId === ElementType.TRANSFORMATION} 
           />
           {/* O Bond (Double) - Aggregate to Connector */}
           <ChemicalBond 
             start={positions[ElementType.AGGREGATE]} 
             end={positions[ElementType.CONNECTOR]} 
             type="double"
             active={activeId === ElementType.AGGREGATE || activeId === ElementType.CONNECTOR} 
           />
           {/* N Bond (Ionic) - Aggregate to Genesis */}
           <ChemicalBond 
             start={positions[ElementType.AGGREGATE]} 
             end={positions[ElementType.GENESIS]} 
             type="ionic"
             active={activeId === ElementType.AGGREGATE || activeId === ElementType.GENESIS} 
           />
        </svg>

        {/* Atoms Layer */}
        {atoms.map(atom => (
          <Atom 
            key={atom.id}
            id={atom.id}
            symbol={atom.symbol}
            color={atom.color}
            icon={atom.icon}
            position={atom.position}
            isActive={activeId === atom.id}
            onClick={() => onSelect && onSelect(atom.id)}
          />
        ))}
      </div>

      {/* Interactive Description Panel */}
      <div className="flex-1 w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeId}>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ${activeData.color}`}>
               {activeData.symbol}
             </div>
             <div>
               <h3 className="text-3xl font-serif font-bold text-slate-900">{activeData.chemistry}</h3>
               <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{activeData.name}</p>
             </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl shadow-sm text-slate-700 leading-loose text-lg border-l-4 border-hive-amber">
          {activeData.desc}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 transition-colors hover:bg-white hover:shadow-md">
             <div className="text-xs uppercase text-slate-400 font-bold mb-2">Bond Type</div>
             <div className="text-slate-800 font-bold text-lg">{activeData.role}</div>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 transition-colors hover:bg-white hover:shadow-md">
             <div className="text-xs uppercase text-slate-400 font-bold mb-2">System Function</div>
             <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                {activeData.icon} <span>{activeData.name}</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};