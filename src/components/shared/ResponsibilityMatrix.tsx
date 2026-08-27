import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';
import { UserCheck, ShieldCheck } from 'lucide-react';

export interface ResponsibilityPair {
  employerInput: string;
  employerDetail: string;
  corponizersOutput: string;
  corponizersDetail: string;
}

interface ResponsibilityMatrixProps {
  pairs: ResponsibilityPair[];
  badge?: string;
  headline?: string;
  description?: string;
}

export function ResponsibilityMatrix({
  pairs,
  badge = 'MUTUAL EXPECTATIONS',
  headline = 'Clear Division of Responsibilities',
  description = 'A successful mandate depends on clear expectations from day one. Here is exactly what we need from you — and what you receive from us.',
}: ResponsibilityMatrixProps) {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-black text-corponizers-blue uppercase tracking-widest">
            <TieMotif size="sm" />
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {headline}
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Matrix Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-900 text-white">
            <div className="p-5 sm:p-6 flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  What We Need From You
                </h3>
                <p className="text-[11px] text-slate-400 font-normal">Employer Inputs & Availability</p>
              </div>
            </div>
            
            <div className="p-5 sm:p-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-950 flex items-center justify-center text-sky-400 border border-sky-800/50">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-sky-300">
                  What Corponizers Delivers
                </h3>
                <p className="text-[11px] text-slate-400 font-normal">Corponizers Outputs & SLAs</p>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {pairs.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50/50 transition-colors">
                
                {/* Employer Side */}
                <div className="p-5 sm:p-6 border-l-4 border-slate-300 md:border-r md:border-r-slate-100 flex flex-col justify-center space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Input {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {pair.employerInput}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {pair.employerDetail}
                  </p>
                </div>

                {/* Corponizers Side */}
                <div className="p-5 sm:p-6 border-l-4 border-corponizers-blue bg-sky-50/30 flex flex-col justify-center space-y-1">
                  <span className="text-[10px] font-black text-corponizers-blue uppercase tracking-widest">
                    Deliverable {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {pair.corponizersOutput}
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {pair.corponizersDetail}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
