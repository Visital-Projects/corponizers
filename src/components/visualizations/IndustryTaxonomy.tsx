'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Industry {
  title: string;
  slug: string;
  eyebrow: string;
  roles: string;
  description: string;
  image: string;
}

export function IndustryTaxonomy({ industries }: { industries: Industry[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Typographic Index */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          {industries.map((ind, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={ind.slug}
                className="relative group cursor-pointer border-b border-sky-100 pb-4"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Active Indicator Line */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: isActive ? '100%' : '0%',
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-red-600 z-10"
                />

                <div className="flex items-end justify-between transition-all duration-300 transform origin-left">
                  <h3 
                    className={`font-black tracking-tighter transition-all duration-300 ${
                      isActive 
                        ? 'text-4xl md:text-5xl lg:text-6xl text-blue-950 scale-100' 
                        : 'text-2xl md:text-3xl text-sky-200 group-hover:text-sky-300 scale-95'
                    }`}
                  >
                    {ind.title}
                  </h3>
                  
                  {/* Subtle index number */}
                  <span className={`text-xs font-bold tracking-widest transition-opacity duration-300 ${isActive ? 'opacity-100 text-sky-500' : 'opacity-0'}`}>
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Rich Sector Depth Detail */}
        <div className="lg:w-1/2 relative h-[600px] lg:h-[700px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              
              {/* Image Reveal */}
              <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden bg-sky-50 shadow-2xl shadow-blue-950/10 mb-10">
                <Image
                  src={industries[activeIndex].image}
                  alt={industries[activeIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
              </div>

              {/* Content Integration */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest bg-blue-950 px-3 py-1.5 rounded-sm">
                    {industries[activeIndex].eyebrow}
                  </span>
                  <span className="text-xs font-bold text-corponizers-blue uppercase tracking-widest">
                    {industries[activeIndex].roles.split('·')[0].trim()} placements
                  </span>
                </div>

                <p className="text-xl text-blue-900/70 font-light leading-relaxed">
                  {industries[activeIndex].description}
                </p>

                <div className="pt-4">
                  <Link 
                    href={`/industries/${industries[activeIndex].slug}`} 
                    className="inline-flex items-center gap-2 text-sm font-black text-corponizers-blue uppercase tracking-widest hover:text-blue-950 transition-colors group"
                  >
                    View Sector Practice 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
