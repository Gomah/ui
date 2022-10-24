import { mergeDeepRight } from 'rambda';
import * as defaultTokens from '@acme/tokens';

module.exports = function AcmeTailwindPreset(
  { tokens = defaultTokens } = { tokens: defaultTokens }
) {
  const mergedTokens: typeof tokens = mergeDeepRight(defaultTokens, tokens);

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
