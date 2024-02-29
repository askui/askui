module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/e2e',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }],
  },
};
