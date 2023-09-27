/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/e2e',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
};
