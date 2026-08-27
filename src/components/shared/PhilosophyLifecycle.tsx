'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { 
  Search, 
  Compass, 
  UserCheck, 
  Cpu, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export function PhilosophyLifecycle() {
  const steps = [
    { number: '01', title: 'Business Need', desc: 'Organizational strategy & KPI mapping', icon: Search },
    { number: '02', title: 'Workforce Planning', desc: 'Competency architecture & timeline mapping', icon: Compass },
    { number: '03', title: 'Talent Discovery', desc: 'Double-blind passive executive sourcing', icon: UserCheck },
    { number: '04', title: 'Assessment Audit', desc: 'Multi-layer psychometric & technical audit', icon: Cpu },
    { number: '05', title: 'Selection SLA', desc: 'Double-blind shortlisting & offer negotiation', icon: CheckCircle2 },
    { number: '06', title: 'Onboarding Facilitation', desc: 'Smooth executive integration & concierge', icon: Briefcase },
    { number: '07', title: 'Long-Term Success', desc: '90-180 Day retention performance warranty', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.slice(0, 4).map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.number}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative group hover:border-sky-300 hover:shadow-brand-hover transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-200 group-hover:text-corponizers-blue transition-colors">
                  {s.number}
                </span>
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue-dark transition-colors">
                {s.title}
              </h4>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {steps.slice(4).map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.number}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative group hover:border-sky-300 hover:shadow-brand-hover transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-200 group-hover:text-corponizers-blue transition-colors">
                  {s.number}
                </span>
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue-dark transition-colors">
                {s.title}
              </h4>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
