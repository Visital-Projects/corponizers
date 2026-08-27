import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';

interface SolutionIndustriesProps {
  industries: string[];
  headline?: string;
  note?: string;
}

export function SolutionIndustries({
  industries,
  headline = 'Commonly Delivered Across',
  note,
}: SolutionIndustriesProps) {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

          {/* Label */}
          <div className="shrink-0 flex items-center gap-2">
            <TieMotif size="sm" />
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">
              {headline}
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-slate-200 shrink-0" />

          {/* Industry Tags */}
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>

        </div>

        {note && (
          <p className="mt-4 text-xs text-slate-400 font-normal pl-0 sm:pl-8">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
