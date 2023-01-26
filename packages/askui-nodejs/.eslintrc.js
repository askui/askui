module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    curly: 'error',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'import/extensions': ['error', { ts: 'never' }],
      },
    },
    {
      files: ['example_projects_templates/**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
