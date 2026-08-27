'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { CheckCircle2, ShieldCheck, Zap, Award } from 'lucide-react';

export function EcosystemDiagram() {
  const pillars = [
    { title: 'Executive Search', desc: 'Double-blind C-Suite & Board search', tag: 'C-Suite' },
    { title: 'Embedded RPO', desc: '34% lower cost-per-hire scaling', tag: 'Scalable' },
    { title: 'Tech & AI Practice', desc: 'AI researchers & cloud architects', tag: 'Specialized' },
    { title: 'Global Mobility', desc: 'Cross-border visa & EOR compliance', tag: 'Global' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
      
      {/* Ambient Blue Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Intro Text */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">
            <TieMotif size="sm" />
            <span>ORGANIZATIONAL RECRUITMENT ENGINE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Connecting Strategy to Workforce Execution
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Corponizers bridges the critical gap between executive board vision and operational talent delivery through structured practice frameworks.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Double-Blind Protocol
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-sky-400" /> 14-Day SLA
            </span>
          </div>
        </div>

        {/* Right Interactive Node Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-sky-400/50 hover:bg-white/15 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                  {p.tag}
                </span>
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                {p.title}
              </h4>

              <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
