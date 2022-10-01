/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  theme: {
    // TODO: Only have this for ladle
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
  },
  presets: [
    require('@acme/tailwind-preset')()
  ]
};
