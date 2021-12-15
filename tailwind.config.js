const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textIndent: { // defaults to {}
      '1': '0.25rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '12':'3rem',
    },
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
      spacing: {
        '144': '48rem',
      },
      fontFamily: {
        Cormorant: "'Cormorant Garamond', serif",
        Montserrat: "'Montserrat', sans-serif;"
      },
    },
  },
  variants: {
    textIndent: ['responsive'],
    extend: {},
  },
  plugins: [
    require('tailwindcss-typography')(),
  ],
}
