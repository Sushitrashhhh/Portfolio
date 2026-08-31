export function Marquee({ footer = false }: { footer?: boolean }) {
  const content = footer
    ? 'OPEN TO WORK · AI/ML · FULL-STACK · DELHI-NCR · 技術アーカイブ · 2026 · '
    : 'PYTHON — PYTORCH — FASTAPI — RAG PIPELINES — LLMOPS — PINECONE — ONNX — COMPUTER VISION — NEXT.JS — REACT — TYPESCRIPT — POSTGRESQL — 限界突破 — ドドド — ';
  return (
    <div className={`marquee ${footer ? 'marquee-footer' : ''}`} aria-label={footer ? 'Open to work' : 'Technology stack'}>
      <div className="marquee-track">
        <span>{content.repeat(2)}</span>
        <span aria-hidden="true">{content.repeat(2)}</span>
      </div>
    </div>
  );
}
