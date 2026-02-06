import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  handler: () => void,
  isActive: boolean = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setTimeout(() => {
          handler();
        }, 0);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [handler, isActive]);

  return ref;
}
