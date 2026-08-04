import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { MapPin, Plane, Train, Hotel, ExternalLink, Navigation, Building2, Landmark } from "lucide-react"

export const metadata: Metadata = {
  title: "Venue & Travel",
  description: "How to reach the Selçuk University Congress Center in Konya, Turkey — venue details, travel options, and accommodation info.",
}

export default function Venue() {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-bg">
      <PageHeader
        eyebrow="Konya, Türkiye"
        title="Venue & Travel"
        description="Discover the historic city of Konya and the facilities at Selçuk University."
      />

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto space-y-20">

          {/* ————— City Spotlight ————— */}
          <MotionDiv variants={fadeUpVariant} className="grid lg:grid-cols-12 gap-10 items-center bg-white border border-brand-border p-8 md:p-12 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-gold uppercase tracking-[0.2em]">
                <Landmark size={16} /> Host City
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-black leading-tight">
                Welcome to Historic Konya
              </h2>
              <p className="text-brand-blackLight font-light leading-relaxed text-base">
                Konya is one of Anatolia&apos;s oldest continuously inhabited cities, renowned for its rich Seljuk architectural heritage, vibrant culture, and its role as the cradle of Sufi philosophy associated with Mevlana Rumi.
              </p>
              <p className="text-brand-blackLight font-light leading-relaxed text-base">
                Today, Konya is a modern scientific and industrial hub, hosting over 130,000 university students and academic congress facilities.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] border border-brand-border overflow-hidden shadow-soft group">
              <Image
                src="/images/venue/konya-city.jpg"
                alt="Konya historic city center and Mevlana museum"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </MotionDiv>

          {/* ————— Venue & Interactive Map ————— */}
          <MotionDiv variants={fadeUpVariant} className="space-y-10">
            <div className="border-b border-brand-border pb-4">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.2em]">Conference Location</span>
              <h2 className="text-3xl font-display font-semibold text-brand-black mt-1">Selçuk University Congress Center</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-white border border-brand-border p-8 shadow-soft">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <Building2 size={24} />
                    <h3 className="text-xl font-display font-semibold text-brand-black">Campus & Facilities</h3>
                  </div>
                  <p className="text-brand-blackLight font-light leading-relaxed text-base">
                    The conference takes place at the Selçuk University Congress Center, located on the spacious Alaeddin Keykubat Campus. The center features main hall auditoriums, multiple seminar rooms, and spacious foyers for networking.
                  </p>
                </div>

                <div className="p-5 bg-brand-surface border-l-4 border-brand-gold border-y border-r border-brand-border">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold block mb-2 font-semibold">Address Details</span>
                  <address className="not-italic text-sm text-brand-black font-medium leading-relaxed">
                    {conferenceData.address.lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </address>
                </div>

                <div>
                  <a
                    href={conferenceData.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-goldDark transition-colors font-mono"
                  >
                    Open Location in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="lg:col-span-6 border border-brand-border shadow-soft min-h-[340px] relative overflow-hidden bg-white">
                <iframe
                  src={conferenceData.address.mapEmbedUrl}
                  title="Map of Selçuk University Congress Center, Konya"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionDiv>

          {/* ————— Travel & Getting Here ————— */}
          <MotionDiv variants={fadeUpVariant} className="space-y-8">
            <div className="border-b border-brand-border pb-4">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.2em]">Travel Information</span>
              <h2 className="text-3xl font-display font-semibold text-brand-black mt-1">Getting to Konya & Campus</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* High-Speed Train Card */}
              <div className="bg-white border border-brand-border p-8 shadow-soft flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-brand-gold mb-4">
                    <Train size={28} />
                    <h3 className="text-xl font-display font-semibold text-brand-black">High-Speed Train (YHT)</h3>
                  </div>
                  <p className="text-brand-blackLight font-light text-sm leading-relaxed mb-4">
                    The Turkish High-Speed Train (YHT) connects Konya directly with Ankara (~1h 45m) and Istanbul (~4h 30m). It arrives at the central Konya Train Station (YHT Garı).
                  </p>
                  <p className="text-brand-blackLight font-light text-sm leading-relaxed">
                    From the YHT Station, participants can take the direct campus tram or taxi straight to Selçuk University Campus.
                  </p>
                </div>
                <div className="relative aspect-[16/9] border border-brand-border overflow-hidden">
                  <Image
                    src="/images/venue/yht-train.jpg"
                    alt="High-Speed Train YHT travel to Konya"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* By Air & Airport Transit */}
              <div className="bg-white border border-brand-border p-8 shadow-soft flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-brand-gold mb-4">
                    <Plane size={28} />
                    <h3 className="text-xl font-display font-semibold text-brand-black">By Air (Konya Airport - KYA)</h3>
                  </div>
                  <p className="text-brand-blackLight font-light text-sm leading-relaxed mb-4">
                    Konya Airport (KYA) receives multiple daily flights from Istanbul (IST & SAW). International delegates can easily connect via Istanbul Airports.
                  </p>
                  <p className="text-brand-blackLight font-light text-sm leading-relaxed mb-4">
                    Havaş airport shuttle buses and taxis operate between KYA Airport, the city center, and the university campus for arriving flights.
                  </p>
                </div>
                <div className="p-5 bg-brand-surface border border-brand-border space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
                    <Navigation size={14} /> Campus Tram Access
                  </div>
                  <p className="text-xs text-brand-blackLight leading-relaxed">
                    The Kampüs Tram Line connects the city center directly to the Alaeddin Keykubat Campus stop in front of the Congress Center.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* ————— Accommodation ————— */}
          <MotionDiv variants={fadeUpVariant} className="space-y-8">
            <div className="border-b border-brand-border pb-4">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.2em]">Lodging</span>
              <h2 className="text-3xl font-display font-semibold text-brand-black mt-1">Accommodation Options</h2>
            </div>

            <div className="bg-white border border-brand-border p-8 md:p-10 shadow-soft space-y-4">
              <div className="flex items-center gap-3 text-brand-gold">
                <Hotel size={24} />
                <h3 className="text-xl font-display font-semibold text-brand-black">Accommodation Details</h3>
              </div>
              <p className="text-brand-blackLight font-light text-sm leading-relaxed">
                Participants are responsible for making their own hotel reservations. A wide variety of accommodation options — ranging from 3-star to 5-star hotels — are available in Konya city center and in proximity to the university campus.
              </p>
              <p className="text-brand-blackLight font-light text-sm leading-relaxed">
                The direct Kampüs Tram Line provides convenient public transportation between city center hotels and the Selçuk University Campus.
              </p>
            </div>
          </MotionDiv>

        </MotionDiv>
      </Section>
    </div>
  )
}
