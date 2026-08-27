'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClientLogos } from '@/components/shared/ClientLogos';
import { ArrowRight, Search, Users, Laptop, Briefcase, GraduationCap, FileSignature, Building2, Globe, Megaphone, LineChart, Map, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  { id: 1, title: 'Executive Search', desc: 'C-Suite leadership acquisition', icon: Search, top: '5%', left: '45%' },
  { id: 2, title: 'RPO', desc: 'End-to-end recruitment outsourcing', icon: Users, top: '15%', left: '75%' },
  { id: 3, title: 'Technology Hiring', desc: 'Niche IT talent sourcing', icon: Laptop, top: '40%', left: '85%' },
  { id: 4, title: 'Leadership Hiring', desc: 'VP and Director level placements', icon: Briefcase, top: '65%', left: '75%' },
  { id: 5, title: 'Campus Recruitment', desc: 'Volume hiring from premier institutes', icon: GraduationCap, top: '80%', left: '45%' },
  { id: 6, title: 'Contract Staffing', desc: 'Flexible workforce solutions', icon: FileSignature, top: '65%', left: '15%' },
  { id: 7, title: 'Permanent Hiring', desc: 'Core team building', icon: Building2, top: '40%', left: '5%' },
  { id: 8, title: 'Global Talent', desc: 'Cross-border recruitment', icon: Globe, top: '15%', left: '15%' },
  { id: 9, title: 'Employer Branding', desc: 'Talent attraction strategies', icon: Megaphone, top: '25%', left: '45%' },
  { id: 10, title: 'Market Intelligence', desc: 'Compensation benchmarking', icon: LineChart, top: '40%', left: '25%' },
  { id: 11, title: 'Talent Mapping', desc: 'Competitor landscape analysis', icon: Map, top: '40%', left: '65%' },
  { id: 12, title: 'Workforce Consulting', desc: 'Organizational design', icon: Lightbulb, top: '55%', left: '45%' },
];

const metrics = [
  { value: 2023, label: 'Founded', suffix: '' },
  { value: 100, label: 'Pan India Delivery', suffix: '%' },
  { value: 12, label: 'Industry Practices', suffix: '+' },
  { value: 50, label: 'Enterprise Partners', suffix: '+' },
  { value: 500, label: 'Leadership Hires', suffix: '+' },
  { value: 90, label: 'Day Placement Warranty', suffix: '' },
];

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function EnterpriseEcosystem() {
  return (
    <section className="bg-sky-50/30 overflow-hidden">
      
      {/* Top Section: 40/60 Split */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col xl:flex-row gap-16 items-center">
          
          {/* Left Side: 40% Editorial */}
          <div className="xl:w-2/5 space-y-8 z-10 relative">
            <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">The Corponizers Advantage</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-blue-950">
              Beyond Recruitment.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Total Talent Ecosystem.</span>
            </h3>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <p className="text-lg text-blue-900/70 font-light leading-relaxed">
              Most recruitment agencies focus on filling empty seats. We build comprehensive talent infrastructures. From niche leadership acquisition to global market intelligence, Corponizers is the holistic partner scaling your enterprise capabilities.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 bg-white text-blue-950 border border-sky-200 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              Explore Solutions <ArrowRight className="w-4 h-4 text-sky-500" />
            </Link>
          </div>
          
          {/* Right Side: 60% Ecosystem Visualization */}
          <div className="xl:w-3/5 w-full relative h-[600px] lg:h-[800px] flex items-center justify-center">
            
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

            {/* Connecting SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {capabilities.map((cap) => (
                <motion.line
                  key={`line-${cap.id}`}
                  x1="50%"
                  y1="50%"
                  x2={cap.left}
                  y2={cap.top}
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: cap.id * 0.1, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Center Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-32 h-32 bg-white rounded-full border-4 border-sky-100 shadow-2xl shadow-sky-900/20"
            >
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-sm shadow-red-600/40"></div>
              <span className="font-black text-blue-950 tracking-widest text-sm">CORPONIZERS</span>
              <span className="text-[9px] text-sky-500 font-bold tracking-widest mt-1 uppercase">Ecosystem</span>
            </motion.div>

            {/* Orbiting Capability Nodes */}
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  className="absolute z-10 group"
                  style={{ top: cap.top, left: cap.left, x: '-50%', y: '-50%' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1, type: "spring" }}
                >
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="relative flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl shadow-sky-900/10 cursor-pointer hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-1 transition-all duration-300 w-48 sm:w-56"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-corponizers-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-blue-950 leading-tight">{cap.title}</h4>
                      <p className="text-[10px] text-sky-600/80 font-medium leading-tight mt-0.5 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:mt-1 transition-all duration-300">{cap.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x divide-blue-800/50">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-black text-sky-400 tracking-tighter mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[10px] font-bold tracking-widest text-sky-200 uppercase max-w-[120px]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Layer (Client Logos) */}
      <div className="bg-white py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Trusted By Enterprise Companies</h2>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-blue-900/60 uppercase tracking-widest">
            <span>Manufacturing</span> <span className="text-sky-300">•</span>
            <span>IT</span> <span className="text-sky-300">•</span>
            <span>Healthcare</span> <span className="text-sky-300">•</span>
            <span>BFSI</span> <span className="text-sky-300">•</span>
            <span>Steel</span> <span className="text-sky-300">•</span>
            <span>Energy</span> <span className="text-sky-300">•</span>
            <span>Education</span>
          </div>
        </div>
        <ClientLogos />
      </div>

    </section>
  );
}
