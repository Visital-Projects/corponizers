'use client';

import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';
import { MessageSquare, Layers, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export function WhyClientsReturn() {
  const pillars = [
    { number: '01', title: 'Clear Communication', desc: 'Transparent SLA reporting, real-time pipeline status, and structured feedback loops.', icon: MessageSquare },
    { number: '02', title: 'Structured Recruitment', desc: 'Repeatable, compliant vetting workflows that eliminate candidate placement risk.', icon: Layers },
    { number: '03', title: 'Industry Understanding', desc: 'Specialized recruiters with deep sector knowledge across 10 key industry verticals.', icon: Building2 },
    { number: '04', title: 'Quality Candidate Matching', desc: 'Comprehensive technical, leadership, and cultural alignment before shortlist delivery.', icon: UserCheck },
    { number: '05', title: 'Professional Coordination', desc: 'End-to-end interview management, offer negotiation, and onboarding facilitation.', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {pillars.map((p) => {
        const Icon = p.icon;
        return (
          <div 
            key={p.title} 
            className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-brand transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-black text-slate-300 shrink-0">
                {p.number}
              </span>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal mt-0.5">
                  {p.desc}
                </p>
              </div>
            </div>

            <div className="shrink-0 hidden md:block">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-corponizers-blue bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                <TieMotif size="sm" />
                Verified Principle
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
