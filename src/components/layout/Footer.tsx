import Link from "next/link"
import Image from "next/image"
import { conferenceData } from "@/data/conference"

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gray/20 pt-20 pb-10 text-brand-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/logo.png"
                alt="ICAID Logo"
                width={64}
                height={64}
                className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-display font-bold text-white text-xl">
                {conferenceData.shortName}
              </span>
            </Link>
            <p className="max-w-md text-brand-gray leading-relaxed font-light">
              The premier international academic conference on Artificial Intelligence, bringing together global experts to discuss innovations, ethics, and future technologies.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {conferenceData.quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-accent transition-colors font-light text-brand-gray">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 font-light text-brand-gray">
              <li>{conferenceData.location}</li>
              <li>
                <a href={`mailto:${conferenceData.email}`} className="hover:text-brand-accent transition-colors">
                  {conferenceData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-brand-gray/20 flex flex-col md:flex-row items-center justify-between gap-4 font-light text-sm text-brand-gray">
          <p>© {new Date().getFullYear()} {conferenceData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
