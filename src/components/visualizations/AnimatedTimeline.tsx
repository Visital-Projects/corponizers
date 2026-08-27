'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
  { year: '2023', desc: 'Corponizers Founded' },
  { year: '2024', desc: 'Expanded into Executive Search and Multi-Industry Recruitment' },
  { year: '2025', desc: 'Built Structured Recruitment Processes and Enterprise Hiring Frameworks' },
  { year: 'Today', desc: 'Serving Businesses Across India with Specialized Talent Solutions' },
];

export function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative py-12 max-w-2xl mx-auto pl-4 sm:pl-1/2">
      {/* Background Line */}
      <div className="absolute left-[20px] top-0 bottom-0 w-px bg-slate-200"></div>
      
      {/* Animated Line */}
      <motion.div
        className="absolute left-[20px] top-0 bottom-0 w-px bg-slate-900 origin-top"
        style={{ scaleY }}
      ></motion.div>

      {/* Nodes */}
      <div className="space-y-24">
        {timelineData.map((milestone, idx) => (
          <Node key={idx} milestone={milestone} index={idx} />
        ))}
      </div>
    </div>
  );
}

function Node({ milestone, index }: { milestone: { year: string, desc: string }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-12 group"
    >
      {/* Circle Marker */}
      <div className="absolute left-[-5px] top-4 w-[10px] h-[10px] rounded-full bg-slate-200 border-2 border-white group-hover:bg-corponizers-blue transition-colors duration-300 z-10 shadow-sm"></div>
      
      <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">{milestone.year}</div>
      <div className="w-12 h-px bg-slate-300 mb-4"></div>
      <p className="text-lg text-slate-500 font-light max-w-sm leading-relaxed">{milestone.desc}</p>
    </motion.div>
  );
}
