import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { Sparkles, Calendar, CheckCircle2, Globe, FileText, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Registration",
  description: `Registration information, policies, and participation details for ${conferenceData.edition}.`,
}

const inclusionList = [
  "Access to all oral and poster presentation sessions across tracks",
  "Access to all Plenary and Keynote lecture sessions",
  "Access to the dedicated Undergraduate Student Session",
  "Publication of presented papers in abstract book",
  "Official Certificate of Participation and Presentation",
  "Conference materials, program booklet, and digital access materials",
  "Coffee breaks and networking receptions during the conference",
];

const registrationFaqs = [
  {
    q: "Is participation free of charge?",
    a: "Yes. Attendance at ICAAD 2026 is completely free for all participants — researchers, practitioners, students, and academic listeners — with no registration fee required.",
  },
  {
    q: "Can undergraduate students participate?",
    a: "Yes. ICAAD 2026 features a dedicated Undergraduate Student Session where bachelor's degree students can present their research projects and engage with researchers across all disciplines. Undergraduate participation is also free of charge.",
  },
  {
    q: "Is registration required for paper presentation?",
    a: "Yes. For every presented paper to be included in the conference program and published abstract book, at least one author must register for the conference via the CMT system.",
  },
  {
    q: "Will international participants be supported with visa invitation letters?",
    a: "Yes. Authors and participants traveling from abroad can request an official visa invitation letter issued by Selçuk University after their submission or participation is confirmed.",
  },
  {
    q: "Can I attend the conference as a listener / non-author?",
    a: "Yes. Academic listeners, industry professionals, and students are welcome to register and participate in all keynote, panel, and technical sessions.",
  },
];

export default function Registration() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Participate"
        title="Registration"
        description={`Registration fee structures and the online registration portal for ${conferenceData.edition} will be announced soon.`}
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
              Open Access Conference
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-4">
              Free Participation for All
            </h2>
            <p className="text-brand-blackLight font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Attendance at {conferenceData.edition} is <strong className="text-brand-black">completely free of charge</strong> for all participants — researchers, students, practitioners, and academic listeners. Register via the CMT system to secure your place.
            </p>

            <a
              href="https://cmt3.research.microsoft.com/ICAAD2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 bg-brand-gold text-brand-black text-sm font-bold tracking-wide transition-all duration-200 hover:bg-brand-goldDark shadow-gold mb-8"
            >
              Submit Paper via CMT
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-brand-blackLight">
              <span className="inline-flex items-center gap-1.5 bg-brand-surface px-4 py-2 border border-brand-border">
                <Calendar size={14} className="text-brand-gold" /> Conference Dates: {conferenceData.date}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-surface px-4 py-2 border border-brand-border">
                <Globe size={14} className="text-brand-gold" /> Location: Konya, Turkey
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green-50 px-4 py-2 border border-green-200 text-green-700 font-bold">
                ✓ No Registration Fee
              </span>
            </div>
          </MotionDiv>

          {/* Registration Inclusions */}
          <MotionDiv variants={fadeUpVariant} className="bg-white border border-brand-border p-8 md:p-12 shadow-soft">
            <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-[0.2em] block mb-2">
              Participant Inclusions
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-brand-black mb-6 border-b border-brand-border pb-4">
              Conference Registration Covers
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {inclusionList.map((item, idx) => (
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
                  <Globe size={16} /> International Delegates & Inquiries
                </div>
                <h3 className="text-2xl font-display font-medium text-white">Official Visa & Academic Invitation Letters</h3>
                <p className="text-brand-gray text-sm font-light max-w-2xl leading-relaxed">
                  International delegates requiring an official visa support or institutional invitation letter from Selçuk University can contact the conference secretariat directly.
                </p>
              </div>
              <Link href="/contact" className="shrink-0">
                <Button variant="gold" className="font-bold whitespace-nowrap flex items-center gap-2">
                  <Mail size={16} /> Contact Secretariat
                </Button>
              </Link>
            </div>
          </MotionDiv>

          {/* FAQs */}
          <MotionDiv variants={fadeUpVariant}>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-8 text-brand-black border-b border-brand-border pb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {registrationFaqs.map((faq) => (
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
