import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Building2, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-lg">
            <Building2 className="w-8 h-8 text-sky-400" />
          </div>
          <span className="text-4xl font-black text-corponizers-blue">404</span>
          <h1 className="text-3xl font-black text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The requested executive page or practice specification could not be located on the Corponizers server.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button href="/" variant="primary" size="md">
              Return to Home Portal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
