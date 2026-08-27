'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Building2, User, Handshake, ArrowRight } from 'lucide-react';

export function WhatWeDoCards() {
  const cards = [
    {
      title: 'Helping Employers',
      heading: 'Structured Workforce Acquisition',
      desc: 'Partnering with enterprise organizations to define role requirements, conduct confidential screening, and deliver high-impact talent.',
      href: '/contact?desk=employer',
      cta: 'Book Consultation',
      icon: Building2,
    },
    {
      title: 'Helping Job Seekers',
      heading: 'Confidential Executive Placement',
      desc: 'Connecting qualified professionals with career-defining roles under strict privacy and non-disclosure protections.',
      href: '/careers',
      cta: 'Explore Open Roles',
      icon: User,
    },
    {
      title: 'Long-Term Partnerships',
      heading: 'Strategic Hiring Alignment',
      desc: 'Building multi-year talent pipelines and embedded recruitment frameworks that adapt to your evolving business goals.',
      href: '/solutions',
      cta: 'Discover Solutions',
      icon: Handshake,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="flex flex-col justify-between hover:border-sky-300 hover:shadow-brand-hover transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-corponizers-blue flex items-center justify-center border border-sky-100">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-blue-dark block">
                {item.title}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                {item.heading}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link href={item.href} className="text-xs font-bold text-corponizers-blue hover:text-sky-800 flex items-center gap-1.5 transition-colors">
                <span>{item.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
