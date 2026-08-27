import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { UserCheck, ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Executive Search Practice | Corponizers Enterprise',
  description: 'Confidential C-Suite, VP, and Board-level executive search practice delivering transformational leadership for global enterprise organizations.',
});

export default function ExecutiveSearchPage() {
  const highlights = [
    'Double-blind candidate protection protocol',
    'Comprehensive psychometric & leadership capability audits',
    'Dedicated industry partner leading every search assignment',
    '90-day retention performance guarantee backed by SLA',
    'Access to non-active passive candidate networks globally',
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="pt-16 pb-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold tracking-wider uppercase border border-sky-500/30">
                PRACTICE AREA
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Executive Search &amp; Board Appointments
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                Securing C-Suite, Managing Director, and Board-level leaders who define organizational culture, execute digital transformation, and drive shareholder value.
              </p>
              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Retain Executive Search Brief
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <SectionHeading
                  badge="CONFIDENTIALITY & SLA"
                  title="Double-Blind Search Protocol"
                  description="When filling critical leadership positions, discretion is paramount. Our proprietary search methodology protects enterprise confidentiality while ensuring deep market coverage."
                  align="left"
                />

                <div className="space-y-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-corponizers-blue shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Target Executive Roles
                </h3>
                <ul className="space-y-4 divide-y divide-slate-200 text-sm font-medium text-slate-700">
                  <li className="pt-2">Chief Executive Officer (CEO) &amp; President</li>
                  <li className="pt-4">Chief Technology Officer (CTO) &amp; VP Engineering</li>
                  <li className="pt-4">Chief Financial Officer (CFO) &amp; VP Finance</li>
                  <li className="pt-4">Chief Information Security Officer (CISO)</li>
                  <li className="pt-4">Independent Board Directors &amp; Advisory Chairs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
