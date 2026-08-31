import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Priyankar Majumdar — AI/ML Engineer',
  description: 'Technical dossier of Priyankar Majumdar, AI/ML Engineer and Full-Stack Builder.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable} ${body.variable}`}>{children}</body></html>;
}
