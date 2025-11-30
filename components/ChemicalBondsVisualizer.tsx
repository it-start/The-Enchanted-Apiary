import React, { useState } from 'react';
import { Heart, FlaskConical, Network, Zap } from 'lucide-react';

interface AtomProps {
  symbol: string;
  name: string;
  role: string;
  chemistry: string;
  color: string;
  icon: React.ReactNode;
  position: string;
  isActive: boolean;
  onClick: () => void;
}

const Atom: React.FC<AtomProps> = ({ 
  symbol, 
  name, 
  role, 
  chemistry, 
  color, 
  icon, 
  position, 
  isActive, 
  onClick 
}) => {
  return (
    <div 
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10 ${position}`}
      onClick={onClick}
    >
      <div className={`relative flex items-center justify-center w-24 h-24 rounded-full shadow-xl border-4 transition-all duration-300 ${isActive ? 'scale-110 ring-4 ring-offset-2 ring-slate-400' : 'scale-100 hover:scale-105'} ${color}`}>
        <div className="text-white">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif font-bold border-2 border-white shadow-sm">
          {symbol}
        </div>
      </div>
      
      {/* Label Tooltip */}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="font-bold text-slate-900 text-sm">{name}</div>
        <div className="text-xs text-slate-500 font-serif">{chemistry}</div>
      </div>
    </div>
  );
};

export const ChemicalBondsVisualizer: React.FC = () => {
  const [activeAtom, setActiveAtom] = useState<string>('C');

  const atoms = [
    {
      id: 'C',
      symbol: 'C',
      name: 'Aggregate',
      role: 'Structural Core',
      chemistry: 'Carbon',
      desc: 'The backbone of life. Carbon atoms (Aggregates) form the stable structure that holds the complexity of the domain together. They bond with up to 4 other elements.',
      color: 'bg-gradient-to-br from-red-500 to-red-600 border-red-200',
      icon: <Heart size={32} />,
      position: 'top-1/2 left-1/2'
    },
    {
      id: 'H',
      symbol: 'H',
      name: 'Transformation',
      role: 'Bonding Agent',
      chemistry: 'Hydrogen',
      desc: 'The most abundant element. Hydrogen (Transformations) are lightweight, pure functions that attach to the carbon backbone to modify properties or prepare data.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-200',
      icon: <FlaskConical size={32} />,
      position: 'top-[20%] left-1/2'
    },
    {
      id: 'O',
      symbol: 'O',
      name: 'Connector',
      role: 'Reactive Interface',
      chemistry: 'Oxygen',
      desc: 'Highly reactive. Oxygen (Connectors) facilitates reactions with the external environment. Just as oxygen powers respiration, connectors power input/output.',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-200',
      icon: <Network size={32} />,
      position: 'bottom-[25%] right-[25%]'
    },
    {
      id: 'N',
      symbol: 'N',
      name: 'Genesis Event',
      role: 'Life Force',
      chemistry: 'Nitrogen',
      desc: 'Essential for life. Nitrogen (Genesis Events) is the key component of DNA/RNA. It carries the information that triggers new lifecycles and evolution within the hive.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600 border-purple-200',
      icon: <Zap size={32} />,
      position: 'bottom-[25%] left-[25%]'
    }
  ];

  const activeData = atoms.find(a => a.id === activeAtom)!;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-inner">
      
      {/* Molecule Visualization */}
      <div className="relative w-[400px] h-[400px] flex-shrink-0 bg-white rounded-full shadow-sm border border-slate-100">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[80%] h-[80%] border-2 border-dashed border-slate-900 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Bonds */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
           {/* C to H */}
           <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#CBD5E1" strokeWidth="4" />
           {/* C to O */}
           <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#CBD5E1" strokeWidth="4" />
           {/* C to N */}
           <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#CBD5E1" strokeWidth="4" />
        </svg>

        {atoms.map(atom => (
          <Atom 
            key={atom.id}
            {...atom}
            isActive={activeAtom === atom.id}
            onClick={() => setActiveAtom(atom.id)}
          />
        ))}
      </div>

      {/* Description Panel */}
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-3">
             <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${activeData.color}`}>
               {activeData.symbol}
             </span>
             {activeData.chemistry} = {activeData.name}
          </h3>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mt-1">{activeData.role}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-slate-300 shadow-sm text-slate-600 leading-relaxed text-lg">
          {activeData.desc}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-100 p-4 rounded-lg">
             <div className="text-xs uppercase text-slate-500 font-bold mb-1">Valency (Connections)</div>
             <div className="text-slate-800 font-medium">
               {activeAtom === 'C' ? '4 (Complex)' : activeAtom === 'H' ? '1 (Simple)' : activeAtom === 'O' ? '2 (Bridge)' : '3 (Branching)'}
             </div>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
             <div className="text-xs uppercase text-slate-500 font-bold mb-1">Code Analogy</div>
             <div className="text-slate-800 font-medium">
               {activeAtom === 'C' ? 'Domain Entity' : activeAtom === 'H' ? 'Pure Function' : activeAtom === 'O' ? 'Adapter / Port' : 'Domain Event'}
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};