import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  sandboxInjectedGlobals: [
    'Math',
  ],
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  testEnvironment: 'allure-jest/node',
};

// eslint-disable-next-line import/no-default-export
export default config;
