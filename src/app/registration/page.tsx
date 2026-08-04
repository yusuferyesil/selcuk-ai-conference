import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Button } from "@/components/ui/Button"
import { conferenceData } from "@/data/conference"
import { Check, Globe, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Registration & Fees",
  description: "Registration fees, deadlines, international participant policies, and payment information.",
}

const feeTiers = [
  {
    type: "Early Registration",
    subtitle: "Payment by September 15, 2026",
    fee: "₺2,000",
    lateFee: "₺3,000 after Sept 15",
    badge: "Early Bird",
    featured: true,
    description: "Standard rate for domestic academic and professional attendees registering before September 15, 2026.",
  },
  {
    type: "Late Registration",
    subtitle: "Payment by October 10, 2026",
    fee: "₺3,000",
    lateFee: "Deadline: October 10, 2026",
    badge: "Late / On-Site",
    featured: false,
    description: "Standard rate for domestic academic and professional attendees registering between Sept 16 and Oct 10, 2026.",
  },
  {
    type: "International Participants",
    subtitle: "Foreign Attendees & Researchers",
    fee: "Free of Charge",
    lateFee: "Registration required",
    badge: "Complimentary",
    featured: false,
    isFree: true,
    description: "Full registration waiver for all international participants, speakers, and foreign delegates attending ICAAD 2026.",
  },
];

const faqs = [
  {
    q: "What are the key payment deadlines?",
    a: "Early registration fee payment deadline is September 15, 2026 (₺2,000). Late registration fee payment deadline is October 10, 2026 (₺3,000).",
  },
  {
    q: "Are international participants required to pay registration fees?",
    a: "No. Registration is completely free of charge for all international participants, foreign authors, and overseas delegates.",
  },
  {
    q: "What does the registration fee include?",
    a: "Full access to all keynote and technical paper sessions, digital conference proceedings, gala dinner, welcome reception, and daily coffee/lunch catering for all conference days.",
  },
  {
    q: "Do you provide visa invitation letters for international attendees?",
    a: "Yes. Once your registration is completed, you can request an official visa invitation letter issued by Selçuk University.",
  },
];

export default function Registration() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Participate"
        title="Registration & Fees"
        description={`Secure your place at ${conferenceData.edition}. Early registration payment deadline is September 15, 2026.`}
      >
        <Button size="lg" className="shadow-gold text-base font-bold">Proceed to Payment & Registration Portal</Button>
      </PageHeader>

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">
          {/* Fee cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {feeTiers.map((fee, i) => (
              <MotionDiv
                key={i}
                variants={fadeUpVariant}
                className={`border p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  fee.featured
                    ? 'border-2 border-brand-gold bg-white shadow-gold mt-0 md:-mt-4 z-10'
                    : 'border-brand-border bg-white shadow-soft hover:border-brand-gold/60'
                }`}
              >
                {fee.badge && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                    fee.featured ? 'bg-brand-gold text-brand-black shadow-sm' : 'bg-brand-black text-white'
                  }`}>
                    {fee.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-display font-semibold text-center text-brand-black mt-2 mb-1">{fee.type}</h3>
                  <p className="text-xs font-mono text-center text-brand-blackLight mb-6">{fee.subtitle}</p>

                  <div className="text-center py-6 border-y border-brand-border mb-6 bg-brand-surface">
                    <span className={`text-4xl font-display font-bold block ${fee.isFree ? 'text-brand-gold' : 'text-brand-black'}`}>
                      {fee.fee}
                    </span>
                    <span className="text-xs font-mono text-brand-blackLight mt-2 block">{fee.lateFee}</span>
                  </div>

                  <p className="text-sm font-light text-brand-blackLight leading-relaxed mb-6">
                    {fee.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-gold shrink-0"/> Full access to all technical sessions</li>
                    <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-gold shrink-0"/> Conference proceedings publication</li>
                    <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-gold shrink-0"/> Welcome reception & catering</li>
                  </ul>
                </div>

                <Button className="w-full font-bold" variant={fee.featured ? 'default' : 'outline'}>
                  {fee.isFree ? 'Register for Free' : 'Select Tier'}
                </Button>
              </MotionDiv>
            ))}
          </div>

          {/* International participant highlights */}
          <MotionDiv variants={fadeUpVariant} className="bg-brand-black text-white p-8 md:p-10 border border-brand-gold/40 relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-girih-gold opacity-30 pointer-events-none" aria-hidden />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-[0.2em]">
                  <Globe size={16} /> International Delegates
                </div>
                <h3 className="text-2xl font-display font-medium text-white">Free Registration for International Attendees</h3>
                <p className="text-brand-gray text-sm font-light max-w-2xl">
                  ICAAD 2026 welcomes overseas researchers, foreign faculty, and international students free of registration charges to foster global collaboration.
                </p>
              </div>
              <Button variant="gold" className="shrink-0 font-bold">
                International Registration
              </Button>
            </div>
          </MotionDiv>

          {/* FAQs */}
          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-medium mb-8 text-brand-black border-b border-brand-border pb-4">Frequently Asked Questions</h2>
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
