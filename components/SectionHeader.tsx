import type { ReactNode } from 'react';
import { Barcode } from './Barcode';

interface SectionHeaderProps {
  number: string;
  title: ReactNode;
  japaneseLabel?: string;
  barcodeCode?: string;
}

const kanjiChapters: Record<string, { kanji: string; sfx: string }> = {
  '01': { kanji: '第01章 · 領域', sfx: '気' },
  '02': { kanji: '第02章 · 経歴', sfx: '瞬' },
  '03': { kanji: '第03章 · 実績', sfx: '撃' },
  '04': { kanji: '第04章 · 記録', sfx: '極' },
  '05': { kanji: '第05章 · 兵装', sfx: '破' },
  '06': { kanji: '第06章 · 交信', sfx: '電' },
};

export function SectionHeader({ number, title, japaneseLabel, barcodeCode }: SectionHeaderProps) {
  const meta = kanjiChapters[number] || { kanji: `第${number}章`, sfx: '章' };

  return (
    <div className="section-header-block mb-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-amber font-semibold tracking-widest flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-amber" />
            Vol. {number}
          </span>
          <span className="text-white/20 font-mono text-xs">/</span>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
            {japaneseLabel || meta.kanji}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-amber/70 border border-white/10 px-1.5 py-0.5 bg-white/[0.02]">
            [{meta.sfx}]
          </span>
          {barcodeCode && (
            <Barcode
              value={barcodeCode}
              height={18}
              showText={false}
              className="hidden sm:inline-flex opacity-50 hover:opacity-100 transition-opacity"
            />
          )}
        </div>
      </div>

      <div className="flex items-baseline">
        <h2 className="section-title">{title}</h2>
      </div>
    </div>
  );
}
