'use client';

import React from 'react';

import { TieMotif } from '@/components/ui/TieMotif';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroVariantProps {
  variant?: 'split' | 'centered' | 'editorial' | 'cta';
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badges?: string[];
  children?: React.ReactNode;
}

export function HeroVariant({
  variant = 'split',
  eyebrow,
  title,
  description,
  primaryCtaText = 'Book Consultation',
  primaryCtaHref = '/contact',
  secondaryCtaText = 'Explore Solutions',
  secondaryCtaHref = '/solutions',
  badges = ['Double-Blind Search Protocol', '14-Day Shortlist SLA', 'Executive Sourcing'],
  children,
}: HeroVariantProps) {
  if (variant === 'centered') {
    return (
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 brand-hero-bg border-b border-slate-100 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-extrabold tracking-wide border border-sky-200/80 shadow-xs">
            <TieMotif size="sm" />
            <span>{eyebrow.toUpperCase()}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryCtaHref} variant="primary" size="lg" className="shadow-brand hover:shadow-brand-hover">
              {primaryCtaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {secondaryCtaText && (
              <Button href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>

          {badges.length > 0 && (
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-500 border-t border-slate-200/60 max-w-xl mx-auto">
              {badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-corponizers-blue" /> {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'editorial') {
    return (
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <TieMotif size="sm" />
            <span>{eyebrow.toUpperCase()}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal">
            {description}
          </p>

          {primaryCtaText && (
            <div className="pt-4">
              <Button href={primaryCtaHref} variant="primary" size="lg">
                {primaryCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default Split Variant
  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 brand-hero-bg border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-extrabold tracking-wide border border-sky-200/80 shadow-xs">
              <TieMotif size="sm" />
              <span>{eyebrow.toUpperCase()}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button href={primaryCtaHref} variant="primary" size="lg" className="w-full sm:w-auto shadow-brand hover:shadow-brand-hover">
                {primaryCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {secondaryCtaText && (
                <Button href={secondaryCtaHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {badges.length > 0 && (
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-bold text-slate-500 border-t border-slate-200/60 max-w-xl">
                {badges.map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-corponizers-blue" /> {b}
                  </span>
                ))}
              </div>
            )}
          </div>

          {children && (
            <div className="lg:col-span-5">
              {children}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
