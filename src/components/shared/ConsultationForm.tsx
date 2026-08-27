'use client';

import React, { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { Building2, User, Handshake, Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ConsultationFormProps {
  defaultDesk?: string;
}

export function ConsultationForm({ defaultDesk = 'employer' }: ConsultationFormProps) {
  const [activeTab, setActiveTab] = useState(defaultDesk);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    serviceType: 'Executive Search',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const desks = [
    { id: 'employer', label: 'Employer Consultation', icon: Building2 },
    { id: 'candidate', label: 'Job Seeker Placement', icon: User },
    { id: 'partner', label: 'Strategic Partnership', icon: Handshake },
    { id: 'general', label: 'General Desk Briefing', icon: Mail },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const payloadType =
        activeTab === 'candidate'
          ? 'Job Application'
          : activeTab === 'employer'
          ? 'Executive Search'
          : activeTab === 'partner'
          ? 'RPO Solution'
          : 'General Consultation';

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: payloadType,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(json.error || 'Submission failed');
      }
    } catch {
      setErrorMsg('Submission error. Please check internet connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-widest text-corponizers-blue uppercase">
          MULTI-DESK INGESTION PORTAL
        </span>
        <h3 className="text-2xl font-black text-slate-900">
          Segmented Executive Consultation
        </h3>
        <p className="text-xs text-slate-500 font-semibold">
          Select your inquiry desk below for instant routing to specialized Practice Directors.
        </p>
      </div>

      {/* Desk Tabs */}
      <Tabs tabs={desks} activeTab={activeTab} onChange={setActiveTab} />

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-bold text-emerald-900">Briefing Submitted Successfully</h4>
          <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
            Your inquiry has been assigned to a Senior Practice Lead. An executive callback will be initiated within 2 business hours.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline" size="sm" className="mt-2">
            Submit Additional Briefing
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alexander Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. alexander@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {activeTab === 'candidate' ? 'Target Position / Skill' : 'Organization Name'}
              </label>
              <input
                type="text"
                placeholder={activeTab === 'candidate' ? 'e.g. Chief Technology Officer' : 'e.g. Global Tech Solutions Inc.'}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Project Brief / Inquiries *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Provide specific parameters, target headcount, executive requirements, or timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
              <ShieldCheck className="w-4 h-4 text-corponizers-blue" />
              <span>Double-Blind Non-Disclosure Guaranteed</span>
            </div>

            <Button type="submit" disabled={submitting} variant="crimson" size="md">
              {submitting ? 'Transmitting Brief...' : 'Transmit Executive Brief'}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
