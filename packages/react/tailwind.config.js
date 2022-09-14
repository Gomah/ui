/** @type {import('tailwindcss').Config} */

const tokens = require('@acme/tokens');

module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
      },
      boxShadow: {
        ...tokens.shadows,
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
