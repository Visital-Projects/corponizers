'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function BrandStory() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-sky-50/50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">More Than A Name</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950">
            The Story Behind Corponizers
          </h3>
        </div>

        {/* Option D: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Left: Cinematic Brand Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-sky-50 rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/5 border border-sky-100/50"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="/video/Create_an_second_premium_cin.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Right: Editorial Story */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-blue-900/60 font-black text-2xl tracking-tighter">
              <span>Corporate</span>
              <span className="text-sky-300 font-light">+</span>
              <span>Organizers</span>
            </div>
            
            <div className="w-12 h-1 bg-sky-200"></div>
            
            <p className="text-xl text-blue-950 leading-relaxed font-medium">
              Because successful organizations are not built by hiring people randomly.
            </p>
            
            <div className="space-y-6 text-lg text-blue-900/70 font-light leading-relaxed">
              <p>
                Founded in 2023, the name Corponizers represents structured talent, organized growth, and long-term business partnerships. 
              </p>
              <p>
                They are built by organizing the right leadership, the right specialists, and the right teams. It reflects our philosophy that recruitment is not simply filling vacancies. It is building stronger organizations through carefully organized human capital.
              </p>
            </div>
            
            {/* The Transitions */}
            <div className="space-y-4 pt-6 border-t border-sky-100">
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                <span className="text-blue-900/40 w-48 text-right">Chaos</span>
                <span className="text-sky-400">→</span>
                <span className="text-blue-950 w-48">Structure</span>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                <span className="text-blue-900/40 w-48 text-right">Disconnected Talent</span>
                <span className="text-sky-400">→</span>
                <span className="text-blue-950 w-48">Organized Talent</span>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                <span className="text-blue-900/40 w-48 text-right">Vacancies</span>
                <span className="text-sky-400">→</span>
                <span className="text-blue-950 w-48">Long-term Capability</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Philosophy Statements (Pure Typography, No Dividers) */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-black text-blue-950 mb-3 tracking-tight">Organizing Talent</h4>
              <p className="text-blue-900/60 font-light leading-relaxed">
                Helping businesses build structured teams instead of filling vacancies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-black text-blue-950 mb-3 tracking-tight">Building Leadership</h4>
              <p className="text-blue-900/60 font-light leading-relaxed">
                Connecting enterprises with exceptional professionals.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-xl font-black text-blue-950 mb-3 tracking-tight">Creating Long-term Partnerships</h4>
              <p className="text-blue-900/60 font-light leading-relaxed">
                Supporting sustainable organizational growth.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
