'use client';

import React from 'react';


export function MetricsCounter() {
  const metrics = [
    { label: 'Successful Leadership Placements', value: '15,000+', subtitle: 'Across 30+ enterprise regions' },
    { label: 'Executive Retention SLA', value: '98.4%', subtitle: 'Beyond 18 months in post' },
    { label: 'Average Shortlist SLA', value: '14 Days', subtitle: '60% faster turnaround benchmark' },
    { label: 'Fortune 500 Partners', value: '250+', subtitle: 'Global multinational clients' },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl" />
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {metrics.map((m, idx) => (
          <div
            key={m.label}
            className={`pt-6 lg:pt-0 ${idx !== 0 ? 'lg:pl-8' : ''}`}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sky-400 mb-2">
              {m.value}
            </div>
            <div className="text-sm font-bold text-slate-100">
              {m.label}
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              {m.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
