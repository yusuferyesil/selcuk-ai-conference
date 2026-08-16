import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { ContactForm } from "@/components/ContactForm"
import { conferenceData } from "@/data/conference"
import { MapPin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the organizing committee about submissions, registration, or sponsorship.",
}

export default function Contact() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        description="Have questions regarding submissions, registration, or sponsorship? Our organizing committee is here to help."
      />

      <Section className="py-20">
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-medium text-brand-black mb-8">Get in Touch</h2>
            <ContactForm />
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="bg-brand-surface p-10 rounded-sm shadow-premium border border-brand-border flex flex-col justify-center">
            <h2 className="text-2xl font-display font-medium text-brand-black mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accentLight text-brand-accent rounded-sm flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-black mb-1">General Inquiries & Secretariat</h3>
                  <a href={`mailto:${conferenceData.email}`} className="text-brand-blackLight hover:text-brand-accent transition-colors font-light break-all">{conferenceData.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accentLight text-brand-accent rounded-sm flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-black mb-1">Mailing Address</h3>
                  <address className="not-italic text-brand-blackLight font-light leading-relaxed">
                    {conferenceData.edition} Organizing Secretariat<br />
                    Sultan Alparslan Cultural Center (SAKM)<br />
                    Selçuk University, Alaeddin Keykubat Campus<br />
                    42130 Selçuklu, Konya / Türkiye
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
