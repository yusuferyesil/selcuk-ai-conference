import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClass?: string;
  dark?: boolean;
}

export function Section({ children, className, containerClass, dark = false, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "py-20 md:py-32 relative", 
        dark ? "bg-brand-surface border-y border-brand-border" : "bg-transparent",
        className
      )} 
      {...props}
    >
      <div className={cn("container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  )
}
