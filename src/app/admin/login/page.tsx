'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { event } from '@/lib/gtag';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@corponizers.com');
  const [password, setPassword] = useState('Corponizers2026!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/admin/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();
      if (json.success) {
        event({
          action: 'admin_login',
          category: 'administration',
          label: email,
        });
        router.push('/admin/dashboard');
      } else {
        setError(json.error || 'Authentication failed');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError('Login error. Please check server connectivity.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans text-white">
      <div className="max-w-md w-full bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
            <Building2 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            CORPONIZERS ADMIN
          </h1>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Executive Portal Authentication
          </p>
        </div>

        {/* Info Box */}
        <div className="p-3 bg-sky-50 border border-sky-100 rounded-xl text-xs text-sky-800 font-semibold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-corponizers-blue shrink-0" />
          <span>Restricted Admin Portal Access Only</span>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Security Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <Button type="submit" disabled={loading} variant="primary" size="lg" className="w-full">
            {loading ? 'Authenticating...' : 'Authenticate Admin Session'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <p className="text-center text-[11px] text-slate-400 pt-2">
          Session JWT protected with HTTP-only credentials.
        </p>

      </div>
    </div>
  );
}
