import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../constants';
import { Egg, Bug, Box, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, React.FC<any>> = {
  Egg,
  Worm: Bug,
  Box,
  Plane
};

export const LifecycleVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-8 lg:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl serif font-bold text-slate-900 mb-4">{t('lifecycle.title')}</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t('lifecycle.desc')}
        </p>
      </div>

      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-stone-100 rounded-full z-0 hidden md:block"></div>
        <div 
          className="absolute top-8 left-0 h-1 bg-hive-amber rounded-full z-0 transition-all duration-700 hidden md:block"
          style={{ width: `${(activeStage / (LIFECYCLE_STAGES.length - 1)) * 100}%` }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const Icon = iconMap[stage.iconName];
            const isActive = idx === activeStage;
            const isPast = idx < activeStage;

            return (
              <div 
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer transition-all duration-500 group ${isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center border-4 transition-all duration-500 mb-6 bg-white ${
                  isActive ? 'border-hive-amber text-hive-amber shadow-lg shadow-amber-100' : 
                  isPast ? 'border-green-500 text-green-500' : 'border-stone-200 text-stone-400'
                }`}>
                  {isPast ? <CheckCircle2 size={32} /> : <Icon size={32} />}
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl border transition-all duration-500 h-full ${
                  isActive ? 'bg-hive-pollen border-hive-amber shadow-md' : 'bg-stone-50 border-stone-100 hover:border-stone-300'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t(`lifecycle.stages.${stage.id}.name`)}</span>
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-stone-200 text-slate-600">{stage.techConfig}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{t(`lifecycle.stages.${stage.id}.metaphor`)}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t(`lifecycle.stages.${stage.id}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => setActiveStage(prev => (prev + 1) % LIFECYCLE_STAGES.length)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
        >
          {t('lifecycle.evolve')} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};