'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

const KATAKANA_GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォッャュョ';
const GLITCH_CHARS = '0123456789ABCDEF$#%&<>/*_+~[]{}';

const EN_LINE1 = 'PRIYANKAR';
const EN_LINE2 = 'MAJUMDAR';

const JP_LINE1 = 'プリヤンカル';
const JP_LINE2 = 'マジュムダル';

export function MorphName() {
  const [isJapanese, setIsJapanese] = useState(false);
  const [line1, setLine1] = useState(EN_LINE1);
  const [line2, setLine2] = useState(EN_LINE2);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleTo = useCallback((target1: string, target2: string) => {
    setIsScrambling(true);
    const maxLen1 = Math.max(line1.length, target1.length);
    const maxLen2 = Math.max(line2.length, target2.length);
    let step = 0;
    const totalSteps = 14;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      step++;
      const progress = step / totalSteps;

      // Scramble line 1
      const scrambled1 = Array.from({ length: maxLen1 }, (_, i) => {
        if (i < target1.length && progress > i / target1.length + 0.2) {
          return target1[i];
        }
        if (Math.random() < 0.3) {
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        return KATAKANA_GLYPHS[Math.floor(Math.random() * KATAKANA_GLYPHS.length)];
      }).join('');

      // Scramble line 2
      const scrambled2 = Array.from({ length: maxLen2 }, (_, i) => {
        if (i < target2.length && progress > i / target2.length + 0.2) {
          return target2[i];
        }
        if (Math.random() < 0.3) {
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        return KATAKANA_GLYPHS[Math.floor(Math.random() * KATAKANA_GLYPHS.length)];
      }).join('');

      setLine1(scrambled1);
      setLine2(scrambled2);

      if (step >= totalSteps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setLine1(target1);
        setLine2(target2);
        setIsScrambling(false);
      }
    }, 45);
  }, [line1.length, line2.length]);

  const toggleLanguage = useCallback(() => {
    if (isScrambling) return;
    const nextState = !isJapanese;
    setIsJapanese(nextState);
    if (nextState) {
      scrambleTo(JP_LINE1, JP_LINE2);
    } else {
      scrambleTo(EN_LINE1, EN_LINE2);
    }
  }, [isJapanese, isScrambling, scrambleTo]);

  // Auto morph periodically every 8s
  useEffect(() => {
    const timer = setInterval(() => {
      toggleLanguage();
    }, 8000);
    return () => clearInterval(timer);
  }, [toggleLanguage]);

  return (
    <div className="group relative inline-block cursor-pointer select-none" onClick={toggleLanguage}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-[9px] text-amber tracking-[0.25em] flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-amber rounded-full animate-ping" />
          {isJapanese ? 'MODE: JP [日本語]' : 'MODE: EN [RAW_ID]'}
        </span>
        <span className="font-mono text-[9px] text-muted tracking-wider border border-white/10 px-1.5 py-0.5 rounded group-hover:border-amber/50 transition-colors">
          CLICK TO MORPH ⇄
        </span>
      </div>

      <h1 id="hero-title" className="morph-title transition-all duration-300">
        <span className="block font-display tracking-tighter text-ink group-hover:text-amber transition-colors">
          {line1}
        </span>
        <span className="block font-display tracking-tighter text-amber">
          {line2}
        </span>
      </h1>

      <div className="flex items-center gap-3 mt-2 text-muted font-mono text-[10px] tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
        <span>// CATALOG: PM–001</span>
        <span>•</span>
        <span>AUTH: PRIYANKAR</span>
        <span>•</span>
        <span>プリヤンカル</span>
      </div>
    </div>
  );
}
