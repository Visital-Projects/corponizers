'use client';

import React from 'react';
import Image from 'next/image';

const sectors = [
  { name: 'Technology & Digital', img: '/images/solutions/executive-search.webp', span: 'col-span-12 md:col-span-8 row-span-2', height: 'h-96' },
  { name: 'Manufacturing & Steel', img: '/images/solutions/permanent-hiring.webp', span: 'col-span-12 md:col-span-4 row-span-1', height: 'h-48' },
  { name: 'Healthcare & Life Sciences', img: '/images/solutions/rpo.webp', span: 'col-span-12 md:col-span-4 row-span-1', height: 'h-48' },
  { name: 'BFSI', img: '/images/contact/meeting.webp', span: 'col-span-12 md:col-span-6 row-span-1', height: 'h-64' },
  { name: 'Infrastructure & Energy', img: '/images/insights/research.webp', span: 'col-span-12 md:col-span-6 row-span-1', height: 'h-64' },
];

export function SectorMasonry() {
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-12 gap-4 auto-rows-min">
        {sectors.map((sector, idx) => (
          <div key={idx} className={`${sector.span} relative ${sector.height} rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500`}>
            <Image 
              src={sector.img} 
              alt={sector.name} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Premium Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90"></div>
            
            {/* Sector Title */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {sector.name}
              </h3>
              <div className="h-1 w-12 bg-sky-400 mt-4 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
