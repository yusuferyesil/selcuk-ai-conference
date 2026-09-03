import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Calendar, Clock, FileText, Bell, LayoutGrid, GraduationCap } from "lucide-react"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Program",
  description: "The ICAAD 2026 conference program will be announced following the notification of acceptance.",
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

export default async function Program({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  const expectations = [
    {
      icon: Calendar,
      label: t.programPage.item1Label,
      desc: t.programPage.item1Desc,
    },
    {
      icon: FileText,
      label: t.programPage.item2Label,
      desc: t.programPage.item2Desc,
    },
    {
      icon: LayoutGrid,
      label: t.programPage.item3Label,
      desc: t.programPage.item3Desc,
    },
    {
      icon: Bell,
      label: t.programPage.item4Label,
      desc: t.programPage.item4Desc,
    },
    {
      icon: GraduationCap,
      label: t.programPage.item5Label,
      desc: t.programPage.item5Desc,
    },
  ];

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow={t.programPage.eyebrow}
        title={t.programPage.title}
        description={t.programPage.desc}
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
                  {t.programPage.comingSoon}
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black mb-6 leading-snug">
                  {t.programPage.programTitle}
                </h2>
                <p className="text-brand-blackLight font-light leading-relaxed text-lg max-w-xl mx-auto">
                  {t.programPage.programDesc}
                </p>

                {/* Conference dates reminder */}
                <div className="mt-10 inline-flex items-center gap-3 bg-brand-surface border border-brand-border px-6 py-3">
                  <Clock size={16} className="text-brand-gold" />
                  <span className="font-mono text-sm text-brand-black">
                    {getLocalizedText(conferenceData, lang, "date") || t.common.date} · {t.common.hybrid}
                  </span>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* What to expect */}
          <MotionDiv variants={fadeUpVariant}>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-brand-blackLight mb-6 border-b border-brand-border pb-3">
              {t.programPage.whatToExpect}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {expectations.map((item) => (
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
              <span className="font-semibold text-brand-black">{t.programPage.stayTunedTitle}</span>{" "}
              {t.programPage.stayTunedDesc}
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
