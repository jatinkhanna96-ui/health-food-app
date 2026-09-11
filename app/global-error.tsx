'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF6EE] text-[#1B2E1B] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#EAE4D5] shadow-xl text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#1B2E1B]">Application Error</h2>
          <p className="text-[#788474] text-sm leading-relaxed">
            A critical error occurred. Please reload the application or try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-3 px-5 rounded-full bg-[#2E6B34] hover:bg-[#245829] text-white font-bold text-sm transition-all shadow-xs cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
