'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function SolutionsHero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
      
      {/* Background Parallax Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1, scale }}
      >
        <Image
          src="/images/contact/meeting.webp"
          alt="Enterprise Strategy"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        {/* Soft Corponizers Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-1 bg-red-600 rounded-full"></div>
              <h1 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.3em]">Practice Ecosystem</h1>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05]"
            >
              Architecting <br/> Enterprise Talent.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 lg:pb-4"
          >
            <p className="text-lg md:text-xl text-sky-100/80 font-light leading-relaxed border-l border-sky-400/30 pl-6">
              Eight specialized execution models built for Indian enterprise precision, speed, and absolute compliance.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
