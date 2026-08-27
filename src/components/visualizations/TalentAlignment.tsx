'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Stage {
  step: string;
  title: string;
  description: string;
  owner: string;
}

export function TalentAlignment({ stages }: { stages: Stage[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Editorial Statement & Process Steps */}
        <div className="space-y-12">
          
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
              Evaluation & Alignment
            </h3>
            <p className="text-xl text-blue-900/70 font-light leading-relaxed">
              Moving from potential talent to the precise operational fit. We facilitate a structured review process ensuring complete alignment before any formal introduction.
            </p>
          </div>

          <div className="space-y-8 pl-6 border-l border-sky-100">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="space-y-3"
              >
                <div className="text-[10px] font-black text-sky-400 uppercase tracking-widest flex items-center gap-4">
                  <span className="flex-shrink-0 w-4 h-[1px] bg-red-600"></span>
                  {stage.step} — {stage.owner}
                </div>
                <h4 className="text-2xl font-black text-blue-950 tracking-tight">
                  {stage.title}
                </h4>
                <p className="text-sm text-blue-900/70 font-light leading-relaxed max-w-sm">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right: The Typographic Equation */}
        <div className="relative h-full flex flex-col justify-center items-start lg:items-center py-12 lg:py-0">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-blue-950"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6">
              <span className="w-8 md:w-12 text-sky-300 font-light text-center"></span>
              <span>CAPABILITY</span>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6">
              <span className="w-8 md:w-12 text-sky-400 font-light text-center">+</span>
              <span>EXPERIENCE</span>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6">
              <span className="w-8 md:w-12 text-sky-400 font-light text-center">+</span>
              <span>CULTURE</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="pt-8 mt-8 border-t border-sky-100 flex items-center gap-6 text-corponizers-blue">
              <span className="w-8 md:w-12 font-light text-center">=</span>
              <span className="text-5xl sm:text-6xl md:text-7xl tracking-tight">FIT.</span>
            </motion.div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
