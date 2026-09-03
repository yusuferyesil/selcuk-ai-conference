import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, STIX_Two_Text } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { conferenceData } from '@/data/conference';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RegistrationBar from '@/components/layout/RegistrationBar';
import { locales, Locale } from '@/i18n';

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

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: {
    default: `${conferenceData.name} — ${conferenceData.edition}`,
    template: `%s | ${conferenceData.edition}`,
  },
  description: `${conferenceData.edition}, organized by ${conferenceData.organizer}: hybrid conference (in-person in Konya, Turkey & online). Join global experts in artificial intelligence across engineering, health, social sciences, law, and ethics. ${conferenceData.date}.`,
  keywords: ['artificial intelligence', 'AI conference', 'hybrid conference', 'online conference', 'academic conference', 'Selçuk University', 'Konya', 'ICAAD'],
  openGraph: {
    title: `${conferenceData.name} — ${conferenceData.edition}`,
    description: `Premier interdisciplinary hybrid AI conference (in-person & online). ${conferenceData.date}, Konya, Turkey.`,
    type: 'website',
    locale: 'en_US',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={cn(sans.variable, mono.variable, serif.variable, 'font-sans min-h-screen flex flex-col bg-brand-bg text-brand-black')}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-deep focus:text-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <RegistrationBar lang={lang as Locale} />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer lang={lang as Locale} />
      </body>
    </html>
  );
}
