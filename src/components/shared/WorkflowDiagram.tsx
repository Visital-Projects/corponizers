'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { ShieldCheck, CheckCircle2, UserCheck, Briefcase, Cpu, Globe2, Building2 } from 'lucide-react';

export function WorkflowDiagram() {
  const steps = [
    { label: 'Executive Blueprint', role: 'Competency Mapping', icon: UserCheck },
    { label: 'Passive Sourcing', role: 'Double-Blind Network', icon: ShieldCheck },
    { label: 'Multi-Layer Audit', role: 'Psychometric & Tech', icon: Cpu },
    { label: 'SLA Deployment', role: '90-Day Retention Warranty', icon: Briefcase },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white/90 backdrop-blur-xl border border-sky-100 rounded-3xl p-6 sm:p-8 shadow-brand">
      
      {/* Subtle Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-600/10 rounded-full blur-2xl" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <TieMotif size="sm" />
            <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
              STRUCTURED RECRUITMENT ENGINE
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-brand-blue-dark text-[10px] font-extrabold border border-sky-200/60">
            ISO 27001 Protocol
          </span>
        </div>

        {/* Dynamic Nodes */}
        <div className="space-y-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-corponizers-blue flex items-center justify-center shadow-xs group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 group-hover:text-brand-blue-dark transition-colors">
                      {s.label}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      {s.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-corponizers-blue" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Assurance Indicator */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
            14-Day Shortlist Guarantee
          </span>
          <span className="text-brand-blue-dark">98.4% Retention</span>
        </div>
      </div>
    </div>
  );
}
