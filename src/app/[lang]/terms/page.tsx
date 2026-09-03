import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing registration and participation in the conference.",
}

export default async function Terms({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10">
      <PageHeader eyebrow={t.termsPage.eyebrow} title={t.termsPage.title} />
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-brand-blackLight font-light leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-brand-blackLight/70">{t.termsPage.lastUpdated}</p>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.termsPage.sec1Title}</h2>
            <p>{t.termsPage.sec1Desc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.termsPage.sec2Title}</h2>
            <p>{t.termsPage.sec2Desc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">{t.termsPage.sec3Title}</h2>
            <p>
              {t.termsPage.sec3Desc}{" "}
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
