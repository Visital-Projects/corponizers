'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search, Briefcase, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function GlobalSearchPage() {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jobs, setJobs] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setJobs([]);
       
      setBlogs([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const [jRes, bRes] = await Promise.all([
          fetch(`/api/jobs?search=${query}`),
          fetch(`/api/blogs?search=${query}`),
        ]);
        const jJson = await jRes.json();
        const bJson = await bRes.json();
        if (jJson.data) setJobs(jJson.data);
        if (bJson.data) setBlogs(bJson.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <section className="pt-12 pb-12 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              ENTERPRISE SEARCH ENGINE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black">
              Search Positions &amp; Insights
            </h1>

            <div className="relative pt-2">
              <Search className="w-6 h-6 absolute left-4 top-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search executive roles, whitepapers, practice areas, keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-white text-slate-900 rounded-2xl text-base font-bold focus:outline-none focus:ring-4 focus:ring-sky-500 shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-10">
            {loading ? (
              <div className="text-center py-12 text-slate-500 font-semibold">Searching enterprise database...</div>
            ) : !query ? (
              <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 font-bold">Type a keyword above to search across active jobs and whitepapers.</p>
              </div>
            ) : jobs.length === 0 && blogs.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl">
                <p className="text-slate-700 font-bold">No results found matching &quot;{query}&quot;.</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for terms like &quot;Executive&quot;, &quot;RPO&quot;, &quot;Engineering&quot;, or &quot;Compliance&quot;.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {jobs.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-corponizers-blue" /> Matching Positions ({jobs.length})
                    </h2>
                    <div className="space-y-3">
                      {jobs.map((j) => (
                        <div key={j.slug} className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="sky">{j.department}</Badge>
                              <Badge variant="slate">{j.type}</Badge>
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mt-1">{j.title}</h3>
                            <p className="text-xs text-slate-500">{j.location}</p>
                          </div>
                          <Link href={`/careers/${j.slug}`} className="text-corponizers-blue font-bold text-xs flex items-center gap-1">
                            View <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {blogs.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-corponizers-blue" /> Matching Whitepapers ({blogs.length})
                    </h2>
                    <div className="space-y-3">
                      {blogs.map((b) => (
                        <div key={b.slug} className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                          <div>
                            <Badge variant="sky">{b.category}</Badge>
                            <h3 className="text-base font-bold text-slate-900 mt-1">{b.title}</h3>
                            <p className="text-xs text-slate-500">{b.summary}</p>
                          </div>
                          <Link href={`/insights/${b.slug}`} className="text-corponizers-blue font-bold text-xs flex items-center gap-1">
                            Read <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
