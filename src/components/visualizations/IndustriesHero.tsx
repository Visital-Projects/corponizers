'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IndustriesHero() {
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
              <h1 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em]">Sector Intelligence</h1>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-950 tracking-tighter leading-[1.05]"
            >
              We understand industries, <br/>
              <span className="text-sky-500">not just job descriptions.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-blue-900/70 font-light leading-relaxed max-w-lg border-l-2 border-sky-100 pl-6"
            >
              Dedicated recruitment practice groups with active candidate networks, domain-specific assessment, and deep sector knowledge across key enterprise industries globally.
            </motion.p>
          </div>

          {/* Right: Asymmetric Image Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] md:aspect-[3/2] bg-sky-50 rounded-sm overflow-hidden shadow-2xl shadow-blue-950/10"
            >
              <Image
                src="/images/industries/finance.webp"
                alt="Corponizers Industry Intelligence"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply"></div>
              
              {/* Subtle Overlay Text to integrate sector names */}
              <div className="absolute bottom-6 right-6 text-right select-none opacity-50 mix-blend-overlay">
                 <div className="text-[10px] font-black text-white uppercase tracking-[0.4em] leading-loose">
                   Finance <br/>
                   Healthcare <br/>
                   Technology <br/>
                   Manufacturing <br/>
                   Heavy Industry
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
