import React from 'react';
import { Heart, FlaskConical, Network, Zap, ArrowRight } from 'lucide-react';
import { DnaStrand } from './Illustrations';
import { HexDisplay } from './HexButton';

export const DnaMapping: React.FC = () => {
  const mappings = [
    {
      dnaTitle: "Adenine (A)",
      hiveId: "A",
      hiveName: "Aggregate",
      color: "bg-red-100",
      icon: <Heart size={20} className="text-red-800" />,
      desc: "The structural core. Like Adenine pairs in DNA, Aggregates pair with logic to form the backbone of the system."
    },
    {
      dnaTitle: "Thymine (T)",
      hiveId: "T",
      hiveName: "Transformation",
      color: "bg-blue-100",
      icon: <FlaskConical size={20} className="text-blue-800" />,
      desc: "The processing unit. Like Thymine provides stability, Transformations provide pure, reliable logic processing."
    },
    {
      dnaTitle: "Cytosine (C)",
      hiveId: "C",
      hiveName: "Connector",
      color: "bg-amber-100",
      icon: <Network size={20} className="text-amber-800" />,
      desc: "The bridge. Like Cytosine bonds across the strand, Connectors bond the internal core to the external world."
    },
    {
      dnaTitle: "Guanine (G)",
      hiveId: "G",
      hiveName: "Genesis Event",
      color: "bg-purple-100",
      icon: <Zap size={20} className="text-purple-800" />,
      desc: "The energy spark. Like Guanine enables energy transfer, Genesis Events trigger reactions and state changes."
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-8 lg:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-64 bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="flex flex-col xl:flex-row gap-12 items-center">
        
        {/* DNA Visual */}
        <div className="flex flex-col items-center gap-6">
            <div className="relative h-[480px] w-40 flex items-center justify-center bg-white rounded-full shadow-inner border border-stone-100 py-8">
                <DnaStrand className="h-full w-full drop-shadow-md" />
            </div>
            <div className="text-center">
                <h3 className="font-serif font-bold text-2xl text-slate-900">The Genetic Code</h3>
                <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Biological Base pairs mapping directly to Software Primitives.</p>
            </div>
        </div>

        {/* Mapping Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {mappings.map((m, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    {/* DNA Side */}
                    <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">DNA Base</div>
                        <div className="font-serif font-bold text-lg text-slate-700 mb-2">{m.dnaTitle}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>

                    {/* Connection */}
                    <div className="hidden sm:flex items-center justify-center w-8 text-slate-300 group-hover:text-hive-amber transition-colors">
                        <ArrowRight size={20} />
                    </div>

                    {/* Hive Side */}
                    <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                        <HexDisplay 
                            label={m.hiveId} 
                            subLabel={m.hiveName} 
                            icon={m.icon} 
                            color={m.color} 
                        />
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};
