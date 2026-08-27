'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function IntelligenceStack() {
  const stackLayers = [
    {
      num: '01',
      title: 'Market Intelligence',
      desc: 'Macro-level mapping of competitor landscapes, compensation trends, and structural industry shifts before the search begins.',
      color: 'bg-white',
      border: 'border-sky-100',
      text: 'text-blue-950'
    },
    {
      num: '02',
      title: 'Organizational Intelligence',
      desc: 'Deep contextual analysis of the hiring company\'s internal culture, leadership dynamics, and specific mandate requirements.',
      color: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-blue-950'
    },
    {
      num: '03',
      title: 'Talent Intelligence',
      desc: 'Micro-level evaluation of individual executives, parsing historical performance, competency matrices, and cultural fit.',
      color: 'bg-sky-100',
      border: 'border-sky-300',
      text: 'text-blue-950'
    },
    {
      num: '04',
      title: 'Decision Intelligence',
      desc: 'Synthesizing market, organizational, and talent data into structured comparative dossiers to enable objective hiring decisions.',
      color: 'bg-corponizers-blue',
      border: 'border-sky-500',
      text: 'text-white'
    },
    {
      num: '05',
      title: 'Execution Infrastructure',
      desc: 'The logistical backbone: multi-party calendar alignment, secure document transmission, and strict confidentiality protocols.',
      color: 'bg-blue-950',
      border: 'border-blue-900',
      text: 'text-white'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Architecture</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
              The Intelligence Stack.
            </h3>
            <p className="text-lg text-blue-900/60 font-light leading-relaxed max-w-md">
              A structured five-layer framework designed to convert fragmented industry data into actionable executive hiring decisions.
            </p>
          </div>

          <div className="lg:col-span-7 relative">
            {/* The vertical connection line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-sky-100 via-sky-300 to-blue-900 hidden sm:block"></div>

            <div className="space-y-6 md:space-y-8">
              {stackLayers.map((layer, idx) => (
                <motion.div 
                  key={layer.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start p-8 md:p-10 rounded-2xl border ${layer.color} ${layer.border} shadow-xl shadow-blue-950/5`}
                >
                  <div className={`text-4xl md:text-5xl font-black opacity-20 ${layer.text === 'text-white' ? 'text-white' : 'text-blue-900'} shrink-0 tracking-tighter`}>
                    {layer.num}
                  </div>
                  <div className="space-y-3">
                    <h4 className={`text-xl md:text-2xl font-black tracking-tight ${layer.text}`}>{layer.title}</h4>
                    <p className={`text-sm md:text-base font-light leading-relaxed ${layer.text === 'text-white' ? 'text-white/80' : 'text-blue-900/70'}`}>
                      {layer.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
