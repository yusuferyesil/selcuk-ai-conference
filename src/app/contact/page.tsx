import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { Button } from "@/components/ui/Button"
import { MapPin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="pt-24 pb-10">
      <Section dark className="py-20 border-b border-border">
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black">Contact Us</h1>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed mb-8">
            Have questions regarding submissions, registration, or sponsorship? Our organizing committee is here to help.
          </p>
        </MotionDiv>
      </Section>

      <Section className="py-20">
        <MotionDiv variants={staggerContainer} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <MotionDiv variants={fadeUpVariant}>
            <h2 className="text-3xl font-display font-bold text-brand-black mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-black block">Name</label>
                  <input type="text" id="name" className="w-full border border-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-black block">Email</label>
                  <input type="email" id="email" className="w-full border border-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" placeholder="john@university.edu" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-brand-black block">Subject Category</label>
                <select id="subject" className="w-full border border-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all">
                  <option>Paper Submission Inquiry</option>
                  <option>Registration & Payment</option>
                  <option>Sponsorship Opportunities</option>
                  <option>Visa Letters</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-black block">Message</label>
                <textarea id="message" rows={5} className="w-full border border-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </MotionDiv>

          <MotionDiv variants={fadeUpVariant} className="bg-white p-10 rounded-sm shadow-sm border border-border flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-brand-black mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accent/10 text-brand-accent rounded-sm flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">General Inquiries</h4>
                  <a href="mailto:contact@suaic2026.selcuk.edu.tr" className="text-brand-blackLight hover:text-brand-accent transition-colors font-light">contact@suaic2026.selcuk.edu.tr</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accent/10 text-brand-accent rounded-sm flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Secretariat Hub</h4>
                  <p className="text-brand-blackLight font-light">+90 332 241 00 41</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-accent/10 text-brand-accent rounded-sm flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Mailing Address</h4>
                  <address className="not-italic text-brand-blackLight font-light leading-relaxed">
                    SUAIC 2026 Organizing Committee<br />
                    Faculty of Technology, Selçuk University<br />
                    Alaeddin Keykubat Kampüsü<br />
                    42130 Selçuklu, Konya / Turkey
                  </address>
                </div>
              </div>
            </div>

          </MotionDiv>

        </MotionDiv>
      </Section>
    </div>
  )
}
