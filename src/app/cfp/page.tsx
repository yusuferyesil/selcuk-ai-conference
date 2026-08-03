import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Button } from "@/components/ui/Button"
import { importantDates } from "@/data/dates"
import { conferenceData } from "@/data/conference"
import { Download, BookOpen, Calendar, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Submit your original research across six interdisciplinary tracks at ICAID 2026.",
}

export default function CFP() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Participate"
        title="Call for Papers"
        description="We invite original, unpublished research papers across six major interdisciplinary AI domains."
      >
        <Button size="lg" className="shadow-gold font-bold">Submit via CMT</Button>
      </PageHeader>

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto">
          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black border-b border-brand-border pb-4">Submission Guidelines</h2>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed mb-6">
              All submitted papers must be formatted according to the IEEE double-column conference proceedings template. Submissions must be entirely original and not concurrently under review at another conference or journal. Full papers should be 6–8 pages including references; short papers should be 4 pages.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="outline" className="flex items-center gap-2"><Download size={16} /> LaTeX Template</Button>
              <Button variant="outline" className="flex items-center gap-2"><Download size={16} /> Word Template</Button>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-2 text-brand-black">Conference Tracks & Topics</h2>
            <p className="text-sm font-mono text-brand-gold uppercase tracking-[0.2em] mb-8 pb-4 border-b border-brand-border">Six Disciplinary Domains</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferenceData.tracks.map((track) => (
                <div key={track.id} className="bg-white border border-brand-border p-7 relative rounded-sm shadow-soft">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-border">
                    <h3 className="text-xl font-display font-semibold text-brand-black">{track.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-black bg-brand-goldLight border border-brand-gold/40 px-2 py-0.5 font-bold">
                      {track.titleTr}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-sm text-brand-blackLight font-light">
                    {track.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-gold font-bold text-xs mt-0.5">✦</span>
                        <span>
                          <strong className="font-medium text-brand-black block">{topic.name}</strong>
                          <span className="text-xs text-brand-blackLight/70 font-mono">{topic.nameTr}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black border-b border-brand-border pb-4">Publication</h2>
            <div className="flex items-start gap-4 bg-brand-surface border border-brand-border p-8 rounded-sm">
              <BookOpen className="text-brand-accent shrink-0 mt-1" size={28} />
              <p className="text-lg text-brand-blackLight font-light leading-relaxed">
                All accepted and presented papers will be published in the official conference proceedings. Selected high-quality papers will be invited for extended versions in partner peer-reviewed journals. Details on indexing will be announced on this page.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-medium mb-8 text-brand-black border-b border-brand-border pb-4">Key Deadlines</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {importantDates.map((d) => (
                <div key={d.event} className="flex items-center gap-4 p-5 bg-brand-surface border border-brand-border rounded-sm">
                  <Calendar size={20} className="text-brand-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-black text-sm">{d.event}</p>
                    <p className="text-brand-blackLight text-sm font-light">{d.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
