"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { conferenceData } from "@/data/conference"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()
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
        barVisible ? "top-[42px]" : "top-0",
        isScrolled || mobileMenuOpen || openDropdown !== null
          ? "glass py-3 border-brand-border"
          : "bg-white/90 backdrop-blur-sm border-transparent py-5"
      )}
    >
      {/* Selçuk gold accent line at very top */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark pointer-events-none" aria-hidden />

      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group" aria-label={`${conferenceData.edition} home`}>
          <Image
            src="/images/logo/logo.png"
            alt="ICAAD 2026 Logo"
            width={70}
            height={70}
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-black text-lg tracking-tight">
              {conferenceData.edition}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              {conferenceData.organizer}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
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
                    "px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 rounded-sm",
                    "hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                    link.children.some(child => pathname === child.href) ? "text-brand-gold" : "text-brand-black"
                  )}
                >
                  {link.label}
                  <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-60", openDropdown === idx && "rotate-180")} />
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
                      <div className="bg-white border border-brand-border shadow-soft min-w-[220px] py-2 flex flex-col overflow-hidden relative">
                        {/* Gold top border on dropdown */}
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-gold" aria-hidden />
                        {link.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={cn(
                              "px-5 py-2.5 text-sm transition-colors border-l-2",
                              pathname === child.href
                                ? "text-brand-black border-brand-gold bg-brand-goldLight/60 font-medium"
                                : "text-brand-blackLight border-transparent hover:text-brand-black hover:border-brand-gold hover:bg-brand-goldLight/40"
                            )}
                          >
                            {child.label}
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
                href={link.href!}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-sm",
                  "hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                  pathname === link.href ? "text-brand-gold" : "text-brand-black"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="https://cmt3.research.microsoft.com/ICAAD2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 px-5 text-sm font-bold bg-brand-gold text-brand-black hover:bg-brand-goldDark transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
          >
            Submit Paper
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-6 flex flex-col gap-2 lg:hidden shadow-soft max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            {conferenceData.navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-brand-border/60 last:border-0 pb-2 mb-1 last:mb-0 last:pb-0">
                {link.children ? (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold pt-2 mb-1">{link.label}</span>
                    <div className="flex flex-col">
                      {link.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-base py-2.5 pl-4 border-l-2 transition-colors",
                            pathname === child.href
                              ? "text-brand-black border-brand-gold font-medium"
                              : "text-brand-blackLight border-brand-border hover:text-brand-black hover:border-brand-gold"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-3 block transition-colors",
                      pathname === link.href ? "text-brand-gold" : "text-brand-black hover:text-brand-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://cmt3.research.microsoft.com/ICAAD2026"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-11 px-5 text-sm font-bold bg-brand-gold text-brand-black hover:bg-brand-goldDark transition-all"
            >
              Submit Paper
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
