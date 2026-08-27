'use client';
import React, { useState, useEffect, use } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { SolutionCTABanner } from '@/components/shared/SolutionCTABanner';

function parseLine(text: string) {
  const parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  return <span dangerouslySetInnerHTML={{ __html: parsed }} />;
}

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = use(params);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs');
        const json = await res.json();
        if (json.data) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const matched = json.data.find((b: any) => b.slug === slug);
          setBlog(matched || json.data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 text-slate-500 font-semibold">
          Loading whitepaper article...
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 text-slate-700 font-bold">
          Article Not Found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* HEADER */}
        <section className="pt-12 pb-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Talent Insights
            </Link>

            <div className="flex items-center gap-3">
              <Badge variant="sky">{blog.category}</Badge>
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-corponizers-blue flex items-center justify-center font-bold text-white text-sm">
                  {blog.author?.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{blog.author?.name}</div>
                  <div className="text-slate-400">{blog.author?.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Executive Summary Callout */}
            <div className="p-6 bg-sky-50 border-l-4 border-corponizers-blue rounded-r-2xl text-slate-800 font-medium leading-relaxed text-sm sm:text-base">
              <strong className="block text-xs font-bold uppercase tracking-wider text-brand-blue-dark mb-1">
                Executive Abstract
              </strong>
              {blog.summary}
            </div>

            {/* Main Markdown Body Output */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
              {blog.content.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="text-3xl font-extrabold text-slate-900 pt-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-slate-900 pt-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={idx} className="border-l-4 border-slate-900 pl-4 italic text-slate-800 font-semibold my-4">
                      {paragraph.replace('> ', '')}
                    </blockquote>
                  );
                }
                if (paragraph.match(/^\d+\.\s/)) {
                  return (
                    <ul key={idx} className="space-y-3 my-4">
                      <li className="ml-6 list-decimal text-base text-slate-700 leading-relaxed pl-2">
                        {parseLine(paragraph.replace(/^\d+\.\s/, ''))}
                      </li>
                    </ul>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="space-y-3 my-4">
                      <li className="ml-6 list-disc text-base text-slate-700 leading-relaxed pl-2">
                        {parseLine(paragraph.replace(/^- /, ''))}
                      </li>
                    </ul>
                  );
                }
                return <p key={idx} className="text-base text-slate-700 leading-relaxed">{parseLine(paragraph)}</p>;
              })}
            </div>

            {/* CONVERSION CTA */}
            <div className="pt-16 mt-8 border-t border-slate-200">
              <SolutionCTABanner
                headline="Execute These Strategies with Corponizers"
                subtext="Speak with a Practice Lead to discuss how our executive search protocols can secure tier-one leadership for your organization."
                ctaText="Schedule a Consultation"
                ctaHref="/contact"
              />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
