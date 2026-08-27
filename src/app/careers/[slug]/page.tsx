'use client';

import React, { useState, useEffect, use } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JobPostingSchema } from '@/components/shared/JobPostingSchema';
import { JobStickySidebar } from '@/components/shared/JobStickySidebar';
import { RelatedJobs } from '@/components/shared/RelatedJobs';
import { JobClosedState } from '@/components/shared/JobClosedState';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Building2, 
  UserCheck, 
  Calendar,
  FileCheck,
  Award
} from 'lucide-react';
import Link from 'next/link';

interface JobDetailProps {
  params: Promise<{ slug: string }>;
}

export default function JobDetailPage({ params }: JobDetailProps) {
  const { slug } = use(params);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [job, setJob] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    async function fetchJobData() {
      try {
        setLoading(true);
        const res = await fetch('/api/jobs');
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setAllJobs(json.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const matched = json.data.find((j: any) => j.slug === slug);
          setJob(matched || null);
        }
      } catch (err) {
        console.error('Failed to fetch job specification:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobData();
  }, [slug]);

  // Modal ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setApplyModalOpen(false);
      }
    };
    if (applyModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [applyModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Job Application',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          jobSlug: slug,
          jobTitle: job?.title || 'Executive Position',
          resumeUrl: formData.resumeUrl,
          message: formData.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(json.error || 'Submission failed');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setSubmitError('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 text-slate-500 font-semibold">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-corponizers-blue border-t-transparent rounded-full animate-spin" />
            <span>Loading position specification...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job || job.status === 'Closed') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          <JobClosedState />
          <RelatedJobs jobs={allJobs} currentSlug={slug} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <JobPostingSchema job={job} />
      <Header />

      <main className="flex-1">
        {/* 1. BREADCRUMBS & HERO */}
        <section className="pt-10 pb-14 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                <span>/</span>
                <span className="text-sky-400 truncate max-w-[200px]">{job.title}</span>
              </nav>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="sky">{job.department}</Badge>
                <Badge variant="slate">{job.type}</Badge>
                {job.salaryRange && <Badge variant="emerald">{job.salaryRange}</Badge>}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-semibold pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" /> Experience: {job.experience}
                </span>
                <span className="flex items-center gap-1.5 text-sky-400">
                  <ShieldCheck className="w-4 h-4" /> Double-Blind Search
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA WITH STICKY SIDEBAR */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              {/* Left Column (Main IA) */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* 2. Quick Summary Card */}
                <div className="bg-sky-50/60 border-l-4 border-corponizers-blue rounded-2xl p-6 space-y-2">
                  <span className="text-[10px] font-black text-corponizers-blue uppercase tracking-widest block">
                    ROLE CONTEXT &amp; STRATEGIC PURPOSE
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {job.summary}
                  </p>
                </div>

                {/* 3. Role Overview */}
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                    Role Overview
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Corponizers has been retained by our client to identify an exceptional professional for this position. The successful candidate will drive key strategic initiatives, collaborate with cross-functional leadership, and contribute directly to operational excellence.
                  </p>
                </div>

                {/* 4. Responsibilities */}
                {job.responsibilities && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Key Responsibilities &amp; Deliverables
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-700">
                      {job.responsibilities.map((r: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-corponizers-blue shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 5. Requirements */}
                {job.requirements && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Candidate Profile &amp; Qualifications
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-700">
                      {job.requirements.map((req: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-corponizers-blue shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 6. Benefits */}
                {job.benefits && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                      Executive Compensation &amp; Benefits
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {job.benefits.map((b: string, i: number) => (
                        <div key={i} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-corponizers-blue shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Recruitment Process for Candidates */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                    Candidate Evaluation Journey
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {[
                      { step: '01', title: 'Confidential Apply', desc: 'Profile submission' },
                      { step: '02', title: 'Director Review', desc: 'Credentials audit' },
                      { step: '03', title: 'Client Interview', desc: 'Panel evaluation' },
                      { step: '04', title: 'Offer & Onboard', desc: 'Joining support' },
                    ].map((st) => (
                      <div key={st.step} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                        <span className="text-[10px] font-black text-corponizers-blue uppercase">{st.step}</span>
                        <h4 className="text-xs font-bold text-slate-900">{st.title}</h4>
                        <p className="text-[11px] text-slate-500 font-normal">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. About Corponizers */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-sky-400" />
                    <h3 className="text-base font-bold text-white">About Corponizers Enterprise</h3>
                  </div>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    Corponizers is an India-first enterprise recruitment partner managing executive search, permanent hiring, and specialized technology talent acquisition. Submissions through our candidate channel are handled under strict confidentiality protocols.
                  </p>
                </div>

              </div>

              {/* Right Column: Sticky Sidebar */}
              <div className="lg:col-span-1">
                <JobStickySidebar job={job} onApplyClick={() => setApplyModalOpen(true)} />
              </div>

            </div>
          </div>
        </section>

        {/* 9. Related Jobs */}
        <RelatedJobs jobs={allJobs} currentSlug={slug} />

        {/* 10. APPLICATION MODAL */}
        {applyModalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setApplyModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close application dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corponizers-blue block">
                  CONFIDENTIAL CANDIDATE SUBMISSION
                </span>
                <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900 mt-1">
                  Apply for Position
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Position: <strong className="text-slate-800">{job.title}</strong>
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Application Submitted</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Your candidate profile has been securely submitted to our Executive Practice Lead. We will review your credentials under strict confidentiality protocols.
                  </p>
                  <Button onClick={() => setApplyModalOpen(false)} variant="outline" size="sm" className="mt-2">
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      LinkedIn / Resume URL *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/profile"
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Executive Summary / Note (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly highlight your career domain background..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <Button type="submit" disabled={submitting} variant="primary" size="md" className="w-full">
                    {submitting ? 'Submitting Application...' : 'Confirm Confidential Submission'}
                  </Button>
                </form>
              )}

            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
