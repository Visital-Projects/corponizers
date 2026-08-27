'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AdminBlogsPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs');
        const json = await res.json();
        if (json.data) setBlogs(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-slate-400 hover:text-white mr-2">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="font-black text-sm tracking-wide">
              ADMIN / BLOGS &amp; INSIGHTS
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Published Insights &amp; Whitepapers ({blogs.length})
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Dynamic content published to the enterprise insights hub.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 font-semibold">Loading articles...</div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
            {blogs.map((b) => (
              <div key={b.slug} className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="sky">{b.category}</Badge>
                    <span className="text-xs text-slate-400">{b.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="text-xs text-slate-500">Author: {b.author?.name} ({b.author?.role})</p>
                </div>
                <Button href={`/insights/${b.slug}`} target="_blank" variant="outline" size="sm">
                  View Article
                </Button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
