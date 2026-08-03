import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'dark' | 'gold' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-brand-gold text-brand-black hover:bg-brand-goldDark shadow-sm hover:shadow-gold",
      dark: "bg-brand-black text-white hover:bg-brand-deepMid border border-brand-black/80",
      gold: "bg-brand-gold text-brand-black hover:bg-brand-goldDark shadow-sm",
      outline: "border-2 border-brand-gold text-brand-black hover:bg-brand-gold/10 bg-transparent",
      ghost: "hover:bg-brand-goldLight text-brand-black",
      link: "text-brand-gold underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-5",
      sm: "h-9 px-3",
      lg: "h-12 px-8",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
