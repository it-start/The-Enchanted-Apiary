import React from 'react';
import { Terminal, Box, Zap, Play } from 'lucide-react';

export const GenesisPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Genesis Engine CLI
          </h1>
          <p className="text-xl text-slate-600 font-serif italic">
            "The Genesis Engine is the sacred tool of creation—with it, any Beekeeper can hatch new life in the digital hive."
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Box className="text-hive-amber" /> Overview
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Genesis Engine is the primary CLI tool for creating, managing, and validating Hive Architecture components. It provides commands for scaffolding Sacred Codon patterns, analyzing chemical bonds, and maintaining architectural integrity.
            </p>
            <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm shadow-lg overflow-x-auto">
              <span className="text-slate-500"># Install globally</span><br/>
              <span className="text-green-400">npm</span> install -g @hive-arch/genesis-engine
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Zap className="text-hive-amber" /> Core Commands
            </h2>
            
            <div className="space-y-6">
              <div className="border border-stone-200 rounded-xl p-6 hover:border-hive-amber transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-mono">genesis init</h3>
                <p className="text-slate-600 mb-4">Initialize a new Hive project with proper ATCG structure.</p>
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-700 border border-slate-200">
                  genesis init my-hive --template=enterprise --sacred-codons
                </div>
              </div>

              <div className="border border-stone-200 rounded-xl p-6 hover:border-hive-amber transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-mono">genesis hatch</h3>
                <p className="text-slate-600 mb-4">Create new components from Sacred Codon templates (Egg -> Larva).</p>
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-700 border border-slate-200">
                  genesis hatch aggregate Order --pattern=cag --domain=ecommerce
                </div>
              </div>

              <div className="border border-stone-200 rounded-xl p-6 hover:border-hive-amber transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-mono">genesis validate</h3>
                <p className="text-slate-600 mb-4">Validate Hive architecture compliance and Sacred Codon patterns.</p>
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-700 border border-slate-200">
                  genesis validate --component=Order --strict
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Play className="text-hive-amber" /> Lifecycle Management
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-stone-50 p-6 rounded-xl">
                 <div className="font-bold text-slate-900 mb-2">Egg</div>
                 <div className="text-sm text-slate-600">Initialize structure via <code>genesis init</code></div>
               </div>
               <div className="bg-stone-50 p-6 rounded-xl">
                 <div className="font-bold text-slate-900 mb-2">Larva</div>
                 <div className="text-sm text-slate-600">Develop with templates via <code>genesis hatch</code></div>
               </div>
               <div className="bg-stone-50 p-6 rounded-xl">
                 <div className="font-bold text-slate-900 mb-2">Pupa</div>
                 <div className="text-sm text-slate-600">Validate and test via <code>genesis validate</code></div>
               </div>
               <div className="bg-stone-50 p-6 rounded-xl">
                 <div className="font-bold text-slate-900 mb-2">Adult</div>
                 <div className="text-sm text-slate-600">Deploy to production via <code>genesis deploy</code></div>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};