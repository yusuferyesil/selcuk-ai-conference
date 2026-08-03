import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { conferenceData } from "@/data/conference"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the conference organizers collect and use personal data.",
}

export default function Privacy() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-brand-blackLight font-light leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-brand-blackLight/70">Last updated: July 2026 — this is placeholder text; replace it with your institution&apos;s approved policy.</p>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">Data We Collect</h2>
            <p>When you register for {conferenceData.edition} or submit a paper, we collect the personal information necessary to organize the conference: your name, affiliation, e-mail address, and payment details processed through our registration provider.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">How We Use Your Data</h2>
            <p>Your data is used solely for conference administration: managing submissions and peer review, issuing registration confirmations and receipts, producing the participant list and name badges, and sending conference-related announcements. We do not sell or share your data with third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">Your Rights</h2>
            <p>In accordance with applicable data protection law (including KVKK and, where relevant, GDPR), you may request access to, correction of, or deletion of your personal data at any time by contacting <a href={`mailto:${conferenceData.email}`} className="text-brand-black font-medium hover:text-brand-accent transition-colors">{conferenceData.email}</a>.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
