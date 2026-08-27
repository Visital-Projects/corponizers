import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';

export interface LifecycleStage {
  step: number;
  title: string;
  description: string;
  owner: 'corponizers' | 'employer' | 'joint';
}

interface RecruitmentLifecycleProps {
  stages: LifecycleStage[];
  badge?: string;
  headline?: string;
  description?: string;
}

const ownerConfig = {
  corponizers: {
    label: 'Corponizers',
    className: 'bg-sky-50 text-sky-800 border border-sky-200',
    dotClass: 'bg-corponizers-blue',
  },
  employer: {
    label: 'Employer',
    className: 'bg-slate-100 text-slate-700 border border-slate-200',
    dotClass: 'bg-slate-500',
  },
  joint: {
    label: 'Joint',
    className: 'bg-amber-50 text-amber-800 border border-amber-200',
    dotClass: 'bg-amber-500',
  },
};

export function RecruitmentLifecycle({
  stages,
  badge = 'RECRUITMENT LIFECYCLE',
  headline = 'Your Complete Recruitment Journey — Stage by Stage',
  description = 'Every mandate follows the same structured sequence. Understanding each stage removes uncertainty before you begin.',
}: RecruitmentLifecycleProps) {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-black text-corponizers-blue uppercase tracking-widest">
            <TieMotif size="sm" />
            {badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="text-sm text-slate-500 font-normal leading-relaxed">{description}</p>
        </div>

        {/* Owner legend */}
        <div className="flex flex-wrap items-center gap-4">
          {Object.entries(ownerConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${val.dotClass}`} />
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${val.className}`}>{val.label}</span>
            </div>
          ))}
        </div>

        {/* ── Desktop: Horizontal scrollable rail ── */}
        <div className="hidden lg:block overflow-x-auto pb-4">
          <div className="relative min-w-max">
            {/* Connecting line */}
            <div className="absolute top-6 left-8 right-8 h-px bg-slate-200 z-0" aria-hidden="true" />

            <div className="relative z-10 flex gap-0">
              {stages.map((stage, idx) => {
                const owner = ownerConfig[stage.owner];
                const isLast = idx === stages.length - 1;
                return (
                  <div
                    key={stage.step}
                    className={`flex flex-col items-center text-center w-[110px] ${!isLast ? 'pr-2' : ''}`}
                  >
                    {/* Node */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm mb-3 z-10 ${
                      stage.owner === 'corponizers'
                        ? 'bg-slate-900 text-white'
                        : stage.owner === 'employer'
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-amber-400 text-white'
                    }`}>
                      <span className="text-xs font-black tabular-nums">
                        {String(stage.step).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-[11px] font-bold text-slate-900 leading-snug mb-1.5 px-1">
                      {stage.title}
                    </p>

                    {/* Owner badge */}
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider ${owner.className}`}>
                      {owner.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile: Vertical timeline ── */}
        <div className="lg:hidden relative space-y-0">
          {/* Vertical rule */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-200 z-0" aria-hidden="true" />

          {stages.map((stage, idx) => {
            const owner = ownerConfig[stage.owner];
            const isLast = idx === stages.length - 1;
            return (
              <div key={stage.step} className={`relative z-10 flex items-start gap-4 ${!isLast ? 'pb-6' : ''}`}>
                {/* Node */}
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm ${
                  stage.owner === 'corponizers'
                    ? 'bg-slate-900 text-white'
                    : stage.owner === 'employer'
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-amber-400 text-white'
                }`}>
                  <span className="text-[10px] font-black tabular-nums">
                    {String(stage.step).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1.5 space-y-1">
                  <p className="text-sm font-bold text-slate-900 leading-snug">{stage.title}</p>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{stage.description}</p>
                  <span className={`inline-block text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider ${owner.className}`}>
                    {owner.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-xs text-slate-400 font-normal">
          The sequence above applies to all Corponizers engagement types. Timelines and depth of each stage vary by service — Executive Search, RPO, Permanent Hiring, and Technology Hiring each have service-specific parameters detailed on their respective pages.
        </p>

      </div>
    </section>
  );
}
