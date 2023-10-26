import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: '@askui/jest-allure-circus',
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
