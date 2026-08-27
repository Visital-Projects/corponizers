import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TieMotif } from '@/components/ui/TieMotif';

export interface CrossLink {
  label: string;          // e.g. "Executive Search"
  description: string;   // 1-line description
  href: string;           // e.g. "/solutions/executive-search"
  iconNode: React.ReactNode;
}

interface SolutionCrossLinksProps {
  headline?: string;
  links: CrossLink[];
}

export function SolutionCrossLinks({
  headline = "Relevant Corponizers Solutions",
  links,
}: SolutionCrossLinksProps) {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex items-center gap-3">
          <TieMotif size="sm" />
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest">{headline}</h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${links.length >= 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-4`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-3 p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-corponizers-blue transition-colors text-sm">
                  {link.iconNode}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 group-hover:text-brand-blue-dark transition-colors leading-snug">{link.label}</p>
                <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
