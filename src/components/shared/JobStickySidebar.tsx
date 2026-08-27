'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Share2, 
  Check 
} from 'lucide-react';

interface JobStickySidebarProps {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    salaryRange?: string;
  };
  onApplyClick: () => void;
}

export function JobStickySidebar({ job, onApplyClick }: JobStickySidebarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };



  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-6 sticky top-28 shadow-xs">
      
      {/* Header Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="sky">{job.department}</Badge>
        <Badge variant="slate">{job.type}</Badge>
      </div>

      {/* Title */}
      <div>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
          POSITION SPECIFICATION
        </span>
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {job.title}
        </h3>
      </div>

      {/* Metadata list */}
      <div className="space-y-3 pt-2 border-t border-slate-200/80 text-xs text-slate-700 font-medium">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-normal">
            <MapPin className="w-4 h-4 text-corponizers-blue shrink-0" /> Location
          </span>
          <span className="font-bold text-slate-900">{job.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-normal">
            <Clock className="w-4 h-4 text-corponizers-blue shrink-0" /> Experience
          </span>
          <span className="font-bold text-slate-900">{job.experience}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-normal">
            <Briefcase className="w-4 h-4 text-corponizers-blue shrink-0" /> Role Type
          </span>
          <span className="font-bold text-slate-900">{job.type}</span>
        </div>

        {job.salaryRange && (
          <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
            <span className="text-slate-500 font-normal">Compensation</span>
            <span className="font-bold text-emerald-700">{job.salaryRange}</span>
          </div>
        )}
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3 pt-2">
        <Button onClick={onApplyClick} variant="primary" size="lg" className="w-full">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <div className="pt-1">
          <button
            onClick={handleShare}
            className="w-full py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied to Clipboard!
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" /> Share Position Specification
              </>
            )}
          </button>
        </div>
      </div>

      {/* Trust Guarantee note */}
      <div className="pt-4 border-t border-slate-200/80 space-y-2 text-[11px] text-slate-500 font-normal leading-relaxed">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-corponizers-blue shrink-0 mt-0.5" />
          <span>
            Submissions are confidential. Only authorized practice directors review candidate profiles.
          </span>
        </div>
      </div>

    </div>
  );
}
