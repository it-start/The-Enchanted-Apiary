import React from 'react';
import { HoneyPot } from '../Illustrations';
import { PHILOSOPHY_CONTENT } from '../../constants';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl serif font-bold text-slate-900 mb-12">{PHILOSOPHY_CONTENT.title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {PHILOSOPHY_CONTENT.description}
            </p>
            <ul className="space-y-4">
              {PHILOSOPHY_CONTENT.points.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-100 p-8 rounded-2xl relative">
             <div className="absolute -top-4 -right-4 bg-hive-gold text-xs font-bold px-3 py-1 rounded shadow transform rotate-3">
               {PHILOSOPHY_CONTENT.metaphor.title}
             </div>
             
             {/* Honey Pot Visual - External Data */}
             <div className="absolute -bottom-8 -right-8 w-24 h-24 pointer-events-none drop-shadow-xl z-10 hidden md:block">
                <HoneyPot />
             </div>

             <div className="space-y-4 font-serif">
                {PHILOSOPHY_CONTENT.metaphor.mappings.map((mapping, idx) => (
                  <div key={idx} className={`flex justify-between ${idx !== PHILOSOPHY_CONTENT.metaphor.mappings.length - 1 ? 'border-b border-stone-200 pb-2' : 'pb-2'}`}>
                    <span className="text-slate-500">{mapping.traditional}</span>
                    <span className={`font-bold ${mapping.highlight ? 'text-hive-amber' : 'text-slate-900'}`}>
                      {mapping.hive}
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};