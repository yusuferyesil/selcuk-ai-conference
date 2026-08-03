import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { scheduleData } from "@/data/schedule"
import { Clock, MapPin, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Program",
  description: "The full three-day schedule of keynotes, paper sessions, panels, and social events.",
}

export default function Program() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow="Schedule"
        title="Conference Program"
        description="A comprehensive schedule of keynotes, paper presentations, and networking events. The detailed session program will be announced after the notification of acceptance."
      />

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-4xl mx-auto">
          {scheduleData.map((dayPlan, i) => (
            <div key={i} className="mb-16 last:mb-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8 border-l-4 border-brand-accent pl-4 py-2 bg-brand-surface">
                <h2 className="text-3xl font-display font-medium text-brand-black">{dayPlan.day}</h2>
                <span className="text-brand-blackLight font-light">{dayPlan.date}</span>
              </div>
              <div className="space-y-4">
                {dayPlan.events.map((event, j) => (
                  <MotionDiv key={j} variants={fadeUpVariant} className="flex flex-col md:flex-row p-6 bg-white border border-brand-border rounded-sm shadow-sm gap-6">
                    <div className="md:w-48 shrink-0 flex items-start text-brand-black font-medium gap-2 tabular-nums">
                      <Clock size={18} className="text-brand-accent mt-0.5 shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex-grow md:border-l-2 md:border-brand-surface md:pl-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-1 inline-block bg-brand-accentLight px-2 py-1">{event.type}</span>
                      <h3 className="text-xl font-semibold text-brand-black mb-2">{event.title}</h3>
                      {(event.speaker || event.location) && (
                        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 mt-4 text-sm text-brand-blackLight font-light">
                          {event.speaker && (
                            <div className="flex items-center gap-1.5 sm:border-r sm:border-brand-border sm:pr-4">
                              <User size={14} /> {event.speaker}
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} /> {event.location}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          ))}
        </MotionDiv>
      </Section>
    </div>
  )
}
