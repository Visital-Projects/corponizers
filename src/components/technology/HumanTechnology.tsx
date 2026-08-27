'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HumanTechnology() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sky-200/50 rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-300/30 rounded-full opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">The Corponizers Philosophy</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-950 tracking-tighter leading-[1.05]">
            Technology accelerates the work.<br/>
            People make the decision.
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Convergence Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 relative">
            
            {/* Left: Technology */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-sky-100 rounded-3xl p-10 text-right shadow-xl shadow-blue-950/5 relative"
            >
              <h4 className="text-xl font-black text-corponizers-blue tracking-tight mb-8">Technology</h4>
              <ul className="space-y-4 text-sm font-medium text-blue-900/60 flex flex-col items-end">
                <li>Data Aggregation</li>
                <li>Research Infrastructure</li>
                <li>Pattern Recognition</li>
                <li>Market Visibility</li>
                <li>Workflow Automation</li>
                <li>Execution Speed</li>
              </ul>
            </motion.div>

            {/* Right: Human Judgment */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-950 border border-blue-900 rounded-3xl p-10 text-left shadow-xl shadow-blue-950/20 relative"
            >
              <h4 className="text-xl font-black text-white tracking-tight mb-8">Human Judgment</h4>
              <ul className="space-y-4 text-sm font-medium text-sky-200/80">
                <li>Business Context</li>
                <li>Strategic Nuance</li>
                <li>Leadership Assessment</li>
                <li>Cultural Alignment</li>
                <li>Industry Experience</li>
                <li>Accountability</li>
              </ul>
            </motion.div>

            {/* Central Convergence Arrows (Desktop) */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-16 h-16 bg-white border border-sky-100 rounded-full flex flex-col items-center justify-center shadow-lg z-20"
              >
                <span className="text-2xl text-red-600 font-light">+</span>
              </motion.div>
              
              {/* Connecting SVG Lines */}
              <svg className="absolute w-full h-full" style={{ zIndex: 10 }}>
                 <motion.path 
                   d="M 25% 50% L 75% 50%" 
                   stroke="#e0f2fe" 
                   strokeWidth="2" 
                   strokeDasharray="4 4"
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.2 }}
                 />
              </svg>
            </div>

          </div>

          {/* Convergence Result */}
          <div className="mt-16 md:mt-24 text-center">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="inline-flex flex-col items-center"
             >
               <div className="w-px h-16 bg-gradient-to-b from-sky-200 to-red-600 mb-6 hidden md:block"></div>
               
               <div className="bg-white border-2 border-red-600 p-8 md:p-12 rounded-3xl shadow-2xl shadow-red-600/10">
                 <h4 className="text-3xl md:text-4xl font-black text-blue-950 tracking-tight">Better Talent Decisions.</h4>
                 <p className="mt-4 text-blue-900/60 font-light max-w-sm mx-auto">
                   The intersection where algorithmic speed meets executive experience.
                 </p>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
