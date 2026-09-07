'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl font-black mb-2">Something went wrong</h2>
        <p className="text-slate-400 text-sm mb-6">
          An unexpected error occurred.
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-md cursor-pointer"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
