import React from 'react';
import { Network, ArrowRight, GitMerge, RefreshCw, Shield } from 'lucide-react';

export const CodonLibraryPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Sacred Codon Library
          </h1>
          <p className="text-xl text-slate-600 font-serif italic">
            "The Sacred Codons are the genetic instructions of digital life—master them, and you master the art of building living systems."
          </p>
        </div>

        <div className="space-y-16">
          
          {/* C -> A -> G */}
          <section className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-800 p-2 rounded-lg"><ArrowRight size={24} /></span>
              <h2 className="text-2xl font-bold text-slate-900">Pattern 1: C→A→G (Handle Command)</h2>
            </div>
            <p className="text-slate-600 mb-6">
              The fundamental pattern for changing system state safely and consistently. Used for creating entities, updating state, and processing business commands.
            </p>
            <div className="flex gap-2 mb-6 font-mono text-sm font-bold text-slate-700">
               <span className="bg-amber-100 px-3 py-1 rounded">Connector</span>
               <span>→</span>
               <span className="bg-red-100 px-3 py-1 rounded">Aggregate</span>
               <span>→</span>
               <span className="bg-purple-100 px-3 py-1 rounded">Genesis Event</span>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 font-mono text-xs text-slate-600">
              <div className="text-green-600">// Example: Create Order</div>
              <div>Connector receives API Request</div>
              <div>Aggregate validates rules & state</div>
              <div>Genesis Event "OrderCreated" is born</div>
            </div>
          </section>

          {/* C -> T -> C */}
          <section className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-lg"><Network size={24} /></span>
              <h2 className="text-2xl font-bold text-slate-900">Pattern 2: C→T→C (Query Data)</h2>
            </div>
            <p className="text-slate-600 mb-6">
              Pure data retrieval and projection without side effects. Used for reading state, generating reports, and API queries. Adheres strictly to the <strong>Law of Purity</strong>.
            </p>
            <div className="flex gap-2 mb-6 font-mono text-sm font-bold text-slate-700">
               <span className="bg-amber-100 px-3 py-1 rounded">Connector</span>
               <span>→</span>
               <span className="bg-blue-100 px-3 py-1 rounded">Transformation</span>
               <span>→</span>
               <span className="bg-amber-100 px-3 py-1 rounded">Connector</span>
            </div>
          </section>

          {/* G -> C -> A -> G */}
          <section className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-800 p-2 rounded-lg"><GitMerge size={24} /></span>
              <h2 className="text-2xl font-bold text-slate-900">Pattern 3: G→C→A→G (React to Event)</h2>
            </div>
            <p className="text-slate-600 mb-6">
              Event-driven choreography and inter-component communication. Used for reacting to events, sagas, and workflows.
            </p>
            <div className="flex gap-2 mb-6 font-mono text-sm font-bold text-slate-700 flex-wrap">
               <span className="bg-purple-100 px-3 py-1 rounded">Genesis Event</span>
               <span>→</span>
               <span className="bg-amber-100 px-3 py-1 rounded">Connector</span>
               <span>→</span>
               <span className="bg-red-100 px-3 py-1 rounded">Aggregate</span>
               <span>→</span>
               <span className="bg-purple-100 px-3 py-1 rounded">Genesis Event</span>
            </div>
          </section>

          {/* G -> C -> A -> C */}
          <section className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 p-2 rounded-lg"><Shield size={24} /></span>
              <h2 className="text-2xl font-bold text-slate-900">Pattern 4: G→C→A→C (Immune Response)</h2>
            </div>
            <p className="text-slate-600 mb-6">
              Self-healing and system health maintenance. Used for error recovery, compensation, and security threat mitigation.
            </p>
            <div className="flex gap-2 mb-6 font-mono text-sm font-bold text-slate-700 flex-wrap">
               <span className="bg-purple-100 px-3 py-1 rounded">Mutation Event</span>
               <span>→</span>
               <span className="bg-amber-100 px-3 py-1 rounded">Immune Connector</span>
               <span>→</span>
               <span className="bg-red-100 px-3 py-1 rounded">Immune Aggregate</span>
               <span>→</span>
               <span className="bg-amber-100 px-3 py-1 rounded">Corrective Action</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};