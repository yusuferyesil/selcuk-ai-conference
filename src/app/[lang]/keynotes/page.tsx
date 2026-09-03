import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { speakerCategories } from "@/data/speakers"
import { ExternalLink, Sparkles } from "lucide-react"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Speakers",
  description: "Plenary and Keynote speakers presenting at ICAAD 2026.",
}

export default async function Keynotes({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.keynotesPage.eyebrow}
        title={t.keynotesPage.title}
        description={t.keynotesPage.desc}
      />

      <Section>
        <div className="max-w-6xl mx-auto space-y-24">
          {speakerCategories.map((cat, idx) => {
            const catEyebrow = cat.id === "plenary" ? t.keynotesPage.plenaryEyebrow : t.keynotesPage.keynoteEyebrow;
            const catTitle = cat.id === "plenary" ? t.keynotesPage.plenaryTitle : t.keynotesPage.keynoteTitle;
            const catDesc = cat.id === "plenary" ? t.keynotesPage.plenaryDesc : t.keynotesPage.keynoteDesc;

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                {/* Group Category Header */}
                <div className="border-b border-brand-border pb-5 mb-10">
                  <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block mb-1 font-semibold">
                    0{idx + 1}. {catEyebrow}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black">
                    {catTitle}
                  </h2>
                  <p className="text-brand-blackLight font-light text-sm mt-2 max-w-2xl">
                    {catDesc}
                  </p>
                </div>

                {/* Group Speakers List */}
                {cat.speakers.length > 0 ? (
                  <MotionDiv variants={staggerContainer} className="space-y-12">
                    {cat.speakers.map((speaker) => (
                      <MotionDiv
                        key={speaker.id}
                        variants={fadeUpVariant}
                        className="grid md:grid-cols-12 gap-8 items-stretch bg-white border border-brand-border hover:border-brand-gold/60 shadow-soft transition-all duration-300 p-6 md:p-10 relative group overflow-hidden"
                      >
                        {/* Gold accent top bar */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

                        <div className="md:col-span-4 relative overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[380px] border border-brand-border self-start">
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
                              {catEyebrow}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-1">{speaker.name}</h3>
                            <p className="text-base text-brand-goldDark font-semibold mb-1">{speaker.role}</p>
                            <p className="text-xs font-mono text-brand-blackLight uppercase tracking-wider mb-4">{speaker.affiliation}</p>

                            {speaker.topic && (
                              <div className="mb-6 bg-brand-surface border-l-4 border-brand-gold py-4 px-5 rounded-r-md shadow-sm relative group/topic transition-all duration-300 hover:bg-brand-goldLight/30">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                                    {speaker.category === "plenary" ? t.keynotesPage.plenaryTopicLabel : t.keynotesPage.keynoteTopicLabel}
                                  </span>
                                </div>
                                <h4 className="font-display font-semibold text-brand-black text-lg md:text-xl leading-snug italic select-all">
                                  &ldquo;{speaker.topic}&rdquo;
                                </h4>
                              </div>
                            )}

                            <p className="text-brand-blackLight font-light leading-relaxed text-base mb-4">
                              {speaker.bio}
                            </p>

                            {speaker.fullBio && (
                              <div className="mb-2 border-t border-brand-border pt-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block mb-2">{t.keynotesPage.biography}</span>
                                <p className="text-brand-blackLight font-light leading-relaxed text-sm">{speaker.fullBio}</p>
                              </div>
                            )}
                          </div>

                          {speaker.link && (
                            <div className="pt-4 border-t border-brand-border">
                              <a
                                href={speaker.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-goldDark transition-colors font-mono"
                              >
                                {t.keynotesPage.viewProfile} <ExternalLink size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      </MotionDiv>
                    ))}
                  </MotionDiv>
                ) : (
                  /* Placeholder for groups whose speakers will be announced */
                  <div className="bg-white border border-brand-border p-8 md:p-12 text-center shadow-soft">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-brand-gold/40 bg-brand-goldLight mb-4 text-brand-gold">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-brand-black mb-2">
                      {catTitle} {t.keynotesPage.willBeAnnounced}
                    </h4>
                    <p className="text-sm font-light text-brand-blackLight max-w-lg mx-auto leading-relaxed">
                      {t.keynotesPage.announcedDesc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  )
}
