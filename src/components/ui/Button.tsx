'use client';

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { event } from '@/lib/gtag';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'crimson' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-corponizers-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide';

  const variants = {
    primary: 'bg-corponizers-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-md border border-corponizers-blue',
    secondary: 'bg-white text-corponizers-blue hover:bg-sky-50 shadow-xs border border-sky-200 hover:border-sky-300',
    crimson: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg border border-red-600',
    outline: 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400',
    ghost: 'bg-transparent text-slate-700 hover:bg-sky-50 hover:text-corponizers-blue',
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-extrabold',
  };

  const combinedClasses = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const text = typeof children === 'string' ? children : href || 'button';
    event({
      action: 'cta_click',
      category: 'engagement',
      label: text,
      destination: href || 'action',
    });
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>)(e);
    }
  };

  if (href) {
    return (
      <Link href={href} target={target} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
