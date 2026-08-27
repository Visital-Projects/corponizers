import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface JobItem {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
}

interface RelatedJobsProps {
  jobs: JobItem[];
  currentSlug: string;
}

export function RelatedJobs({ jobs, currentSlug }: RelatedJobsProps) {
  const filtered = jobs.filter((j) => j.slug !== currentSlug).slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest block mb-1">
              SIMILAR OPPORTUNITIES
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Related Executive Roles
            </h2>
          </div>
          <Link
            href="/careers"
            className="text-xs font-bold text-corponizers-blue hover:text-sky-800 flex items-center gap-1.5 transition-colors"
          >
            View All Openings <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="sky">{job.department}</Badge>
                  <Badge variant="slate">{job.type}</Badge>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue-dark transition-colors leading-snug line-clamp-2">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                  {job.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" /> {job.experience}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
