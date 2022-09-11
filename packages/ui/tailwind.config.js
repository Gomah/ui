module.exports = {
  content: ['./src/**/*.{js,ts,css,jsx,tsx}'],
  theme: {
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
