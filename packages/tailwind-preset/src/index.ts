import * as defaultTokens from '@acme/tokens';
import merge from 'ts-deepmerge';

module.exports = function AcmeTailwindPreset(
  { tokens = defaultTokens } = { tokens: defaultTokens }
) {
  const mergedTokens = merge(defaultTokens, tokens);

  return {
    theme: {
      extend: {
        ringWidth: {
          '1.5': '1.5px',
        },
        colors: {
          ...mergedTokens.colors,
        },
        boxShadow: {
          ...mergedTokens.shadows,
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };
};
