'use client';

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface SLAComparisonProps {
  title?: string;
  rows?: { metric: string; internal: string; rpo: string }[];
}

export function SLAComparison({
  title = 'Enterprise RPO & Hiring SLA Benchmark Analysis',
  rows = [
    { metric: 'Cost Per Hire', internal: 'Higher Overhead & Agency Spikes', rpo: '34% Lower Direct Placement Cost' },
    { metric: 'Time-to-Fill SLA', internal: '45-60 Days Unpredictable', rpo: '14-18 Days Guaranteed Shortlist' },
    { metric: 'Recruiter Scalability', internal: 'Fixed Inelastic Headcount', rpo: 'Instant On-Demand Capacity Scaling' },
    { metric: 'ATS & AI Technology', internal: 'Legacy Manual Tracking', rpo: 'Enterprise AI Sourcing Stack Included' },
    { metric: 'Retention Warranty', internal: 'Standard 30-Day Period', rpo: '90 to 180-Day Guarantee Backed by SLA' },
  ],
}: SLAComparisonProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg my-8">
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
            EMPIRICAL SLA BENCHMARK
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
            {title}
          </h3>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
          ISO 9001 SLA Standard
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        <div className="grid grid-cols-12 bg-slate-50 p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="col-span-4 sm:col-span-4">Performance Metric</div>
          <div className="col-span-4 sm:col-span-4 text-slate-400">Traditional In-House TA</div>
          <div className="col-span-4 sm:col-span-4 text-corponizers-blue">Corponizers Enterprise SLA</div>
        </div>

        {rows.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center font-medium hover:bg-slate-50/80 transition-colors"
          >
            <div className="col-span-4 sm:col-span-4 font-bold text-slate-900">
              {row.metric}
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-slate-300 shrink-0" />
              <span>{row.internal}</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-brand-blue-dark font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-corponizers-blue shrink-0" />
              <span>{row.rpo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
