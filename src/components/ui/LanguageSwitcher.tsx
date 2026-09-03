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
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-sm text-brand-black hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span className="uppercase">{currentLocale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white border border-brand-border shadow-soft min-w-[140px] py-2 flex flex-col overflow-hidden z-50"
          >
            <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-gold" aria-hidden />
            {locales.map((loc) => (
              <Link
                key={loc}
                href={getLocalizedPath(loc)}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm transition-colors border-l-2",
                  currentLocale === loc
                    ? "text-brand-black border-brand-gold bg-brand-goldLight/60 font-medium"
                    : "text-brand-blackLight border-transparent hover:text-brand-black hover:border-brand-gold hover:bg-brand-goldLight/40"
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
