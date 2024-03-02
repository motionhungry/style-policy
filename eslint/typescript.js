/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
      ],
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
    },
  ],
};
