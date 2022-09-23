/** @type {import('tailwindcss').Config} */

const tokens = require('@acme/tokens');

module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  presets: [
    require('@acme/tailwind-preset')
  ]
};
