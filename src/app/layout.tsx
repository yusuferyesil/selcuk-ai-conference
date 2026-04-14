import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'International Conference on AI Across Disciplines',
  description: 'Join global experts in artificial intelligence across engineering, health, social sciences, and ethics at this premier international conference.',
  openGraph: {
    title: 'International Conference on AI Across Disciplines',
    description: 'Premier Interdisciplinary AI Conference',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, playfair.variable, 'font-sans min-h-screen flex flex-col bg-brand-bg text-brand-black selection:bg-brand-accent selection:text-brand-black')}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
