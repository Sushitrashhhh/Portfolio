'use client';

interface BarcodeProps {
  value?: string;
  className?: string;
  height?: number;
  showText?: boolean;
  color?: string;
}

export function Barcode({
  value = 'PM-2026-ARCHIVE-001',
  className = '',
  height = 42,
  showText = true,
  color = 'currentColor',
}: BarcodeProps) {
  // Deterministic bar widths generated from the value string
  const bars = Array.from(value).flatMap((char, i) => {
    const code = char.charCodeAt(0);
    const w1 = (code % 3) + 1;
    const space = ((code >> 2) % 2) + 1;
    const w2 = ((code >> 4) % 3) + 1;
    return [w1, space, w2, 1];
  }).slice(0, 48);

  let currentX = 2;
  const rects: { x: number; width: number }[] = [];

  bars.forEach((width, index) => {
    if (index % 2 === 0) {
      rects.push({ x: currentX, width });
    }
    currentX += width + (index % 2 === 1 ? 1 : 0);
  });

  const totalWidth = currentX + 4;

  return (
    <div className={`inline-flex flex-col items-center tracking-widest ${className}`}>
      <svg
        width={totalWidth}
        height={height}
        viewBox={`0 0 ${totalWidth} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        {rects.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={0}
            width={r.width}
            height={height}
            fill={color}
          />
        ))}
      </svg>
      {showText && (
        <span className="text-[9px] font-mono tracking-[0.25em] text-amber mt-1 opacity-70">
          *{value}*
        </span>
      )}
    </div>
  );
}
