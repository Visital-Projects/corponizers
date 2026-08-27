'use client';

import React from 'react';

import { 
  Search, 
  UserCheck, 
  CheckCircle2, 
  Award, 
  Briefcase
} from 'lucide-react';

export function InteractiveProcess() {
  const steps = [
    {
      number: '01',
      title: 'Organizational Blueprinting',
      description: 'We map corporate culture, competency benchmarks, and enterprise KPIs to build structured talent blueprints.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Confidential Passive Sourcing',
      description: 'Our double-blind executive network grants direct access to active leaders not visible on open channels.',
      icon: UserCheck,
    },
    {
      number: '03',
      title: 'Multi-Layer Auditing',
      description: 'Rigorous psychometric assessments, technical audits, and reference verification prior to introduction.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'SLA Placement & Warranty',
      description: 'Offer negotiation, onboarding facilitation, and a 90-day executive retention performance guarantee.',
      icon: Award,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div
            key={step.number}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative flex flex-col justify-between group hover:border-sky-300 hover:shadow-brand-hover transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-slate-200 group-hover:text-corponizers-blue transition-colors">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-blue-dark transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-corponizers-blue">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              <span>Precision SLA Gate</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
