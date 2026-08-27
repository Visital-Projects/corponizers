import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = constructMetadata({
  title: 'Privacy Policy & Data Security | Corponizers Enterprise',
  description: 'Enterprise privacy standards, data protection protocols, and double-blind candidate confidentiality policy.',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-black text-slate-900">Privacy Policy &amp; Data Security</h1>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Effective Date: January 1, 2026</p>
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
          <p>Corponizers Enterprise Solutions (&quot;Corponizers&quot;, &quot;we&quot;, &quot;our&quot;) is committed to enforcing stringent privacy and data protection standards across all recruitment and executive search practice areas.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Double-Blind Confidentiality Protocol</h2>
          <p>Candidate profiles and corporate client names submitted through our platforms are handled under strict non-disclosure terms. Candidate details are only released to vetted hiring committees upon explicit mutual consent.</p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Enterprise Data Protection &amp; Security</h2>
          <p>All candidate resumes, background reports, and client consultation messages are encrypted in transit via TLS 1.3 and at rest utilizing AES-256 encryption standards.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
