'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error captured:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#EAE4D5] shadow-xl space-y-4">
        <h2 className="text-2xl font-bold text-[#1B2E1B]">Something went wrong</h2>
        <p className="text-[#788474] text-sm leading-relaxed">
          An error occurred while rendering this view. You can try refreshing or returning to the directory.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 py-3 px-5 rounded-full bg-[#2E6B34] hover:bg-[#245829] text-white font-bold text-sm transition-all shadow-xs cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex-1 py-3 px-5 rounded-full bg-[#FAF6EE] hover:bg-[#F2EBD9] text-[#1B2E1B] font-bold text-sm transition-all border border-[#EAE4D5] text-center"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
