'use client';

import { useState } from 'react';

const links = [
  ['01', 'About', '#about'],
  ['02', 'Work', '#work'],
  ['03', 'Cases', '#cases'],
  ['04', 'Record', '#record'],
  ['05', 'Toolkit', '#toolkit'],
  ['06', 'Contact', '#contact'],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="nav-mark" href="#top" aria-label="Back to top">
        PM<span>–001</span>
        <span className="text-[9px] text-muted font-mono tracking-widest hidden sm:inline ml-2 opacity-60">
          [ プリヤンカル ]
        </span>
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span>INDEX</span> {open ? '×' : '↘'}
      </button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([number, label, href]) => (
          <a href={href} key={label} onClick={() => setOpen(false)}>
            <span>{number}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
