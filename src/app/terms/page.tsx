import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { conferenceData } from "@/data/conference"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing registration and participation in the conference.",
}

export default function Terms() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <Section className="py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-brand-blackLight font-light leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-brand-blackLight/70">Last updated: July 2026 — this is placeholder text; replace it with your institution&apos;s approved terms.</p>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">Registration</h2>
            <p>Registration for {conferenceData.edition} becomes binding once payment is confirmed. Each accepted paper must be covered by at least one full (non-student) registration. Registrations are personal but may be transferred to a substitute attendee upon written request.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">Cancellations & Refunds</h2>
            <p>Cancellations made before September 1, 2026 are refunded minus a 20% administrative fee. No refunds are issued after this date. The organizers reserve the right to alter the program, speakers, or venue where circumstances require.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-medium text-brand-black mb-4">Code of Conduct</h2>
            <p>All participants are expected to behave professionally and respectfully. Harassment or discrimination of any kind will not be tolerated and may result in removal from the conference without refund. Concerns may be reported confidentially to <a href={`mailto:${conferenceData.email}`} className="text-brand-black font-medium hover:text-brand-accent transition-colors">{conferenceData.email}</a>.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
