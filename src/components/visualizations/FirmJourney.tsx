'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const journeySteps = [
  {
    id: '01',
    subtitle: '2023',
    title: 'The Beginning',
    desc: 'Corponizers was established to address a critical gap: the absence of truly structured, enterprise-grade leadership hiring in a volatile market.',
  },
  {
    id: '02',
    subtitle: 'The Idea',
    title: 'Corporate + Organizers',
    desc: 'We realized that successful organizations are not built by hiring randomly. They are built by organizing the right leadership and the right teams. Our name became our thesis.',
  },
  {
    id: '03',
    subtitle: 'The Build',
    title: 'Structuring Execution',
    desc: 'We replaced traditional recruitment chaos with rigorous talent mapping, sector-specific expertise, and structured execution protocols.',
  },
  {
    id: '04',
    subtitle: 'Today',
    title: 'An Enterprise Ecosystem',
    desc: 'Operating as the retained search and talent partner for India’s fastest-growing enterprises, from niche leadership acquisition to global market intelligence.',
  },
];

export function FirmJourney() {
  return (
    <div className="w-full relative bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Our Trajectory</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-blue-950 max-w-4xl mx-auto leading-[1.1]">
            From a singular thesis to an enterprise talent platform.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left: Sticky Visual Anchor */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-32 space-y-8">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-sky-50">
                <Image
                  src="/images/insights/research.webp"
                  alt="Firm Journey"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
                
                {/* Massive 2023 Watermark */}
                <div className="absolute -bottom-8 -right-8 text-[200px] font-black text-white/90 leading-none tracking-tighter select-none drop-shadow-2xl">
                  2023
                </div>
              </div>
              
              {/* Red Tie Motif Element */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-red-600"></div>
                <p className="text-xs font-bold text-blue-950 tracking-widest uppercase">The Genesis</p>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Editorial Narrative */}
          <div className="lg:w-1/2 space-y-32 py-16 lg:py-32">
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Step Marker */}
                <div className="absolute -left-8 md:-left-12 top-2 text-sm font-black text-sky-300 -rotate-90 origin-right tracking-widest">
                  {step.id}
                </div>
                
                <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">
                  {step.subtitle}
                </h4>
                <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xl text-blue-900/70 font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
