import React, { useState } from 'react';
import { AtcgVisualizer } from '../components/AtcgVisualizer';
import { CodonSequencer } from '../components/CodonSequencer';
import { ChemicalBondsVisualizer } from '../components/ChemicalBondsVisualizer';
import { DnaMapping } from '../components/DnaMapping';
import { HoneycombArchitecture } from '../components/HoneycombArchitecture';
import { LifecycleVisualizer } from '../components/LifecycleVisualizer';
import { ImmuneSystemVisualizer } from '../components/ImmuneSystemVisualizer';
import { AgentVisualizer } from '../components/AgentVisualizer';
import { Hero } from '../components/sections/Hero';
import { Philosophy } from '../components/sections/Philosophy';
import { LEARNING_PATHS } from '../constants';
import { ElementType } from '../types';
import { BookOpen, User, Users, Sprout, ShieldCheck, Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  // Global state for synchronized visualization
  const [activeElement, setActiveElement] = useState<ElementType>(ElementType.AGGREGATE);
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Philosophy />

      {/* ATCG Visualizer Section */}
      <section id="atcg" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-hive-amber font-bold tracking-widest uppercase text-sm">{t('sections.atcg.eyebrow')}</span>
            <h2 className="text-4xl md:text-5xl serif font-bold text-slate-900 mt-2">{t('sections.atcg.title')}</h2>
            <div className="max-w-3xl mx-auto mt-6">
               <p className="text-xl text-slate-800 font-serif italic mb-4">
                 {t('sections.atcg.quote')}
               </p>
               <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sections.atcg.desc') }} />
            </div>
          </div>
          
          <div className="space-y-16">
            <AtcgVisualizer activeId={activeElement} onSelect={setActiveElement} />
            <DnaMapping activeId={activeElement} onSelect={setActiveElement} />
          </div>
        </div>
      </section>

      {/* Chemical Architecture Section */}
      <section id="chemistry" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">{t('sections.chemistry.eyebrow')}</span>
             <h2 className="text-4xl serif font-bold text-slate-900 mt-2">{t('sections.chemistry.title')}</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-600">
               {t('sections.chemistry.desc')}
             </p>
          </div>
          <ChemicalBondsVisualizer activeId={activeElement} onSelect={setActiveElement} />
        </div>
      </section>

      {/* System Dynamics Section */}
      <section id="dynamics" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-100 text-green-800 text-xs font-bold uppercase mb-4">
                <Sprout size={14} /> {t('sections.dynamics.tag')}
             </div>
             <h2 className="text-4xl serif font-bold text-slate-900">{t('sections.dynamics.title')}</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-600">
               {t('sections.dynamics.desc')}
             </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16">
             <HoneycombArchitecture activeElement={activeElement} />
             <LifecycleVisualizer />
          </div>
        </div>
      </section>

      {/* Agent Section */}
      <section id="agent" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-100 text-purple-800 text-xs font-bold uppercase mb-4">
                <Bot size={14} /> {t('sections.agent.tag')}
             </div>
             <h2 className="text-4xl serif font-bold text-slate-900">{t('sections.agent.title')}</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-600">
               {t('sections.agent.desc')}
             </p>
          </div>
          <AgentVisualizer />
        </div>
      </section>

      {/* Immune System Section */}
      <section id="immune" className="py-24 bg-slate-800 border-y border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/50 border border-blue-500/30 text-blue-200 text-xs font-bold uppercase mb-4">
                <ShieldCheck size={14} /> {t('sections.immune.tag')}
             </div>
             <h2 className="text-4xl serif font-bold text-white mt-2">{t('sections.immune.title')}</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-300">
               {t('sections.immune.desc')} <span className="font-mono text-blue-400">it-start/The-Enchanted-Apiary</span>
             </p>
          </div>
          <ImmuneSystemVisualizer />
        </div>
      </section>

      {/* Sacred Patterns Section */}
      <section id="patterns" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-4xl serif font-bold text-hive-gold mb-4">{t('sections.patterns.title')}</h2>
              <p className="text-slate-400">{t('sections.patterns.desc')}</p>
           </div>
           <CodonSequencer onActiveElementChange={setActiveElement} />
        </div>
      </section>

      {/* Learning Paths */}
      <section id="learning" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif font-bold text-slate-900 mb-4">{t('sections.learning.title')}</h2>
            <p className="text-slate-600">{t('sections.learning.desc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path, idx) => {
              const icons = [BookOpen, Users, User];
              const PathIcon = icons[idx];
              return (
                <div key={idx} className="group bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-hive-amber transition-colors hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hive-gold/10 rounded-full -mr-16 -mt-16 group-hover:bg-hive-gold/20 transition-colors"></div>
                  
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-hive-amber mb-6">
                    <PathIcon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">{path.role} • {path.duration}</div>
                  
                  <p className="text-slate-600 mb-6 min-h-[48px]">{path.focus}</p>
                  
                  <div className="space-y-3">
                    {path.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-hive-amber"></div>
                        {step}
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 w-full py-3 rounded-lg border border-slate-300 font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                    {t('sections.learning.start')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};