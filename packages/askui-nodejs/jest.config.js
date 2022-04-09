/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/e2e',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
