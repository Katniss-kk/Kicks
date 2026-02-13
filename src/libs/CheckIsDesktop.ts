import { useState, useEffect } from 'react';

export default function CheckIsDesktop(breakpoint = 1280) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= breakpoint);

    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, [breakpoint]);

  return isDesktop;
}
