'use client';

import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';

export interface Benefit {
  title: string;
  description: string;
  iconNode: React.ReactNode;
}

interface SolutionBenefitsProps {
  benefits: Benefit[];
  headline?: string;
  description?: string;
  badge?: string;
}

export function SolutionBenefits({
  benefits,
  headline = 'What You Receive',
  description = 'Every engagement is structured to deliver measurable business outcomes, not just filled requisitions.',
  badge = 'CLIENT OUTCOMES',
}: SolutionBenefitsProps) {
  return (
    <section className="py-20 bg-white">
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            // Alternate row accent: every 2nd row gets slate-50 background
            const isEvenRow = Math.floor(idx / 3) % 2 !== 0;
            return (
              <div
                key={benefit.title}
                className={`group rounded-2xl p-7 border transition-all duration-200 hover:shadow-lg hover:border-sky-200 ${
                  isEvenRow
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-white border-slate-200'
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:bg-corponizers-blue transition-colors [&>svg]:text-corponizers-blue [&>svg]:group-hover:text-white [&>svg]:transition-colors">
                  {benefit.iconNode}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
