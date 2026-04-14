import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"

export default function About() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">About the Conference</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed">
            Advancing the frontiers of artificial intelligence through rigorous academic exchange and global collaboration.
          </p>
        </MotionDiv>
      </Section>
      
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-bold mb-6 text-brand-black">Our Vision</h2>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed mb-6">
              The Selçuk University International Artificial Intelligence Conference (SUAIC) was established to provide a premier international forum for researchers, developers, and practitioners to present and discuss the most recent innovations, trends, results, experiences, and concerns in the several perspectives of Artificial Intelligence.
            </p>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed">
              As AI increasingly permeates cognitive processes, industrial automation, and social structures, SUAIC aims to foster a multidisciplinary dialogue that ensures these technologies are developed responsibly, robustly, and transparently.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeUpVariant} className="bg-white p-10 rounded-sm border border-border shadow-sm">
            <h3 className="text-2xl font-display font-bold mb-6 text-brand-black">Objectives</h3>
            <ul className="space-y-4 text-brand-blackLight font-light">
              <li className="flex gap-4">
                <span className="text-brand-accent font-bold">01.</span>
                <span>To facilitate cross-disciplinary collaboration among top-tier academic institutions.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent font-bold">02.</span>
                <span>To publish high-impact peer-reviewed open access papers.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent font-bold">03.</span>
                <span>To address critical ethical and alignment issues in emerging AGI research.</span>
              </li>
            </ul>
          </MotionDiv>
        </div>
      </Section>
    </div>
  )
}
