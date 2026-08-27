'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function TechnologyCapabilities() {
  const capabilities = [
    {
      category: 'Core Systems',
      items: [
        {
          title: 'Candidate Volume Organization',
          desc: 'When hundreds of applications enter a mandate, practical technology organizes profiles by verified domain criteria so hiring teams never lose high-potential candidates.',
          metric: '10k+',
          metricLabel: 'Profiles Processed'
        },
        {
          title: 'Multi-Party Coordination',
          desc: 'Aligning calendars between enterprise hiring managers, practice leads, and busy candidates requires automated scheduling tools that remove email back-and-forth.',
          metric: '48h',
          metricLabel: 'Avg. Scheduling Time'
        },
        {
          title: 'Real-Time Pipeline Visibility',
          desc: 'Employers receive structured status updates at every stage of the funnel — eliminating silence and uncertainty during active search mandates.',
          metric: '24/7',
          metricLabel: 'Data Access'
        },
        {
          title: 'Structured Evaluation Records',
          desc: 'Standardized assessment scorecards capture interviewer feedback consistently, ensuring decisions are based on objective competency data.',
          metric: '100%',
          metricLabel: 'Audit Compliance'
        }
      ]
    },
    {
      category: 'Communication Protocols',
      items: [
        {
          title: 'Structured Progress Updates',
          desc: 'Employers receive regular written updates outlining candidate sourcing volume, screening progress, and upcoming interview schedules.',
          metric: 'Weekly',
          metricLabel: 'Reporting'
        },
        {
          title: 'Comprehensive Candidate Dossiers',
          desc: 'Every introduced profile includes a standardized 4-layer dossier covering technical capabilities, compensation details, and motivation analysis.',
          metric: '4-Layer',
          metricLabel: 'Analysis'
        },
        {
          title: 'Seamless Interview Coordination',
          desc: 'Calendar invites, briefing documents, and interviewer scorecards are delivered automatically to panel members prior to every interview.',
          metric: 'Zero',
          metricLabel: 'Friction'
        },
        {
          title: 'Offer Alignment Protocols',
          desc: 'Compensation expectations and notice period milestones are tracked continuously to prevent late-stage offer dropouts.',
          metric: 'Proactive',
          metricLabel: 'Management'
        }
      ]
    }
  ];

  return (
    <section className="py-32 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-6">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1] max-w-2xl">
            Practical Infrastructure for Modern Recruitment.
          </h3>
        </div>

        <div className="space-y-32">
          {capabilities.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="border-b-2 border-blue-950 pb-4 mb-12">
                <h4 className="text-2xl font-black text-blue-950 tracking-tighter">{group.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                {group.items.map((item, itemIdx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: itemIdx * 0.1 }}
                    className="flex flex-col h-full justify-between space-y-8"
                  >
                    <div className="space-y-4">
                      <h5 className="text-xl font-black text-blue-950 leading-snug">{item.title}</h5>
                      <p className="text-base text-blue-900/70 font-light leading-relaxed">{item.desc}</p>
                    </div>
                    
                    <div className="pt-6 border-t border-sky-200">
                      <p className="text-3xl font-black text-corponizers-blue tracking-tighter">{item.metric}</p>
                      <p className="text-[10px] font-black text-blue-950/40 uppercase tracking-widest mt-1">{item.metricLabel}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
