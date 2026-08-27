'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function IntelligencePurpose() {
  return (
    <section className="py-24 md:py-32 bg-sky-50/30 border-y border-sky-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl space-y-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-1 bg-red-600"
          ></motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-950 tracking-tight leading-[1.1]"
          >
            Technology is not the product.<br/>
            <span className="text-corponizers-blue">Better decisions are.</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-blue-900/70 leading-relaxed max-w-3xl"
          >
            We do not sell software. We deploy proprietary technology internally to amplify the capabilities of our executive search consultants, ensuring our clients receive the most accurate talent intelligence available.
          </motion.p>
        </div>

        {/* Typographic Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-12 border-t border-sky-200/50">
          {[
            { label: 'Visibility', desc: 'Real-time mapping of global talent pools and competitor organizational structures.' },
            { label: 'Speed', desc: 'Accelerated candidate identification and seamless multi-party interview coordination.' },
            { label: 'Depth', desc: 'Aggregating hundreds of disparate data points into singular, cohesive executive profiles.' },
            { label: 'Consistency', desc: 'Enforcing structured evaluation frameworks to eliminate cognitive bias in hiring.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
              className="space-y-4"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-500">{item.label}</h4>
              <p className="text-sm font-medium text-blue-950 leading-relaxed pr-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
