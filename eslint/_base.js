require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['eslint-comments', 'import', 'unicorn'],
  rules: {
    // Import
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
    'import/no-mutable-exports': 'error',
    'import/no-relative-packages': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@modui/**',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Best Practices
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
    ],
    curly: ['warn', 'multi-line'],
    'default-case-last': 'error',
    'func-names': ['error', 'as-needed'],
    'grouped-accessor-pairs': 'error',
    'new-cap': ['error', { capIsNew: false }],
    'new-parens': 'warn',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error'],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-multi-assign': ['error'],
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-promise-executor-return': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-undef-init': 'warn',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'warn',
    'prefer-named-capture-group': 'error',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': 'error',
    yoda: 'warn',

    // ESLint Comments
    'eslint-comments/require-description': 'error',

    // ES6
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'symbol-description': 'error',

    // Unicorn
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prefer-node-protocol': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {},
    },
  },
};
