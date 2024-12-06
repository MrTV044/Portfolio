/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["bebas neue", "sans serif"],
        manrope: ["manrope", "sans serif"],
      },
    },
  },
  plugins: [],
};
