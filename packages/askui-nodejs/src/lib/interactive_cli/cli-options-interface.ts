export interface CliOptions {
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  progLanguage: 'typescript',
  testFramework: 'jasmine' | 'jest',
  usingProxy: boolean,
  typescriptConfig: boolean,
}
