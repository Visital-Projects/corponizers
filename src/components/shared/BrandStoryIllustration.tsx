'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { ShieldCheck, CheckCircle2, UserCheck, Briefcase, Cpu, Globe2, Building2 } from 'lucide-react';

export function BrandStoryIllustration() {
  const nodes = [
    { title: 'Corporate Governance', desc: 'Double-Blind Candidate Protocol', icon: ShieldCheck },
    { title: 'Global Reach', desc: 'Cross-Border Talent Network', icon: Globe2 },
    { title: 'Executive Placement', desc: '90 to 180-Day Retention Warranties', icon: CheckCircle2 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <TieMotif size="sm" />
            <span className="text-xs font-black tracking-widest text-sky-400 uppercase">
              PHILOSOPHY DIAGRAM
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Corporate + Organizers
          </span>
        </div>

        <div className="space-y-4">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div
                key={node.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3.5 hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">{node.title}</div>
                  <div className="text-[11px] text-slate-300 font-normal mt-0.5">{node.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
          <span>Enterprise Strategy</span>
          <span className="text-sky-400 font-bold">Long-Term Growth</span>
        </div>

      </div>
    </div>
  );
}
