'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { TieMotif } from '@/components/ui/TieMotif';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function ContactStrip() {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-100">
              <TieMotif size="sm" />
              <span>STRATEGIC TALENT PARTNERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Build Your Next High-Performing Team?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl font-normal">
              Connect with an Enterprise Practice Lead to discuss C-Suite search, RPO scaling, or specialized tech recruitment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button href="/contact" variant="primary" size="lg">
              Talk to Recruitment Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/careers" variant="outline" size="lg" className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50">
              Explore Careers
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
