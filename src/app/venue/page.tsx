import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { MapPin, Plane, Train, Hotel } from "lucide-react"

export default function Venue() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Venue & Travel</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed">
            Discover the historic city of Konya and the state-of-the-art facilities at Selçuk University.
          </p>
        </MotionDiv>
      </Section>
      
      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto space-y-16">
          
          <MotionDiv variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 text-brand-accent">
                <MapPin size={24} />
                <h2 className="text-2xl font-display font-bold text-brand-black">Conference Venue</h2>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-black">Selçuk University Congress Center</h3>
              <p className="text-brand-blackLight font-light leading-relaxed mb-6">
                The conference will be held at the prestigious Selçuk University Congress Center, located within the university&apos;s vibrant Alaeddin Keykubat Campus. The center features a majestic grand hall, multiple seminar rooms equipped with advanced AV technology, and expansive foyers for networking.
              </p>
              <div className="p-4 bg-brand-surface border-l-4 border-brand-accent rounded-r-sm">
                <address className="not-italic text-sm text-brand-black font-medium leading-relaxed">
                  Alaeddin Keykubat Kampüsü<br/>
                  Selçuk Üniversitesi Kongre Merkezi<br/>
                  42130 Selçuklu / Konya<br/>
                  Turkey
                </address>
              </div>
            </div>
            <div className="aspect-video bg-brand-surface border border-border rounded-sm overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10 bg-grid-pattern-light pointer-events-none"></div>
              {/* Map placeholder */}
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm border shadow-sm rounded-sm">
                <MapPin className="mx-auto text-brand-accent mb-2" size={32} />
                <p className="font-bold">Interactive Map Placeholder</p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Plane className="text-brand-accent mb-4" size={32} />
              <h3 className="font-bold text-brand-black mb-2 text-lg">By Air</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                Konya Airport (KYA) receives daily flights from Istanbul. The campus is accessible via Havaş shuttle service or taxi directly from the airport.
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Train className="text-brand-accent mb-4" size={32} />
              <h3 className="font-bold text-brand-black mb-2 text-lg">By High-Speed Train</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                High-Speed Train (YHT) connects Konya to Ankara (1.5h) and Istanbul (4.5h). It is the most comfortable and punctual travel method.
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <Hotel className="text-brand-accent mb-4" size={32} />
              <h3 className="font-bold text-brand-black mb-2 text-lg">Accommodation</h3>
              <p className="text-sm font-light text-brand-blackLight leading-relaxed">
                We have secured discounted rates at several official conference hotels near the campus and in the city center. A shuttle service will be provided.
              </p>
            </div>
          </MotionDiv>

        </MotionDiv>
      </Section>
    </div>
  )
}
