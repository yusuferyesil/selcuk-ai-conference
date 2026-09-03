"use client"

import { getDictionary, Locale } from "@/i18n"

const CMT_URL = "https://cmt3.research.microsoft.com/ICAAD2026"

export default function RegistrationBar({ lang = "en" }: { lang?: Locale }) {
  const t = getDictionary(lang)
  return (
    <div
      role="banner"
      aria-label="Registration announcement"
      className="fixed top-0 left-0 right-0 z-[60] h-9 sm:h-10 px-3 sm:px-4 bg-brand-black border-b border-brand-gold/40 flex items-center justify-between gap-2"
      style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.3)" }}
    >
      <div className="flex items-center gap-1.5 sm:gap-3 mx-auto overflow-hidden whitespace-nowrap max-w-7xl w-full justify-center">
        <span className="text-[11px] sm:text-xs font-semibold text-white truncate">
          <span className="text-brand-gold font-bold">{t.nav.callForPapers} {t.registration.isOpen}</span>
          <span className="text-white/40 mx-1.5 hidden sm:inline">·</span>
          <span className="text-white/75 text-[11px] sm:text-xs hidden sm:inline">
            {t.registration.submitDesc}
          </span>
        </span>
        <a
          href={CMT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 h-6 sm:h-7 px-2.5 sm:px-3.5 bg-brand-gold text-brand-black text-[10px] sm:text-xs font-bold uppercase tracking-wide hover:bg-brand-goldDark active:scale-95 transition-all duration-150 rounded-sm"
        >
          <span>{t.common.submitPaper}</span>
          <span className="text-[10px] sm:text-xs">→</span>
        </a>
      </div>
    </div>
  )
}
