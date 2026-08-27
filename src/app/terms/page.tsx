import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = constructMetadata({
  title: 'Terms of Engagement & SLAs | Corponizers Enterprise',
  description: 'Enterprise engagement terms, executive search retention warranties, and RPO service level agreements.',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-black text-slate-900">Terms of Engagement &amp; Service Level Agreements</h1>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Effective Date: January 1, 2026</p>
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
          <p>These Terms of Engagement govern all corporate recruitment mandates, executive search briefs, and recruitment process outsourcing (RPO) contracts executed by Corponizers.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">1. SLA Shortlist Guarantee</h2>
          <p>Under our executive search mandates, Corponizers commits to presenting a vetted candidate shortlist within 14 business days of formal requirement sign-off.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Executive Placement Replacement Warranty</h2>
          <p>Should a placed candidate resign or be terminated for cause within 90 days of start date, Corponizers will initiate a replacement search at zero additional fee.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
