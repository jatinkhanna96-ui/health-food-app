import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF7EE] text-[#1B2E1B] p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#EAE4D5] shadow-xl space-y-4">
        <h1 className="text-5xl font-black text-[#2E6B34] tracking-tight">404</h1>
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-[#1B2E1B]">Page Not Found</h2>
          <p className="text-[#788474] text-xs sm:text-sm leading-relaxed">
            The dish, city directory, or resource you are looking for does not exist or has been relocated.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block w-full py-3 px-5 rounded-full bg-[#2E6B34] hover:bg-[#245829] text-white font-bold text-sm transition-all shadow-xs active:scale-95 text-center"
          >
            Return to Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
