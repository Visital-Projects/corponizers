'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TieMotif } from '@/components/ui/TieMotif';

export function TechnologyHero() {
  return (
    <section className="pt-48 pb-32 bg-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Editorial Content */}
          <div className="space-y-10 lg:pr-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <TieMotif size="sm" />
              <h1 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em]">The Intelligence Infrastructure</h1>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-blue-950 leading-[0.95]"
            >
              Technology behind better <span className="text-corponizers-blue">talent decisions.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-blue-900/60 font-light leading-relaxed max-w-lg"
            >
              Corponizers combines human judgment with structured data, market intelligence and technology-enabled execution to bring clarity to complex talent decisions.
            </motion.p>
          </div>

          {/* Right: Abstract Data Field Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl bg-gradient-to-br from-sky-50/50 to-white border border-sky-100 flex items-center justify-center overflow-hidden shadow-2xl shadow-blue-950/5"
          >
            {/* The Intelligence Field SVG */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-60">
              <defs>
                <linearGradient id="signal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Grid backdrop */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0f2fe" strokeWidth="0.5" />
              </pattern>
              <rect width="400" height="400" fill="url(#grid)" />

              {/* Data Lines */}
              <motion.path 
                d="M 0 200 C 150 200 250 100 400 150" 
                fill="none" 
                stroke="url(#signal-grad)" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 0 250 C 100 250 200 300 400 200" 
                fill="none" 
                stroke="#38bdf8" 
                strokeWidth="1"
                strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Data Nodes */}
              <motion.circle cx="150" cy="200" r="4" fill="#0ea5e9" 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
              />
              <motion.circle cx="250" cy="100" r="6" fill="#1e3a8a" 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}
              />
              <motion.circle cx="200" cy="300" r="3" fill="#dc2626" 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
              />
              
              {/* Connecting Lines */}
              <motion.line x1="150" y1="200" x2="250" y2="100" stroke="#bae6fd" strokeWidth="1" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1 }}
              />
              <motion.line x1="250" y1="100" x2="200" y2="300" stroke="#bae6fd" strokeWidth="1" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 1 }}
              />

            </svg>
            
            {/* Overlay Typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
               <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-sky-100 shadow-xl shadow-sky-900/5 translate-y-12">
                 <span className="text-xs font-black text-blue-950 tracking-[0.2em] uppercase">Structured Intelligence</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
