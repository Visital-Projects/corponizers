import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export interface Challenge {
  title: string;
  description: string;
}

interface ChallengeStatementProps {
  eyebrow?: string;
  headline: string;
  positioning: string;
  challenges: Challenge[];
  differentiator?: string; // One-line why Corponizers solves this
}

export function ChallengeStatement({
  eyebrow = 'THE HIRING CHALLENGE',
  headline,
  positioning,
  challenges,
  differentiator,
}: ChallengeStatementProps) {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: The Problem Space */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                {eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {headline}
              </h2>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-black">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">{challenge.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Solution Position */}
          <div className="space-y-6 lg:pt-12">
            <div className="relative">
              {/* Vertical accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-sky-500 to-sky-300" />
              <div className="pl-6 space-y-4">
                <div className="flex items-center gap-2">
                  <TieMotif size="sm" />
                  <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">
                    The Corponizers Approach
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {positioning}
                </p>
              </div>
            </div>

            {differentiator && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sky-50 border border-sky-100">
                <ArrowRight className="w-4 h-4 text-corponizers-blue mt-0.5 shrink-0" />
                <p className="text-sm text-sky-800 font-semibold leading-relaxed">
                  {differentiator}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
