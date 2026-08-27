'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      
      if (json.success) {
        setStatus('success');
      } else {
        setStatus('idle');
        setErrorMsg(json.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('idle');
      setErrorMsg('Network error. Please try again later.');
    }
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Mail className="w-4 h-4 text-sky-400" />
          Recruitment Insights Newsletter
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed font-normal">
          Receive executive workforce reports, salary benchmarks, and talent acquisition playbooks directly to your inbox.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs font-bold text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Subscribed to Executive Insights updates.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {errorMsg && (
            <div className="text-xs text-rose-400 font-semibold mb-1">
              {errorMsg}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Enter business email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <Button type="submit" disabled={status === 'loading'} variant="primary" size="sm" className="whitespace-nowrap">
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Insights'}
              <Send className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
