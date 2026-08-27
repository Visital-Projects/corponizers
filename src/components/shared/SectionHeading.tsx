'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      }`}
    >
      {badge && (
        <div className={`mb-3 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant="sky" className="uppercase tracking-widest text-[10px] font-extrabold px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block mr-1.5" />
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
