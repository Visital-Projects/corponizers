'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 transition-all duration-300',
          hoverEffect && 'hover:shadow-brand-hover hover:border-sky-300 hover:-translate-y-1',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
