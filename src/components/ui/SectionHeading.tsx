import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {/* Eyebrow — gold left-border accent that can never overlap title */}
      <p className={cn(
        "font-mono text-xs uppercase tracking-[0.25em] text-brand-gold mb-4",
        align === "left" && "border-l-2 border-brand-gold pl-3"
      )}>
        {eyebrow}
      </p>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-[2.75rem] font-display font-medium tracking-tight leading-tight",
        dark ? "text-white" : "text-brand-black",
        description ? "mb-4" : "mb-0"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg font-light leading-relaxed mt-4", dark ? "text-brand-gray" : "text-brand-blackLight")}>
          {description}
        </p>
      )}
    </div>
  )
}
