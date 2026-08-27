'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { TieMotif } from '@/components/ui/TieMotif';
import { Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export interface ServiceField {
  id: string;
  label: string;
  type: 'text' | 'select' | 'tel';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface SolutionEnquiryFormProps {
  serviceType: string;         // Pre-filled service type for API payload
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  serviceFields?: ServiceField[]; // Extra service-specific fields
}

export function SolutionEnquiryForm({
  serviceType,
  headline = 'Start the Conversation',
  subtext = 'A Senior Practice Lead will respond within 2 business hours.',
  ctaLabel = 'Submit Enquiry',
  serviceFields = [],
}: SolutionEnquiryFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [extras, setExtras] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleExtra = (id: string, value: string) => {
    setExtras({ ...extras, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Build enriched message combining standard + extra fields
    const extraLines = serviceFields
      .filter((f) => extras[f.id])
      .map((f) => `${f.label}: ${extras[f.id]}`)
      .join('\n');

    const fullMessage = extraLines
      ? `${form.message}\n\n--- Additional Details ---\n${extraLines}`
      : form.message;

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          type: serviceType,
          message: fullMessage,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(json.error || 'Submission failed. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-emerald-100 rounded-3xl p-10 text-center space-y-5 shadow-sm">
            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-black text-slate-900">Enquiry Received</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
              Your {serviceType} enquiry has been received. A Senior Practice Lead will respond within 2 business hours.
            </p>
            <Button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', message: '' }); setExtras({}); }}
              variant="outline"
              size="sm"
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">

          {/* Header */}
          <div className="bg-slate-900 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TieMotif size="sm" />
                <span className="text-xs font-black text-sky-400 uppercase tracking-widest">
                  {serviceType}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{headline}</h3>
              <p className="text-xs text-slate-400 font-normal">{subtext}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>2-hour response</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700">
                {error}
              </div>
            )}

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Row 2: Phone + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Organisation Name *</label>
                <input
                  name="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your organisation"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Service-specific extra fields */}
            {serviceFields.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceFields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {field.label}{field.required ? ' *' : ''}
                    </label>
                    {field.type === 'select' && field.options ? (
                      <select
                        value={extras[field.id] || ''}
                        onChange={(e) => handleExtra(field.id, e.target.value)}
                        required={field.required}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium"
                      >
                        <option value="">Select...</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={extras[field.id] || ''}
                        onChange={(e) => handleExtra(field.id, e.target.value)}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Brief Description of Requirement *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your hiring requirement, timeline, and any specific parameters..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none font-medium placeholder:font-normal placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Confidential. Not shared externally.</span>
              </div>
              <Button type="submit" disabled={submitting} variant="crimson" size="md">
                {submitting ? 'Submitting...' : ctaLabel}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
