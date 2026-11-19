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
        "warm-ivory": "#FAF8F3",
        "natural-oak": "#B88B5D",
        "brand-green": "#91C43C",
        "brand-blue": "#2875C7",
        charcoal: "#242824",
        "gold-accent": "#B89B58",
        "soft-beige": "#E8DFD2",
        "leaf-dark": "#336A29",
        "leaf-light": "#EAEF9D",
      },
      backgroundImage: {
        "leaf-gradient": "linear-gradient(135deg, #EAEF9D 0%, #336A29 100%)",
        "leaf-gradient-dark": "linear-gradient(135deg, #336A29 0%, #EAEF9D 100%)",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
