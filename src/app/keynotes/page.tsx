import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { keynoteSpeakers } from "@/data/speakers"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Keynote Speakers",
  description: "Invited keynote speakers at ICAID 2026.",
}

export default function Keynotes() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Invited Talks"
        title="Keynote Speakers"
        description="Pioneering researchers and industry leaders presenting keynote lectures at ICAID 2026."
      />

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto space-y-16">
          {keynoteSpeakers.map((speaker) => (
            <MotionDiv
              key={speaker.id}
              variants={fadeUpVariant}
              className="grid md:grid-cols-12 gap-8 items-stretch bg-white border border-brand-border hover:border-brand-gold/60 shadow-soft transition-all duration-300 p-6 md:p-10 relative group overflow-hidden"
            >
              {/* Gold accent top bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

              <div className="md:col-span-4 relative overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[380px] border border-brand-border">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.25em] mb-1 inline-block font-semibold">
                    Keynote Speaker
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-1">{speaker.name}</h2>
                  <p className="text-base text-brand-goldDark font-semibold mb-1">{speaker.role}</p>
                  <p className="text-xs font-mono text-brand-blackLight uppercase tracking-wider mb-6">{speaker.affiliation}</p>

                  <div className="bg-brand-surface p-6 mb-6 border-l-4 border-brand-gold border-y border-r border-brand-border">
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold mb-1">Keynote Lecture Topic</h3>
                    <p className="text-xl font-display font-medium text-brand-black">{speaker.topic}</p>
                  </div>

                  <p className="text-brand-blackLight font-light leading-relaxed text-base mb-6">
                    {speaker.bio}
                  </p>
                </div>

                {speaker.link && (
                  <div className="pt-4 border-t border-brand-border">
                    <a
                      href={speaker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-goldDark transition-colors font-mono"
                    >
                      View Profile / Academic Record <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>
    </div>
  )
}
