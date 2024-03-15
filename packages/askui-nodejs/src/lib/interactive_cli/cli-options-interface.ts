export interface CliOptions {
  accessToken: string,
  askuiWorkflows: string,
  operatingSystem: 'windows' | 'linux' | 'macos',
  skipCredentials: boolean,
  testFramework: 'jest',
  typescriptConfig: boolean,
  workspaceId: string,
}
