'use client';

import React from 'react';
import Image from 'next/image';
import { Breadcrumbs, BreadcrumbItem } from '@/components/shared/Breadcrumbs';
import { TieMotif } from '@/components/ui/TieMotif';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  variant?: 'brand' | 'dark' | 'clean' | 'editorial';
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  variant = 'brand',
  ctaText,
  ctaHref = '/contact',
  imageSrc,
  imageAlt = '',
  children,
}: PageHeroProps) {
  const backgrounds = {
    brand: 'brand-hero-bg border-b border-slate-100',
    editorial: 'bg-slate-50 border-b border-slate-200',
    clean: 'bg-white border-b border-slate-100',
  };

  return (
    <section className={`pt-12 pb-16 sm:pt-16 sm:pb-20 relative overflow-hidden ${backgrounds[variant === 'dark' ? 'editorial' : variant]}`}>
      
      {/* Ambient background mesh */}
      {variant === 'brand' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Breadcrumb nav */}
        <div>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className={`${(children || imageSrc) ? 'lg:col-span-6' : 'lg:col-span-10'} space-y-5 pr-0 lg:pr-8`}>
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-extrabold tracking-wide border border-sky-200/80 shadow-xs">
              <TieMotif size="sm" />
              <span>{eyebrow.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
              {title}
            </h1>

            <p className="text-base sm:text-lg max-w-2xl font-normal leading-relaxed text-slate-600">
              {description}
            </p>

            {ctaText && (
              <div className="pt-2">
                <Button href={ctaHref} variant="primary" size="md">
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

          </div>

          {(imageSrc || children) && (
            <div className="lg:col-span-6">
              {imageSrc ? (
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-slate-200/50">
                  <Image 
                    src={imageSrc}
                    alt={imageAlt || title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                children
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
