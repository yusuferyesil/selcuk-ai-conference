import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, STIX_Two_Text } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { conferenceData } from '@/data/conference';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RegistrationBar from '@/components/layout/RegistrationBar';

const sans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-mono',
});
const serif = STIX_Two_Text({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    default: `${conferenceData.name} — ${conferenceData.edition}`,
    template: `%s | ${conferenceData.edition}`,
  },
  description: `${conferenceData.edition}, organized by ${conferenceData.organizer}: join global experts in artificial intelligence across engineering, health, social sciences, and ethics. ${conferenceData.date}, Konya, Turkey.`,
  keywords: ['artificial intelligence', 'AI conference', 'academic conference', 'Selçuk University', 'Konya', 'ICAAD'],
  openGraph: {
    title: `${conferenceData.name} — ${conferenceData.edition}`,
    description: `Premier interdisciplinary AI conference. ${conferenceData.date}, Konya, Turkey.`,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(sans.variable, mono.variable, serif.variable, 'font-sans min-h-screen flex flex-col bg-brand-bg text-brand-black')}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-deep focus:text-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <RegistrationBar />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
