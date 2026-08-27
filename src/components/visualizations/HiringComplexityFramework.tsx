'use client';

import React from 'react';
import { motion } from 'framer-motion';

const complexities = [
  {
    title: 'Regulatory & Compliance Rigor',
    desc: 'In sectors like Healthcare and Finance, leaders must possess unblemished track records navigating RBI, SEBI, or CDSCO mandates without sacrificing commercial aggression.'
  },
  {
    title: 'Severe Talent Scarcity',
    desc: 'The best candidates are rarely looking for jobs. They are embedded deep within competitor organizations, requiring targeted, discreet extraction strategies.'
  },
  {
    title: 'Deep Technical Specialization',
    desc: 'Industry 4.0, MedTech, and specialized IT require leaders who not only understand management but also possess deep, practitioner-level domain knowledge.'
  },
  {
    title: 'Cultural Integration Risk',
    desc: 'An executive who thrives in a multinational corporate environment may fail in a high-growth, promoter-driven Indian enterprise. Cultural alignment is as critical as competency.'
  }
];

export function HiringComplexityFramework() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative border-l-2 border-sky-200 pl-8 md:pl-12 py-8">
        
        {/* Animated tracking line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-[-2px] w-[2px] bg-sky-500"
        />

        <div className="space-y-16">
          {complexities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Dot marker */}
              <div className="absolute top-2 -left-[41px] md:-left-[57px] w-4 h-4 bg-white border-4 border-sky-500 rounded-full shadow-sm shadow-sky-500/30"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h4 className="text-2xl font-black text-blue-950 tracking-tight leading-tight">
                    {item.title}
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg text-blue-900/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
