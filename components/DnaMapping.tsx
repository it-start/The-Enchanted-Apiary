import React from 'react';
import { Heart, FlaskConical, Network, Zap } from 'lucide-react';
import { DnaStrand } from './Illustrations';

export const DnaMapping: React.FC = () => {
  const mappings = [
    {
      bioBase: "Adenine (A)",
      hiveEl: "Aggregate",
      color: "text-red-600",
      bgColor: "bg-red-100",
      borderColor: "border-red-200",
      icon: <Heart size={18} />,
      desc: "The core building block of life/logic."
    },
    {
      bioBase: "Thymine (T)",
      hiveEl: "Transformation",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      icon: <FlaskConical size={18} />,
      desc: "Process and structural integrity."
    },
    {
      bioBase: "Cytosine (C)",
      hiveEl: "Connector",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      icon: <Network size={18} />,
      desc: "Bonds that bridge strands/systems."
    },
    {
      bioBase: "Guanine (G)",
      hiveEl: "Genesis Event",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      icon: <Zap size={18} />,
      desc: "Energy transfer and reaction triggering."
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-8 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-32 bg-slate-50 rounded-full blur-3xl -z-10"></div>
      
      {/* Visual DNA */}
      <div className="relative h-64 w-32 flex-shrink-0 flex items-center justify-center">
        <DnaStrand className="h-full w-full drop-shadow-xl" />
      </div>

      {/* Mapping Info */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Genetic Mappings</span>
        </h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Just as Adenine pairs with Thymine to create biological structure, our <span className="font-bold text-slate-900">Aggregates</span> pair with <span className="font-bold text-slate-900">Transformations</span> to create software structure. This isn't just a metaphor; it's a strict structural compliance pattern.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mappings.map((m, i) => (
            <div key={i} className={`p-4 rounded-xl border ${m.borderColor} ${m.bgColor} transition-transform hover:-translate-y-1`}>
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{m.bioBase}</span>
                 <div className={`${m.color}`}>{m.icon}</div>
              </div>
              <div className={`font-serif font-bold text-lg ${m.color} mb-1`}>{m.hiveEl}</div>
              <div className="text-xs text-slate-600 leading-tight">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};