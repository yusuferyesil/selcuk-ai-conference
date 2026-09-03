import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the conference organizers collect and use personal data.",
}

export default async function Privacy({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10">
      <PageHeader eyebrow={t.privacyPage.eyebrow} title={t.privacyPage.title} />
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-brand-blackLight font-light leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-brand-blackLight/70">{t.privacyPage.lastUpdated}</p>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.privacyPage.sec1Title}</h2>
            <p>{t.privacyPage.sec1Desc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.privacyPage.sec2Title}</h2>
            <p>{t.privacyPage.sec2Desc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.privacyPage.sec3Title}</h2>
            <p>
              {t.privacyPage.sec3Desc}{" "}
              <a href={`mailto:${conferenceData.email}`} className="text-brand-black font-medium hover:text-brand-accent transition-colors">
                {conferenceData.email}
              </a>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
