import React from 'react';
import { AtcgVisualizer } from './components/AtcgVisualizer';
import { CodonSequencer } from './components/CodonSequencer';
import { ChemicalBondsVisualizer } from './components/ChemicalBondsVisualizer';
import { DnaMapping } from './components/DnaMapping';
import { HoneycombPattern, LittleBee, HoneyPot } from './components/Illustrations';
import { LEARNING_PATHS } from './constants';
import { Hexagon, BookOpen, User, Users, MoveRight, Leaf } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Hexagon className="text-hive-amber fill-hive-gold" />
              <span className="font-serif font-bold text-xl text-slate-900">The Hive Architecture</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#philosophy" className="hover:text-hive-amber transition-colors">Philosophy</a>
              <a href="#atcg" className="hover:text-hive-amber transition-colors">The ATCG Code</a>
              <a href="#chemistry" className="hover:text-hive-amber transition-colors">Chemistry</a>
              <a href="#patterns" className="hover:text-hive-amber transition-colors">Sacred Patterns</a>
            </div>
            <a href="https://github.com/topics/hexagonal-architecture" target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
              Get the SDK
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
             <HoneycombPattern className="w-[600px] h-[600px] text-hive-amber" />
           </div>
           <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 rotate-90">
             <HoneycombPattern className="w-[500px] h-[500px] text-hive-gold" />
           </div>
        </div>

        {/* Floating Little Bee */}
        <div className="absolute top-32 right-[15%] hidden lg:block pointer-events-none animate-float z-20">
          <LittleBee className="w-32 h-32" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hive-pollen border border-hive-honey text-hive-dark text-sm font-medium mb-8 animate-float">
            <Leaf size={16} /> Nature-Inspired Software Design
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            The Tale of the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-amber to-hive-gold">Enchanted Apiary</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            "Just as chemistry's periodic table unlocked modern science, the Hive's table will unlock scalable, predictable software architecture."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#atcg" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Explore the Hive <MoveRight size={20} />
            </a>
            <a href="#learning" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-stone-50 transition-all">
              Choose Your Path
            </a>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl serif font-bold text-slate-900 mb-12">From Hexagons to Honeycombs</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Traditional Hexagonal Architecture is powerful but abstract. The Hive Architecture grounds it in nature, providing a rich vocabulary for complex systems.
              </p>
              <ul className="space-y-4">
                {[
                  "Organic Growth over rigid planning",
                  "Scientific Foundation based on patterns",
                  "Ecosystem Scale from day one"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-100 p-8 rounded-2xl relative">
               <div className="absolute -top-4 -right-4 bg-hive-gold text-xs font-bold px-3 py-1 rounded shadow transform rotate-3">The Metaphor</div>
               
               {/* Honey Pot Visual - External Data */}
               <div className="absolute -bottom-8 -right-8 w-24 h-24 pointer-events-none drop-shadow-xl z-10 hidden md:block">
                  <HoneyPot />
               </div>

               <div className="space-y-4 font-serif">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-slate-500">Hexagonal</span>
                    <span className="font-bold text-slate-900">The Hive</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-slate-500">Domain</span>
                    <span className="font-bold text-hive-amber">The Queen's Chamber</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-slate-500">Ports & Adapters</span>
                    <span className="font-bold text-hive-amber">Connectors & Organs</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-slate-500">Application Services</span>
                    <span className="font-bold text-hive-amber">The Enzymes (Logic)</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

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
            <AtcgVisualizer />
            <DnaMapping />
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
          <ChemicalBondsVisualizer />
        </div>
      </section>

      {/* Sacred Patterns Section */}
      <section id="patterns" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <CodonSequencer />
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

      {/* Footer */}
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
    </div>
  );
};

export default App;