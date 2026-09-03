'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4 text-center">
      <h2 className="text-3xl font-black mb-2">Page Not Found</h2>
      <p className="text-slate-400 text-sm mb-6">The requested page could not be located.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-md"
      >
        Return to Discovery Map
      </Link>
    </div>
  );
}
