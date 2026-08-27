'use client';

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  { name: 'Dalmia Bharat', src: '/images/clients/dalmia-bharat.webp' },
  { name: 'IMFA', src: '/images/clients/imfa.webp' },
  { name: 'In2IT', src: '/images/clients/in2it.webp' },
  { name: 'JSL', src: '/images/clients/jsl.webp' },
  { name: 'Larsen & Toubro', src: '/images/clients/larsen-toubro.webp' },
  { name: 'GAAR', src: '/images/clients/gaar.webp' },
  { name: 'Centurion University', src: '/images/clients/centurion-university.webp' },
  { name: 'Sai Paramount', src: '/images/clients/sai-paramount.webp' },
  { name: 'STL', src: '/images/clients/stl.webp' },
  { name: 'Incture', src: '/images/clients/incture.webp' },
  { name: 'NBT', src: '/images/clients/nbt.webp' },
  { name: 'TPCODL', src: '/images/clients/tpcodl.webp' },
  { name: 'CureBay', src: '/images/clients/curebay.webp' },
  { name: 'Creative School', src: '/images/clients/creative-school.webp' },
  { name: 'Jindal Steel & Power', src: '/images/clients/jindal-steel-power.webp' },
  { name: 'HCLTech', src: '/images/clients/hcltech.webp' },
  { name: 'Oditek', src: '/images/clients/oditek.webp' },
  { name: 'Fortis Chemicals', src: '/images/clients/fortis-chemicals.webp' },
  { name: 'Himadri', src: '/images/clients/himadri.webp' },
  { name: 'IDBI Bank', src: '/images/clients/idbi-bank.webp' },
  { name: 'IIM Sambalpur', src: '/images/clients/iim-sambalpur.webp' },
  { name: 'IIM Ranchi', src: '/images/clients/iim-ranchi.webp' },
  { name: 'JDG', src: '/images/clients/jdg.webp' },
  { name: 'JSW', src: '/images/clients/jsw.webp' },
  { name: 'Kalyani', src: '/images/clients/kalyani.webp' },
  { name: 'Mohini', src: '/images/clients/mohini.webp' },
  { name: 'MPL', src: '/images/clients/mpl.webp' },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-slate-50/70 border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Trusted by Leading Organizations
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Organizations across manufacturing, infrastructure, technology, BFSI, healthcare, education and energy trust Corponizers for strategic talent acquisition.
          </p>
        </div>

        {/* 6-Column Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-center h-24 hover:shadow-md hover:border-sky-200 hover:scale-[1.03] transition-all duration-200 cursor-pointer group"
            >
              <div className="relative w-full h-12 flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={160}
                  height={48}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
