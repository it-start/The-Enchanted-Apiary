import React, { useState, useEffect, useRef } from 'react';
import { SACRED_CODONS, HIVE_ELEMENTS } from '../constants';
import { HexDisplay } from './HexButton';
import { ArrowRight, Play, RefreshCw, Terminal, Activity } from 'lucide-react';
import { ElementType } from '../types';

interface CodonSequencerProps {
  onActiveElementChange?: (element: ElementType) => void;
}

export const CodonSequencer: React.FC<CodonSequencerProps> = ({ onActiveElementChange }) => {
  const [activePatternIdx, setActivePatternIdx] = useState(0);
  const [step, setStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const pattern = SACRED_CODONS[activePatternIdx];

  const startAnimation = () => {
    setStep(0);
    setLogs([`> INIT SEQUENCE: ${pattern.name.toUpperCase()}`]);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (isPlaying && step < pattern.sequence.length) {
      const currentElType = pattern.sequence[step];
      const elDetails = HIVE_ELEMENTS.find(e => e.id === currentElType);
      
      // Update global active state if callback provided
      if (onActiveElementChange) {
        onActiveElementChange(currentElType);
      }
      
      // Simulate "processing" log
      setTimeout(() => {
         setLogs(prev => [...prev, `> ACCESSING [${currentElType}] ${elDetails?.name.toUpperCase()}...`, `  -> ${elDetails?.tech}`]);
      }, 100);

      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 1500); // Slower for dramatic effect
      return () => clearTimeout(timer);
    } else if (step >= pattern.sequence.length && isPlaying) {
      setLogs(prev => [...prev, `> SEQUENCE COMPLETE.`, `> RESULT: SUCCESS`]);
      setIsPlaying(false);
    }
  }, [step, isPlaying, pattern, onActiveElementChange]);

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col xl:flex-row">
      
      {/* Left Panel: Visualizer */}
      <div className="flex-1 p-8 lg:p-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 p-40 bg-hive-amber opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="mb-10">
            <h3 className="text-3xl serif text-hive-gold mb-2 flex items-center gap-3">
              <Activity className="text-hive-amber" /> Sacred Codons
            </h3>
            <p className="text-slate-400">Select a sequence to compile the Hive flow.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {SACRED_CODONS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { setActivePatternIdx(idx); setStep(-1); setIsPlaying(false); setLogs([]); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activePatternIdx === idx ? 'bg-hive-amber text-slate-900 shadow-lg shadow-amber-900/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 min-h-[180px]">
            {pattern.sequence.map((elType, idx) => {
              const elDetails = HIVE_ELEMENTS.find(e => e.id === elType)!;
              const isActive = idx <= step && step >= 0;
              const isCurrent = idx === step;
              
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <ArrowRight 
                      className={`transition-colors duration-500 ${isActive ? 'text-hive-gold' : 'text-slate-800'}`} 
                      size={24} 
                    />
                  )}
                  <div className={`transition-all duration-700 transform ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-30 grayscale'}`}>
                    <HexDisplay 
                      label={elType} 
                      subLabel={elDetails.name}
                      color={isCurrent ? 'bg-hive-gold animate-pulse-slow shadow-[0_0_30px_rgba(251,191,36,0.4)]' : 'bg-slate-100'} 
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={startAnimation}
              disabled={isPlaying}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all transform ${isPlaying ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-hive-gold to-hive-amber text-slate-900 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20'}`}
            >
              {step >= pattern.sequence.length ? <><RefreshCw size={20}/> Replay Sequence</> : <><Play size={20} fill="currentColor"/> Run Sequence</>}
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel: Bio-Terminal */}
      <div className="w-full xl:w-96 bg-slate-950 border-l border-slate-800 p-6 flex flex-col font-mono text-sm">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
           <span className="text-slate-400 flex items-center gap-2"><Terminal size={16}/> HIVE_KERNEL_V1.0</span>
           <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
           </div>
        </div>
        
        <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-3 max-h-[400px] xl:max-h-none scrollbar-hide">
          {logs.length === 0 && (
            <div className="text-slate-600 italic text-center mt-20">Waiting for input sequence...</div>
          )}
          {logs.map((log, i) => (
            <div key={i} className="text-emerald-400 break-words leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
              {log}
            </div>
          ))}
          {isPlaying && (
             <div className="text-emerald-500/50 animate-pulse">_</div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
           <div className="flex justify-between">
              <span>MEM: 64MB</span>
              <span>CPU: {isPlaying ? '45%' : '2%'}</span>
           </div>
           <div>STATUS: {isPlaying ? 'PROCESSING' : 'IDLE'}</div>
        </div>
      </div>

    </div>
  );
};