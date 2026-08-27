'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { event } from '@/lib/gtag';

export function ContactFormContent() {
  const searchParams = useSearchParams();
  const queryDesk = searchParams.get('desk') || searchParams.get('type');

  type DeskType = 'employer' | 'jobseeker' | 'partnership' | 'general';
  
  const [activeDesk, setActiveDesk] = useState<DeskType>('employer');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    linkedinUrl: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle URL query parameter pre-filling
  useEffect(() => {
    if (queryDesk) {
      const normalized = queryDesk.toLowerCase();
      if (['employer', 'jobseeker', 'partnership', 'general'].includes(normalized)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveDesk(normalized as DeskType);
      } else if (['executive-search', 'rpo', 'tech-hiring', 'finance', 'it'].includes(normalized)) {
        setActiveDesk('employer');
        setFormData(prev => ({ ...prev, message: `Inquiry regarding ${normalized.replace('-', ' ')} practice area.` }));
      } else if (normalized === 'candidate') {
        setActiveDesk('jobseeker');
      }
    }
  }, [queryDesk]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: activeDesk,
          source: queryDesk ? `Query Param: ${queryDesk}` : 'Direct Contact Page',
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        event({
          action: 'contact_form_submit',
          category: 'engagement',
          label: activeDesk,
        });
      } else {
        setErrorMsg(json.error || 'Submission failed');
      }
    } catch {
      setErrorMsg('Failed to send consultation request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      
      {/* Editorial Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white border border-sky-100 shadow-2xl shadow-blue-950/5 rounded-sm p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden"
      >
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-bl-full opacity-50 pointer-events-none -z-0"></div>

        {submitted ? (
          <div className="py-24 text-center space-y-8 relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-sky-50 rounded-full mb-4">
              <CheckCircle2 className="w-12 h-12 text-sky-500" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight max-w-2xl mx-auto">
              Consultation Inquiry Received.
            </h3>
            <p className="text-xl text-blue-900/70 leading-relaxed font-light max-w-2xl mx-auto">
              Thank you for contacting Corponizers. An Enterprise Talent Director will review your inquiry and reach out within 2 business hours under double-blind confidentiality protocols.
            </p>
            <div className="pt-8">
              <button 
                onClick={() => setSubmitted(false)} 
                className="inline-flex items-center text-sm font-bold text-corponizers-blue hover:text-brand-blue-dark uppercase tracking-widest transition-colors border-b-2 border-transparent hover:border-corponizers-blue pb-1"
              >
                Submit Additional Inquiry <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-16 relative z-10">
            
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                 <div className="w-1 h-12 bg-red-600"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
                {activeDesk === 'employer' && 'Enterprise Hiring Inquiry'}
                {activeDesk === 'jobseeker' && 'Executive Profile Submission'}
                {activeDesk === 'partnership' && 'Partnership Proposal'}
                {activeDesk === 'general' && 'General Contact'}
              </h2>
              <p className="text-lg font-light text-blue-900/60 leading-relaxed">
                {activeDesk === 'jobseeker' ? 'All submissions are double-blind and strictly confidential. Your profile will not be shared without your explicit consent.' : 'All inquiries are protected by strict non-disclosure terms and reviewed by specialized Talent Directors.'}
              </p>
            </div>

            {/* DESK SWITCHER - Editorial Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-sky-100 pb-8">
              {[
                { id: 'employer', label: 'Employer / Hiring' },
                { id: 'jobseeker', label: 'Job Seeker' },
                { id: 'partnership', label: 'Partnership' },
                { id: 'general', label: 'General' }
              ].map((desk) => (
                <button
                  key={desk.id}
                  type="button"
                  onClick={() => {
                    setActiveDesk(desk.id as DeskType);
                    setFormData({ ...formData, message: '', company: '', jobTitle: '', linkedinUrl: '' });
                    setErrorMsg('');
                  }}
                  className={`px-6 py-3 text-xs md:text-sm font-black transition-all uppercase tracking-widest ${
                    activeDesk === desk.id
                      ? 'text-blue-950 border-b-2 border-red-600'
                      : 'text-slate-400 hover:text-blue-900 border-b-2 border-transparent'
                  }`}
                >
                  {desk.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-sm text-sm font-bold text-rose-700 text-center">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">
                    {activeDesk === 'employer' ? 'Business Email *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                  />
                </div>

                {activeDesk === 'jobseeker' ? (
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">
                      {activeDesk === 'partnership' ? 'Organization Name' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                    />
                  </div>
                )}
              </div>

              {activeDesk === 'employer' && (
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">Your Role / Title</label>
                  <input
                    type="text"
                    placeholder="e.g. VP Human Resources"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors"
                  />
                </div>
              )}

              <div className="space-y-2 pt-4">
                <label className="block text-[10px] font-black text-corponizers-blue uppercase tracking-widest">
                  {activeDesk === 'employer' && 'Hiring Requirements / Project Scope *'}
                  {activeDesk === 'jobseeker' && 'Executive Summary / Notes *'}
                  {activeDesk === 'partnership' && 'Partnership Proposal Details *'}
                  {activeDesk === 'general' && 'Inquiry Details *'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    activeDesk === 'employer' 
                      ? "Detail your organizational hiring objectives, target headcount, or executive search requirements..."
                      : activeDesk === 'jobseeker' 
                        ? "Provide a brief summary of your expertise and target roles..."
                        : "How can we collaborate?"
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-sky-100 py-3 px-0 text-xl font-medium text-blue-950 placeholder-slate-300 focus:ring-0 focus:border-red-600 transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-12 text-center">
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full md:w-auto inline-flex justify-center items-center gap-4 px-12 py-6 bg-blue-950 text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-blue-900 transition-colors shadow-2xl shadow-blue-950/20 disabled:opacity-50"
                >
                  {submitting ? 'Transmitting...' : activeDesk === 'jobseeker' ? 'Submit Profile Securely' : 'Submit Secure Inquiry'}
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
