import { Barcode } from './Barcode';

type CaseFileProps = {
  number: string;
  title: string;
  outcome: string;
  stack: string[];
  github: string;
  live: string;
  jpTag?: string;
};

export function CaseFile({ number, title, outcome, stack, github, live, jpTag }: CaseFileProps) {
  return (
    <article className="case-file group">
      <div className="case-number flex flex-col gap-2">
        <div className="flex items-center gap-1 text-amber">
          <span>EXHIBIT {number}</span>
        </div>
        <span className="text-[9px] font-mono text-muted tracking-widest opacity-60">
          {jpTag || `記録 // FILE_${number}`}
        </span>
        <div className="hidden sm:block mt-1">
          <Barcode value={`PM-EXP-${number}`} height={24} showText={false} className="opacity-40 group-hover:opacity-90 transition-opacity" />
        </div>
      </div>
      <div className="case-main">
        <div className="flex items-center gap-3">
          <h3>{title}</h3>
          <span className="text-[10px] font-mono text-amber/60 border border-white/10 px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            DEPLOYED ✓
          </span>
        </div>
        <p>{outcome}</p>
        <div className="tags">
          {stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="case-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <span>↗</span>
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          Live <span>↗</span>
        </a>
      </div>
    </article>
  );
}
