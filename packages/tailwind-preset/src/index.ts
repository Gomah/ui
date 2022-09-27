const defaultTokens = require('@acme/tokens');

module.exports = function AcmeTailwindPreset({ tokens = defaultTokens } = {}) {
  // TODO: Merge tokens with defaultTokens
  return {
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
  }
}


