/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'png-black': '#000000',
        'png-red': '#CE1126',
        'png-gold': '#FFD700',
        'png-dark': '#1a1a1a',
        'png-light': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
