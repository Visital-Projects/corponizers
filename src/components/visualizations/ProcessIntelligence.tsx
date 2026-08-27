'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Stage {
  step: string;
  title: string;
  description: string;
  owner: string;
}

export function ProcessIntelligence({ stage }: { stage: Stage }) {
  const nodes = [
    { label: 'Market Constraints', x: '-10%', y: '20%' },
    { label: 'Role Architecture', x: '110%', y: '20%' },
    { label: 'Competitor Mapping', x: '-10%', y: '80%' },
    { label: 'Cultural Dynamics', x: '110%', y: '80%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Content */}
        <div className="lg:w-5/12 space-y-8">
          <div className="text-[10px] font-black text-sky-400 uppercase tracking-widest flex items-center gap-4">
            <span className="flex-shrink-0 w-6 h-[1px] bg-sky-200"></span>
            {stage.step} — {stage.owner}
          </div>
          
          <h3 className="text-4xl font-black text-blue-950 tracking-tight leading-[1.1]">
            We understand the organization before we search the market.
          </h3>
          
          <p className="text-lg text-blue-900/70 font-light leading-relaxed">
            {stage.description}
          </p>
        </div>

        {/* Right: Organizational Framework Visual */}
        <div className="lg:w-7/12 relative h-[400px] w-full flex items-center justify-center">
          
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-20 w-48 h-48 bg-white border-2 border-sky-100 rounded-full shadow-xl flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-1">Central</span>
            <span className="text-xl font-black text-blue-950 leading-tight">Search<br/>Strategy</span>
          </motion.div>

          {/* Surrounding Nodes */}
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + (idx * 0.2) }}
              className="absolute z-10 w-32 h-32 bg-sky-50 border border-sky-100 rounded-full flex items-center justify-center p-4 text-center"
              style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest leading-tight">
                {node.label}
              </span>
            </motion.div>
          ))}

          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              d="M 50% 50% L 0% 20%" 
              stroke="#bae6fd" strokeWidth="1" fill="none" strokeDasharray="4 4"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              d="M 50% 50% L 100% 20%" 
              stroke="#bae6fd" strokeWidth="1" fill="none" strokeDasharray="4 4"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              d="M 50% 50% L 0% 80%" 
              stroke="#bae6fd" strokeWidth="1" fill="none" strokeDasharray="4 4"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              d="M 50% 50% L 100% 80%" 
              stroke="#bae6fd" strokeWidth="1" fill="none" strokeDasharray="4 4"
            />
          </svg>

        </div>

      </div>

    </div>
  );
}
