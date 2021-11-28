const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        teal: colors.teal,
        aboutme: {
          light: '#F7F8F6',
          DEFAULT: '#E5D3B1',
          dark: '#009eeb',
        },
      },
      fontFamily: {
        Cormorant: "'Cormorant Garamond', serif",
        Montserrat: "'Montserrat', sans-serif;"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
