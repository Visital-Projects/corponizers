'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search, MapPin, Briefcase, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Job {
  _id?: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salaryRange?: string;
  summary: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const [allJobs, setAllJobs] = useState<Job[]>([]);

  // Fetch initial full list to populate dynamic filter options
  useEffect(() => {
    async function fetchAllJobs() {
      try {
        const res = await fetch('/api/jobs');
        const json = await res.json();
        if (json.data) {
          setAllJobs(json.data);
        }
      } catch (err) {
        console.error('Failed to load filter options:', err);
      }
    }
    fetchAllJobs();
  }, []);

  // Derive dynamic filter lists from actual MongoDB records
  const dynamicDepartments = ['All', ...Array.from(new Set(allJobs.map((j) => j.department).filter(Boolean))).sort()];
  const dynamicTypes = ['All', ...Array.from(new Set(allJobs.map((j) => j.type).filter(Boolean))).sort()];

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const res = await fetch(`/api/jobs?department=${selectedDept}&type=${selectedType}&search=${searchTerm}`);
        const json = await res.json();
        if (json.data) {
          setJobs(json.data);
        }
      } catch (err) {
        console.error('Failed to load jobs:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [selectedDept, selectedType, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-sky-200">
      <Header />

      <main className="flex-1">
        
        {/* SLEEK HERO */}
        <section className="pt-32 pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
              <div className="space-y-8">
                <span className="text-[10px] font-black text-corponizers-blue uppercase tracking-widest bg-sky-50 px-3 py-1.5 rounded-full">
                  Executive Placements
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
                  Confidential<br />Enterprise Mandates
                </h1>
                <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
                  Explore active executive searches and high-impact leadership roles across global organizations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact?desk=jobseeker" className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-corponizers-blue transition-colors shadow-sm">
                  Register Profile
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="/contact?desk=employer" className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-white text-slate-900 text-sm font-bold uppercase tracking-widest border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-sm">
                  Post a Role
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* TERMINAL-STYLE JOB BOARD */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="relative w-full lg:w-96 flex-shrink-0">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search titles, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Department:</span>
                  <div className="flex gap-2">
                    {dynamicDepartments.map(dept => (
                      <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
                          selectedDept === dept 
                            ? 'bg-slate-900 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-200 self-center"></div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Type:</span>
                  <div className="flex gap-2">
                    {dynamicTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
                          selectedType === type 
                            ? 'bg-slate-900 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Table Layout */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest w-[40%]">Role / Specification</th>
                      <th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest w-[20%]">Department</th>
                      <th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest w-[15%]">Location</th>
                      <th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest w-[15%]">Type</th>
                      <th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right w-[10%]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="py-20 text-center">
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest animate-pulse">Scanning Active Mandates...</span>
                        </td>
                      </tr>
                    ) : jobs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-20 text-center">
                          <p className="text-slate-900 font-bold mb-1">No Active Positions Found</p>
                          <p className="text-xs text-slate-500">Adjust filters to see more results.</p>
                        </td>
                      </tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job.slug} className="group hover:bg-sky-50/50 transition-colors cursor-pointer">
                          <td className="py-5 px-6">
                            <Link href={`/careers/${job.slug}`} className="block focus:outline-none">
                              <div className="font-bold text-slate-900 text-base group-hover:text-corponizers-blue transition-colors mb-1">
                                {job.title}
                              </div>
                              <div className="text-xs text-slate-500 truncate max-w-md font-light">
                                {job.summary}
                              </div>
                            </Link>
                          </td>
                          <td className="py-5 px-6">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                              {job.department}
                            </span>
                          </td>
                          <td className="py-5 px-6 text-sm text-slate-600 font-medium flex items-center gap-2">
                             <MapPin className="w-3.5 h-3.5 text-slate-400" />
                             {job.location}
                          </td>
                          <td className="py-5 px-6 text-sm text-slate-600 font-medium">
                            {job.type}
                          </td>
                          <td className="py-5 px-6 text-right">
                             <Link href={`/careers/${job.slug}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-corponizers-blue group-hover:text-white transition-all">
                               <ArrowUpRight className="w-5 h-5" />
                             </Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 border-t border-slate-200 py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex justify-between items-center">
                <span>Showing {jobs.length} active mandate{jobs.length !== 1 ? 's' : ''}</span>
                <span className="text-emerald-600 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> DB Synced</span>
              </div>
            </div>

          </div>
        </section>

        {/* CONSULTATION PROCESS */}
        <section className="py-32 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[40px] overflow-hidden border border-slate-100 bg-slate-50">
                  <Image
                    src="/images/careers/consultation.webp"
                    alt="Recruiter reviewing executive profile with candidate"
                    fill
                    sizes="100vw"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 text-corponizers-blue text-[10px] font-black tracking-widest border border-slate-200 uppercase">
                  <span>HOW WE WORK WITH CANDIDATES</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  A Confidential Process Built Around You
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Every candidate engagement begins with a structured profile review, followed by a confidential consultation to understand your career goals, compensation expectations, and cultural fit criteria. We do not submit CVs without your explicit authorization.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="border-l-2 border-corponizers-blue pl-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Double-Blind</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Identities protected until mutual interest is established.</p>
                  </div>
                  <div className="border-l-2 border-corponizers-blue pl-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Direct Access</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Direct representation to hiring committees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
