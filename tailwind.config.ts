import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gulf Coast Academy official brand colors
        navy: {
          DEFAULT: "#001A70",
          950: "#00092E", // "Deep Space" — darkest, for gradients/depth
          900: "#001033",
          800: "#001A70", // brand navy
          700: "#0A2A8C",
          100: "#E7EAF6", // tinted background for light sections
          50: "#F4F6FC",
        },
        green: {
          DEFAULT: "#5BC500",
          600: "#4CA300", // hover/darker
          400: "#5BC500", // brand green
          200: "#C7ECA0",
          100: "#E9F8DC",
        },
        steel: {
          DEFAULT: "#7E7E82",
          700: "#5C5C60",
          500: "#7E7E82", // brand grey
          300: "#B5B5B9",
          100: "#E5E5E7",
        },
      },
      fontFamily: {
        // Stand-ins for licensed Adobe fonts (Apotek Wide Black / Eurostile Medium)
        // that cannot be loaded via CDN — chosen for the same wide, geometric,
        // engineering/blueprint character.
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"], // Apotek Wide Black stand-in
        heading: ["var(--font-heading)", "Arial", "sans-serif"], // Eurostile Medium stand-in
        body: ["Bahnschrift", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "trace-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
