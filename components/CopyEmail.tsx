'use client';

import { useState } from 'react';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('priynkar.majumdar1206@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
    }
  }

  return (
    <button
      type="button"
      className="contact-link copy-email group"
      onClick={copyEmail}
      aria-label="Copy email address"
    >
      <span className="flex items-center gap-3">
        {copied ? 'Copied to Clipboard' : 'Copy Email'}
        <span className="text-xs text-amber font-mono opacity-60">
          [priynkar.majumdar1206@gmail.com]
        </span>
      </span>
      <small className="group-hover:text-amber transition-colors">
        {copied ? 'SAVED ✓' : 'CLIPBOARD +'}
      </small>
    </button>
  );
}