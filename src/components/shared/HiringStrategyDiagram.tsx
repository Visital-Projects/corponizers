'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { Building2, Search, UserCheck, ShieldCheck, Users } from 'lucide-react';

export function HiringStrategyDiagram() {
  const steps = [
    { label: 'Business Goals', icon: Building2 },
    { label: 'Hiring Strategy', icon: Search },
    { label: 'Talent Sourcing', icon: UserCheck },
    { label: 'Vetting', icon: ShieldCheck },
    { label: 'Strong Teams', icon: Users },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-700/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <TieMotif size="sm" />
            <span className="text-xs font-black tracking-widest text-sky-400 uppercase">
              STRUCTURED HIRING ARCHITECTURE
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Corporate + Organizers
          </span>
        </div>

        {/* Step Flow */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 border border-white/10 hover:border-sky-400/50 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center shrink-0 group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    {step.label}
                  </span>
                </div>
                <span className="text-[10px] font-black text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                  Step 0{idx + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400">
          <span>Enterprise Talent Solutions</span>
          <span className="text-sky-400 font-bold">India &amp; Global Mobility</span>
        </div>

      </div>
    </div>
  );
}
