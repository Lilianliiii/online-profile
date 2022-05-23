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
        'neediegreen': '#39AEA9',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
