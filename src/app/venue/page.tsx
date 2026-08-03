import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { conferenceData } from "@/data/conference"
import { MapPin, Plane, Train, Hotel, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Venue & Travel",
  description: "How to reach the Selçuk University Congress Center in Konya, Turkey — by air, by high-speed train, and where to stay.",
}

export default function Venue() {
  return (
    <div className="pt-24 pb-10">
      <PageHeader
        eyebrow="Konya, Türkiye"
        title="Venue & Travel"
        description="Discover the historic city of Konya and the state-of-the-art facilities at Selçuk University."
      />

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto space-y-16">

          <MotionDiv variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 text-brand-accent">
                <MapPin size={24} />
                <h2 className="text-2xl font-display font-medium text-brand-black">Conference Venue</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-black">Selçuk University Congress Center</h3>
              <p className="text-brand-blackLight font-light leading-relaxed mb-6">
                The conference will be held at the prestigious Selçuk University Congress Center, located within the university&apos;s vibrant Alaeddin Keykubat Campus. The center features a majestic grand hall, multiple seminar rooms equipped with advanced AV technology, and expansive foyers for networking.
              </p>
              <div className="p-4 bg-brand-surface border-l-4 border-brand-accent rounded-r-sm mb-6">
                <address className="not-italic text-sm text-brand-black font-medium leading-relaxed">
                  {conferenceData.address.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
              <a
                href={conferenceData.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-black font-semibold hover:text-brand-accent transition-colors uppercase tracking-wide text-sm"
              >
                Open in Google Maps <ExternalLink size={14} />
              </a>
            </div>
            <div className="aspect-video border border-brand-border rounded-sm overflow-hidden relative">
              <iframe
                src={conferenceData.address.mapEmbedUrl}
                title="Map of the conference venue at Selçuk University, Konya"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="relative">
            <div className="aspect-[21/9] rounded-sm overflow-hidden border border-brand-border shadow-premium relative">
              <Image
                src="/images/venue/congress-center.jpg"
                alt="Selçuk University Congress Center"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-brand-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Plane className="text-brand-accent mb-4" size={32} />
              <h3 className="font-semibold text-brand-black mb-2 text-lg">By Air</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                Konya Airport (KYA) receives daily flights from Istanbul. The campus is accessible via Havaş shuttle service or taxi directly from the airport.
              </p>
            </div>
            <div className="p-6 border border-brand-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Train className="text-brand-accent mb-4" size={32} />
              <h3 className="font-semibold text-brand-black mb-2 text-lg">By High-Speed Train</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                High-Speed Train (YHT) connects Konya to Ankara (~1.5h) and Istanbul (~4.5h). It is the most comfortable and punctual travel method. The campus is reachable from the station by tram or taxi.
              </p>
            </div>
            <div className="p-6 border border-brand-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Hotel className="text-brand-accent mb-4" size={32} />
              <h3 className="font-semibold text-brand-black mb-2 text-lg">Accommodation</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                We have secured discounted rates at several official conference hotels near the campus and in the city center. A shuttle service will be provided. The hotel list will be published on this page.
              </p>
            </div>
          </MotionDiv>

        </MotionDiv>
      </Section>
    </div>
  )
}
