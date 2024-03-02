/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./_base'),
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'tsdoc/syntax': 'error',
  },
};
