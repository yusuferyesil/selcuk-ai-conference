import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about the vision and objectives of ${conferenceData.edition}, organized by ${conferenceData.organizer}.`,
}

export default function About() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow="ICAAD 2026"
        title="About the Conference"
        description="Advancing the frontiers of artificial intelligence through rigorous academic exchange and global collaboration."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <MotionDiv variants={fadeUpVariant}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold border-l-2 border-brand-gold pl-3 mb-5">Conference Overview</p>
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black leading-tight">Our Vision</h2>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed mb-6">
              The {conferenceData.name} ({conferenceData.shortName}), organized by {conferenceData.organizer} in collaboration with Küme Vakfı and TİKA, was established to provide a premier international forum for researchers, developers, and practitioners to present and discuss the most recent innovations, trends, results, and concerns in Artificial Intelligence.
            </p>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed">
              As AI increasingly permeates cognitive processes, industrial automation, and social structures, {conferenceData.shortName} aims to foster a multidisciplinary dialogue that ensures these technologies are developed responsibly, robustly, and transparently.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeUpVariant} className="bg-brand-surface p-10 rounded-sm border border-brand-border shadow-premium">
            <h3 className="text-2xl font-display font-medium mb-6 text-brand-black">Objectives</h3>
            <ul className="space-y-4 text-brand-blackLight font-light">
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">01.</span>
                <span>To facilitate cross-disciplinary collaboration among top-tier academic institutions and industry leaders.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">02.</span>
                <span>To publish high-impact peer-reviewed open access papers.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">03.</span>
                <span>To address critical ethical, technological, and alignment issues in emerging AI research.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">04.</span>
                <span>To connect early-career researchers with established leaders and collaborating organizations.</span>
              </li>
            </ul>
          </MotionDiv>
        </div>
      </Section>

      <Section className="bg-brand-surface border-t border-brand-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-4 text-brand-black text-center">Collaborating Organizations</h2>
          <p className="text-center text-brand-blackLight font-light max-w-2xl mx-auto mb-14">
            ICAAD 2026 is proud to partner with distinguished Turkish research and technical cooperation organizations:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {conferenceData.collaborators.map((collab) => (
              <div key={collab.id} className="bg-white border border-brand-border p-8 rounded-sm shadow-soft flex flex-col justify-between group hover:border-brand-accent transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border">
                    <div className="relative h-12 w-44 overflow-hidden flex items-center">
                      <Image
                        src={collab.logo}
                        alt={`${collab.name} logo`}
                        width={200}
                        height={50}
                        className="object-contain object-left max-h-10 w-auto"
                      />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent bg-brand-accentLight/60 px-2.5 py-1 font-semibold whitespace-nowrap">
                      {collab.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-brand-black mb-1 group-hover:text-brand-accent transition-colors">{collab.name}</h3>
                  <p className="font-mono text-xs text-brand-blackLight mb-4">{collab.fullName}</p>
                  <p className="text-sm font-light text-brand-blackLight leading-relaxed">{collab.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-border flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-blackLight">ICAAD 2026 Partner</span>
                  <a
                    href={collab.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>
      </Section>
    </div>
  )
}
