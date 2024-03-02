module.exports = {
  extends: [
    require.resolve('./browser'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'prettier',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  overrides: [
    {
      files: ['*.css.ts', '*.tsx'],
      rules: {
        'unicorn/filename-case': 'off',
        // TODO: Enable this rule on next unicorn release https://github.com/sindresorhus/eslint-plugin-unicorn/releases
        /*'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
            //: false,
          },
        ],*/
      },
    },
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'warn',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-leaked-render': 'warn',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
      },
    ],
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-unstable-nested-components': 'error',
    'react/self-closing-comp': 'warn',
    'jsx-a11y/no-onchange': 'off',
  },
};
