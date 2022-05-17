module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
        'class-methods-use-this': 'error',
        'import/prefer-default-export': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-console': 'warn',
        'no-continue': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'import/no-mutable-exports': 'off'
    }
};