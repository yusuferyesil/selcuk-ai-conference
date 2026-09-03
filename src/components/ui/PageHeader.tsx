"use client"
import { MotionDiv, fadeUpVariant } from "@/components/ui/MotionDiv"

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    /*
     * IMPORTANT: absolute-positioned decorators (girih pattern, gold bar) are
     * direct children of this <section>, so they position relative to <section>
     * — NOT relative to an inner container that also holds text content.
     * This prevents the gold bar from overlapping the eyebrow text.
     */
    <section className="bg-brand-black border-b border-brand-border relative overflow-hidden py-16 md:py-24">
      {/* Full-width decorative gold bar — anchored to the TOP of the section */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldDark" aria-hidden />

      {/* Girih diamond-lattice overlay */}
      <div className="absolute inset-0 bg-girih-gold opacity-60 pointer-events-none" aria-hidden />

      {/* Content container — completely separate from the decorative absolute elements */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
        <MotionDiv variants={fadeUpVariant} className="max-w-3xl">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gold border-l-2 border-brand-gold pl-3 mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed mt-6">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </MotionDiv>
      </div>
    </section>
  )
}
