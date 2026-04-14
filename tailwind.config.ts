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
          black: "#27251F",     // Pantone Process Black C 100%
          blackLight: "#55524B",// Lighter for body text readability
          gray: "#B1B3B3",      // Pantone Process Black C 30%
          accent: "#FFC72C",    // Pantone 123 C
          accentLight: "#FFF5D1",// Very pale text/bg accents
          bg: "#FFFFFF",        // Pure white background
          surface: "#FAFBFC",   // Clean off-white surface
          border: "#E9EBEB",    // Light border based on 30% black
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(39, 37, 31, 0.08)',
        'premium': '0 4px 20px -2px rgba(39, 37, 31, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
