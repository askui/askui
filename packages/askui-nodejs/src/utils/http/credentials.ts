export interface CredentialArgs {
  tenant: string,
  email: string,
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
    return Buffer.from(`${this.userName}:${this.credentials.token}`);
  }

  private get userName(): string {
    return `${this.credentials.tenant}|${this.credentials.email}`;
  }
}
