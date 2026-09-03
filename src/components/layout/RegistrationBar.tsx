"use client"

import { getDictionary, Locale } from "@/i18n"

const CMT_URL = "https://cmt3.research.microsoft.com/ICAAD2026"

export default function RegistrationBar({ lang = "en" }: { lang?: Locale }) {
  const t = getDictionary(lang)
  return (
    <div
      role="banner"
      aria-label="Registration announcement"
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between gap-3 px-4 py-2.5 bg-brand-black border-b border-brand-gold/50"
      style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.25)" }}
    >
      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 flex-1 justify-center text-center sm:text-left">
        <span className="text-sm font-semibold text-white leading-snug">
          <span className="text-brand-gold">{t.nav.callForPapers} {t.registration.isOpen}</span>
          <span className="text-white/50 mx-1.5 hidden sm:inline">·</span>
          <span className="text-white/70 text-xs sm:text-sm hidden sm:inline">
            {t.registration.submitDesc}
          </span>
        </span>
        <a
          href={CMT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 h-8 px-5 bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wide hover:bg-brand-goldDark active:scale-95 transition-all duration-150 whitespace-nowrap"
        >
          {t.common.submitPaper} →
        </a>
      </div>
    </div>
  )
}
