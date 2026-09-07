'use client';

import { useEffect } from 'react';

export default function ClientErrorHandler() {
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      if (
        event.message &&
        (event.message.includes('ResizeObserver loop completed with undelivered notifications') ||
          event.message.includes('ResizeObserver loop limit exceeded'))
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return null;
}
