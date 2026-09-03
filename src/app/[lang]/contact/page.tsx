import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { ContactForm } from "@/components/ContactForm"
import { conferenceData } from "@/data/conference"
import { MapPin, Mail } from "lucide-react"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the organizing committee about submissions, registration, or sponsorship.",
}

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
      />

      <Section className="py-20">
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-medium text-brand-black mb-8">{t.contactPage.formHeading}</h2>
            <ContactForm dict={t.contactPage} />
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="bg-brand-surface p-6 md:p-8 rounded-sm shadow-premium border border-brand-border h-fit">
            <h2 className="text-2xl font-display font-medium text-brand-black mb-6">{t.contactPage.detailsHeading}</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accentLight text-brand-accent rounded-sm flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <a href={`mailto:${conferenceData.email}`} className="text-brand-blackLight hover:text-brand-accent transition-colors font-light break-all">{conferenceData.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accentLight text-brand-accent rounded-sm flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <address className="not-italic text-brand-blackLight font-light leading-relaxed">
                    {t.contactPage.addressName}<br />
                    {t.contactPage.addressVenue}<br />
                    {t.contactPage.addressCampus}<br />
                    {t.contactPage.addressCity}
                  </address>
                </div>
              </div>
            </div>

          </MotionDiv>

        </MotionDiv>
      </Section>
    </div>
  )
}
