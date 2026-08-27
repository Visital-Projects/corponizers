'use client';

import React, { useState, useEffect } from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  publishedAt: string;
}

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Executive Leadership', 'Workforce Strategy', 'Global Mobility'];

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const res = await fetch(`/api/blogs?category=${selectedCategory}&search=${searchTerm}`);
        const json = await res.json();
        if (json.data) {
          setBlogs(json.data);
        }
      } catch (err) {
        console.error('Failed to load insights:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [selectedCategory, searchTerm]);

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const gridBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-32">
        {/* EDITORIAL HERO */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-16">
          <div className="border-b-4 border-slate-900 pb-12 mb-12">
            <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest block mb-4">
              ENTERPRISE INSIGHTS & WHITEPAPERS
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.95] uppercase">
              Talent Intelligence
            </h1>
            <p className="mt-6 text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
              Strategic research, workforce benchmark reports, and executive search playbooks for HR leaders and C-Suite directors.
            </p>
          </div>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="relative w-full md:w-2/3">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search executive insights, strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              />
            </div>
            <div className="w-full md:w-1/3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer transition-colors"
              >
                {categories.map((c) => (
                   <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                   </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* ARTICLES CONTENT */}
        <section className="pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {loading ? (
              <div className="text-center py-32 text-slate-500 font-semibold text-xl">
                Loading intelligence reports...
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-32 bg-slate-50 rounded-[40px] border border-slate-200">
                <p className="text-slate-900 font-black text-2xl mb-2">No insights matched your search.</p>
                <p className="text-base text-slate-500">Adjust your category filter or search term.</p>
              </div>
            ) : (
              <>
                {/* FEATURED ARTICLE BLOCK */}
                {featuredBlog && (
                  <Link href={`/insights/${featuredBlog.slug}`} className="group block mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                      <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-black text-white bg-slate-900 px-3 py-1 uppercase tracking-widest">{featuredBlog.category}</span>
                            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                              <Clock className="w-3.5 h-3.5" /> {featuredBlog.readTime}
                            </span>
                          </div>
                          
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight group-hover:text-corponizers-blue transition-colors">
                            {featuredBlog.title}
                          </h2>
                          
                          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                            {featuredBlog.summary}
                          </p>

                          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
                            <div className="text-sm">
                              <div className="font-bold text-slate-900 uppercase tracking-widest">{featuredBlog.author?.name}</div>
                              <div className="text-slate-500">{featuredBlog.author?.role}</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-all">
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200 group-hover:border-sky-300 transition-colors">
                            {/* In a real app we'd have an image field, but we'll use a placeholder/abstract graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-sky-900/10 text-9xl font-black italic tracking-tighter">
                              {featuredBlog.category.split(' ')[0]}
                            </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* ASYMMETRICAL MASONRY GRID */}
                {gridBlogs.length > 0 && (
                  <div>
                    <div className="flex items-center gap-4 border-t border-slate-900 pt-8 mb-12">
                      <span className="text-sm font-black text-slate-900 uppercase tracking-widest">
                        LATEST INTELLIGENCE
                      </span>
                      <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                      {gridBlogs.map((b, index) => {
                        // Alternate column spans to create an asymmetrical masonry feel
                        const colSpan = index % 3 === 0 ? "md:col-span-12 lg:col-span-8" 
                                      : index % 3 === 1 ? "md:col-span-6 lg:col-span-4"
                                      : "md:col-span-6 lg:col-span-6";
                                      
                        const isLarge = colSpan.includes("lg:col-span-8");

                        return (
                          <Link href={`/insights/${b.slug}`} key={b.slug} className={`group flex flex-col ${colSpan}`}>
                            <div className="flex-1 bg-slate-50 border border-slate-200 p-8 lg:p-10 rounded-[32px] hover:bg-white hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between h-full">
                              <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-black text-brand-blue-dark uppercase tracking-widest border border-sky-200 bg-sky-50 px-2 py-1 rounded-full">{b.category}</span>
                                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                                    <Clock className="w-3 h-3" /> {b.readTime}
                                  </span>
                                </div>

                                <h3 className={`${isLarge ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-black text-slate-900 group-hover:text-corponizers-blue transition-colors leading-[1.15] tracking-tight`}>
                                  {b.title}
                                </h3>

                                <p className="text-base text-slate-600 leading-relaxed font-light">
                                  {b.summary}
                                </p>
                              </div>

                              <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                                <div className="text-xs">
                                  <div className="font-bold text-slate-900 uppercase tracking-widest">{b.author?.name}</div>
                                </div>

                                <div className="text-corponizers-blue font-bold text-xs flex items-center gap-1 uppercase tracking-widest">
                                  <span>Read Insight</span>
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        </section>

        {/* RESEARCH SPOTLIGHT */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[40px] overflow-hidden border border-slate-800 bg-slate-950">
                  <Image
                    src="/images/insights/research.webp"
                    alt="Consultants analysing hiring benchmark reports and talent data"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-sky-400 text-[10px] font-black tracking-widest border border-slate-700 uppercase">
                  <span>EVIDENCE-BASED RECRUITMENT</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Research-Led Talent Acquisition
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Every Corponizers mandate is informed by current market intelligence. Our consultants track compensation benchmarks, talent availability indices, and sector-specific hiring trends to give clients an accurate picture of the market before a search begins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-5 rounded-full bg-sky-500 text-white text-sm font-bold uppercase tracking-widest hover:bg-sky-400 transition-colors"
                >
                  Discuss a Hiring Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
