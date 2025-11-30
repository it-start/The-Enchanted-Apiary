import React, { useState } from 'react';
import { AtcgVisualizer } from './components/AtcgVisualizer';
import { CodonSequencer } from './components/CodonSequencer';
import { ChemicalBondsVisualizer } from './components/ChemicalBondsVisualizer';
import { DnaMapping } from './components/DnaMapping';
import { HoneycombArchitecture } from './components/HoneycombArchitecture';
import { LifecycleVisualizer } from './components/LifecycleVisualizer';
import { ImmuneSystemVisualizer } from './components/ImmuneSystemVisualizer';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { LEARNING_PATHS, APP_METADATA } from './constants';
import { ElementType } from './types';
import { Hexagon, BookOpen, User, Users, Sprout, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Hexagon className="text-hive-amber fill-hive-gold" />
          <span className="font-serif font-bold text-xl text-slate-900">{APP_METADATA.subtitle}</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#philosophy" className="hover:text-hive-amber transition-colors">Philosophy</a>
          <a href="#atcg" className="hover:text-hive-amber transition-colors">The ATCG Code</a>
          <a href="#dynamics" className="hover:text-hive-amber transition-colors">Dynamics</a>
          <a href="#immune" className="hover:text-hive-amber transition-colors">Immune System</a>
        </div>
        <a href={APP_METADATA.githubUrl} target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
          Get the SDK
        </a>
      </div>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <Hexagon className="mx-auto text-slate-600 mb-4" />
      <p className="serif italic text-lg mb-8">"In the end, we are all beekeepers, tending our digital hives with patience, wisdom, and love."</p>
      <div className="flex justify-center gap-8 text-sm">
         <a href="#" className="hover:text-hive-gold">Documentation</a>
         <a href="#" className="hover:text-hive-gold">GitHub</a>
         <a href="#" className="hover:text-hive-gold">Community</a>
      </div>
      <p className="mt-8 text-xs text-slate-600">© 2024 The Hive Architecture Project. Open Source.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  // Global state for synchronized visualization
  const [activeElement, setActiveElement] = useState<ElementType>(ElementType.AGGREGATE);

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <Philosophy />

      {/* ATCG Visualizer Section */}
      <section id="atcg" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-hive-amber font-bold tracking-widest uppercase text-sm">The Periodic Table of Software</span>
            <h2 className="text-4xl md:text-5xl serif font-bold text-slate-900 mt-2">The Four Fundamental Primitives</h2>
            <div className="max-w-3xl mx-auto mt-6">
               <p className="text-xl text-slate-800 font-serif italic mb-4">
                 "Aggregate, Transformation, Connector, Genesis Event"
               </p>
               <p className="text-slate-600 leading-relaxed">
                  These four elements—<strong className="text-red-600">A</strong>ggregate, <strong className="text-blue-600">T</strong>ransformation, <strong className="text-amber-600">C</strong>onnector, and <strong className="text-purple-600">G</strong>enesis Event—form the <strong>ATCG</strong> code. Just like DNA, they combine to create complex, living software systems.
               </p>
            </div>
          </div>
          
          <div className="space-y-16">
            <AtcgVisualizer activeId={activeElement} onSelect={setActiveElement} />
            <DnaMapping activeId={activeElement} />
          </div>
        </div>
      </section>

      {/* Chemical Architecture Section */}
      <section id="chemistry" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Molecular Design</span>
             <h2 className="text-4xl serif font-bold text-slate-900 mt-2">The Chemical Bonds of Logic</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-600">
               Just as Carbon, Hydrogen, Oxygen, and Nitrogen combine to form the molecules of life, our software primitives combine to form the molecules of logic.
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
                <Sprout size={14} /> Living Systems
             </div>
             <h2 className="text-4xl serif font-bold text-slate-900">System Dynamics & Evolution</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-600">
               A Hive is not static structure; it is a living process. Understand the protected geometry of the core and the lifecycle of every component.
             </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16">
             <HoneycombArchitecture />
             <LifecycleVisualizer />
          </div>
        </div>
      </section>

      {/* Immune System Section */}
      <section id="immune" className="py-24 bg-slate-800 border-y border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/50 border border-blue-500/30 text-blue-200 text-xs font-bold uppercase mb-4">
                <ShieldCheck size={14} /> Pattern 4: G→C→A→C
             </div>
             <h2 className="text-4xl serif font-bold text-white mt-2">Self-Healing Architecture</h2>
             <p className="max-w-2xl mx-auto mt-4 text-slate-300">
               The Hive detects mutations (bugs) and deploys antibodies (fixes) automatically. 
               Connecting to live source: <span className="font-mono text-blue-400">it-start/The-Enchanted-Apiary</span>
             </p>
          </div>
          <ImmuneSystemVisualizer />
        </div>
      </section>

      {/* Sacred Patterns Section */}
      <section id="patterns" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-4xl serif font-bold text-hive-gold mb-4">The Sacred Sequences</h2>
              <p className="text-slate-400">Watch the flow of information as "Sacred Codons" execute logic.</p>
           </div>
           <CodonSequencer onActiveElementChange={setActiveElement} />
        </div>
      </section>

      {/* Learning Paths */}
      <section id="learning" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif font-bold text-slate-900 mb-4">Choose Your Adventure</h2>
            <p className="text-slate-600">Tailored guides for every role in the colony.</p>
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
                    Start Path
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;