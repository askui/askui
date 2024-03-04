export interface CliOptions {
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  testFramework: 'jest',
  usingProxy: boolean,
  typescriptConfig: boolean,
}
