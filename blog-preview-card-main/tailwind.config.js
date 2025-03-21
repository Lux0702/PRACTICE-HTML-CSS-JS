/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-350": "hsl(47, 88%, 63%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        "figtree-italic": ["Figtree-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
