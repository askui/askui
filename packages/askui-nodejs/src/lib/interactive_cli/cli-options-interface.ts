export interface CliOptions {
  accessToken: string,
  automationsDirectory: string,
  operatingSystem: 'windows' | 'linux' | 'macos',
  skipCredentials: boolean,
  testFramework: 'jest',
  typescriptConfig: boolean,
  workspaceId: string,
}
