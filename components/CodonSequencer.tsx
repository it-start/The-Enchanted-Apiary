import React, { useState, useEffect } from 'react';
import { SACRED_CODONS, HIVE_ELEMENTS } from '../constants';
import { HexDisplay } from './HexButton';
import { ArrowRight, Play, RefreshCw } from 'lucide-react';

export const CodonSequencer: React.FC = () => {
  const [activePatternIdx, setActivePatternIdx] = useState(0);
  const [step, setStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const pattern = SACRED_CODONS[activePatternIdx];

  const startAnimation = () => {
    setStep(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && step < pattern.sequence.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (step >= pattern.sequence.length) {
      setIsPlaying(false);
    }
  }, [step, isPlaying, pattern]);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-32 bg-amber-500 opacity-5 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h3 className="text-3xl serif text-hive-gold mb-2">The Sacred Codons</h3>
            <p className="text-slate-400 max-w-md">
              Just as DNA uses codons to build life, the Hive uses patterns to build software flows.
            </p>
          </div>
          
          <div className="flex gap-2 bg-slate-800 p-1 rounded-lg">
            {SACRED_CODONS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { setActivePatternIdx(idx); setStep(-1); setIsPlaying(false); }}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${activePatternIdx === idx ? 'bg-hive-amber text-slate-900 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
           <h4 className="text-xl font-bold text-white mb-2">{pattern.name}</h4>
           <p className="text-slate-300 mb-4">{pattern.description}</p>
           <div className="font-mono text-sm text-hive-gold bg-slate-950 p-3 rounded inline-block">
             <span className="text-slate-500">Example:</span> {pattern.example}
           </div>
        </div>

        {/* Visualization Stage */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 min-h-[160px]">
            {pattern.sequence.map((elType, idx) => {
              const elDetails = HIVE_ELEMENTS.find(e => e.id === elType)!;
              const isActive = idx <= step && step >= 0;
              const isCurrent = idx === step;
              
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <ArrowRight 
                      className={`transition-colors duration-500 ${isActive ? 'text-hive-gold' : 'text-slate-700'}`} 
                      size={24} 
                    />
                  )}
                  <div className={`transition-all duration-700 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale'}`}>
                    <HexDisplay 
                      label={elType} 
                      subLabel={elDetails.name}
                      color={isCurrent ? 'bg-hive-gold animate-pulse-slow' : 'bg-slate-100'} 
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="mt-12">
            <button
              onClick={startAnimation}
              disabled={isPlaying}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all ${isPlaying ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-hive-gold to-hive-amber text-slate-900 hover:scale-105 shadow-lg shadow-amber-900/20'}`}
            >
              {step >= pattern.sequence.length ? <><RefreshCw size={20}/> Replay Sequence</> : <><Play size={20}/> Run Sequence</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};