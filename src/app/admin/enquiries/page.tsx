'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Inbox, Mail, Phone, Building2, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function AdminEnquiriesPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/admin/api/enquiries');
      const json = await res.json();
      if (json.data) setEnquiries(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadEnquiries();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch('/admin/api/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      loadEnquiries();
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
              ADMIN / CONTACT &amp; CANDIDATE INBOX
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Consultations &amp; Applications Inbox ({enquiries.length})
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Incoming enterprise inquiries and confidential candidate submissions.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 font-semibold">Loading inbox...</div>
        ) : (
          <div className="space-y-4">
            {enquiries.map((e) => (
              <div key={e._id || e.email} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={e.type === 'Job Application' ? 'emerald' : 'sky'}>{e.type}</Badge>
                    <Badge variant={e.status === 'New' ? 'amber' : 'slate'}>{e.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={() => updateStatus(e._id, 'Reviewed')}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 cursor-pointer"
                    >
                      Mark Reviewed
                    </button>
                    <button
                      onClick={() => updateStatus(e._id, 'Contacted')}
                      className="px-2.5 py-1 rounded-md bg-sky-50 text-brand-blue-dark font-semibold hover:bg-sky-100 cursor-pointer"
                    >
                      Mark Contacted
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                  <div>
                    <span className="text-slate-400 font-normal">Contact:</span>{' '}
                    <strong className="text-slate-900">{e.name}</strong> ({e.email})
                  </div>
                  {e.company && (
                    <div>
                      <span className="text-slate-400 font-normal">Company:</span>{' '}
                      <strong className="text-slate-900">{e.company}</strong> ({e.jobTitle})
                    </div>
                  )}
                  {e.resumeUrl && (
                    <div className="md:col-span-2">
                      <span className="text-slate-400 font-normal">Resume Link:</span>{' '}
                      <a href={e.resumeUrl} target="_blank" rel="noreferrer" className="text-corponizers-blue underline font-bold">
                        {e.resumeUrl}
                      </a>
                    </div>
                  )}
                </div>

                {e.message && (
                  <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed font-normal">
                    {e.message}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
