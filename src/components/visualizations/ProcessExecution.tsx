'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Stage {
  step: string;
  title: string;
  description: string;
  owner: string;
}

export function ProcessExecution({ stages }: { stages: Stage[] }) {
  return (
    <div className="pt-24 md:pt-32 pb-0">
      
      {/* The Cinematic Execution Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
             <div className="w-1 h-12 bg-red-600"></div>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-[1.05] max-w-4xl mx-auto">
            Talent is not simply found. <br/>
            <span className="text-corponizers-blue">It is organized.</span>
          </h3>
          <p className="text-xl text-blue-900/60 font-light max-w-2xl mx-auto">
            The final phases of our methodology ensure flawless operational execution from interview to onboarding.
          </p>
        </motion.div>
      </div>

      {/* The Cinematic Image */}
      <div className="w-full relative h-[400px] md:h-[600px] overflow-hidden bg-blue-950">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/careers/interview.webp" 
            alt="Execution" 
            fill 
            className="object-cover object-[center_30%] mix-blend-overlay opacity-80"
          />
        </motion.div>
        
        {/* Soft gradient transition to the grid below */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-sky-50/50 to-transparent"></div>
      </div>

      {/* The Final Stages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 border border-sky-100 shadow-xl shadow-blue-950/5 rounded-sm flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="text-3xl font-black text-sky-200">{stage.step}</span>
              </div>
              <div className="flex-1 space-y-4">
                <h4 className="text-xl font-black text-blue-950 tracking-tight leading-tight">
                  {stage.title}
                </h4>
                <p className="text-sm text-blue-900/70 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-sky-50">
                 <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">
                   {stage.owner}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
