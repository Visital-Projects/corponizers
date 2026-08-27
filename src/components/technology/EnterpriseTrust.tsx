'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function EnterpriseTrust() {
  const securityClaims = [
    { 
      title: 'Candidate PII Protection', 
      desc: 'Personal candidate information is stored securely and shared with employers only after explicit candidate consent is secured.' 
    },
    { 
      title: 'Double-Blind Operations', 
      desc: 'For highly sensitive executive replacements, hiring organization branding and candidate identities remain protected until shortlist review.' 
    },
    { 
      title: 'Secure Transmission', 
      desc: 'All candidate dossiers, structural analyses, and compensation notes are delivered through encrypted enterprise channels.' 
    }
  ];

  return (
    <section className="py-32 bg-blue-950 text-white relative overflow-hidden">
      
      {/* Subtle Abstract Geometry representing Security */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] text-sky-400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="180" y="180" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 200 200)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <h2 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.2em]">Information Security</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Built for sensitive decisions.
            </h3>
            <div className="w-12 h-1 bg-sky-500"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
              Executive recruitment requires the handling of highly sensitive market data, succession plans, and compensation structures. Our infrastructure is designed around absolute discretion.
            </p>
          </div>

          <div className="space-y-8">
            {securityClaims.map((claim, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="pl-8 border-l-2 border-white/10 hover:border-sky-500 transition-colors duration-300"
              >
                <h4 className="text-xl font-black text-white mb-2">{claim.title}</h4>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  {claim.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
