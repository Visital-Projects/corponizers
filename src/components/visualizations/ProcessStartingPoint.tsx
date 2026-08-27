'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Stage {
  step: string;
  title: string;
  description: string;
  owner: string;
}

export function ProcessStartingPoint({ stages }: { stages: Stage[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* Background contextual signals */}
        <div className="absolute inset-0 -m-8 pointer-events-none hidden md:block">
           <div className="absolute top-0 left-0 text-[8px] font-mono text-sky-400/40 uppercase tracking-[0.3em]">Requirement Analysis</div>
           <div className="absolute top-1/4 right-0 text-[8px] font-mono text-sky-400/40 uppercase tracking-[0.3em] text-right">Competency Mapping</div>
           <div className="absolute bottom-0 left-1/4 text-[8px] font-mono text-sky-400/40 uppercase tracking-[0.3em]">Market Dynamics</div>
        </div>

        {/* The Document Artifact */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-white shadow-2xl shadow-blue-950/5 border border-sky-100 rounded-sm p-8 md:p-16"
        >
          {/* Header of the document */}
          <div className="flex justify-between items-start border-b-2 border-sky-50 pb-8 mb-12">
            <div>
              <div className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">The Mandate</div>
              <div className="text-xs text-sky-500 font-bold mt-1">CONFIDENTIAL</div>
            </div>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {stages.map((stage, idx) => (
              <div key={idx} className="space-y-6 relative">
                {/* Visual Step Marker */}
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

                {/* Subtle visual structural lines */}
                <div className="w-full h-px bg-gradient-to-r from-sky-100 to-transparent mt-8"></div>
              </div>
            ))}
          </div>
          
        </motion.div>
        
      </div>

    </div>
  );
}
