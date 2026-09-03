'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4 text-center">
      <h2 className="text-3xl font-black mb-2">Something went wrong</h2>
      <p className="text-slate-400 text-sm mb-6">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-md cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
