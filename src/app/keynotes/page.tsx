import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { keynoteSpeakers } from "@/data/speakers"

export default function Keynotes() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Keynote Speakers</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed">
            World-renowned experts pioneering the next era of Artificial Intelligence.
          </p>
        </MotionDiv>
      </Section>
      
      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto space-y-16">
          {keynoteSpeakers.map((speaker, i) => (
            <MotionDiv key={speaker.id} variants={fadeUpVariant} className="grid md:grid-cols-12 gap-8 items-center bg-white border border-border shadow-sm rounded-sm p-4 md:p-8">
              <div className="md:col-span-4 h-full min-h-[300px] relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-brand-darker/10 z-10 hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:col-span-8 md:pl-8">
                <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2 block border-b border-brand-accent/20 pb-2 inline-block">Keynote Lecture</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-black mb-2">{speaker.name}</h2>
                <p className="text-lg text-brand-blackLight font-medium mb-1">{speaker.role}</p>
                <p className="text-sm text-brand-blackLight uppercase tracking-widest mb-6">{speaker.affiliation}</p>
                
                <div className="bg-brand-surface p-6 rounded-sm mb-6 border-l-4 border-brand-darker">
                  <h4 className="text-sm uppercase tracking-wider text-brand-blackLight mb-1">Talk Title</h4>
                  <p className="text-xl font-display font-bold text-brand-black">{speaker.topic}</p>
                </div>
                
                <p className="text-brand-blackLight font-light leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>
    </div>
  )
}
