'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Briefcase, 
  UserCheck, 
  Globe2, 
  Cpu, 
  ArrowRight,
  Building2,
  Users2,
  Clock,
  GraduationCap,
  BarChart3,
  Stethoscope,
  Factory,
  Flame,
  Pickaxe,
  ShoppingCart,
  Truck,
  Zap,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CorponizersLogo } from '@/components/ui/CorponizersLogo';
import { TieMotif } from '@/components/ui/TieMotif';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMegaOpen, setSolutionsMegaOpen] = useState(false);
  const [industriesMegaOpen, setIndustriesMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolutionsMegaOpen(false);
        setIndustriesMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const solutions = [
    { name: 'Executive Search', desc: 'C-Suite & Board leadership acquisition', href: '/solutions/executive-search', icon: UserCheck },
    { name: 'Permanent Hiring', desc: '4-layer competency audit placements', href: '/solutions/permanent-hiring', icon: Users2 },
    { name: 'Contract Staffing', desc: '48h deploy-on-demand contractors', href: '/solutions/contract-staffing', icon: Clock },
    { name: 'Campus Hiring', desc: 'Tier-1 university graduate pipelines', href: '/solutions/campus-hiring', icon: GraduationCap },
    { name: 'Technology Hiring', desc: 'AI researchers & cloud architects', href: '/solutions/tech-hiring', icon: Cpu },
    { name: 'RPO Solutions', desc: '34% lower cost-per-hire delivery', href: '/solutions/rpo', icon: Briefcase },
    { name: 'Global Mobility', desc: 'Cross-border visa & international hiring', href: '/solutions/global-mobility', icon: Globe2 },
    { name: 'Recruitment Consulting', desc: 'TA maturity index & EVP audits', href: '/solutions/recruitment-consulting', icon: BarChart3 },
    { name: 'Recruitment Process', desc: '6-step double-blind search framework', href: '/process', icon: Compass },
  ];

  const industries = [
    { name: 'Finance & Banking', desc: 'CISO, FinTech & Risk Directors', href: '/industries/finance', icon: Building2 },
    { name: 'Healthcare & Pharma', desc: 'Clinical Directors & BioPharma Leads', href: '/industries/healthcare', icon: Stethoscope },
    { name: 'Manufacturing 4.0', desc: 'Plant VPs & Supply Chain Leads', href: '/industries/manufacturing', icon: Factory },
    { name: 'Steel & Heavy Metal', desc: 'Process Chiefs & Metallurgy Directors', href: '/industries/steel', icon: Flame },
    { name: 'Mining & Resources', desc: 'ESG Directors & Exploration Leads', href: '/industries/mining', icon: Pickaxe },
    { name: 'IT & Technology', desc: 'AI Engineers & Cloud Systems Leads', href: '/industries/it', icon: Cpu },
    { name: 'Retail & E-Commerce', desc: 'Omnichannel VPs & DTC Growth Leads', href: '/industries/retail', icon: ShoppingCart },
    { name: 'Logistics & 3PL', desc: 'Freight Tech Chiefs & Supply Officers', href: '/industries/logistics', icon: Truck },
    { name: 'Education & EdTech', desc: 'Chancellors & Campus Directors', href: '/industries/education', icon: GraduationCap },
    { name: 'Energy & Clean Tech', desc: 'Grid Leads & Renewable Directors', href: '/industries/energy', icon: Zap },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-0'
          : 'bg-white border-b border-slate-100/80 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Prominent Official Logo Anchor */}
          <div className="shrink-0">
            <CorponizersLogo size="lg" />
          </div>

          {/* SIMPLIFIED 6-ITEM PRIMARY NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-colors ${
                pathname === '/' ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-colors ${
                pathname === '/about' ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Solutions Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => { setSolutionsMegaOpen(true); setIndustriesMegaOpen(false); }}
              onMouseLeave={() => setSolutionsMegaOpen(false)}
            >
              <button
                aria-expanded={solutionsMegaOpen}
                onClick={() => setSolutionsMegaOpen(!solutionsMegaOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-extrabold transition-colors cursor-pointer ${
                  pathname.startsWith('/solutions') || pathname === '/process' ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsMegaOpen ? 'rotate-180 text-corponizers-blue' : ''}`} />
              </button>

              {solutionsMegaOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-3xl shadow-2xl border border-sky-100 p-6 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  role="menu"
                >
                  <div className="col-span-2 flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-black text-slate-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <TieMotif size="sm" />
                      Recruitment &amp; Workforce Solutions
                    </span>
                    <Link href="/solutions" onClick={() => setSolutionsMegaOpen(false)} className="text-corponizers-blue hover:underline">
                      All Solutions →
                    </Link>
                  </div>

                  {solutions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setSolutionsMegaOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-sky-50/70 transition-colors group border border-transparent hover:border-sky-100"
                        role="menuitem"
                      >
                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-corponizers-blue transition-colors">
                            {item.name}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Industries Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => { setIndustriesMegaOpen(true); setSolutionsMegaOpen(false); }}
              onMouseLeave={() => setIndustriesMegaOpen(false)}
            >
              <button
                aria-expanded={industriesMegaOpen}
                onClick={() => setIndustriesMegaOpen(!industriesMegaOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-extrabold transition-colors cursor-pointer ${
                  pathname.startsWith('/industries') ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
                }`}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesMegaOpen ? 'rotate-180 text-corponizers-blue' : ''}`} />
              </button>

              {industriesMegaOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-3xl shadow-2xl border border-sky-100 p-6 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  role="menu"
                >
                  <div className="col-span-2 flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-black text-slate-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <TieMotif size="sm" />
                      10 Industry Practice Verticals
                    </span>
                    <Link href="/industries" onClick={() => setIndustriesMegaOpen(false)} className="text-corponizers-blue hover:underline">
                      All Verticals →
                    </Link>
                  </div>

                  {industries.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIndustriesMegaOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-sky-50/70 transition-colors group border border-transparent hover:border-sky-100"
                        role="menuitem"
                      >
                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center group-hover:bg-corponizers-blue group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-corponizers-blue transition-colors">
                            {item.name}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/insights"
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-colors ${
                pathname === '/insights' || pathname.startsWith('/insights/') ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
              }`}
            >
              Insights
            </Link>


            <Link
              href="/careers"
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-colors ${
                pathname === '/careers' || pathname.startsWith('/careers/') ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-colors ${
                pathname === '/contact' ? 'text-corponizers-blue bg-sky-50/50' : 'text-slate-700 hover:text-corponizers-blue hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* SINGLE HIGH-CONVERSION PRIMARY CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="md" className="shadow-brand hover:shadow-brand-hover">
              Book Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-sky-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-corponizers-blue" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* FULLSCREEN MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-50 overflow-y-auto px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-black text-slate-900 border-b border-slate-100"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-black text-slate-900 border-b border-slate-100"
            >
              About
            </Link>

            <div className="py-2">
              <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest block mb-2">
                Recruitment &amp; Solutions
              </span>
              <div className="grid grid-cols-1 gap-2 pl-3 border-l-2 border-sky-200">
                {solutions.slice(0, 5).map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-slate-700 py-1 hover:text-corponizers-blue"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black text-corponizers-blue pt-1">
                  View All Solutions →
                </Link>
              </div>
            </div>

            <div className="py-2">
              <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest block mb-2">
                Industry Practice Verticals
              </span>
              <div className="grid grid-cols-1 gap-2 pl-3 border-l-2 border-sky-200">
                {industries.slice(0, 5).map((i) => (
                  <Link
                    key={i.name}
                    href={i.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-slate-700 py-1 hover:text-corponizers-blue"
                  >
                    {i.name}
                  </Link>
                ))}
                <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black text-corponizers-blue pt-1">
                  View All Industries →
                </Link>
              </div>
            </div>

            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-black text-slate-900 border-b border-slate-100"
            >
              Insights
            </Link>


            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-black text-slate-900 border-b border-slate-100"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-black text-slate-900 border-b border-slate-100"
            >
              Contact
            </Link>

          </div>

          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              Book Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
