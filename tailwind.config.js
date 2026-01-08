/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Match Figma design colors
        clara: {
          green: '#10B981', // Bright green for primary CTAs
          'green-light': '#D1FAE5', // Light green for secondary button
          dark: '#111827', // Dark blue/black for headers and dark buttons
          'dark-light': '#1F2937', // Slightly lighter dark
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

