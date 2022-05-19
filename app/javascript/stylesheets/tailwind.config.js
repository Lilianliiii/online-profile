const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Oxygen', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bbyblue': '#D6E5FA',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
