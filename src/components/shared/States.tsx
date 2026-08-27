'use client';

import React from 'react';
import { Search, Briefcase, FileText, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface EmptyStateProps {
  type?: 'jobs' | 'blogs' | 'search' | 'contact';
  title?: string;
  description?: string;
  onReset?: () => void;
}

export function EmptyState({
  type = 'jobs',
  title = 'No Records Found',
  description = 'Try adjusting your search criteria or resetting filters.',
  onReset,
}: EmptyStateProps) {
  const icons = {
    jobs: Briefcase,
    blogs: FileText,
    search: Search,
    contact: RefreshCw,
  };

  const Icon = icons[type] || Briefcase;

  return (
    <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 text-corponizers-blue flex items-center justify-center mx-auto shadow-xs">
        <Icon className="w-8 h-8" />
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-black text-slate-900">{title}</h3>
        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>

      {onReset && (
        <div className="pt-2">
          <Button onClick={onReset} variant="outline" size="sm">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export function LoadingSkeleton({ type = 'cards' }: { type?: 'cards' | 'hero' | 'table' }) {
  if (type === 'hero') {
    return (
      <div className="animate-pulse space-y-6 max-w-4xl mx-auto py-16">
        <div className="h-4 bg-slate-200 rounded-full w-48 mx-auto" />
        <div className="h-12 bg-slate-200 rounded-2xl w-3/4 mx-auto" />
        <div className="h-6 bg-slate-200 rounded-xl w-1/2 mx-auto" />
      </div>
    );
  }

  return (
    <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-slate-100 rounded-2xl p-6 h-48 space-y-4 border border-slate-200/60">
          <div className="h-4 bg-slate-200 rounded-full w-24" />
          <div className="h-6 bg-slate-200 rounded-xl w-full" />
          <div className="h-4 bg-slate-200 rounded-xl w-5/6" />
        </div>
      ))}
    </div>
  );
}
