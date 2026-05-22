/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#1a1a24",
        },
        accent: {
          DEFAULT: "#7c6ff7",
          2: "#a78bfa",
          3: "#c4b5fd",
        },
        muted: "#8b88b0",
        border: "rgba(124,111,247,0.18)",
        card: "rgba(26,26,36,0.9)",
      },
      animation: {
        fadeUp: "fadeUp 0.65s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
