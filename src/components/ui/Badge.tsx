import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'sky' | 'slate' | 'emerald' | 'amber' | 'rose';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'sky', children, className }: BadgeProps) {
  const styles = {
    sky: 'bg-sky-50 text-brand-blue-dark border-sky-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
          styles[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
}
