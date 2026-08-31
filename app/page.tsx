import { ActiveSectionTracker } from '@/components/ActiveSectionTracker';
import { Barcode } from '@/components/Barcode';
import { CaseFile } from '@/components/CaseFile';
import { CopyEmail } from '@/components/CopyEmail';
import { MangaGifExhibit } from '@/components/MangaGifExhibit';
import { Marquee } from '@/components/Marquee';
import { MorphName } from '@/components/MorphName';
import { Nav } from '@/components/Nav';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';

const cases = [
  {
    number: '01',
    title: 'CompactPy',
    outcome:
      'Multi-evolutionary memory-compression framework killing RAG token bloat; custom lifecycle scoring (0.4I+0.3U+0.2R+0.1F) runs promotion and eviction at sub-50ms.',
    stack: ['Python', 'tiktoken', 'NetworkX', 'SentenceTransformers'],
    github: 'https://github.com/Sushitrashhhh/CompactPy',
    live: 'https://pypi.org/project/compactpy',
    jpTag: '圧縮アルゴリズム // RAG',
  },
  {
    number: '02',
    title: 'Figma Clone',
    outcome:
      'Real-time collaborative design canvas with live cursor presence, instant sync, auth, layers, and undo/redo.',
    stack: ['Next.js', 'React', 'TypeScript', 'Liveblocks', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Sushitrashhhh/Figma-Clone',
    live: 'https://figma-clone-canvas.vercel.app',
    jpTag: 'リアルタイム設計 // CANVAS',
  },
  {
    number: '03',
    title: 'AudioCNN',
    outcome:
      'CNN trained on ESC-50 for real-time environmental sound classification, backed by a serverless Modal + FastAPI inference layer.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Modal', 'Next.js'],
    github: 'https://github.com/Sushitrashhhh/AudioCNN',
    live: 'https://audio-cnn-7a7b.vercel.app',
    jpTag: '音響ニューラル // MODAL',
  },
  {
    number: '04',
    title: 'LUNG-AI',
    outcome:
      'Transfer-learning model for lung cancer detection from CT scans with 83.7% test accuracy, a Gradio demo, and ONNX export.',
    stack: ['Python', 'PyTorch', 'ResNet50', 'Gradio', 'ONNX'],
    github: 'https://github.com/Sushitrashhhh/LUNG-AI',
    live: 'https://abcdefghipri-lung-ai.hf.space',
    jpTag: '画像診断AI // ONNX',
  },
];

type ToolCategory = {
  label: string;
  code: string;
  jp: string;
  tags: { name: string; featured?: boolean }[];
};

const toolGroups: ToolCategory[] = [
  {
    label: 'AI / ML & Deep Learning',
    code: 'ML-01',
    jp: '機械学習 · 深層学習',
    tags: [
      { name: 'PyTorch', featured: true },
      { name: 'Computer Vision & CNNs', featured: true },
      { name: 'Transfer Learning' },
      { name: 'ResNet50' },
      { name: 'ONNX Runtime', featured: true },
      { name: 'Audio Classification (ESC-50)' },
      { name: 'Scikit-Learn' },
      { name: 'NumPy' },
      { name: 'Pandas' },
    ],
  },
  {
    label: 'LLMs, RAG & Vector Search',
    code: 'RAG-02',
    jp: '大規模言語モデル · 検索拡張生成',
    tags: [
      { name: 'RAG Architecture', featured: true },
      { name: 'Pinecone & Milvus (Vector Search)', featured: true },
      { name: 'SentenceTransformers', featured: true },
      { name: 'tiktoken (Token Compression)', featured: true },
      { name: 'Prompt-Caching & Prompt Engineering' },
      { name: 'Multi-Agent LLM Routing (AMD Hackathon)' },
      { name: 'Hugging Face Transformers' },
      { name: 'Context Window Optimization' },
    ],
  },
  {
    label: 'MLOps, Cloud & Low-Latency Serving',
    code: 'OPS-03',
    jp: '機械学習基盤 · クラウド',
    tags: [
      { name: 'Modal (Serverless GPU)', featured: true },
      { name: 'Async FastAPI (<50ms Serving)', featured: true },
      { name: 'GCP CI/CD Pipelines' },
      { name: 'Gradio Demos' },
      { name: 'Docker & Containerization' },
      { name: 'Retraining Triggers & Drift Monitoring' },
      { name: 'Linux System Ops' },
    ],
  },
  {
    label: 'Full-Stack & Systems',
    code: 'SYS-04',
    jp: 'フルスタック · システム開発',
    tags: [
      { name: 'Next.js 14 / React', featured: true },
      { name: 'TypeScript & JavaScript', featured: true },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
      { name: 'Tailwind CSS' },
      { name: 'Liveblocks (Real-Time Canvas)' },
      { name: 'REST & Async Webhooks' },
    ],
  },
  {
    label: 'Languages & Problem Solving',
    code: 'DSA-05',
    jp: '競技プログラミング · 言語',
    tags: [
      { name: 'Python', featured: true },
      { name: 'C / C++' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'LeetCode (u/priyankar_majumdar)', featured: true },
      { name: 'Data Structures & Algorithms' },
      { name: 'Dynamic Programming & Graph Theory' },
      { name: 'NetworkX Graph Algorithms' },
    ],
  },
];

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <ActiveSectionTracker />

      {/* 1. HERO */}
      <section className="hero container" id="hero-sec" aria-labelledby="hero-title">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <p className="eyebrow mb-0">PM–001 · CS ENGINEER · DELHI-NCR, IN</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] text-amber/80 border border-white/10 px-2 py-0.5">
                第00巻 · 始動
              </span>
              <Barcode value="PM-001-2026-HERO" height={28} showText={false} className="hidden sm:inline-flex opacity-70" />
            </div>
          </div>

          <MorphName />

          <p className="subhead mt-4">
            AI/ML Engineer &amp; Full-Stack Builder — pre-final year CS @ Maharshi Dayanand University.
          </p>
        </Reveal>

        <div className="hero-bottom">
          <div className="cta-row">
            <a className="cta" href="#cases">
              View Work <span>↘</span>
            </a>
            <a className="cta" href="/resume.pdf">
              Resume <span>↗</span>
            </a>
            <a
              className="cta"
              href="https://leetcode.com/u/priyankar_majumdar"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode <span>↗</span>
            </a>
          </div>
          <p className="current">Currently: ML Engineering @ Sentix Security</p>
        </div>
        <Marquee />
      </section>

      {/* 2. VOL. 01 — WHAT / I BUILD */}
      <section className="section container" id="about">
        <Reveal>
          <SectionHeader
            number="01"
            title={<>What <i>/</i> I Build</>}
            japaneseLabel="第01章 · 領域 [WHAT I BUILD]"
            barcodeCode="VOL-01-BUILD-99"
          />
          <div className="intro-grid">
            {/* Left Column: Dossier Specification Card */}
            <div className="intro-spec-card flex flex-col justify-between gap-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-amber rounded-full animate-ping" />
                  <span className="font-mono text-[10px] text-ink font-bold tracking-widest uppercase">
                    ARCHIVE // DOSSIER METRICS
                  </span>
                </div>
                <span className="font-mono text-[9px] text-amber border border-amber/30 px-1.5 py-0.5 bg-amber/5">
                  PM–SPEC–001
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-white/5 pb-2.5">
                  <span className="text-muted text-[11px]">// 01. CORE DOMAIN</span>
                  <span className="text-ink font-medium">Applied ML · RAG Pipelines</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-white/5 pb-2.5">
                  <span className="text-muted text-[11px]">// 02. INFERENCE BENCHMARK</span>
                  <span className="text-amber font-medium">Sub-50ms · Token Optimization</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-white/5 pb-2.5">
                  <span className="text-muted text-[11px]">// 03. GLOBAL ACCOLADE</span>
                  <span className="text-ink font-medium">Top 1% AMD Hackathon (#51/4,894)</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-white/5 pb-2.5">
                  <span className="text-muted text-[11px]">// 04. CURRENT POST</span>
                  <span className="text-ink font-medium">ML Intern @ Sentix Security</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 pb-1">
                  <span className="text-muted text-[11px]">// 05. PROBLEM SOLVING</span>
                  <span className="text-amber font-medium">LeetCode (priyankar_majumdar)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="font-mono text-[9px] text-muted tracking-widest">
                  [ 限界突破 · DOMAIN MATRIX ]
                </span>
                <Barcode value="PM-SPEC-METRICS-01" height={22} showText={false} className="opacity-70" />
              </div>
            </div>

            {/* Right Column: Editorial Copy */}
            <div className="flex flex-col justify-between gap-6">
              <p className="intro-copy">
                Builds at the intersection of applied ML and full-stack engineering — RAG pipelines, computer-vision diagnostics, and real-time collaborative web apps. Currently a <strong>Machine Learning Engineer Intern at Sentix Security</strong>, shipping vector-search infrastructure and LLM inference systems for threat detection. Ranked top 1% globally at the AMD Developer Hackathon and top 7 nationally at Smart India Hackathon.
              </p>
              <div className="flex items-center gap-3 text-muted font-mono text-[11px] tracking-wide pt-2 border-t border-white/5">
                <span className="text-amber">↳ CORE METHODOLOGY:</span>
                <span>Production-grade inference · Minimal latency · Clean system design</span>
              </div>
            </div>

            <div className="fact-strip">
              <div className="fact">
                <span className="fact-label">Based</span>
                <span className="fact-value">Delhi-NCR, India</span>
              </div>
              <div className="fact">
                <span className="fact-label">Studying</span>
                <span className="fact-value">B.Tech CSE, MDU (2023–2027)</span>
              </div>
              <div className="fact">
                <span className="fact-label">Focus</span>
                <span className="fact-value">ML systems, RAG, full-stack</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. VOL. 02 — WHERE / I'VE WORKED */}
      <section className="section container" id="work">
        <Reveal>
          <SectionHeader
            number="02"
            title={<>Where <i>/</i> I&apos;ve Worked</>}
            japaneseLabel="第02章 · 経歴 [EXPERIENCE]"
            barcodeCode="VOL-02-EXP-088"
          />
          <div className="timeline">
            <div className="timeline-entry">
              <div className="record-meta">
                <b>Nov 2025–May 2026</b>
                <span>New Delhi, IN</span>
                <div className="mt-2 text-[9px] text-amber/70 font-mono">
                  [STATUS: CURRENT]
                </div>
              </div>
              <div>
                <div className="company">SENTIX SECURITY PVT. LTD.</div>
                <div className="role">Machine Learning Intern</div>
                <ul className="bullets">
                  <li>Built a Pinecone/Milvus ingestion pipeline cutting threat-detection retrieval latency 30%+.</li>
                  <li>Optimized LLM inference with custom prompt-caching + async FastAPI, sub-second response under peak load.</li>
                  <li>Automated the ML deploy lifecycle with GCP CI/CD, monitoring, and retraining triggers.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="record-meta">
                <b>Sep–Dec 2024</b>
                <span>New Delhi, IN</span>
                <div className="mt-2 text-[9px] text-muted font-mono">
                  [COMPLETED]
                </div>
              </div>
              <div>
                <div className="company">INTERNWARE, IITM JANAKPURI</div>
                <div className="role">Technical Executive</div>
                <ul className="bullets">
                  <li>Built responsive MERN landing pages, cutting dev time from 1 week to 3 days via reusable components.</li>
                  <li>Streamlined frontend/backend coordination, halving task completion time.</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. VOL. 03 — SELECTED / CASE FILES */}
      <section className="section container" id="cases">
        <Reveal>
          <SectionHeader
            number="03"
            title={<>Selected <i>/</i> Case Files</>}
            japaneseLabel="第03章 · 実績 [PROJECT EXHIBITS]"
            barcodeCode="VOL-03-CASES-55"
          />
          <div className="cases">
            {cases.map((item) => (
              <CaseFile key={item.number} {...item} />
            ))}
          </div>

          {/* Manga Exhibit Feature — LR INT Super Saiyan Goku Strike of Full Anger */}
          <div className="mt-8">
            <MangaGifExhibit />
          </div>
        </Reveal>
      </section>

      {/* 5. VOL. 04 — ON / THE RECORD */}
      <section className="section container" id="record">
        <Reveal>
          <SectionHeader
            number="04"
            title={<>On <i>/</i> The Record</>}
            japaneseLabel="第04章 · 栄誉 [ACCOLADES & ARCHIVE]"
            barcodeCode="VOL-04-AWARDS-12"
          />
          <div className="records">
            <div className="record">
              <div className="record-meta flex items-center justify-between">
                <span>AMD DEVELOPER HACKATHON · ACT II</span>
                <span className="text-[9px] text-amber border border-amber/30 px-1">GLOBAL TOP 1%</span>
              </div>
              <p>
                #51 of 4,894 teams worldwide (top 1%) — co-built a token-efficient LLM routing agent, 89.5% accuracy inside a strict 5,333-token cap (2026).
              </p>
            </div>

            <div className="record">
              <div className="record-meta flex items-center justify-between">
                <span>SMART INDIA HACKATHON · SIH</span>
                <span className="text-[9px] text-amber border border-amber/30 px-1">NATIONALS</span>
              </div>
              <p>
                7th of 50 teams, North India regional — advanced to nationals for building real-time mission-critical software solutions.
              </p>
            </div>

            <div className="record">
              <div className="record-meta flex items-center justify-between">
                <span>LEETCODE PROFILE · PROBLEM SOLVING</span>
                <span className="text-[9px] text-amber border border-amber/30 px-1">ACTIVE ARCHIVE</span>
              </div>
              <p>
                Solved hundreds of algorithmic challenges across Dynamic Programming, Graphs, and Advanced Trees. Profile:{' '}
                <a
                  href="https://leetcode.com/u/priyankar_majumdar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber underline hover:text-white"
                >
                  leetcode.com/u/priyankar_majumdar ↗
                </a>
              </p>
            </div>

            <div className="record">
              <div className="record-meta flex items-center justify-between">
                <span>PIXEL ART &amp; MANGA TOUCH</span>
                <span className="text-[9px] text-amber border border-amber/30 px-1">LIMIT BREAK</span>
              </div>
              <p>
                Engineered with editorial catalog numbering, Japanese cipher animations, and 16-bit Ki surge renderers inspired by classic Shonen &amp; vinyl micro-archives.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. VOL. 05 — THE / TOOLKIT */}
      <section className="section container" id="toolkit">
        <Reveal>
          <SectionHeader
            number="05"
            title={<>The <i>/</i> Toolkit</>}
            japaneseLabel="第05章 · 兵装 [AI/ML & DEV SPECS]"
            barcodeCode="VOL-05-STACK-77"
          />
          <div className="toolkit">
            {toolGroups.map((group) => (
              <div className="tool-group" key={group.code}>
                <div className="tool-group-meta">
                  <span>
                    {group.code} // {group.jp}
                  </span>
                  <h3>{group.label}</h3>
                </div>
                <div className="tool-tags">
                  {group.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={tag.featured ? 'featured-skill' : ''}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 7. VOL. 06 — LET'S / TALK */}
      <section className="section container contact" id="contact">
        <Reveal>
          <SectionHeader
            number="06"
            title={<>Let&apos;s <i>/</i> Talk</>}
            japaneseLabel="第06章 · 交信 [TRANSMISSION & CONTACT]"
            barcodeCode="VOL-06-CONTACT-00"
          />
          <p className="contact-intro">
            Open to ML engineering and full-stack roles. Reach out for collaborations, discussions on RAG systems, or high-performance engineering.
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:priynkar.majumdar1206@gmail.com">
              Email <small>MAILTO ↗</small>
            </a>
            <CopyEmail />
            <a
              className="contact-link"
              href="https://leetcode.com/u/priyankar_majumdar"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode <small>LEETCODE.COM ↗</small>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Sushitrashhhh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <small>GITHUB ↗</small>
            </a>
            <a
              className="contact-link"
              href="https://linkedin.com/in/priyankar-majumdar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <small>LINKEDIN ↗</small>
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Marquee footer />
        <div className="footer-line container flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Barcode value="PM-001-2026-FINAL" height={22} showText={false} className="opacity-50" />
            <span>PM–001 · Compiled in Delhi-NCR · Est. 2023 · プリヤンカル</span>
          </div>
          <span>Open to work · © 2026 · [ 極意 ]</span>
        </div>
      </footer>
    </main>
  );
}
