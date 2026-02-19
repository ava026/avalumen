import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        border: "#1e1e1e",
        muted: "#3a3a3a",
        subtle: "#6b6b6b",
        body: "#c8c8c8",
        heading: "#f0f0f0",
        lumen: "#F0A500",
        "lumen-dim": "#b07800",
        "lumen-glow": "rgba(240,165,0,0.12)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 8vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "title": ["clamp(1.5rem, 4vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
