const defaultTokens = require('@acme/tokens');

module.exports = function AcmeTailwindPreset({ tokens = defaultTokens } = { tokens: defaultTokens }) {
  // TODO: Merge tokens with defaultTokens
  return {
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
  }
}


