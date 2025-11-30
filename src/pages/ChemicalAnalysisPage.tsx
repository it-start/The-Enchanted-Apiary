import React from 'react';
import { FlaskConical, Activity, AlertTriangle, Layers } from 'lucide-react';

export const ChemicalAnalysisPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Chemical Bond Analysis
          </h1>
          <p className="text-xl text-slate-600 font-serif italic">
            "Just as chemists use spectroscopy to analyze molecular bonds, we use chemical bond analysis to understand the deep structure of our software systems."
          </p>
        </div>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FlaskConical className="text-blue-500" /> Software Periodic Table
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
               <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
                 <div className="text-2xl font-bold text-red-800 mb-1">C</div>
                 <div className="text-xs uppercase font-bold text-red-600">Aggregate</div>
               </div>
               <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                 <div className="text-2xl font-bold text-blue-800 mb-1">H</div>
                 <div className="text-xs uppercase font-bold text-blue-600">Transformation</div>
               </div>
               <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
                 <div className="text-2xl font-bold text-amber-800 mb-1">O</div>
                 <div className="text-xs uppercase font-bold text-amber-600">Connector</div>
               </div>
               <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl text-center">
                 <div className="text-2xl font-bold text-purple-800 mb-1">N</div>
                 <div className="text-xs uppercase font-bold text-purple-600">Genesis Event</div>
               </div>
            </div>
            <p className="text-slate-600">
              Treating software components as chemical elements allows us to apply principles like valency, electronegativity, and stability to architecture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Layers className="text-blue-500" /> Bond Types
            </h2>
            <div className="space-y-4">
               <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-lg">
                 <div className="font-bold text-slate-900 w-32 shrink-0">Covalent Bonds</div>
                 <p className="text-sm text-slate-600">Shared responsibility. Strong coupling (e.g., Composition). Good for cohesive units.</p>
               </div>
               <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-lg">
                 <div className="font-bold text-slate-900 w-32 shrink-0">Ionic Bonds</div>
                 <p className="text-sm text-slate-600">Transfer of control. Directional flow (e.g., Event Publishing). Good for decoupling.</p>
               </div>
               <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-lg">
                 <div className="font-bold text-slate-900 w-32 shrink-0">Hydrogen Bonds</div>
                 <p className="text-sm text-slate-600">Weak interactions. Utility usage, logging. Easy to break or replace.</p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500" /> Toxicity Detection
            </h2>
            <p className="text-slate-600 mb-4">
              We identify "Toxic Compounds" in code that lead to instability.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
               <li><strong>Circular Dependencies:</strong> Unstable benzene-like rings that trap logic.</li>
               <li><strong>God Objects:</strong> Oversized molecules with too many bonds, prone to collapse.</li>
               <li><strong>Temporal Coupling:</strong> Compounds that only exist stably under specific timing conditions.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};