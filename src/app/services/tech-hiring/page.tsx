import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Cpu, CheckCircle2, ArrowRight, Code2, Server, BrainCircuit } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Tech & AI Talent Acquisition | Corponizers Enterprise',
  description: 'Specialized recruitment for AI/ML engineers, Cloud Solutions Architects, DevOps leads, and Cybersecurity directors.',
});

export default function TechHiringPage() {
  const domains = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      roles: ['Head of AI', 'LLM Research Scientist', 'ML Ops Architect', 'Computer Vision Specialist'],
      icon: BrainCircuit,
    },
    {
      title: 'Cloud & Infrastructure Architecture',
      roles: ['Principal Cloud Architect', 'DevOps Director', 'Kubernetes Specialist', 'Site Reliability Lead'],
      icon: Server,
    },
    {
      title: 'Enterprise Software Engineering',
      roles: ['Staff Backend Engineer', 'Full Stack Architect', 'Distributed Systems Lead', 'Engineering Director'],
      icon: Code2,
    },
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
                SPECIALIZED TECH PRACTICE
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Tech, AI &amp; Software Engineering Talent
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-normal">
                Connecting technology organizations with high-performing software engineers, AI researchers, and cloud leaders who drive technical innovation.
              </p>
              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Submit Tech Talent Request
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DOMAINS GRID */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="SPECIALIZATIONS"
              title="Deep Technology Focus Areas"
              description="Our technical recruiters have engineering backgrounds, ensuring candidate technical skills match enterprise requirements."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {domains.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{d.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600 font-medium">
                      {d.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-corponizers-blue shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
