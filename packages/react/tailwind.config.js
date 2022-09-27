/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  presets: [
    require('@acme/tailwind-preset')()
  ]
};
