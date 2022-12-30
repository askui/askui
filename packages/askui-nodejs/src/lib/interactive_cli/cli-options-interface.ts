export interface CliOptions {
  workspaceId: string,
  accessToken: string,
  progLanguage: 'typescript',
  testFramework: 'jasmine' | 'jest',
  usingProxy: boolean,
  addTsConfig: boolean,

}
