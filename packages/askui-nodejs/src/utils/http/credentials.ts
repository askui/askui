export interface CredentialsInterface {
  tenant: string,
  email: string,
  password: string,
}

export class Credentials {
  constructor(
    private credentials: CredentialsInterface,
  ) { }

  get base64Encoded(): string {
    return this.buffered.toString('base64');
  }

  private get buffered(): Buffer {
    return Buffer.from(`${this.userName}:${this.credentials.password}`);
  }

  private get userName(): string {
    return `${this.credentials.tenant}|${this.credentials.email}`;
  }
}
