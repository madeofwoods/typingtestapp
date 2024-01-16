/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        16: "16px",
        3: "3px",
        1: "1px",
      },
      keyframes: {
        caret: {
          "0%, 100%": { backgroundColor: "rgb(127,127,127,0.35)" },
          "50%": { backgroundColor: "rgb(127,127,127,0.65)" },
        },
        flash: {
          "0%, 100%": { borderLeft: "1px solid rgb(127,127,127,1)" },
          "50%": { borderLeft: "1px solid rgb(127,127,127,0.3)" },
        },
        opactityLeft: {
          "0%": { opacity: "0.15" },
          "100%": { opacity: "0.4" },
        },
        opactityRight: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.6" },
        },
      },
      animation: {
        caret: "caret 1s ease-in-out infinite",
        flash: "flash 1s ease-in-out infinite",
        opactityLeft: "opactityLeft 0.6s ease-in-out forwards 0.1s",
        opactityRight: "opactityRight 1.2s ease-in-out forwards 0.8s",
      },
    },
  },
  plugins: [],
};
