export interface CliOptions {
  workspaceId: string,
  accessToken: string,
  testFramework: 'jasmine' | 'jest',
  usingProxy: boolean,
  typescriptConfig: boolean,
}
