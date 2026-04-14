import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Button } from "@/components/ui/Button"
import { Download } from "lucide-react"

export default function CFP() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Call for Papers</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed mb-8">
            We invite original, unpublished research papers across all major areas of Artificial Intelligence.
          </p>
          <Button size="lg" className="shadow-glow">Submit via CMT</Button>
        </MotionDiv>
      </Section>

      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">
          <MotionDiv variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-brand-black border-b border-border pb-4">Submission Guidelines</h2>
            <p className="text-lg text-brand-blackLight font-light leading-relaxed mb-6">
              All submitted papers must be formatted according to the IEEE double-column conference proceedings template. Submissions must be entirely original and not concurrently under review at another conference or journal.
            </p>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="flex items-center gap-2"><Download size={16} /> LaTeX Template</Button>
              <Button variant="outline" className="flex items-center gap-2"><Download size={16} /> Word Template</Button>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-bold mb-8 text-brand-black border-b border-border pb-4">Conference Topics</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-black mb-4">Machine Learning & Models</h3>
                <ul className="list-disc pl-5 space-y-2 text-brand-blackLight font-light">
                  <li>Deep Learning Architectures</li>
                  <li>Generative Adversarial Networks</li>
                  <li>Large Language Models & Foundation Models</li>
                  <li>Reinforcement Learning</li>
                  <li>Federated Learning & Privacy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black mb-4">Applied AI & Domains</h3>
                <ul className="list-disc pl-5 space-y-2 text-brand-blackLight font-light">
                  <li>Computer Vision & Pattern Recognition</li>
                  <li>Natural Language Processing</li>
                  <li>Robotics & Autonomous Systems</li>
                  <li>AI in Healthcare & Bioinformatics</li>
                  <li>Smart Cities & Edge AI</li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
