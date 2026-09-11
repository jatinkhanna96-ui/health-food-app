'use client';

import React, { Component, useEffect, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Captured by ErrorBoundary:', error?.message || error);

    // Auto-reload on ChunkLoadError (e.g. after deployment or new chunk generation)
    if (
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('app-pages-internals')
    ) {
      const lastReload = sessionStorage.getItem('last_chunk_reload');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 8000) {
        sessionStorage.setItem('last_chunk_reload', now.toString());
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const isChunkError =
        this.state.error?.name === 'ChunkLoadError' ||
        this.state.error?.message?.includes('Loading chunk') ||
        this.state.error?.message?.includes('app-pages-internals');

      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF7EE] text-[#1B2E1B] p-4 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE4D5] shadow-xl space-y-4">
            <h2 className="text-xl font-extrabold text-[#1B2E1B]">
              {isChunkError ? 'Updating Application Version' : 'Something went wrong'}
            </h2>
            <p className="text-[#788474] text-sm leading-relaxed">
              {isChunkError
                ? 'A new version of the app was deployed. Refreshing to load the latest updates...'
                : 'An unexpected error occurred while loading this view.'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                if (typeof window !== 'undefined') window.location.reload();
              }}
              className="w-full py-3 px-5 rounded-full bg-[#2E6B34] hover:bg-[#245829] text-white font-bold text-sm transition-all shadow-md cursor-pointer active:scale-95"
            >
              Refresh Now
            </button>
          </div>
        </div>
      );
    }
    return this.props.children || null;
  }
}

export default function ClientErrorHandler({ children }: { children?: ReactNode }) {
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      // 1. Benign ResizeObserver errors
      if (
        event.message &&
        (event.message.includes('ResizeObserver loop completed with undelivered notifications') ||
          event.message.includes('ResizeObserver loop limit exceeded'))
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
        return;
      }

      // 2. ChunkLoadError automatic recovery
      if (
        event.message &&
        (event.message.includes('Loading chunk') ||
          event.message.includes('ChunkLoadError') ||
          event.message.includes('app-pages-internals'))
      ) {
        event.preventDefault();
        const lastReload = sessionStorage.getItem('last_chunk_reload');
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 8000) {
          sessionStorage.setItem('last_chunk_reload', now.toString());
          window.location.reload();
        }
      }
    };

    const rejectionHandler = (event: PromiseRejectionEvent) => {
      const reason = event?.reason;
      const message = typeof reason === 'string' ? reason : reason?.message || '';
      if (
        message.includes('Loading chunk') ||
        message.includes('ChunkLoadError') ||
        message.includes('app-pages-internals')
      ) {
        event.preventDefault();
        const lastReload = sessionStorage.getItem('last_chunk_reload');
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 8000) {
          sessionStorage.setItem('last_chunk_reload', now.toString());
          window.location.reload();
        }
      }
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}
