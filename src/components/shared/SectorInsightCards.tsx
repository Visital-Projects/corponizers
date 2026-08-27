import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface InsightCard {
  headline: string;
  body: string;
}

interface SectorInsightCardProps {
  badge?: string;
  sectionHeadline?: string;
  cards: InsightCard[];
}

export function SectorInsightCards({
  badge = "SECTOR INTELLIGENCE",
  sectionHeadline = "Hiring Realities in This Sector",
  cards,
}: SectorInsightCardProps) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="space-y-1">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{badge}</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{sectionHeadline}</h2>
        </div>

        <div className={`grid grid-cols-1 ${cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-5`}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative flex gap-4 bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-sky-500" />

              <div className="pl-3 space-y-2">
                <h3 className="text-sm font-black text-slate-900 leading-snug">{card.headline}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
