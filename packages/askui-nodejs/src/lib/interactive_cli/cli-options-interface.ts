export interface CliOptions {
  skipCredentials: boolean,
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  testFramework: 'jest',
  usingProxy: boolean,
  typescriptConfig: boolean,
}
