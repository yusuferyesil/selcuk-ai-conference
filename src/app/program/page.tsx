import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Calendar, Clock, FileText, Bell } from "lucide-react"
import { conferenceData } from "@/data/conference"

export const metadata: Metadata = {
  title: "Program",
  description: "The ICAAD 2026 conference program will be announced following the notification of acceptance.",
}

export default function Program() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Schedule"
        title="Conference Program"
        description="The detailed program will be published after the notification of acceptance."
      />

      <Section>
        <MotionDiv
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          {/* Main announcement card */}
          <MotionDiv variants={fadeUpVariant}>
            <div className="relative bg-white border border-brand-border shadow-soft overflow-hidden mb-12">
              {/* Gold top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

              <div className="p-10 md:p-14 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-brand-gold/40 bg-brand-goldLight mb-8">
                  <Calendar size={36} className="text-brand-gold" strokeWidth={1.5} />
                </div>

                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gold mb-4">
                  Coming Soon
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-6 leading-snug">
                  Program Will Be<br />Announced Soon
                </h2>
                <p className="text-brand-blackLight font-light leading-relaxed text-lg max-w-xl mx-auto">
                  The full three-day schedule of keynote lectures, paper presentation sessions, panels, and social events will be published following the notification of acceptance.
                </p>

                {/* Conference dates reminder */}
                <div className="mt-10 inline-flex items-center gap-3 bg-brand-surface border border-brand-border px-6 py-3">
                  <Clock size={16} className="text-brand-gold" />
                  <span className="font-mono text-sm text-brand-black">
                    {conferenceData.date} · {conferenceData.location.split(",")[0]}
                  </span>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* What to expect */}
          <MotionDiv variants={fadeUpVariant}>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-brand-blackLight mb-6 border-b border-brand-border pb-3">
              What to Expect
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Calendar,
                  label: "3 Conference Days",
                  desc: "October 23–25, 2026",
                },
                {
                  icon: FileText,
                  label: "Paper Sessions",
                  desc: "40+ oral presentation sessions across 7 disciplinary tracks",
                },
                {
                  icon: Bell,
                  label: "Keynote Lectures",
                  desc: "Invited talks by leading researchers and industry experts",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group bg-white border border-brand-border p-6 relative hover:border-brand-gold/60 transition-colors duration-300 shadow-soft"
                >
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-brand-gold group-hover:w-full transition-all duration-500" aria-hidden />
                  <item.icon size={22} className="text-brand-gold mb-4" strokeWidth={1.5} />
                  <p className="font-semibold text-brand-black text-sm mb-1">{item.label}</p>
                  <p className="text-brand-blackLight font-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Notification note */}
          <MotionDiv variants={fadeUpVariant}>
            <div className="border-l-4 border-brand-gold bg-brand-goldLight/40 px-6 py-5 text-sm text-brand-blackLight font-light leading-relaxed">
              <span className="font-semibold text-brand-black">Stay tuned.</span>{" "}
              The detailed session schedule, room assignments, and presenter information will be made available on this page as soon as the review process is complete. Authors will be notified of acceptance via the submission system.
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
