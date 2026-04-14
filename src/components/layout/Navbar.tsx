"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { conferenceData } from "@/data/conference"
import { Button } from "@/components/ui/Button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "glass border-b border-brand-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo/logo.png"
            alt="ICAID Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-brand-black leading-tight hidden md:block">
              ICAID
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {conferenceData.navLinks.map((link, idx) => (
            link.children ? (
              <div key={idx} className="relative group/nav">
                <button className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent flex items-center gap-1.5", 
                  link.children.some(child => pathname === child.href) ? "text-brand-accent" : "text-brand-blackLight"
                )}>
                  {link.label}
                  <ChevronDown size={14} className="opacity-50 group-hover/nav:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                  <div className="bg-white border border-brand-border shadow-premium rounded-sm min-w-[200px] py-2 flex flex-col relative before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-white before:border-t before:border-l before:border-brand-border before:rotate-45">
                    {link.children.map((child, cIdx) => (
                      <Link 
                        key={cIdx} 
                        href={child.href}
                        className={cn(
                          "px-5 py-2.5 text-sm font-medium transition-colors hover:text-brand-accent hover:bg-brand-surface relative z-10",
                          pathname === child.href ? "text-brand-accent bg-brand-surface/50" : "text-brand-blackLight"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                key={idx} 
                href={link.href!}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  pathname === link.href ? "text-brand-accent" : "text-brand-blackLight"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/registration">
            <Button variant="default" className="shadow-premium bg-brand-black text-white hover:bg-brand-blackLight">Register Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-surface border-b border-border p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {conferenceData.navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-brand-border/50 last:border-0 pb-1 mb-1 last:mb-0 last:pb-0">
                {link.children ? (
                  <div className="flex flex-col">
                    <span className="text-brand-black/40 font-bold uppercase tracking-widest text-[10px] mb-1 pt-2">{link.label}</span>
                    <div className="flex flex-col pl-4 border-l-2 border-brand-border/50 space-y-1 my-2">
                      {link.children.map((child, cIdx) => (
                        <Link 
                          key={cIdx} 
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors py-1.5",
                            pathname === child.href ? "text-brand-accent" : "text-brand-blackLight hover:text-brand-black"
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
                      "text-lg font-medium transition-colors py-3 block",
                      pathname === link.href ? "text-brand-accent" : "text-brand-blackLight hover:text-brand-black"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/registration" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <Button variant="default" className="w-full">Register Now</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
