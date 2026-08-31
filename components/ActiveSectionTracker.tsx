'use client';

import { useEffect, useState } from 'react';

export function ActiveSectionTracker() {
  const [current, setCurrent] = useState('01');
  const total = '06';

  useEffect(() => {
    const sectionIds = ['hero-sec', 'about', 'work', 'cases', 'record', 'toolkit', 'contact'];
    const map: Record<string, string> = {
      'hero-sec': '01',
      about: '01',
      work: '02',
      cases: '03',
      record: '04',
      toolkit: '05',
      contact: '06',
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrent(map[sectionIds[i]]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="corner-index" aria-label={`Active Section ${current} of ${total}`}>
      <span>( {current} / {total} )</span>
      <span className="text-[8px] text-muted tracking-widest mt-1 opacity-60">巻 · ARCHIVE</span>
    </div>
  );
}
