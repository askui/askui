module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        createDefaultProgram: true,
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'import/extensions': ['error', { ts: 'never' }],
        'import/no-extraneous-dependencies': ['error', { optionalDependencies: true }],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    curly: 'error',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 3, natural: false }],
  },
};
