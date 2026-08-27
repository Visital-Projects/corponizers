'use client';

import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items?: FAQItem[];
}

export function FAQSection({
  title = 'Frequently Asked Enterprise Questions',
  description = 'Everything you need to know about our recruitment SLAs, double-blind candidate privacy, and engagement models.',
  items = [
    {
      question: 'What is executive search?',
      answer: 'Executive search is a highly specialized recruitment service used to source candidates for senior-level, executive, or highly specialized positions. Unlike volume recruitment, it involves targeted headhunting, confidential outreach, and rigorous leadership assessment.',
    },
    {
      question: 'What is Recruitment Process Outsourcing (RPO)?',
      answer: 'Recruitment Process Outsourcing (RPO) is when a company transfers all or part of its permanent recruitment to an external provider. Corponizers embeds a dedicated talent acquisition team directly into your organization, managing the end-to-end hiring process under SLA-backed accountability.',
    },
    {
      question: 'How does Corponizers work?',
      answer: 'Corponizers operates as an enterprise recruitment partner. We deploy a 4-step framework: detailed mandate briefing, targeted candidate sourcing, domain-specific technical and behavioral pre-screening, and final offer management, ensuring a highly vetted shortlist.',
    },
    {
      question: 'Which industries does Corponizers recruit for?',
      answer: 'Corponizers specializes in recruitment for IT & Cloud Systems, Banking & Finance, Healthcare & Pharma, Manufacturing 4.0, Steel & Heavy Industry, Mining, Retail & E-commerce, Logistics, Education, and Renewable Energy sectors.',
    },
    {
      question: 'How long does recruitment take?',
      answer: 'For standard specialized and executive search mandates, Corponizers commits to presenting a fully vetted candidate shortlist within 14 business days. Total time-to-hire varies by seniority and notice periods but is actively managed to reduce operational delays.',
    },
    {
      question: 'What is contract staffing?',
      answer: 'Contract staffing is the provision of temporary or project-based professionals to an organization for a specific duration. It allows employers to scale their workforce elastically without increasing permanent headcount or long-term payroll liabilities.',
    }
  ]
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-corponizers-blue transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
