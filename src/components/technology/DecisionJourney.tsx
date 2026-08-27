'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function DecisionJourney() {
  const steps = [
    { label: 'Signal', desc: 'Market data, leadership movements, and industry intelligence are captured continuously.' },
    { label: 'Research', desc: 'Raw data is processed by our infrastructure into structured candidate pipelines.' },
    { label: 'Context', desc: 'Practice leads map the pipelines against the specific cultural and strategic needs of the enterprise.' },
    { label: 'Intelligence', desc: 'Comparative dossiers are generated to highlight leadership gaps and opportunities.' },
    { label: 'Judgment', desc: 'Experienced directors evaluate the intelligence to eliminate false positives.' },
    { label: 'Decision', desc: 'The enterprise receives a verified shortlist of leaders capable of immediate impact.' },
    { label: 'Execution', desc: 'Secure coordination, interview alignment, and offer negotiation protocols are activated.' }
  ];

  return (
    <section className="py-32 bg-white border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-6 mb-24 max-w-3xl mx-auto">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
            From Data to Decision.
          </h3>
          <p className="text-lg text-blue-900/60 font-light leading-relaxed">
            The sequential architecture of a Corponizers search mandate.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-sky-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4 relative">
            
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col lg:items-center lg:text-center space-y-6"
              >
                {/* Node */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-sm shadow-xl transition-all duration-300
                  ${idx === steps.length - 1 ? 'bg-red-600 text-white shadow-red-600/20 scale-110' : 
                    idx === 0 ? 'bg-sky-500 text-white shadow-sky-500/20' : 
                    'bg-white border border-sky-200 text-blue-950 shadow-sky-900/5'}`}
                >
                  0{idx + 1}
                </div>
                
                {/* Content */}
                <div className="pl-6 lg:pl-0 border-l lg:border-l-0 border-sky-100 pb-8 lg:pb-0">
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-widest mb-3">{step.label}</h4>
                  <p className="text-[13px] text-blue-900/60 font-light leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
