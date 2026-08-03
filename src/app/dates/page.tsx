import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"
import { importantDates } from "@/data/dates"
import { Calendar, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Important Dates",
  description: "Submission, notification, camera-ready, and registration deadlines.",
}

export default function Dates() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Deadlines"
        title="Important Dates"
        description="Mark your calendars. All deadlines are 11:59 PM Anywhere on Earth (AoE)."
      />

      <Section className="py-20">
        <div className="max-w-3xl mx-auto">
          {importantDates.map((date, i) => (
            <MotionDiv key={i} variants={fadeUpVariant} className={cn(
              "flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 p-8 mb-6 rounded-sm border",
              date.passed ? "bg-brand-surface border-transparent opacity-60" : "bg-white border-brand-border shadow-sm hover:shadow-premium transition-shadow"
            )}>
              <div className="flex items-center gap-4 text-center sm:text-left w-full sm:w-auto">
                <div className={cn(
                  "w-12 h-12 rounded-full flex justify-center items-center shrink-0",
                  date.passed ? "bg-brand-border/60 text-brand-blackLight" : "bg-brand-goldLight text-brand-gold"
                )}>
                  {date.passed ? <CheckCircle2 size={24} /> : <Calendar size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-brand-black">{date.event}</h3>
                  {date.passed && <span className="text-xs font-semibold uppercase tracking-wider text-brand-blackLight mt-1 block">Completed</span>}
                </div>
              </div>
              <div className="w-full sm:w-auto text-center sm:text-right border-t sm:border-t-0 border-brand-border pt-4 sm:pt-0 mt-4 sm:mt-0">
                <p className="text-lg font-medium text-brand-black whitespace-nowrap">{date.date}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </Section>
    </div>
  )
}
