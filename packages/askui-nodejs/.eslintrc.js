module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
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
        '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }]
    }
};