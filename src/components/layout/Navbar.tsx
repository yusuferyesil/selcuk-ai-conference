"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { conferenceData } from "@/data/conference"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "next/navigation"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"
import { getDictionary, Locale } from "@/i18n"

const navKeyMap: Record<string, string> = {
  "Home": "home",
  "About": "about",
  "Conference": "conference",
  "Important Dates": "importantDates",
  "Program": "program",
  "Speakers": "speakers",
  "Committees": "committees",
  "Participate": "participate",
  "Call for Papers": "callForPapers",
  "Registration": "registration",
  "Venue & Travel": "venueTravel",
  "Contact": "contact",
  "Events": "events"
};

export default function Navbar() {
  const pathname = usePathname()
  const params = useParams()
  const lang = (params?.lang as Locale) || "en"
  const t = getDictionary(lang)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null)
  const [barVisible, setBarVisible] = React.useState(true)
  const headerRef = React.useRef<HTMLElement>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Watch for bar dismissal via custom event from RegistrationBar
  React.useEffect(() => {
    const handler = () => setBarVisible(false)
    window.addEventListener("regbar:dismiss", handler)
    return () => window.removeEventListener("regbar:dismiss", handler)
  }, [])

  React.useEffect(() => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  const openNow = (idx: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(idx)
  }
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 border-b",
        barVisible ? "top-[36px] sm:top-[40px]" : "top-0",
        isScrolled || mobileMenuOpen || openDropdown !== null
          ? "glass py-2.5 sm:py-3 border-brand-border"
          : "bg-white/90 backdrop-blur-sm border-transparent py-3 sm:py-5"
      )}
    >
      {/* Selçuk gold accent line at very top */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark pointer-events-none" aria-hidden />

      <div className="container mx-auto px-3 sm:px-4 xl:px-6 max-w-7xl flex items-center justify-between gap-2 xl:gap-4">
        <Link href={`/${lang}`} prefetch={false} className="flex items-center gap-2 xl:gap-3.5 group shrink-0" aria-label={`${conferenceData.edition} home`}>
          <Image
            src="/images/logo/logo.png"
            alt="ICAAD 2026 Logo"
            width={70}
            height={70}
            className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-black text-sm sm:text-base xl:text-lg tracking-tight">
              {conferenceData.edition}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] xl:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-brand-gold font-medium">
              {conferenceData.organizer}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap" aria-label="Main navigation">
          {conferenceData.navLinks.map((link, idx) => (
            link.children ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => openNow(idx)}
                onMouseLeave={closeSoon}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === idx}
                  className={cn(
                    "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors flex items-center gap-1 xl:gap-1.5 rounded-sm whitespace-nowrap",
                    "hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                    link.children.some(child => pathname === `/${lang}${child.href}`) ? "text-brand-gold" : "text-brand-black"
                  )}
                >
                  {t.nav[navKeyMap[link.label] as keyof typeof t.nav] || link.label}
                  <ChevronDown size={13} className={cn("transition-transform duration-200 opacity-60", openDropdown === idx && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white border border-brand-border shadow-soft min-w-[200px] xl:min-w-[220px] py-2 flex flex-col overflow-hidden relative">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-gold" aria-hidden />
                        {link.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={`/${lang}${child.href}`}
                            prefetch={false}
                            onClick={() => setOpenDropdown(null)}
                            className={cn(
                              "px-4 xl:px-5 py-2.5 text-xs xl:text-sm transition-colors border-l-2 whitespace-nowrap",
                              pathname === `/${lang}${child.href}`
                                ? "text-brand-black border-brand-gold bg-brand-goldLight/60 font-medium"
                                : "text-brand-blackLight border-transparent hover:text-brand-black hover:border-brand-gold hover:bg-brand-goldLight/40"
                            )}
                          >
                            {t.nav[navKeyMap[child.label] as keyof typeof t.nav] || child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                href={`/${lang}${link.href!}`}
                prefetch={false}
                className={cn(
                  "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-sm whitespace-nowrap",
                  "hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                  pathname === `/${lang}${link.href}` ? "text-brand-gold" : "text-brand-black"
                )}
              >
                {t.nav[navKeyMap[link.label] as keyof typeof t.nav] || link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 shrink-0">
          <LanguageSwitcher />
          <Link
            href={`/${lang}/keynotes`}
            prefetch={false}
            className="inline-flex items-center h-9 xl:h-10 px-3 xl:px-5 text-xs xl:text-sm font-bold bg-brand-accent text-white hover:bg-brand-accentDark transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 animate-glow-accent whitespace-nowrap"
          >
            {t.nav.speakers}
          </Link>
          <Link
            href={`/${lang}/events`}
            prefetch={false}
            className="inline-flex items-center h-9 xl:h-10 px-3 xl:px-5 text-xs xl:text-sm font-bold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 whitespace-nowrap"
          >
            {t.nav.events}
          </Link>
        </div>

        {/* Mobile Header Right Controls: Language Switcher + Toggle Button */}
        <div className="flex lg:hidden items-center gap-1 shrink-0">
          <LanguageSwitcher />
          <button
            className="text-brand-black p-2 rounded-sm hover:bg-brand-goldLight/40 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-5 flex flex-col gap-1.5 lg:hidden shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            {conferenceData.navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-brand-border/60 last:border-0 pb-2 mb-1 last:mb-0 last:pb-0">
                {link.children ? (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold pt-1.5 mb-1 font-semibold">
                      {t.nav[navKeyMap[link.label] as keyof typeof t.nav] || link.label}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      {link.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={`/${lang}${child.href}`}
                          prefetch={false}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-sm py-2 pl-3 border-l-2 transition-colors",
                            pathname === `/${lang}${child.href}`
                              ? "text-brand-black border-brand-gold font-medium bg-brand-goldLight/30"
                              : "text-brand-blackLight border-brand-border/40 hover:text-brand-black hover:border-brand-gold"
                          )}
                        >
                          {t.nav[navKeyMap[child.label] as keyof typeof t.nav] || child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/${lang}${link.href!}`}
                    prefetch={false}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-sm font-medium py-2.5 block transition-colors",
                      pathname === `/${lang}${link.href}` ? "text-brand-gold font-semibold" : "text-brand-black hover:text-brand-gold"
                    )}
                  >
                    {t.nav[navKeyMap[link.label] as keyof typeof t.nav] || link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-brand-border flex flex-col gap-2.5 mt-1">
              <Link
                href={`/${lang}/keynotes`}
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-10 px-5 text-xs font-bold bg-brand-accent text-white hover:bg-brand-accentDark transition-all rounded-sm shadow-sm"
              >
                {t.nav.speakers}
              </Link>
              <Link
                href={`/${lang}/events`}
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-10 px-5 text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 transition-all rounded-sm shadow-sm"
              >
                {t.nav.events}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
