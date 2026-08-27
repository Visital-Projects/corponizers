import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Globe2, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Global Talent Mobility & Cross-Border Recruitment | Corponizers Enterprise',
  description: 'International recruitment, visa sponsorship compliance, and global talent relocation management across APAC, EMEA, and Americas.',
});

export default function GlobalMobilityPage() {
  const hubs = [
    { city: 'Singapore', region: 'APAC Enterprise Hub' },
    { city: 'London', region: 'EMEA Financial Center' },
    { city: 'New York', region: 'Americas Corporate HQ' },
    { city: 'Zurich', region: 'DACH Tech & Banking Hub' },
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
                CROSS-BORDER RECRUITMENT
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Global Talent Mobility &amp; Compliance
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                Seamlessly acquire top-tier international executives and technical talent. We handle cross-border recruitment, visa compliance, and global relocation logistics.
              </p>
              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Discuss Global Mobility Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL HUBS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="GLOBAL FOOTPRINT"
              title="International Recruitment Hubs"
              description="Direct operational capability in key financial and tech capitals across the globe."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hubs.map((h) => (
                <div key={h.city} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                  <MapPin className="w-8 h-8 text-corponizers-blue mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">{h.city}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">{h.region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
