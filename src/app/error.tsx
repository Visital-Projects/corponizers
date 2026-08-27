'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <span className="text-4xl font-black text-red-600">500</span>
          <h1 className="text-3xl font-black text-slate-900">Application Error</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            An unexpected server error occurred. Our engineering operations team has been notified.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button onClick={() => reset()} variant="primary" size="md">
              Re-attempt Request
            </Button>
            <Button href="/" variant="outline" size="md">
              Return Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
