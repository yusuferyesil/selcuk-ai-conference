import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { importantDates } from "@/data/dates"
import { conferenceData } from "@/data/conference"
import { Info, BookOpen, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Submit your original research across nine interdisciplinary tracks at ICAAD 2026.",
}

function getLocalizedText<T extends Record<string, any>>(
  obj: T | undefined | null,
  lang: Locale,
  keyPrefix: string
): string {
  if (!obj) return "";
  const cap = lang.charAt(0).toUpperCase() + lang.slice(1);
  const langKey = `${keyPrefix}${cap}`;
  if (langKey in obj && Boolean(obj[langKey])) return String(obj[langKey]);
  return String(obj[keyPrefix] || "");
}

export default async function CFP({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.cfpPage.eyebrow}
        title={t.cfpPage.title}
        description={t.cfpPage.desc}
      >
        <a
          href="https://cmt3.research.microsoft.com/ICAAD2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-8 bg-brand-gold text-brand-black text-sm font-bold tracking-wide transition-all duration-200 hover:bg-brand-goldDark shadow-gold"
        >
          {t.cfpPage.submitButton}
        </a>
        <p className="mt-4 text-sm text-brand-blackLight font-light leading-relaxed max-w-2xl mx-auto">
          {t.cfpPage.cmtNote}
        </p>
      </PageHeader>

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto">
          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black border-b border-brand-border pb-4">
              {t.cfpPage.guidelinesTitle}
            </h2>
            <div className="space-y-6 mb-6">
              <div className="border-l-2 border-brand-gold pl-5">
                <p className="font-semibold text-brand-black mb-1">{t.cfpPage.oralTitle}</p>
                <p className="text-brand-blackLight font-light leading-relaxed text-base">
                  {t.cfpPage.oralDesc}
                </p>
              </div>
              <div className="border-l-2 border-brand-gold pl-5">
                <p className="font-semibold text-brand-black mb-1">{t.cfpPage.posterTitle}</p>
                <p className="text-brand-blackLight font-light leading-relaxed text-base">
                  {t.cfpPage.posterDesc}
                </p>
              </div>
              <div className="border-l-2 border-brand-gold pl-5">
                <p className="font-semibold text-brand-black mb-1">{t.cfpPage.ugTitle}</p>
                <p className="text-brand-blackLight font-light leading-relaxed text-base">
                  {t.cfpPage.ugDesc}
                </p>
              </div>
            </div>
            <div className="mt-8 bg-brand-surface border-l-4 border-brand-gold p-6 rounded-r-md">
              <div className="flex items-start gap-3 flex-col sm:flex-row">
                <Info className="text-brand-gold shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-display font-semibold text-brand-black text-base md:text-lg mb-1">
                    {t.cfpPage.noticeTitle}
                  </h3>
                  <p className="text-brand-blackLight font-light text-sm leading-relaxed">
                    {t.cfpPage.noticeContent}
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black border-b border-brand-border pb-4">
              {t.cfpPage.topicsTitle}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferenceData.tracks.map((track, idx) => {
                const isLast = idx === conferenceData.tracks.length - 1;
                const isCenteringNeeded = conferenceData.tracks.length % 3 === 1;
                const trackTitle = getLocalizedText(track, lang, "title");

                return (
                  <div
                    key={track.id}
                    className={cn(
                      "bg-white border border-brand-border p-7 relative rounded-sm shadow-soft",
                      isLast && isCenteringNeeded && "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    )}
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-border">
                      <h3 className="text-xl font-display font-semibold text-brand-black">{trackTitle}</h3>
                    </div>
                    <ul className="space-y-2.5 text-sm text-brand-blackLight font-light">
                      {track.topics.map((topic, i) => {
                        const topicName = getLocalizedText(topic, lang, "name");
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-gold font-bold text-xs mt-0.5">✦</span>
                            <span>
                              <strong className="font-medium text-brand-black block">{topicName}</strong>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black border-b border-brand-border pb-4">
              {t.cfpPage.policyTitle}
            </h2>
            <div className="flex items-start gap-4 bg-brand-surface border border-brand-border p-8 rounded-sm">
              <BookOpen className="text-brand-accent shrink-0 mt-1" size={28} />
              <div className="space-y-4">
                <p className="text-lg text-brand-blackLight font-light leading-relaxed">
                  <strong>{t.cfpPage.abstractBookPolicyTitle}</strong> {t.cfpPage.abstractBookPolicy}
                </p>
                <p className="text-lg text-brand-blackLight font-light leading-relaxed">
                  <strong>{t.cfpPage.proceedingsPolicyTitle}</strong> {t.cfpPage.proceedingsPolicy}
                </p>
                <p className="text-lg text-brand-blackLight font-light leading-relaxed">
                  <strong>{t.cfpPage.selcukPressPolicyTitle}</strong>{" "}
                  {t.cfpPage.selcukPressPolicy.replace(
                    "yayinevi.selcuk.edu.tr",
                    ""
                  ).split("(")[0]}
                  {t.cfpPage.selcukPressPolicy.includes("yayinevi.selcuk.edu.tr") && (
                    <>
                      {"("}
                      <a
                        href="https://yayinevi.selcuk.edu.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-accent underline underline-offset-2 hover:text-brand-accentDark transition-colors"
                      >
                        yayinevi.selcuk.edu.tr
                      </a>
                      {")"}
                      {t.cfpPage.selcukPressPolicy.split("yayinevi.selcuk.edu.tr)")[1]}
                    </>
                  )}
                </p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-medium mb-8 text-brand-black border-b border-brand-border pb-4">
              {t.cfpPage.deadlinesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {importantDates.map((d) => {
                const eventTitle = getLocalizedText(d, lang, "event");
                const eventDate = getLocalizedText(d, lang, "date");

                return (
                  <div key={d.event} className="flex items-center gap-4 p-5 bg-brand-surface border border-brand-border rounded-sm">
                    <Calendar size={20} className="text-brand-gold shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-black text-sm">{eventTitle}</p>
                      <p className="text-brand-blackLight text-sm font-light">{eventDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
