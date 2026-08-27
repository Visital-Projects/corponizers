'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Stage {
  step: string;
  title: string;
  description: string;
  owner: string;
}

export function TalentMarketField({ stages }: { stages: Stage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // As the user scrolls into the section, the background noise fades and the specific profiles come into focus.
  const noiseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.4, 0.1]);
  const focusOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.5, 1]);
  const focusScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const marketSignals = [
    "Passive Candidates", "Active Seekers", "Competitor Leadership", 
    "Alumni Networks", "Industry Forums", "Global Expatriates", 
    "Adjacent Sectors", "Emerging Talent", "Board Directors",
    "Technical Specialists", "Operations Heads", "Finance VPs"
  ];

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 min-h-[600px] flex items-center justify-center">
      
      {/* Abstract Talent Noise */}
      <motion.div 
        className="absolute inset-0 flex flex-wrap justify-center content-center gap-6 p-12 overflow-hidden pointer-events-none"
        style={{ opacity: noiseOpacity }}
      >
        {marketSignals.map((signal, idx) => (
          <span 
            key={idx} 
            className="text-2xl md:text-4xl font-black text-sky-900/40 uppercase tracking-tighter blur-[2px]"
          >
            {signal}
          </span>
        ))}
        {/* Repeat to fill space */}
        {marketSignals.map((signal, idx) => (
          <span 
            key={`rep-${idx}`} 
            className="text-xl md:text-3xl font-black text-blue-900/30 uppercase tracking-tighter blur-[4px]"
          >
            {signal}
          </span>
        ))}
      </motion.div>

      {/* The Focused Outcome */}
      <motion.div 
        style={{ opacity: focusOpacity, scale: focusScale }}
        className="relative z-10 w-full max-w-4xl bg-white rounded-sm p-8 md:p-12 shadow-2xl border border-sky-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stages.map((stage, idx) => (
            <div key={idx} className="space-y-6">
              <div className="text-[10px] font-black text-sky-400 uppercase tracking-widest flex items-center gap-4">
                <span className="flex-shrink-0 w-6 h-[1px] bg-sky-200"></span>
                {stage.step} — {stage.owner}
              </div>
              
              <h4 className="text-2xl font-black text-blue-950 tracking-tight">
                {stage.title}
              </h4>
              
              <p className="text-base text-blue-900/70 font-light leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
