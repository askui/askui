export interface CredentialArgs {
  workspaceId: string,
  token: string,
}

export class Credentials {
  constructor(
    private credentials: CredentialArgs,
  ) { }

  get base64Encoded(): string {
    return this.buffered.toString('base64');
  }

  private get buffered(): Buffer {
    return Buffer.from(`${this.credentials.token}`);
  }
}
