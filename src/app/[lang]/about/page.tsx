import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about the vision and objectives of ${conferenceData.edition}, organized by ${conferenceData.organizer}.`,
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

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        description={t.aboutPage.desc}
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <MotionDiv variants={fadeUpVariant}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold border-l-2 border-brand-gold pl-3 mb-5">
              {t.aboutPage.overviewEyebrow}
            </p>
            <h2 className="text-3xl font-display font-medium mb-6 text-brand-black leading-tight">
              {t.aboutPage.visionTitle}
            </h2>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed mb-6">
              {t.aboutPage.visionP1}
            </p>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed">
              {t.aboutPage.visionP2}
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeUpVariant} className="bg-brand-surface p-10 rounded-sm border border-brand-border shadow-premium">
            <h3 className="text-2xl font-display font-medium mb-6 text-brand-black">
              {t.aboutPage.objectivesTitle}
            </h3>
            <ul className="space-y-4 text-brand-blackLight font-light">
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">01.</span>
                <span>{t.aboutPage.obj1}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">02.</span>
                <span>{t.aboutPage.obj2}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">03.</span>
                <span>{t.aboutPage.obj3}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">04.</span>
                <span>{t.aboutPage.obj4}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-accent">05.</span>
                <span>{t.aboutPage.obj5}</span>
              </li>
            </ul>
          </MotionDiv>
        </div>
      </Section>

      <Section className="bg-brand-surface border-t border-brand-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-4 text-brand-black text-center">
            {t.aboutPage.collabTitle}
          </h2>
          <p className="text-center text-brand-blackLight font-light max-w-2xl mx-auto mb-14">
            {t.aboutPage.collabSub}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceData.collaborators.map((collab) => (
              <a
                key={collab.id}
                href={collab.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-brand-border hover:border-brand-gold hover:shadow-gold transition-all duration-300 flex flex-col items-center justify-center gap-4 p-8"
              >
                {/* Logo area — fixed height, centred */}
                <div className="flex items-center justify-center w-full h-20">
                  <Image
                    src={collab.logo}
                    alt={`${collab.name} logo`}
                    width={240}
                    height={80}
                    className="object-contain max-h-16 max-w-[200px] w-auto transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-brand-black text-center leading-tight group-hover:text-brand-gold transition-colors">
                  {getLocalizedText(collab, lang, "fullName") || getLocalizedText(collab, lang, "name")}
                </p>
              </a>
            ))}
          </div>
        </MotionDiv>
      </Section>
    </div>
  )
}
