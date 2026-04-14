import Link from "next/link"
import { conferenceData } from "@/data/conference"
import { keynoteSpeakers } from "@/data/speakers"
import { importantDates } from "@/data/dates"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { ArrowRight, Calendar, MapPin, FlaskConical, HeartPulse, Scaling, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-bg text-brand-black">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accentLight/40 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <MotionDiv variants={staggerContainer} className="max-w-4xl">
            <MotionDiv variants={fadeUpVariant} className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-brand-accent text-brand-black rounded-sm bg-brand-accent">
                12–14 November
              </span>
              <span className="text-brand-blackLight text-sm flex items-center gap-2 font-medium tracking-wide">
                <MapPin size={16} className="text-brand-accent" /> Konya, Turkey
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeUpVariant}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8">
                International Conference on <br className="hidden md:block" />
                <span className="italic font-normal text-brand-accent">AI Across Disciplines</span>
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeUpVariant}>
              <p className="text-xl md:text-2xl text-brand-blackLight mb-12 max-w-3xl font-light leading-relaxed">
                A prestigious interdisciplinary forum uniting researchers and academics to explore the multifaceted impact of artificial intelligence across all scientific boundaries.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-6">
              <Link href="/cfp">
                <Button size="lg" className="text-lg w-full sm:w-auto shadow-premium bg-brand-black text-white hover:bg-brand-blackLight rounded-sm">
                  Call for Papers
                </Button>
              </Link>
              <Link href="/program">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto rounded-sm border-brand-border hover:bg-brand-surface hover:text-brand-black">
                  View Program
                </Button>
              </Link>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Overview Section */}
      <Section id="overview" className="bg-brand-surface border-y border-brand-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-brand-black">
              An Interdisciplinary Dialogue
            </h2>
            <div className="w-12 h-1 bg-brand-accent mb-8"></div>
            <p className="text-lg text-brand-blackLight leading-relaxed mb-6 font-light">
              We proudly host the International Conference on AI Across Disciplines (ICAID), creating an elite forum for researchers, practitioners, and leaders to present groundbreaking work and engage in high-level academic discourse.
            </p>
            <p className="text-lg text-brand-blackLight leading-relaxed mb-8 font-light">
              Our vision is to bridge the gap between abstract theoretical advancements and impactful real-world applications, exploring both the technological frontiers and the societal implications of AI globally.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-accent font-medium hover:gap-4 transition-all uppercase tracking-wide text-sm">
              Learn more about our vision <ArrowRight size={16} />
            </Link>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-border shadow-premium relative group">
              <img
                src="images/campus.jpg"
                alt="Conference Campus"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 grayscale hover:grayscale-0"
              />
            </div>
            {/* Elegant offset accent block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-grid-pattern-light border border-brand-border border-dashed -z-10" />
          </MotionDiv>
        </div>
      </Section>

      {/* Featured Tracks */}
      <Section id="tracks" className="bg-brand-bg">
        <MotionDiv variants={fadeUpVariant} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Conference Areas</h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto mb-8"></div>
          <p className="text-brand-blackLight text-lg font-light">
            We invite rigorous academic submissions across four primary interdisciplinary domains of artificial intelligence research.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FlaskConical, title: "Engineering & Natural Sciences", desc: "Core algorithms, data science, environmental modeling, and applied physics." },
            { icon: HeartPulse, title: "Health & Life Sciences", desc: "Medical imaging, genetics, public health, and biotechnology advancements." },
            { icon: Scaling, title: "Social & Economic Systems", desc: "Behavioral economics, societal shifts, labor markets, and human interaction." },
            { icon: Scale, title: "Ethics, Law & Policy", desc: "AI governance, algorithmic fairness, legal frameworks, and moral philosophy." }
          ].map((track, i) => (
            <MotionDiv key={i} variants={fadeUpVariant} className="bg-brand-surface border border-brand-border p-8 rounded-sm hover:-translate-y-2 hover:shadow-premium transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-bg border border-brand-border rounded-sm flex items-center justify-center text-brand-black mb-6 group-hover:border-brand-accent transition-colors">
                <track.icon size={26} className="text-brand-black" />
              </div>
              <h3 className="text-xl font-display font-medium mb-4 leading-tight">{track.title}</h3>
              <p className="text-brand-blackLight font-light leading-relaxed text-sm">{track.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* Keynotes Preview */}
      <Section id="keynotes" className="bg-brand-surface border-y border-brand-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <MotionDiv variants={fadeUpVariant} className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-brand-black">Keynote Speakers</h2>
            <div className="w-12 h-1 bg-brand-accent mb-8"></div>
            <p className="text-brand-blackLight text-lg font-light leading-relaxed">
              Hear directly from visionaries shaping the research and application of AI across fields.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeUpVariant}>
            <Link href="/keynotes">
              <Button variant="outline" className="border-brand-border rounded-sm uppercase tracking-wider text-xs font-semibold">View All Speakers</Button>
            </Link>
          </MotionDiv>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {keynoteSpeakers.map((speaker, i) => (
            <MotionDiv key={speaker.id} variants={fadeUpVariant} className="group cursor-pointer">
              <div className="aspect-[3/4] mb-6 overflow-hidden rounded-sm relative border border-brand-border">
                <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 grayscale"
                />
              </div>
              <h3 className="text-2xl font-display font-medium text-brand-black mb-1">{speaker.name}</h3>
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-wide mb-2">{speaker.role}</p>
              <p className="text-brand-blackLight text-sm font-light">{speaker.affiliation}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* Important Dates (Timeline approach) */}
      <Section id="dates" className="bg-brand-bg">
        <MotionDiv variants={fadeUpVariant} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Important Dates</h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto mb-8"></div>
          <p className="text-brand-blackLight text-lg font-light">
            Keep track of strict deadlines for submission and registration.
          </p>
        </MotionDiv>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-brand-border">
          {importantDates.map((date, i) => (
            <MotionDiv key={i} variants={fadeUpVariant} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-10 last:mb-0">
              <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-accent -translate-x-[7px] md:-translate-x-[8px] z-10" />

              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:odd:pr-16 md:even:pl-16">
                <div className={cn(
                  "p-8 bg-brand-surface border border-brand-border rounded-sm transition-all relative overflow-hidden",
                  date.passed ? "opacity-60 grayscale" : "group-hover:border-brand-accent/50 group-hover:shadow-premium hover:-translate-y-1"
                )}>
                  {!date.passed && <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent hidden group-hover:block" />}
                  <div className="flex items-center gap-3 mb-3 text-brand-accent">
                    <Calendar size={18} />
                    <span className="font-semibold tracking-widest uppercase text-xs text-brand-black">{date.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-brand-black">{date.event}</h3>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* CTA Registration */}
      <Section className="bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none"></div>
        <MotionDiv variants={staggerContainer} className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 text-white">
            Secure Your Spot at ICAID 2026
          </h2>
          <p className="text-xl text-brand-gray mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Join international academic and industry professionals. Registration early incentives close on September 15, 2026.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/registration">
              <Button size="lg" className="bg-brand-accent text-brand-black hover:bg-[#E5B327] border-none shadow-premium text-lg rounded-sm font-semibold transition-colors">
                Register to Attend
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </Section>
    </>
  )
}
