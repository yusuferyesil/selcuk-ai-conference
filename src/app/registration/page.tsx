import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

export default function Registration() {
  const fees = [
    { type: "Regular Academic", early: "€450", late: "€550", featured: true },
    { type: "Student", early: "€250", late: "€350", featured: false },
    { type: "Industry Professional", early: "€650", late: "€800", featured: false },
  ];

  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Registration</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed mb-8">
            Secure your place at SUAIC 2026. Early bird registration ends August 15, 2026.
          </p>
          <Button size="lg" className="shadow-glow text-lg">Proceed to Registration Portal</Button>
        </MotionDiv>
      </Section>
      
      <Section>
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {fees.map((fee, i) => (
              <MotionDiv key={i} variants={fadeUpVariant} className={`border rounded-sm p-8 ${fee.featured ? 'border-brand-accent shadow-xl relative mt-0 md:-mt-4 bg-white z-10' : 'border-border shadow-sm bg-white'}`}>
                {fee.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">Most Popular</div>}
                <h3 className="text-xl font-display font-bold text-center text-brand-black mb-6">{fee.type}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-end border-b border-border pb-2">
                    <span className="text-brand-blackLight font-light text-sm">Early Bird</span>
                    <span className="text-2xl font-bold text-brand-black">{fee.early}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-border pb-2">
                    <span className="text-brand-blackLight font-light text-sm">Late / On-site</span>
                    <span className="text-xl font-semibold text-brand-blackLight">{fee.late}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-accent"/> Full conference access</li>
                  <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-accent"/> Conference proceedings</li>
                  <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-accent"/> Gala dinner & reception</li>
                  <li className="flex items-center gap-2 text-sm text-brand-black font-light"><Check size={16} className="text-brand-accent"/> Daily catering</li>
                </ul>
                <Button className="w-full" variant={fee.featured ? 'default' : 'outline'}>Select Tier</Button>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv variants={fadeUpVariant} className="bg-brand-surface p-8 border border-border rounded-sm">
            <h3 className="text-xl font-bold text-brand-black mb-4">Registration Policies</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-blackLight font-light text-sm leading-relaxed">
              <li>Each accepted paper must have at least one author registered at a full non-student rate.</li>
              <li>Student registrations require valid proof of full-time student status at the time of registration.</li>
              <li>Cancellations made before September 1, 2026 are subject to a 20% administrative fee. No refunds will be issued for cancellations after this date.</li>
            </ul>
          </MotionDiv>
        </MotionDiv>
      </Section>
    </div>
  )
}
