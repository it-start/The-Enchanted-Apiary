import React, { useState, useEffect, useRef } from 'react';
import { Bot, Hammer, BrainCircuit, ArrowRight, CheckCircle2, Loader2, Play } from 'lucide-react';
import { AGENT_TOOLS } from '../constants';
import { AgentStep } from '../types';
import { useTranslation } from 'react-i18next';

export const AgentVisualizer: React.FC = () => {
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [prompt, setPrompt] = useState("Sector 9 is reporting unusual vibrations. Investigate and secure if necessary.");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [steps]);

  const runSimulation = async () => {
    setSteps([{ id: 1, type: 'user', content: prompt }]);
    setIsThinking(true);

    // --- AGENTIC LOOP SIMULATION ---
    // In a real implementation, this would be a while(true) loop calling the Gemini API
    // passing history + new tool results back to the model.

    // Step 1: Model Thinks
    await new Promise(r => setTimeout(r, 1500));
    setSteps(prev => [...prev, { 
      id: 2, 
      type: 'thought', 
      content: "The user is reporting a potential threat in Sector 9. I need to check the status of that sector before taking action." 
    }]);

    // Step 2: Model Calls Tool
    await new Promise(r => setTimeout(r, 1000));
    setSteps(prev => [...prev, { 
      id: 3, 
      type: 'call', 
      toolName: 'scan_sector', 
      content: '{"sector_id": "9"}' 
    }]);

    // Step 3: Tool Execution (Connector)
    await new Promise(r => setTimeout(r, 1200));
    setSteps(prev => [...prev, { 
      id: 4, 
      type: 'result', 
      toolName: 'scan_sector', 
      content: '{"status": "CRITICAL", "threat_type": "Hornet_Swarm", "honey_stores": 450}' 
    }]);

    // Step 4: Model Thinks again (Recursive Call)
    await new Promise(r => setTimeout(r, 1500));
    setSteps(prev => [...prev, { 
      id: 5, 
      type: 'thought', 
      content: "Scan complete. Threat detected: Hornet Swarm. Status is CRITICAL. I must deploy defenses immediately to protect the 450 units of honey." 
    }]);

    // Step 5: Model Calls Tool 2
    await new Promise(r => setTimeout(r, 1000));
    setSteps(prev => [...prev, { 
      id: 6, 
      type: 'call', 
      toolName: 'deploy_defense', 
      content: '{"sector_id": "9", "units": 100}' 
    }]);

    // Step 6: Tool Execution
    await new Promise(r => setTimeout(r, 1200));
    setSteps(prev => [...prev, { 
      id: 7, 
      type: 'result', 
      toolName: 'deploy_defense', 
      content: '{"success": true, "deployed_at": "14:02:00", "remaining_energy": 85}' 
    }]);

    // Step 7: Final Answer
    await new Promise(r => setTimeout(r, 1000));
    setSteps(prev => [...prev, { 
      id: 8, 
      type: 'final', 
      content: "I have investigated Sector 9. A Hornet Swarm was detected. I have successfully deployed 100 defense units to secure the area." 
    }]);

    setIsThinking(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-12">
      {/* Left: Input & Tool Definitions */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-200">
          <div className="flex items-center gap-3 mb-4 text-slate-800">
            <Bot size={24} className="text-hive-amber" />
            <h3 className="text-xl font-serif font-bold">{t('agent.title')}</h3>
          </div>
          <p className="text-slate-600 text-sm mb-6">
            {t('agent.desc')}
          </p>
          
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('agent.input')}</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-hive-amber outline-none resize-none"
            />
            <button 
              onClick={runSimulation}
              disabled={isThinking}
              className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isThinking ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {isThinking ? <Loader2 className="animate-spin" size={18}/> : <Play size={18}/>}
              {isThinking ? t('agent.processing') : t('agent.execute')}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-stone-200">
          <div className="flex items-center gap-2 mb-4 text-slate-700">
            <Hammer size={18} />
            <h4 className="font-bold text-sm">{t('agent.tools')}</h4>
          </div>
          <div className="space-y-3">
            {AGENT_TOOLS.map((tool, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-stone-200 text-xs shadow-sm">
                <div className="font-mono text-hive-amber font-bold mb-1">{tool.name}</div>
                <div className="text-slate-500">{tool.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Interaction Stream */}
      <div className="flex-1 bg-slate-950 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col h-[600px]">
        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4 z-10">
          <span className="text-slate-400 font-mono text-xs flex items-center gap-2">
            <BrainCircuit size={14} className={isThinking ? "text-green-400 animate-pulse" : "text-slate-600"} />
            AGENT_CONTEXT_PROTOCOL
          </span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide z-10">
          {steps.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-700 space-y-4 opacity-50">
              <Bot size={48} />
              <p>Waiting for Queen's Command...</p>
            </div>
          )}

          {steps.map((step) => (
            <div key={step.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* User Prompt */}
              {step.type === 'user' && (
                <div className="flex justify-end mb-4">
                  <div className="bg-slate-800 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                    {step.content}
                  </div>
                </div>
              )}

              {/* Internal Monologue (Thinking) */}
              {step.type === 'thought' && (
                <div className="flex gap-4 mb-4 opacity-80">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <BrainCircuit size={14} className="text-purple-400" />
                  </div>
                  <div className="text-purple-300/80 text-sm italic font-mono leading-relaxed pt-1">
                    "{step.content}"
                  </div>
                </div>
              )}

              {/* Tool Call */}
              {step.type === 'call' && (
                <div className="flex gap-4 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-900/30 flex items-center justify-center shrink-0 border border-amber-700/50">
                    <ArrowRight size={14} className="text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">Calling Tool</div>
                    <div className="bg-black/30 border border-amber-900/30 rounded-lg p-3 font-mono text-amber-200/90 text-sm">
                      <span className="text-amber-500">{step.toolName}</span>({step.content})
                    </div>
                  </div>
                </div>
              )}

              {/* Tool Result */}
              {step.type === 'result' && (
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-700/50">
                    <ArrowRight size={14} className="text-blue-400 rotate-180" />
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Tool Output</div>
                    <div className="bg-black/30 border border-blue-900/30 rounded-lg p-3 font-mono text-blue-200/90 text-sm">
                      {step.content}
                    </div>
                  </div>
                </div>
              )}

              {/* Final Answer */}
              {step.type === 'final' && (
                <div className="flex gap-4 mt-8">
                  <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center shrink-0 border border-green-700/50">
                    <CheckCircle2 size={16} className="text-green-400" />
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5 rounded-2xl rounded-tl-sm text-slate-100 shadow-xl">
                    {step.content}
                  </div>
                </div>
              )}
            </div>
          ))}
          {isThinking && (
            <div className="flex gap-2 items-center text-slate-600 text-xs uppercase tracking-widest pl-12 animate-pulse">
              {t('agent.processing')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};