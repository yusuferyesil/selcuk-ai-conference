import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { Sparkles } from "lucide-react"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Events",
  description: `Special events, panels, and workshops at ${conferenceData.edition}.`,
}

export default async function Events({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.eventsPage.eyebrow}
        title={t.eventsPage.title}
        description={t.eventsPage.desc}
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center py-12">
          <MotionDiv
            variants={fadeUpVariant}
            className="bg-white border border-brand-border p-10 md:p-16 shadow-soft flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 border border-brand-gold/40 bg-brand-goldLight mb-6 text-brand-gold animate-pulse">
              <Sparkles size={24} />
            </div>
            
            <h2 className="text-2xl font-display font-semibold text-brand-black mb-3">
              {t.eventsPage.upcomingTitle}
            </h2>
            
            <p className="text-brand-blackLight font-light leading-relaxed text-base max-w-lg mx-auto">
              {t.eventsPage.upcomingDesc}
            </p>
          </MotionDiv>
        </div>
      </Section>
    </div>
  )
}
