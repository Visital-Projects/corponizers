'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProcessHero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Editorial Typography */}
          <div className="lg:col-span-6 space-y-10 lg:pr-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <div className="w-16 h-1 bg-red-600"></div>
              <h1 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em]">How We Execute</h1>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter leading-[0.95]"
            >
              <span className="block text-blue-950">Structured.</span>
              <span className="block text-sky-200">Predictable.</span>
              <span className="block text-corponizers-blue">Verified.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-blue-900/70 font-light leading-relaxed max-w-lg border-l-2 border-sky-100 pl-6"
            >
              A transparent, 11-stage methodology engineered to eliminate placement risk, protect confidential restructuring, and deliver verified talent without compromise.
            </motion.p>
          </div>

          {/* Right: The Transformation Metaphor */}
          <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            {/* The fragmented blocks moving together */}
            <motion.div 
              initial={{ x: 100, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[10%] right-[10%] w-[60%] h-[50%] bg-sky-50 z-10 rounded-sm shadow-2xl overflow-hidden"
            >
               <Image src="/images/contact/meeting.webp" alt="Strategy" fill className="object-cover grayscale opacity-50 mix-blend-multiply" />
            </motion.div>
            
            <motion.div 
              initial={{ x: -100, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[10%] left-[10%] w-[50%] h-[40%] bg-blue-950 z-20 rounded-sm shadow-2xl overflow-hidden flex items-center justify-center p-8"
            >
              <div className="w-full h-full border border-sky-500/30 flex flex-col justify-between">
                 <div className="w-8 h-[2px] bg-sky-500/50 mt-4 ml-4"></div>
                 <div className="w-16 h-[2px] bg-red-600/80 mb-4 ml-4"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[35%] left-[25%] w-[50%] h-[60%] bg-white z-30 rounded-sm shadow-2xl overflow-hidden border border-sky-100"
            >
              <Image src="/images/home/strategy.webp" alt="Execution" fill className="object-cover" priority />
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
