export interface CliOptions {
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  usingProxy: boolean,
  typescriptConfig: boolean,
}
