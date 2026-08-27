import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Briefcase, CheckCircle2, ArrowRight, BarChart3, TrendingDown } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Recruitment Process Outsourcing (RPO) | Corponizers Enterprise',
  description: 'Scalable embedded recruitment process outsourcing (RPO) solutions reducing cost per hire by 34% with guaranteed SLA candidate delivery.',
});

export default function RpoSolutionsPage() {
  const comparison = [
    { metric: 'Cost Per Hire', internal: 'Higher Overhead', rpo: '34% Lower Direct Cost' },
    { metric: 'Time-to-Fill SLA', internal: '45-60 Days', rpo: '14-18 Days Guaranteed' },
    { metric: 'Recruiter Scalability', internal: 'Fixed Headcount Risk', rpo: 'Instant Elastic Scaling' },
    { metric: 'ATS & Technology Integration', internal: 'Legacy Tools', rpo: 'Enterprise AI Stack' },
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
                ENTERPRISE OPERATIONS
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Recruitment Process Outsourcing (RPO)
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                End-to-end recruitment infrastructure management. We deploy embedded talent acquisition squads into your organization to manage high-volume hiring sprints with predictable cost structures.
              </p>
              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Request RPO Capability Brief
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="PERFORMANCE COMPARISON"
              title="Internal TA vs. Corponizers RPO Framework"
              description="Empirical benchmark data demonstrating financial efficiency and SLA improvements under our embedded RPO model."
            />

            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
              <div className="grid grid-cols-3 bg-slate-900 text-white p-6 font-bold text-sm sm:text-base">
                <div>Metric / Domain</div>
                <div className="text-slate-400">Standard Internal TA</div>
                <div className="text-sky-400">Corponizers RPO</div>
              </div>
              <div className="divide-y divide-slate-200">
                {comparison.map((row) => (
                  <div key={row.metric} className="grid grid-cols-3 p-6 text-sm items-center font-medium">
                    <div className="font-bold text-slate-900">{row.metric}</div>
                    <div className="text-slate-500">{row.internal}</div>
                    <div className="text-brand-blue-dark font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-corponizers-blue shrink-0" />
                      {row.rpo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
