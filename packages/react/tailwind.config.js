/** @type {import('tailwindcss').Config} */

const tokens = require('@acme/tokens');

module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  theme: {
    extend: {
      ringWidth: {
        '1.5': '1.5px',
      },
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
