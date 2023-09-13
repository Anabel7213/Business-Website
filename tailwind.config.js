/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto Condensed", "sans-serif"],
        "stalinist": ["Stalinist One", "cursive"],
        "teko": ["Teko", "sans-serif"],
        "unica": ["Unica One", "cursive"]
      }
    },
    colors: {
      "accent": "#BFB3A6",
      "background": "#F6F6F6",
      "white": "#FFFFFF",
      "hover": "#BEA785",
      "black": "#000000"
    }
  },
  plugins: [],
}

