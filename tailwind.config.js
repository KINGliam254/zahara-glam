/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#f7d6e0',
        'warm-beige': '#f2e2d2',
        'soft-nude': '#e8d0c3',
        accent: '#d48c9f',
        'dark-text': '#4a3e3e',
        'light-text': '#8a7e7e'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};