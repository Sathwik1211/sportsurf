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
        "ag-primary": "rgb(var(--ag-primary) / <alpha-value>)",
        "ag-secondary": "rgb(var(--ag-secondary) / <alpha-value>)",
        "ag-gold": "rgb(var(--ag-gold) / <alpha-value>)",
        "ag-bg": "rgb(var(--ag-bg) / <alpha-value>)",
        "ag-bg-alt": "rgb(var(--ag-bg-alt) / <alpha-value>)",
        "ag-text": "rgb(var(--ag-text) / <alpha-value>)",
        "ag-text-muted": "rgb(var(--ag-text-muted) / <alpha-value>)",
        "ag-border": "rgb(var(--ag-border) / <alpha-value>)",
        "ag-card": "rgb(var(--ag-card) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
