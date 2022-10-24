module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['next', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        endOfLine: 'lf',
        tabWidth: 2,
        useTabs: false,
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
};
