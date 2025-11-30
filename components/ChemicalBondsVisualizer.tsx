import React, { useState } from 'react';
import { Heart, FlaskConical, Network, Zap } from 'lucide-react';

interface AtomProps {
  id: string;
  symbol: string;
  color: string;
  icon: React.ReactNode;
  position: { x: number; y: number }; // Percentage 0-100
  isActive: boolean;
  onClick: () => void;
}

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

// SVG Bond Line with animated flow
const ChemicalBond: React.FC<{ start: {x: number, y: number}, end: {x: number, y: number}, active: boolean }> = ({ start, end, active }) => {
  return (
    <g>
      {/* Base Bond */}
      <line 
        x1={`${start.x}%`} y1={`${start.y}%`} 
        x2={`${end.x}%`} y2={`${end.y}%`} 
        stroke="#CBD5E1" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      {/* Active Energy Flow */}
      <line 
        x1={`${start.x}%`} y1={`${start.y}%`} 
        x2={`${end.x}%`} y2={`${end.y}%`} 
        stroke={active ? "#F59E0B" : "transparent"} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="10,10"
        className={active ? "animate-pulse-fast" : ""}
      />
    </g>
  );
};

export const ChemicalBondsVisualizer: React.FC = () => {
  const [activeAtom, setActiveAtom] = useState<string>('C');

  // Defined positions for a stable layout
  const positions = {
    C: { x: 50, y: 50 },
    H: { x: 50, y: 15 },
    O: { x: 80, y: 75 },
    N: { x: 20, y: 75 }
  };

  const atoms = [
    {
      id: 'C',
      symbol: 'C',
      name: 'Aggregate',
      role: 'Structural Core',
      chemistry: 'Carbon',
      desc: 'The backbone of life. Carbon atoms (Aggregates) form the stable structure that holds the complexity of the domain together. They act as the "Queen Bee" of logic.',
      color: 'bg-gradient-to-br from-red-500 to-red-600 border-red-200',
      icon: <Heart size={32} />,
      position: positions.C
    },
    {
      id: 'H',
      symbol: 'H',
      name: 'Transformation',
      role: 'Bonding Agent',
      chemistry: 'Hydrogen',
      desc: 'Hydrogen (Transformations) are lightweight, pure functions. They bond to the Carbon backbone to modify data without changing state, like enzymes aiding digestion.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-200',
      icon: <FlaskConical size={32} />,
      position: positions.H
    },
    {
      id: 'O',
      symbol: 'O',
      name: 'Connector',
      role: 'Reactive Interface',
      chemistry: 'Oxygen',
      desc: 'Highly reactive Oxygen (Connectors) facilitates reactions with the outside world. They breathe life (data) into the system from external sources.',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-200',
      icon: <Network size={32} />,
      position: positions.O
    },
    {
      id: 'N',
      symbol: 'N',
      name: 'Genesis Event',
      role: 'Evolutionary Force',
      chemistry: 'Nitrogen',
      desc: 'Nitrogen (Genesis Events) is the key component of DNA. It records history and triggers new lifecycles, allowing the architecture to evolve over time.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600 border-purple-200',
      icon: <Zap size={32} />,
      position: positions.N
    }
  ];

  const activeData = atoms.find(a => a.id === activeAtom)!;

  return (
    <div className="flex flex-col xl:flex-row items-center gap-12 p-8 lg:p-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-xl ring-1 ring-slate-900/5">
      
      {/* Molecule Visualization Stage */}
      <div className="relative w-full max-w-[500px] aspect-square flex-shrink-0">
        <div className="absolute inset-0 bg-slate-50 rounded-full border border-slate-100 shadow-inner opacity-50"></div>
        
        {/* Bonds Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
           <ChemicalBond start={positions.C} end={positions.H} active={activeAtom === 'C' || activeAtom === 'H'} />
           <ChemicalBond start={positions.C} end={positions.O} active={activeAtom === 'C' || activeAtom === 'O'} />
           <ChemicalBond start={positions.C} end={positions.N} active={activeAtom === 'C' || activeAtom === 'N'} />
        </svg>

        {/* Atoms Layer */}
        {atoms.map(atom => (
          <Atom 
            key={atom.id}
            {...atom}
            isActive={activeAtom === atom.id}
            onClick={() => setActiveAtom(atom.id)}
          />
        ))}
      </div>

      {/* Interactive Description Panel */}
      <div className="flex-1 w-full space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg ${activeData.color}`}>
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
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
             <div className="text-xs uppercase text-slate-400 font-bold mb-2">Molecular Role</div>
             <div className="text-slate-800 font-bold text-lg">{activeData.role}</div>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
             <div className="text-xs uppercase text-slate-400 font-bold mb-2">Hive Equivalent</div>
             <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                {activeData.icon} <span>{activeData.name}</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};