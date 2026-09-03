import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { Sparkles, Calendar, CheckCircle2, Globe, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Registration",
  description: `Registration information, policies, and participation details for ${conferenceData.edition}.`,
}

export default async function Registration({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  const inclusions = [
    t.registrationPage.inclusion1,
    t.registrationPage.inclusion2,
    t.registrationPage.inclusion3,
    t.registrationPage.inclusion4,
    t.registrationPage.inclusion5,
    t.registrationPage.inclusion6,
    t.registrationPage.inclusion7,
    t.registrationPage.inclusion8,
  ];

  const faqs = [
    { q: t.registrationPage.faq1Q, a: t.registrationPage.faq1A },
    { q: t.registrationPage.faq2Q, a: t.registrationPage.faq2A },
    { q: t.registrationPage.faq3Q, a: t.registrationPage.faq3A },
    { q: t.registrationPage.faq4Q, a: t.registrationPage.faq4A },
    { q: t.registrationPage.faq5Q, a: t.registrationPage.faq5A },
    { q: t.registrationPage.faq6Q, a: t.registrationPage.faq6A },
  ];

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.registrationPage.eyebrow}
        title={t.registrationPage.title}
        description={t.registrationPage.desc}
      />

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto space-y-16">
          {/* Free Participation Card */}
          <MotionDiv
            variants={fadeUpVariant}
            className="bg-white border-2 border-brand-gold/60 p-10 md:p-14 text-center shadow-gold relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

            <div className="inline-flex items-center justify-center w-16 h-16 border border-brand-gold/40 bg-brand-goldLight mb-6 text-brand-gold">
              <Sparkles size={28} />
            </div>
            <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-[0.25em] block mb-2">
              {t.registrationPage.openAccessBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-4">
              {t.registrationPage.freeTitle}
            </h2>
            <p className="text-brand-blackLight font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              {t.registrationPage.freeDesc}
            </p>

            <a
              href="https://cmt3.research.microsoft.com/ICAAD2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 bg-brand-gold text-brand-black text-sm font-bold tracking-wide transition-all duration-200 hover:bg-brand-goldDark shadow-gold mb-8"
            >
              {t.registrationPage.submitBtn}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-brand-blackLight">
              <span className="inline-flex items-center gap-1.5 bg-brand-surface px-4 py-2 border border-brand-border">
                <Calendar size={14} className="text-brand-gold" /> Dates: {lang === "tr" ? conferenceData.dateTr : conferenceData.date}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-surface px-4 py-2 border border-brand-border">
                <Globe size={14} className="text-brand-gold" /> Format: {t.common.hybrid}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green-50 px-4 py-2 border border-green-200 text-green-700 font-bold">
                {t.registrationPage.noFeeTag}
              </span>
            </div>
          </MotionDiv>

          {/* Registration Inclusions */}
          <MotionDiv variants={fadeUpVariant} className="bg-white border border-brand-border p-8 md:p-12 shadow-soft">
            <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-[0.2em] block mb-2">
              {t.registrationPage.inclusionsEyebrow}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-brand-black mb-6 border-b border-brand-border pb-4">
              {t.registrationPage.inclusionsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-brand-surface/60 border border-brand-border/60 rounded-sm">
                  <CheckCircle2 size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-sm font-light text-brand-black leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Visa & International Assistance */}
          <MotionDiv variants={fadeUpVariant} className="bg-brand-black text-white p-8 md:p-12 border border-brand-gold/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-girih-gold opacity-25 pointer-events-none" aria-hidden />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-[0.2em]">
                  <Globe size={16} /> {t.registrationPage.visaEyebrow}
                </div>
                <h3 className="text-2xl font-display font-medium text-white">{t.registrationPage.visaTitle}</h3>
                <p className="text-brand-gray text-sm font-light max-w-2xl leading-relaxed">
                  {t.registrationPage.visaDesc}
                </p>
              </div>
              <Link href={`/${lang}/contact`} prefetch={false} className="shrink-0">
                <Button variant="gold" className="font-bold whitespace-nowrap flex items-center gap-2">
                  <Mail size={16} /> {t.registrationPage.contactBtn}
                </Button>
              </Link>
            </div>
          </MotionDiv>

          {/* FAQs */}
          <MotionDiv variants={fadeUpVariant}>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-8 text-brand-black border-b border-brand-border pb-4">
              {t.registrationPage.faqTitle}
            </h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-white border border-brand-border rounded-sm open:shadow-premium transition-shadow">
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 font-semibold text-brand-black">
                    {faq.q}
                    <span className="text-brand-gold text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="px-6 pb-6 text-brand-blackLight font-light leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
