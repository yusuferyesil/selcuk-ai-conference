import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { scheduleData } from "@/data/schedule"
import { Clock, MapPin, User } from "lucide-react"

export default function Program() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Conference Program</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed">
            A comprehensive schedule of keynotes, paper presentations, and networking events.
          </p>
        </MotionDiv>
      </Section>
      
      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-4xl mx-auto">
          {scheduleData.map((dayPlan, i) => (
            <div key={i} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-display font-bold mb-8 text-brand-black border-l-4 border-brand-accent pl-4 py-1 bg-brand-surface">{dayPlan.day}</h2>
              <div className="space-y-4">
                {dayPlan.events.map((event, j) => (
                  <MotionDiv key={j} variants={fadeUpVariant} className="flex flex-col md:flex-row p-6 bg-white border border-border rounded-sm shadow-sm gap-6">
                    <div className="md:w-48 shrink-0 flex items-start text-brand-black font-medium gap-2">
                      <Clock size={18} className="text-brand-accent mt-0.5" />
                      {event.time}
                    </div>
                    <div className="flex-grow border-l-2 border-brand-surface pl-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1 inline-block bg-brand-accent/10 px-2 py-0.5 rounded-sm">{event.type}</span>
                      <h3 className="text-xl font-bold text-brand-black mb-2">{event.title}</h3>
                      <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-brand-blackLight font-light">
                        {event.speaker && (
                          <div className="flex items-center gap-1.5 border-r border-border pr-4">
                            <User size={14} /> {event.speaker}
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} /> {event.location}
                          </div>
                        )}
                      </div>
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
