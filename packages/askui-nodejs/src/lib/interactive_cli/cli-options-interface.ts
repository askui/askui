export interface CliOptions {
  skipCredentials: boolean,
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  testFramework: 'jest',
  typescriptConfig: boolean,
}
