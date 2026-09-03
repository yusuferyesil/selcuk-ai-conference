import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

const linkKeyMap: Record<string, keyof ReturnType<typeof getDictionary>["nav"]> = {
  "/": "home",
  "/about": "about",
  "/cfp": "callForPapers",
  "/dates": "importantDates",
  "/program": "program",
  "/keynotes": "speakers",
  "/committee": "committees",
  "/registration": "registration",
  "/venue": "venueTravel",
  "/contact": "contact",
  "/events": "events",
};

export default function Footer({ lang = "en" }: { lang?: Locale }) {
  const t = getDictionary(lang)
  return (
    <footer className="footer-bg text-brand-gray relative overflow-hidden">
      {/* Diamond lattice overlay */}
      <div className="absolute inset-0 bg-girih-gold opacity-25 pointer-events-none" aria-hidden />
      {/* Radial gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,167,0,0.07) 0%, transparent 70%)" }}
        aria-hidden
      />
      {/* Gold top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" aria-hidden />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${lang}`} prefetch={false} className="flex items-center gap-3 w-fit group">
              <Image
                src="/images/logo/logo.png"
                alt=""
                width={60}
                height={60}
                className="w-14 h-14 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base leading-tight">{conferenceData.edition}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold/70 mt-0.5">{conferenceData.organizer}</span>
              </div>
            </Link>
            <p className="text-sm font-light text-brand-gray/70 leading-relaxed max-w-xs">
              {t.home.heroDesc}
            </p>
            <p className="font-mono text-xs text-brand-gold/60">
              {t.common.date} · {t.common.location} ({t.common.hybrid})
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold/70 mb-4">{t.footer.navigate}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {conferenceData.quickLinks.map(link => {
                const navKey = linkKeyMap[link.href];
                const label = navKey ? t.nav[navKey] : link.label;

                return (
                  <li key={link.href}>
                    <Link href={`/${lang}${link.href}`} prefetch={false} className="text-sm text-brand-gray/60 hover:text-white transition-colors font-light">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold/70 mb-4">{t.footer.contact}</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm font-light text-brand-gray/60">
                <MapPin size={14} className="text-brand-gold/70 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{conferenceData.location}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-light">
                <Mail size={14} className="text-brand-gold/70 shrink-0" />
                <a href={`mailto:${conferenceData.email}`} className="text-brand-gray/60 hover:text-white transition-colors break-all">
                  {conferenceData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners row */}
        <div className="border-t border-white/8 pt-6 mb-6 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold/50 mr-2">{t.footer.partners}</span>
          {conferenceData.collaborators.map(c => (
            <a
              key={c.id}
              href={c.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-gold/60 border border-brand-gold/20 hover:border-brand-gold/50 hover:text-brand-gold px-2.5 py-1 transition-all duration-200"
            >
              {c.name}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-light text-brand-gray/40">
            © {new Date().getFullYear()} {conferenceData.name}. {t.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-5 text-xs font-light text-brand-gray/40">
            <Link href={`/${lang}/privacy`} prefetch={false} className="hover:text-white transition-colors">{t.common.privacyPolicy}</Link>
            <span className="text-brand-gold/20">·</span>
            <Link href={`/${lang}/terms`} prefetch={false} className="hover:text-white transition-colors">{t.common.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
