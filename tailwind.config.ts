import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Selçuk University Corporate Palette ──────────────────
          black: "#1A1208",          // Near-black with warm undertone (logo ink)
          blackLight: "#4A3F28",     // Secondary warm brown text
          gray: "#9E9282",           // Muted text on dark surfaces
          // Gold — Selçuk University signature colour
          gold: "#D4A700",           // Pure institutional gold (logo circle)
          goldDark: "#A87F00",       // Hover / deep gold
          goldLight: "#FFF8DC",      // Pale gold tint for surfaces
          // Accent — rich Seljukid burgundy-crimson for high-visibility CTAs
          accent: "#8B1A1A",         // Seljuk crimson — heritage red
          accentDark: "#5C0F0F",     // Pressed / hover state
          accentLight: "#FDF0F0",    // Pale crimson tint
          // Surfaces
          deep: "#1A1208",           // Same as black — richly dark footer/hero
          deepMid: "#2B220D",        // Slightly lighter dark for layering
          bg: "#FFFFFF",
          surface: "#FDFBF5",        // Warm white — parchment tone
          border: "#E8DFC8",         // Warm cream border (golden undertone)
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(26, 18, 8, 0.12)",
        premium: "0 4px 24px -4px rgba(26, 18, 8, 0.08)",
        gold: "0 0 0 3px rgba(212, 167, 0, 0.30), 0 8px 28px -6px rgba(26, 18, 8, 0.22)",
        glow: "0 0 0 4px rgba(212, 167, 0, 0.20), 0 10px 30px -8px rgba(26, 18, 8, 0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
