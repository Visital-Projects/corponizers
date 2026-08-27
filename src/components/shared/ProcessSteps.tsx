'use client';

import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconNode?: React.ReactNode;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  headline?: string;
  description?: string;
  badge?: string;
}

export function ProcessSteps({
  steps,
  headline = 'How We Deliver',
  description = 'A structured, auditable engagement process designed for enterprise speed and precision.',
  badge = 'ENGAGEMENT PROCESS',
}: ProcessStepsProps) {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

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

        {/* Desktop: Horizontal Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-slate-200 z-0" aria-hidden="true" />

            <div
              className="relative z-10 grid gap-0"
              style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
            >
              {steps.map((step, idx) => {
                const isLast = idx === steps.length - 1;
                return (
                  <div
                    key={step.step}
                    className={`flex flex-col items-center text-center px-4 ${!isLast ? 'pr-8' : ''}`}
                  >
                    {/* Step node */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
                        {step.iconNode ? (
                          <span className="[&>svg]:w-6 [&>svg]:h-6">{step.iconNode}</span>
                        ) : (
                          <span className="text-lg font-black tabular-nums">
                            {String(step.step).padStart(2, '0')}
                          </span>
                        )}
                      </div>
                      {/* TieMotif accent on every 3rd step */}
                      {(idx + 1) % 3 === 0 && (
                        <span className="absolute -top-1 -right-1">
                          <TieMotif size="sm" />
                        </span>
                      )}
                    </div>

                    {/* Step number label */}
                    <span className="text-[10px] font-black text-corponizers-blue uppercase tracking-widest mb-1">
                      Step {step.step}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Vertical Steps */}
        <div className="lg:hidden space-y-0 relative">
          {/* Vertical connecting bar */}
          <div className="absolute left-7 top-8 bottom-8 w-px bg-slate-200 z-0" aria-hidden="true" />

          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.step} className={`relative z-10 flex items-start gap-5 ${!isLast ? 'pb-8' : ''}`}>
                {/* Node */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md ring-4 ring-slate-50">
                  {step.iconNode ? (
                    <span className="[&>svg]:w-5 [&>svg]:h-5">{step.iconNode}</span>
                  ) : (
                    <span className="text-sm font-black tabular-nums">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="pt-2 space-y-1">
                  <span className="text-[10px] font-black text-corponizers-blue uppercase tracking-widest">
                    Step {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
