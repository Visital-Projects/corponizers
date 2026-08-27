'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Building2, Briefcase, FileText, Inbox, LogOut, LayoutDashboard, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { event } from '@/lib/gtag';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    jobsCount: 0,
    blogsCount: 0,
    enquiriesCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const [jobsRes, blogsRes, enqRes] = await Promise.all([
          fetch('/api/jobs'),
          fetch('/api/blogs'),
          fetch('/admin/api/enquiries'),
        ]);

        const jobsJson = await jobsRes.json();
        const blogsJson = await blogsRes.json();
        const enqJson = await enqRes.json();

        setStats({
          jobsCount: jobsJson.data ? jobsJson.data.length : 0,
          blogsCount: blogsJson.data ? blogsJson.data.length : 0,
          enquiriesCount: enqJson.data ? enqJson.data.length : 0,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const handleLogout = async () => {
    event({
      action: 'admin_logout',
      category: 'administration',
    });
    await fetch('/admin/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* ADMIN NAV */}
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-corponizers-blue flex items-center justify-center font-bold text-white text-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="font-black text-sm tracking-wide">
              CORPONIZERS ADMIN PANEL
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/" target="_blank" className="text-slate-400 hover:text-white flex items-center gap-1">
              <span>View Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-300 hover:bg-rose-600 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* DASHBOARD BODY */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Enterprise Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-semibold">
            Minimal admin control center for dynamic website modules.
          </p>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Active Job Positions
              </div>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {loading ? '...' : stats.jobsCount}
              </div>
              <Link href="/admin/jobs" className="text-xs font-bold text-corponizers-blue hover:underline mt-2 inline-block">
                Manage Jobs →
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Published Whitepapers
              </div>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {loading ? '...' : stats.blogsCount}
              </div>
              <Link href="/admin/blogs" className="text-xs font-bold text-corponizers-blue hover:underline mt-2 inline-block">
                Manage Insights →
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Enquiries &amp; Applications
              </div>
              <div className="text-3xl font-black text-slate-900 mt-1">
                {loading ? '...' : stats.enquiriesCount}
              </div>
              <Link href="/admin/enquiries" className="text-xs font-bold text-corponizers-blue hover:underline mt-2 inline-block">
                Manage Inbox →
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center">
              <Inbox className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* QUICK NAVIGATION */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Admin Operations Center
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/jobs"
              className="p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-corponizers-blue">Jobs Management</div>
              <p className="text-xs text-slate-500 mt-1">Create, archive, or update open executive positions.</p>
            </Link>
            <Link
              href="/admin/blogs"
              className="p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-corponizers-blue">Blogs &amp; Insights</div>
              <p className="text-xs text-slate-500 mt-1">Publish thought leadership and market whitepapers.</p>
            </Link>
            <Link
              href="/admin/enquiries"
              className="p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-corponizers-blue">Contact Enquiries Inbox</div>
              <p className="text-xs text-slate-500 mt-1">Review incoming candidate applications and client briefs.</p>
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
