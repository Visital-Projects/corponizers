import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe2, Share2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CorponizersLogo } from '@/components/ui/CorponizersLogo';
import { Newsletter } from '@/components/shared/Newsletter';
import { TieMotif } from '@/components/ui/TieMotif';

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">
        
        {/* 5-Column Enterprise Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Brand Info & India Market Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <CorponizersLogo variant="light" />
            
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-normal">
              India&apos;s trusted enterprise recruitment partner for executive search, RPO scaling, and specialized technology hiring, with cross-border international mobility capabilities.
            </p>

            <div className="space-y-2 text-xs text-slate-600 font-semibold">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-corponizers-blue shrink-0 mt-0.5" />
                <span>5th Floor A- Zone, Fortune Tower,<br/>Maitri Vihar, Rail Vihar, Chandrasekharpur,<br/>Bhubaneswar, Odisha 751023</span>
              </div>
              <div className="flex flex-col gap-1">
                <a href="tel:+917008934524" className="flex items-center gap-2.5 hover:text-brand-blue-dark transition-colors">
                  <Phone className="w-4 h-4 text-corponizers-blue shrink-0" />
                  <span>+91 7008934524</span>
                </a>
                <a href="tel:+917008681808" className="flex items-center gap-2.5 hover:text-brand-blue-dark transition-colors">
                  <Phone className="w-4 h-4 text-corponizers-blue shrink-0 opacity-0" />
                  <span>+91 7008681808</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-corponizers-blue shrink-0" />
                <span>enterprise@corponizers.com</span>
              </div>
            </div>

            <div className="pt-2">
              <Newsletter />
            </div>
          </div>

          {/* Column 2: Solutions Practice Areas */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-800 uppercase tracking-widest flex items-center gap-1.5">
              <TieMotif size="sm" />
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="/solutions/executive-search" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Executive Search</Link></li>
              <li><Link href="/solutions/permanent-hiring" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Permanent Hiring</Link></li>
              <li><Link href="/solutions/contract-staffing" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Contract Staffing</Link></li>
              <li><Link href="/solutions/campus-hiring" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Campus Hiring</Link></li>
              <li><Link href="/solutions/tech-hiring" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Technology Hiring</Link></li>
              <li><Link href="/solutions/rpo" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">RPO Solutions</Link></li>
              <li><Link href="/solutions/global-mobility" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Global Mobility</Link></li>
              <li><Link href="/solutions/recruitment-consulting" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Recruitment Consulting</Link></li>
            </ul>
          </div>

          {/* Column 3: Industry Practice Verticals */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-800 uppercase tracking-widest flex items-center gap-1.5">
              <TieMotif size="sm" />
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="/industries/finance" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Banking &amp; Finance</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Healthcare &amp; Pharma</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Manufacturing 4.0</Link></li>
              <li><Link href="/industries/steel" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Steel &amp; Heavy Industry</Link></li>
              <li><Link href="/industries/mining" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Mining &amp; Resources</Link></li>
              <li><Link href="/industries/it" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">IT &amp; Technology</Link></li>
              <li><Link href="/industries/retail" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Retail &amp; E-Commerce</Link></li>
              <li><Link href="/industries/logistics" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Logistics &amp; 3PL</Link></li>
              <li><Link href="/industries/education" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Education &amp; EdTech</Link></li>
              <li><Link href="/industries/energy" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Energy &amp; CleanTech</Link></li>
            </ul>
          </div>

          {/* Column 4 & 5: Reorganized Resources & Secondary Links */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-sky-800 uppercase tracking-widest flex items-center gap-1.5">
                <TieMotif size="sm" />
                Resources &amp; Secondary
              </h3>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/insights" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Recruitment Insights</Link></li>
                <li><Link href="/process" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">6-Step Search Process</Link></li>
                <li><Link href="/technology" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Technology Stack</Link></li>
                <li><Link href="/search" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Enterprise Search Engine</Link></li>
                <li><Link href="/careers" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Careers &amp; Open Roles</Link></li>
                <li><Link href="/contact" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Client Consultation</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-sky-800 uppercase tracking-widest">
                Compliance &amp; Legal
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li><Link href="/privacy-policy" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Terms of Engagement</Link></li>
                <li><Link href="/refund-policy" className="hover:text-brand-blue-dark transition-colors py-1 inline-block">Guarantee &amp; SLA Terms</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-sky-800 uppercase tracking-widest">
                Social Connect
              </h3>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/corponizers/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue-dark hover:border-sky-200 hover:bg-sky-50 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/corponizers/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue-dark hover:border-sky-200 hover:bg-sky-50 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/corponizers/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue-dark hover:border-sky-200 hover:bg-sky-50 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Inclusive Commerce Pvt Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
