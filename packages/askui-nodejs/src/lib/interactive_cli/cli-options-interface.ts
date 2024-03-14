export interface CliOptions {
  accessToken: string,
  operatingSystem: 'windows' | 'linux' | 'macos',
  projectName: string,
  skipCredentials: boolean,
  testFramework: 'jest',
  typescriptConfig: boolean,
  workspaceId: string,
}
