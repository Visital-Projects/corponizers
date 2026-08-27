'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Briefcase, Plus, ShieldCheck, Trash2, Edit3, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AdminJobsPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    department: 'Technology & AI',
    location: 'Singapore (Hybrid)',
    type: 'Executive',
    experience: '8+ Years',
    salaryRange: '$200,000 - $250,000 USD',
    summary: '',
    responsibilities: '',
    requirements: '',
    status: 'Active',
  });

  const loadJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobs');
      const json = await res.json();
      if (json.data) setJobs(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadJobs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          responsibilities: formData.responsibilities.split('\n').filter(Boolean),
          requirements: formData.requirements.split('\n').filter(Boolean),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setShowModal(false);
        loadJobs();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-slate-400 hover:text-white mr-2">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="font-black text-sm tracking-wide">
              ADMIN / JOBS MANAGEMENT
            </span>
          </div>
          <Button onClick={() => setShowModal(true)} variant="secondary" size="sm">
            <Plus className="w-4 h-4 mr-1.5" />
            Post New Position
          </Button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-900">
              Active Executive Jobs ({jobs.length})
            </h1>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              Live job postings available on the public website.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 font-semibold">Loading job listings...</div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="divide-y divide-slate-100">
              {jobs.map((job) => (
                <div key={job.slug} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="sky">{job.department}</Badge>
                      <Badge variant="slate">{job.type}</Badge>
                      <span className="text-xs text-emerald-700 font-bold">{job.salaryRange}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="text-xs text-slate-500">{job.location} • Experience: {job.experience}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button href={`/careers/${job.slug}`} target="_blank" variant="outline" size="sm">
                      View Live
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
              <h2 className="text-xl font-bold text-slate-900">Create New Job Position</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="Executive Summary"
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                />
                <textarea
                  rows={2}
                  placeholder="Responsibilities (one per line)"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                />
                <textarea
                  rows={2}
                  placeholder="Requirements (one per line)"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl text-sm"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <Button type="button" onClick={() => setShowModal(false)} variant="ghost" size="sm">
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Save Position
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
