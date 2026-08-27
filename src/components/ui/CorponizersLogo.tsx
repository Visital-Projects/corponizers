'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CorponizersLogo({ variant = 'light', className, size = 'md' }: LogoProps) {
  const heights = {
    sm: 36,
    md: 44,
    lg: 56,
  };

  return (
    <Link href="/" className={twMerge(clsx('inline-flex items-center gap-3 group', className))}>
      <div className="relative overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-slate-100 group-hover:border-sky-300 transition-all">
        <Image
          src="/logo.jpg"
          alt="Corponizers Enterprise Recruitment Logo"
          width={180}
          height={60}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
