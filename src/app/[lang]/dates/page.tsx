import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"
import { importantDates } from "@/data/dates"
import { Calendar, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Important Dates",
  description: "Submission, notification, camera-ready, and registration deadlines.",
}

export default async function Dates({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  const completedLabel = {
    tr: "Tamamlandı",
    de: "Abgeschlossen",
    ru: "Завершено",
    ar: "مكتمل",
    en: "Completed"
  }[lang] || "Completed";

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.homeNew.datesEyebrow}
        title={t.nav.importantDates}
        description={t.homeNew.datesDesc}
      />

      <Section className="py-20">
        <div className="max-w-3xl mx-auto">
          {importantDates.map((date, i) => {
            const eventTitle = lang === "tr" && date.eventTr ? date.eventTr : (lang === "de" && date.eventDe ? date.eventDe : (lang === "ru" && date.eventRu ? date.eventRu : (lang === "ar" && date.eventAr ? date.eventAr : date.event)));
            const eventNote = lang === "tr" && date.noteTr ? date.noteTr : (lang === "de" && date.noteDe ? date.noteDe : (lang === "ru" && date.noteRu ? date.noteRu : (lang === "ar" && date.noteAr ? date.noteAr : date.note)));
            const eventDate = lang === "tr" && date.dateTr ? date.dateTr : (lang === "de" && date.dateDe ? date.dateDe : (lang === "ru" && date.dateRu ? date.dateRu : (lang === "ar" && date.dateAr ? date.dateAr : date.date)));

            return (
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
                    <h3 className="text-xl font-display font-medium text-brand-black">{eventTitle}</h3>
                    {eventNote && <p className="text-sm text-brand-blackLight font-light mt-1.5 max-w-xl leading-relaxed">{eventNote}</p>}
                    {date.passed && <span className="text-xs font-semibold uppercase tracking-wider text-brand-blackLight mt-2.5 block">{completedLabel}</span>}
                  </div>
                </div>
                <div className="w-full sm:w-auto text-center sm:text-right border-t sm:border-t-0 border-brand-border pt-4 sm:pt-0 mt-4 sm:mt-0">
                  <p className="text-lg font-medium text-brand-black whitespace-nowrap">{eventDate}</p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </Section>
    </div>
  )
}
