import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, GitPullRequest, Activity, Terminal, CheckCircle } from 'lucide-react';
import { APP_METADATA } from '../constants';
import { GitHubIssue, ImmuneLog, ElementType } from '../types';

export const ImmuneSystemVisualizer: React.FC = () => {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [healing, setHealing] = useState(false);
  const [logs, setLogs] = useState<ImmuneLog[]>([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await fetch(`${APP_METADATA.repoApiUrl}/issues?state=open`);
      if (response.ok) {
        const data = await response.json();
        // Filter out Pull Requests, keep only issues
        const bugIssues = data.filter((item: any) => !item.pull_request);
        setIssues(bugIssues);
      }
    } catch (error) {
      console.error("Failed to fetch hive status:", error);
    } finally {
      setLoading(false);
    }
  };

  const addLog = (stage: ElementType, message: string, status: 'pending' | 'success' = 'success') => {
    setLogs(prev => [...prev, {
      timestamp: new Date().toLocaleTimeString(),
      stage,
      message,
      status
    }]);
  };

  const initiateHealing = async (issue: GitHubIssue) => {
    setHealing(true);
    setLogs([]);

    // Simulate G->C->A->C Immune Response
    
    // Step 1: Genesis - Detection
    addLog(ElementType.GENESIS, `Mutation Detected: Issue #${issue.number} - ${issue.title}`);
    await new Promise(r => setTimeout(r, 800));

    // Step 2: Connector - Analysis
    addLog(ElementType.CONNECTOR, `ImmuneConnector: Analyzing toxicity of #${issue.number}...`);
    await new Promise(r => setTimeout(r, 1200));
    addLog(ElementType.CONNECTOR, `ImmuneConnector: Payload translated to SacredCommand.`);

    // Step 3: Aggregate - Plan
    addLog(ElementType.AGGREGATE, `ImmuneSystemAggregate: Formulating antibody response.`);
    await new Promise(r => setTimeout(r, 1000));
    addLog(ElementType.AGGREGATE, `ImmuneSystemAggregate: Response Strategy: AUTO_FIX_PATCH.`);

    // Step 4: Connector - Action
    addLog(ElementType.CONNECTOR, `GitConnector: Forging Pull Request...`);
    await new Promise(r => setTimeout(r, 1500));
    addLog(ElementType.CONNECTOR, `GitConnector: PR Created: fix/auto-heal-${issue.number}`);
    
    setHealing(false);
  };

  const healthStatus = issues.length === 0 ? 'Optimal' : 'Compromised';
  const statusColor = issues.length === 0 ? 'bg-emerald-500' : 'bg-red-500';

  return (
    <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left: Status Dashboard */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                <Shield className="text-blue-400" /> Hive Immune System
              </h3>
              <p className="text-slate-400 text-sm">Monitoring Repository Health: {APP_METADATA.repoApiUrl.split('/').slice(-2).join('/')}</p>
            </div>
            <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${issues.length === 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'bg-red-500/20 text-red-300 border border-red-500/50'}`}>
              <Activity size={18} className={healing ? 'animate-spin' : ''} />
              <span className="font-mono font-bold uppercase">{healing ? 'HEALING...' : healthStatus}</span>
            </div>
          </div>

          {/* Issue List */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Detected Mutations (Open Issues)</h4>
            {loading ? (
              <div className="h-20 bg-slate-800/50 rounded-xl animate-pulse"></div>
            ) : issues.length === 0 ? (
              <div className="p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-xl flex items-center gap-4">
                <CheckCircle className="text-emerald-400" size={24} />
                <div>
                  <div className="font-bold text-emerald-200">System Healthy</div>
                  <div className="text-sm text-emerald-400/70">No toxic patterns detected.</div>
                </div>
              </div>
            ) : (
              <div className="grid gap-3">
                {issues.map(issue => (
                  <div key={issue.id} className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-between group hover:border-red-500/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="text-red-400 mt-1 shrink-0" size={18} />
                      <div>
                        <div className="font-mono text-xs text-red-400 mb-1">#{issue.number}</div>
                        <div className="font-medium text-slate-200">{issue.title}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => initiateHealing(issue)}
                      disabled={healing}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <GitPullRequest size={14} /> Deploy Antibodies
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Console Log */}
        <div className="lg:w-96 bg-black/50 rounded-xl border border-slate-800 p-4 font-mono text-xs flex flex-col h-[400px]">
          <div className="flex items-center gap-2 text-slate-500 mb-4 pb-2 border-b border-slate-800">
            <Terminal size={14} />
            <span>IMMUNE_RESPONSE_LOG</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 scrollbar-hide">
            {logs.length === 0 && (
              <div className="text-slate-600 italic">System Idle. Waiting for response trigger...</div>
            )}
            {logs.map((log, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-left-2">
                <span className="text-slate-500">[{log.timestamp}]</span>
                <span className={`mx-2 font-bold ${
                  log.stage === ElementType.GENESIS ? 'text-purple-400' :
                  log.stage === ElementType.CONNECTOR ? 'text-amber-400' :
                  log.stage === ElementType.AGGREGATE ? 'text-red-400' : 'text-blue-400'
                }`}>
                  [{log.stage}]
                </span>
                <span className="text-slate-300">{log.message}</span>
              </div>
            ))}
            {healing && (
              <div className="animate-pulse text-blue-400">_Processing DNA repair sequence...</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};