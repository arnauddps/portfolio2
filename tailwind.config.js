/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Désactive le reset de Tailwind pour que tes cartes (Cards.js) 
    // retrouvent leur style d'origine
    preflight: false, 
  },
  plugins: [],
}