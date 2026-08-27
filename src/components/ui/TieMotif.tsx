'use client';

import React from 'react';

interface TieMotifProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TieMotif({ size = 'md', className = '' }: TieMotifProps) {
  const sizes = {
    sm: 'w-1.5 h-3',
    md: 'w-2 h-4',
    lg: 'w-2.5 h-5',
  };

  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-red-600 rounded-b-xs shadow-xs transform rotate-6 transition-transform group-hover:rotate-12 ${sizes[size]} ${className}`}
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 50% 85%, 20% 100%)',
      }}
    />
  );
}
