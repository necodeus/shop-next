/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './modals/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        wildsand: '#f6f6f6',
      },
      colors: {
        mineshaft: '#3e3e3e',
      },
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      domine: ['Domine', 'sans-serif'],
    },
  },
  plugins: [],
}
