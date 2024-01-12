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
    },
  },
  plugins: [],
};
