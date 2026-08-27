'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Phone, Mail, CheckCircle2, ShieldCheck, Send, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { event } from '@/lib/gtag';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ContactFormContent = dynamic(() => import('@/components/contact/ContactFormContent').then(mod => mod.ContactFormContent), { ssr: false });



export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-sky-200">
      
      <Header />

      <main className="flex-1">
        
        {/* SECTION 01 — THE INVITATION */}
        <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              
              <div className="space-y-10 relative z-10 lg:pr-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h1 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em]">Enterprise Engagement</h1>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-blue-950 leading-[0.95]"
                >
                  Let&apos;s discuss what you&apos;re <br className="hidden md:block"/>
                  <span className="text-corponizers-blue">building.</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-blue-900/60 font-light leading-relaxed max-w-lg"
                >
                  Connect with our Talent Directors to discuss executive search, RPO scaling, or confidential career advancement.
                </motion.p>
              </div>

              <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden shadow-xl shadow-blue-950/10">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                 >
                   <Image 
                     src="/images/contact/meeting.webp" 
                     alt="Consultation" 
                     fill
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover"
                     priority
                   />
                   {/* Premium subtle blue treatment overlay */}
                   <div 
                     className="absolute inset-0 pointer-events-none" 
                     style={{
                       background: 'linear-gradient(90deg, rgba(10, 30, 90, 0.45), rgba(25, 55, 130, 0.25))'
                     }}
                   ></div>
                   <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none"></div>
                 </motion.div>
                 
                 {/* Decorative Red Tie Element */}
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: "40%" }}
                   transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                   className="absolute top-0 right-12 w-2 bg-red-600 z-10"
                 ></motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 02 — THE CONVERSATION PATH */}
        <section className="py-24 bg-sky-50/30 border-y border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
              {/* Path connector line */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-sky-200"></div>

              {[
                { num: '01', title: 'Share Requirement', desc: 'Detail your organizational hiring objectives or submit your profile securely.' },
                { num: '02', title: 'Context Alignment', desc: 'A dedicated director reviews your specific mandate or executive summary.' },
                { num: '03', title: 'Structured Response', desc: 'We frame a tailored consultation addressing the exact requirement.' },
                { num: '04', title: 'Move Forward', desc: 'Initiate a verified search or proceed with confidential introductions.' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col md:items-center md:text-center space-y-6"
                >
                  <div className="w-14 h-14 bg-white border border-sky-200 rounded-full flex items-center justify-center text-sky-500 font-black text-xl shadow-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-blue-950 mb-2 tracking-tight">{step.title}</h4>
                    <p className="text-sm text-blue-900/60 font-light leading-relaxed max-w-xs">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 03 — CONTACT FORM */}
        <section className="py-24 md:py-32 bg-white relative">
           <Suspense fallback={
            <div className="w-full max-w-4xl mx-auto p-24 text-center text-sky-400 font-bold uppercase tracking-widest text-xs animate-pulse">
              Initializing Secure Terminal...
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </section>

        {/* SECTION 04 & 05 — TRUST & LOCATION */}
        <section className="py-24 md:py-32 bg-blue-950 text-white relative overflow-hidden">
          {/* Subtle Map SVG Background */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-1/2 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M50 0 C77 0 100 22 100 50 C100 77 77 100 50 100 C22 100 0 77 0 50 C0 22 22 0 50 0 Z" />
              <path d="M0 50 L100 50 M50 0 L50 100 M15 15 L85 85 M15 85 L85 15" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                    Every structured partnership begins with a secure conversation.
                  </h3>
                  <div className="w-12 h-1 bg-sky-500"></div>
                </div>

                <div className="space-y-6 max-w-md text-sm font-bold text-sky-100 uppercase tracking-[0.1em]">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10">
                    <ShieldCheck className="w-6 h-6 text-sky-400" /> Double-Blind Confidentiality
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-sky-400" /> 2-Hour Response SLA
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-12">
                
                <div>
                  <h3 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.2em] mb-6">India Headquarters</h3>
                  <div className="flex items-start gap-6">
                    <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div className="text-lg font-light text-white leading-relaxed">
                      <strong className="block text-2xl font-bold mb-2">Bhubaneswar Headquarters</strong>
                      5th Floor A- Zone, Fortune Tower,<br/>
                      Maitri Vihar, Rail Vihar, Chandrasekharpur,<br/>
                      Bhubaneswar, Odisha 751023
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm text-sky-400 uppercase tracking-widest font-black mb-1">Direct Line</strong>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+917008934524" className="text-lg font-light hover:text-sky-300 transition-colors">+91 7008934524</a>
                        <a href="tel:+917008681808" className="text-lg font-light hover:text-sky-300 transition-colors">+91 7008681808</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm text-sky-400 uppercase tracking-widest font-black mb-1">Enterprise Email</strong>
                      <span className="text-lg font-light">enterprise@corponizers.com</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
