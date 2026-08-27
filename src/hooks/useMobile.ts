'use client';

import { useState, useEffect } from 'react';

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Return early if window is not defined (SSR)
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    // Set initial value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mql.matches);

    // Event listener for subsequent changes
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mql.addEventListener('change', handler);
    
    return () => {
      mql.removeEventListener('change', handler);
    };
  }, [breakpoint]);

  return isMobile;
}
