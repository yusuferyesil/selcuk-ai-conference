import Link from "next/link"
import Image from "next/image"
import { conferenceData } from "@/data/conference"
import { allSpeakers } from "@/data/speakers"
import { importantDates } from "@/data/dates"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Countdown } from "@/components/ui/Countdown"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { ArrowRight, MapPin, FlaskConical, HeartPulse, Sprout, Scale, TrendingUp, Users, BookOpen, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

/* Eight-pointed Seljuk star — the site's signature mark */
function SeljukStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="1.5" />
      <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    </svg>
  )
}

const trackIcons: Record<string, any> = {
  engineering: FlaskConical,
  health: HeartPulse,
  agriculture: Sprout,
  law: Scale,
  economics: TrendingUp,
  "social-sciences": Users,
  "philosophy-sociology": BookOpen,
};

export default function Home() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-brand-bg">
        {/* Girih pattern (gold tones) fading down */}
        <div className="absolute inset-0 bg-girih pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
        {/* Subtle gold gradient band near top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" aria-hidden />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
            {/* Left: type */}
            <MotionDiv variants={staggerContainer} initial="hidden" animate="visible" className="lg:col-span-7">
              <MotionDiv variants={fadeUpVariant}>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-gold mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span>{conferenceData.date}</span>
                  <span className="text-brand-gold/50" aria-hidden>✦</span>
                  <span className="flex items-center gap-2 text-brand-blackLight">
                    <MapPin size={14} className="text-brand-gold" /> Konya, Türkiye
                  </span>
                </p>
              </MotionDiv>

              <MotionDiv variants={fadeUpVariant}>
                <h1 className="font-display font-medium text-brand-black tracking-tight leading-[1.06] text-[2.75rem] sm:text-6xl lg:text-7xl mb-6">
                  International Conference on AI Across Disciplines
                </h1>
              </MotionDiv>

              <MotionDiv variants={fadeUpVariant}>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blackLight mb-8">
                  Organized by {conferenceData.organizer}
                </p>
              </MotionDiv>

              <MotionDiv variants={fadeUpVariant}>
                <p className="text-lg md:text-xl text-brand-blackLight font-light leading-relaxed max-w-2xl mb-10">
                  A peer-reviewed forum where researchers in engineering, medicine, the social sciences, and law examine artificial intelligence together — its methods, its applications, and its consequences.
                </p>
              </MotionDiv>

              <MotionDiv variants={fadeUpVariant} className="mb-10">
                <Countdown targetDate={conferenceData.startDateISO} />
              </MotionDiv>

              <MotionDiv variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
                <Link href="/cfp">
                  <Button size="lg" className="w-full sm:w-auto">
                    Call for Papers
                  </Button>
                </Link>
                <Link href="/program">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Program
                  </Button>
                </Link>
              </MotionDiv>
            </MotionDiv>

            {/* Right: conference artwork & details card */}
            <MotionDiv
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative bg-white border border-brand-border shadow-soft overflow-hidden group">
                {/* Gold top bar on card */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

                {/* Artwork container */}
                <div className="relative overflow-hidden border-b border-brand-border w-full">
                  <Image
                    src="/images/poster.jpg"
                    alt="ICAAD Conference Artwork - Bridging Tradition & Artificial Intelligence"
                    width={800}
                    height={1100}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                <dl className="divide-y divide-brand-border bg-white">
                  {[
                    { dt: "Dates", dd: conferenceData.date },
                    { dt: "Venue", dd: "Selçuk University Congress Center, Konya" },
                    { dt: "Format", dd: "In person · keynotes, paper sessions, panels" },
                    { dt: "Proceedings", dd: "Peer-reviewed, published post-conference" },
                  ].map((row) => (
                    <div key={row.dt} className="grid grid-cols-[100px_1fr] gap-4 px-6 py-3.5">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold pt-0.5">{row.dt}</dt>
                      <dd className="text-sm text-brand-black leading-relaxed">{row.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ————— Facts strip ————— */}
      <div className="border-y border-brand-border bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-girih-gold opacity-50 pointer-events-none" aria-hidden />
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gold/20 relative z-10">
          {conferenceData.stats.map((stat) => (
            <div key={stat.label} className="py-7 px-4 text-center">
              <p className="text-3xl md:text-4xl font-display font-medium text-brand-gold">{stat.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gray mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ————— Overview ————— */}
      <Section id="overview" className="bg-brand-bg">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv variants={fadeUpVariant}>
            <SectionHeading
              eyebrow="About the conference"
              title="An interdisciplinary dialogue"
            />
            <p className="text-lg text-brand-blackLight leading-relaxed mb-6 font-light">
              {conferenceData.organizer} hosts the International Conference on AI Across Disciplines ({conferenceData.shortName}): a forum where researchers, practitioners, and policymakers present original work and examine it across disciplinary lines.
            </p>
            <p className="text-lg text-brand-blackLight leading-relaxed mb-8 font-light">
              Our aim is to connect theoretical advances with real-world applications — the technological frontiers of AI alongside its societal implications.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:gap-4 transition-all text-sm uppercase tracking-wide">
              About our vision <ArrowRight size={16} />
            </Link>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-brand-border relative">
              <Image
                src="/images/campus.jpg"
                alt="Selçuk University campus"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 inset-x-6 top-6 border border-brand-gold/50 -z-10" aria-hidden />
          </MotionDiv>
        </div>
      </Section>

      {/* ————— Tracks ————— */}
      <Section id="tracks" className="bg-brand-surface border-y border-brand-border">
        <SectionHeading
          eyebrow="Research areas"
          title="Conference Topics"
          description="Submissions are reviewed across seven interdisciplinary domains, spanning engineering, medicine, agriculture, law, economics, social sciences, and philosophy & sociology."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceData.tracks.map((track, i) => {
            const Icon = trackIcons[track.id] || FlaskConical;
            const isLast = i === conferenceData.tracks.length - 1;
            return (
              <MotionDiv
                key={track.id}
                variants={fadeUpVariant}
                className={cn(
                  "relative bg-white border border-brand-border p-8 group hover:shadow-soft transition-all duration-300 flex flex-col justify-between",
                  isLast && "md:col-span-2 lg:col-span-1 lg:col-start-2"
                )}
              >
                <span className="absolute top-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500" aria-hidden />
                <div>
                  <div className="flex items-center mb-6">
                    <Icon size={28} className="text-brand-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 leading-snug text-brand-black group-hover:text-brand-goldDark transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-brand-blackLight font-light leading-relaxed text-sm mb-6">
                    {track.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <ul className="space-y-1.5 text-xs text-brand-blackLight font-light">
                    {track.topics.slice(0, 3).map((t, idx) => (
                      <li key={idx} className="truncate">• {t.name}</li>
                    ))}
                    {track.topics.length > 3 && (
                      <li className="font-mono text-[10px] text-brand-gold font-semibold pt-1">+ {track.topics.length - 3} more subtopics</li>
                    )}
                  </ul>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </Section>

      {/* ————— Plenary & Keynote Speakers ————— */}
      <Section id="speakers" className="bg-brand-bg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading
            eyebrow="Distinguished lectures"
            title="Plenary & Keynote Speakers"
            description="Leading researchers and industry pioneers presenting at ICAAD 2026."
          />
          <MotionDiv variants={fadeUpVariant} className="shrink-0">
            <Link href="/keynotes">
              <Button variant="outline">All speakers</Button>
            </Link>
          </MotionDiv>
        </div>

        {allSpeakers.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10">
            {allSpeakers.map((speaker) => (
              <MotionDiv key={speaker.id} variants={fadeUpVariant}>
                <Link href="/keynotes" className="group block">
                  <div className="aspect-[3/4] mb-6 overflow-hidden relative border border-brand-border">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Gold bottom overlay on hover */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
                  </div>
                  <h3 className="text-xl font-display font-medium text-brand-black mb-1 group-hover:text-brand-gold transition-colors">{speaker.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-gold mb-2">{speaker.role}</p>
                  <p className="text-brand-blackLight text-sm font-light">{speaker.affiliation}</p>
                </Link>
              </MotionDiv>
            ))}
          </div>
        ) : (
          <MotionDiv
            variants={fadeUpVariant}
            className="bg-white border border-brand-border p-10 md:p-14 text-center max-w-3xl mx-auto shadow-soft"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 border border-brand-gold/40 bg-brand-goldLight mb-6 text-brand-gold">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold text-brand-black mb-3">
              Speakers Will Be Announced Soon
            </h3>
            <p className="text-brand-blackLight font-light text-base max-w-xl mx-auto leading-relaxed mb-8">
              Distinguished plenary, keynote, and invited scholars from international academia and industry leaders are currently being finalized.
            </p>
            <Link href="/keynotes">
              <Button variant="outline" size="sm">
                View Speaker Information
              </Button>
            </Link>
          </MotionDiv>
        )}
      </Section>

      {/* ————— Important dates ————— */}
      <Section id="dates" className="bg-brand-surface border-y border-brand-border">
        <SectionHeading
          eyebrow="Deadlines"
          title="Important dates"
          description="All deadlines are 11:59 PM Anywhere on Earth."
          className="mb-16"
        />

        <ol className="max-w-3xl divide-y divide-brand-border border-y border-brand-border">
          {importantDates.map((date, i) => (
            <MotionDiv
              key={i}
              variants={fadeUpVariant}
              className={cn(
                "grid sm:grid-cols-[220px_1fr] gap-x-8 gap-y-1 py-6 items-baseline",
                date.passed && "opacity-50"
              )}
            >
              <span className={cn("font-mono text-sm tabular-nums", date.passed ? "text-brand-blackLight line-through" : "text-brand-gold")}>
                {date.date}
              </span>
              <span className="text-lg font-display font-medium text-brand-black">
                {date.event}
                {date.passed && <span className="ml-3 font-mono font-normal text-[10px] uppercase tracking-[0.2em] text-brand-blackLight no-underline">closed</span>}
              </span>
            </MotionDiv>
          ))}
        </ol>
      </Section>

      {/* ————— Collaborators & Partners ————— */}
      <Section id="collaborators" className="bg-brand-bg">
        <SectionHeading
          eyebrow="Partnership & Support"
          title="Organizing & Collaborating Institutions"
          description={`ICAAD 2026 is organized by ${conferenceData.organizer} in academic and technological partnership with leading Turkish research and development institutions.`}
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Host Institution */}
          <MotionDiv
            variants={fadeUpVariant}
            className="bg-white border-2 border-brand-gold p-8 md:p-10 relative group hover:shadow-gold transition-all duration-300 flex flex-col justify-between"
          >
            {/* Gold top bar */}
            <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border">
                <div className="relative h-16 w-full overflow-hidden flex items-center">
                  <Image
                    src={conferenceData.hostInstitution.logo}
                    alt={`${conferenceData.hostInstitution.name} logo`}
                    width={240}
                    height={70}
                    className="object-contain object-left max-h-14 w-auto"
                  />
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-black bg-brand-gold px-3 py-1 font-bold inline-block mb-4">
                {conferenceData.hostInstitution.role}
              </span>
              <h3 className="text-2xl font-display font-semibold text-brand-black mb-1">
                {conferenceData.hostInstitution.name}
              </h3>
              <p className="font-mono text-xs text-brand-blackLight/80 mb-4">{conferenceData.hostInstitution.fullName}</p>
              <p className="text-brand-blackLight font-light text-sm leading-relaxed mb-6">
                {conferenceData.hostInstitution.description}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs font-mono">
              <span className="text-brand-blackLight">Host Institution</span>
              <a
                href={conferenceData.hostInstitution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-goldDark font-medium flex items-center gap-1 transition-colors"
              >
                Official Website <ArrowRight size={13} />
              </a>
            </div>
          </MotionDiv>

          {/* Collaborating Partners: Küme Vakfı & TİKA */}
          {conferenceData.collaborators.map((partner) => (
            <MotionDiv
              key={partner.id}
              variants={fadeUpVariant}
              className="bg-white border border-brand-border p-8 md:p-10 relative group hover:shadow-soft hover:border-brand-gold transition-all duration-300 flex flex-col justify-between"
            >
              <span className="absolute top-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500" aria-hidden />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border">
                  <div className="relative h-16 w-full overflow-hidden flex items-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={240}
                      height={70}
                      className="object-contain object-left max-h-14 w-auto"
                    />
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-black bg-brand-goldLight border border-brand-gold/40 px-3 py-1 font-semibold inline-block mb-4">
                  {partner.role}
                </span>
                <h3 className="text-2xl font-display font-semibold text-brand-black mb-1 group-hover:text-brand-goldDark transition-colors">
                  {partner.name}
                </h3>
                <p className="font-mono text-xs text-brand-blackLight/80 mb-4">{partner.fullName}</p>
                <p className="text-brand-blackLight font-light text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs font-mono">
                <span className="text-brand-blackLight">ICAAD 2026 Partner</span>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-goldDark font-medium flex items-center gap-1 transition-colors"
                >
                  Official Website <ArrowRight size={13} />
                </a>
              </div>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* ————— CTA ————— */}
      {/*
        * Decorative absolute elements are direct children of <section> so they
        * position relative to the section itself, not the inner content container.
        */}
      <section className="bg-brand-black relative overflow-hidden py-20 md:py-32">
        {/* Girih lattice overlay */}
        <div className="absolute inset-0 bg-girih-gold opacity-60 pointer-events-none" aria-hidden />
        {/* Gold top and bottom border lines — safe: on section, not container */}
        <div className="absolute top-0 inset-x-0 h-px bg-brand-gold/40" aria-hidden />
        <div className="absolute bottom-0 inset-x-0 h-px bg-brand-gold/40" aria-hidden />

        <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
          <MotionDiv variants={staggerContainer} className="max-w-2xl">
            <SectionHeading
              dark
              eyebrow="Registration"
              title="Join us in Konya this October"
              description="Early bird registration closes on October 10, 2026. Each accepted paper requires at least one full registration."
              className="max-w-none"
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/registration">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  Register to attend
                </Button>
              </Link>
              <Link href="/venue">
                <Button size="lg" className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/60">
                  Venue &amp; travel
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  )
}
