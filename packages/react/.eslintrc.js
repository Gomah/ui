module.exports = {
  ...require('@acme/eslint-config-custom'),
  parserOptions: {
    parser: '@typescript-eslint/parser',
    useJSXTextNode: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
