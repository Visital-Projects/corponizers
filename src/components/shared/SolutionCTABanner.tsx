import React from 'react';
import { Button } from '@/components/ui/Button';
import { TieMotif } from '@/components/ui/TieMotif';
import { ArrowRight, Phone } from 'lucide-react';

interface SolutionCTABannerProps {
  headline: string;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function SolutionCTABanner({
  headline,
  subtext,
  ctaText = 'Book a Free Consultation',
  ctaHref = '/contact',
  secondaryText = 'Speak to a Practice Lead',
  secondaryHref = '/contact',
}: SolutionCTABannerProps) {
  return (
    <section className="py-0">
      <div className="bg-slate-50 border-y border-slate-200 relative overflow-hidden">

        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Grid dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* Left: Headline */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <TieMotif size="sm" />
                <span className="text-[10px] font-black text-brand-blue-dark uppercase tracking-widest">
                  Ready to Partner?
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {headline}
              </h2>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {subtext}
              </p>
            </div>

            {/* Right: CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                {secondaryText}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
