"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { locales, Locale } from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";

const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  ru: "Русский",
  ar: "العربية",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.lang as Locale) || "en";
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to generate the path for a new locale
  const getLocalizedPath = (locale: string) => {
    if (!pathname) return `/${locale}`;
    // Replace the current locale at the start of the path
    return pathname.replace(/^\/[^\/]+/, `/${locale}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-colors rounded-sm text-brand-black hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold border border-brand-border/60 hover:border-brand-gold/60 bg-white/80"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={15} className="text-brand-gold shrink-0" />
        <span className="uppercase tracking-wider">{currentLocale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 ltr:right-0 rtl:left-0 top-full mt-1.5 bg-white border border-brand-border shadow-lg min-w-[140px] py-1.5 flex flex-col overflow-hidden z-[70] rounded-sm"
          >
            <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-gold" aria-hidden />
            {locales.map((loc) => (
              <Link
                key={loc}
                href={getLocalizedPath(loc)}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-3.5 py-2 text-xs sm:text-sm transition-colors border-l-2 text-left rtl:text-right",
                  currentLocale === loc
                    ? "text-brand-black border-brand-gold bg-brand-goldLight/60 font-semibold"
                    : "text-brand-blackLight border-transparent hover:text-brand-black hover:border-brand-gold hover:bg-brand-goldLight/30"
                )}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
