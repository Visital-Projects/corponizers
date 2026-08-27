import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = constructMetadata({
  title: 'Guarantee & Refund Terms | Corponizers Enterprise',
  description: 'Fee protection terms, executive placement replacement guarantees, and RPO credit structures.',
});

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-black text-slate-900">Guarantee &amp; Fee Protection Policy</h1>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Effective Date: January 1, 2026</p>
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
          <p>Corponizers operates under strict performance guarantees designed to eliminate hiring risk for corporate clients.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Replacement Guarantee SLA</h2>
          <p>If a candidate placed by Corponizers leaves within the agreed guarantee period (90 to 180 days based on mandate tier), Corponizers provides a priority replacement search.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Retainer Protection Credit</h2>
          <p>In the event a retained search is cancelled by the client prior to candidate presentation, unspent retainer balances are credited toward future RPO or executive search engagements.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
