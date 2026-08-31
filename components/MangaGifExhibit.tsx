'use client';

import React, { useState } from 'react';
import { Barcode } from './Barcode';

const GOKU_GIF_URL =
  'https://media1.tenor.com/m/s7GxkVCu9DYAAAAd/lr-int-super-saiyan-goku-strike-of-full-anger.gif';

const FALLBACK_GIF_URL =
  'https://media.tenor.com/s7GxkVCu9DYAAAAC/lr-int-super-saiyan-goku-strike-of-full-anger.gif';

export function MangaGifExhibit() {
  const [power, setPower] = useState(150000000); // 150M Power level Namek Super Saiyan
  const [isAngry, setIsAngry] = useState(false);
  const [imgSrc, setImgSrc] = useState(GOKU_GIF_URL);

  const triggerLimitBreak = () => {
    setIsAngry(true);
    setPower((prev) => prev + 50000000);
    setTimeout(() => setIsAngry(false), 2500);
  };

  return (
    <div className="relative border border-white/10 bg-[#0a0a0c] p-4 sm:p-6 overflow-hidden my-8 group">
      {/* Manga Background Watermark Halftones */}
      <div className="absolute -right-8 -bottom-10 text-white/[0.03] font-display font-black text-8xl select-none pointer-events-none tracking-tighter">
        怒り
      </div>
      <div className="absolute top-4 left-1/3 text-amber/[0.04] font-display font-black text-6xl select-none pointer-events-none">
        ばかやろう
      </div>

      {/* Top Dossier Exhibit Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 bg-amber rounded-full animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            EXHIBIT // LR INT SUPER SAIYAN GOKU
          </span>
          <span className="font-mono text-[9px] text-amber border border-amber/30 px-1.5 py-0.5 bg-amber/5 hidden sm:inline-block">
            STRIKE OF FULL ANGER
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-mono text-[10px] text-muted tracking-wider">
            KI LEVEL:{' '}
            <span className="text-amber font-bold">
              {power.toLocaleString()}
            </span>
          </div>
          <button
            onClick={triggerLimitBreak}
            className="font-mono text-[10px] text-black bg-amber hover:bg-amber/90 font-bold px-2.5 py-1 tracking-wider transition-all transform active:scale-95 cursor-pointer"
          >
            {isAngry ? '限界突破中 ⚡' : 'LIMIT BREAK ⚡'}
          </button>
        </div>
      </div>

      {/* Main Manga Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* GIF Player Frame (Manga Screen / CRT Border) */}
        <div className="lg:col-span-7 relative border border-white/15 bg-black overflow-hidden shadow-2xl">
          {/* Manga Onomatopoeia Stamps */}
          <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-amber bg-black/80 border border-amber/40 px-2 py-0.5 tracking-widest backdrop-blur-sm">
            超サイヤ人 · 怒りの一撃
          </div>

          <div className="absolute bottom-3 right-3 z-10 font-mono text-[9px] text-white/70 bg-black/70 px-2 py-0.5 border border-white/10 backdrop-blur-sm">
            DOKKAN ARCHIVE // LR INT GOKU
          </div>

          {/* Screentone Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

          {/* High Res Tenor GIF */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              onError={() => setImgSrc(FALLBACK_GIF_URL)}
              alt="LR INT Super Saiyan Goku - Strike of Full Anger Super Kamehameha"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isAngry ? 'scale-105 contrast-125' : 'scale-100'
              }`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Manga Spec Sheet & Editorial Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-amber tracking-widest">
                ARCHIVE NO. DBZ-NAMEK-01
              </span>
              <Barcode value="SSJ-GOKU-LR-INT" height={22} showText={false} className="opacity-60" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              The Super Saiyan&apos;s Final Showdown
            </h3>
            <p className="font-mono text-xs text-amber/80 tracking-wide mt-1">
              Fierce Hand-to-Hand Battle · Angry Super Kamehameha (ばかやろーっ!)
            </p>

            <p className="text-muted text-sm leading-relaxed mt-3">
              Iconic legendary battle visual capturing the explosive anger on Planet Namek. Grounded into the dossier as a testament to peak engineering endurance, limit-breaking compute, and high-energy full-stack execution.
            </p>
          </div>

          {/* Dossier Specs */}
          <div className="border-t border-white/10 pt-3 space-y-2 font-mono text-[11px]">
            <div className="flex justify-between text-muted">
              <span>STATUS:</span>
              <span className="text-amber">TRANSFORMATION UNLOCKED</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>TECHNIQUE:</span>
              <span className="text-ink">ANGRY KAMEHAMEHA (怒りの必殺技)</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>ATTRIBUTION:</span>
              <a
                href="https://tenor.com/view/lr-int-super-saiyan-goku-strike-of-full-anger-the-super-saiyans-final-showdown-fierce-hand-to-hand-battle-super-kamehameha-gif-12948325641348903990"
                target="_blank"
                rel="noreferrer"
                className="text-amber underline hover:text-white"
              >
                TENOR / LR INT GOKU ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
