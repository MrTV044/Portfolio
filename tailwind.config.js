/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "src/index.css",
    "src/main.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["bebas neue", "sans serif"],
        "manrope": ["manrope", "sans serif"],
      },
    },
  },
  plugins: [],
};
