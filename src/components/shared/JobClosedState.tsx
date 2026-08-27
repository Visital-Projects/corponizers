import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AlertCircle, ArrowRight, Briefcase } from 'lucide-react';

export function JobClosedState() {
  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black text-amber-600 uppercase tracking-widest block">
            POSITION NO LONGER ACCEPTING APPLICATIONS
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            This Opportunity Has Been Filled or Closed
          </h1>
          <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-lg mx-auto">
            The executive position specification you are looking for is no longer active. You can explore active executive and specialist openings across our practice areas below.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/careers" variant="primary" size="lg">
            <Briefcase className="w-4 h-4 mr-2" />
            Browse Active Openings
          </Button>
          <Button href="/contact?type=candidate" variant="outline" size="lg">
            Submit General Resume
          </Button>
        </div>

      </div>
    </div>
  );
}
