/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep navy blue — dominant brand color
          900: '#0a1a3b',
          800: '#102d5c',
          700: '#163d7c',
          600: '#1e4f9e',
          // Medium blue
          500: '#2a63bf',
          400: '#4a86d6',
          // Light blue
          300: '#7daeed',
          200: '#b3d0f4',
          100: '#e3eefb',
          50: '#f4f8fd',
        },
        gold: {
          600: '#b8860b',
          500: '#d4a017',
          400: '#e6b545',
          300: '#f0cd7a',
          200: '#f7e3b0',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
