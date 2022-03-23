export class Credentials {
  constructor(
    private tenant: string,
    private email: string,
    private password: string,
  ) {}

  get base64Encoded(): string {
    return this.buffered.toString('base64');
  }

  private get buffered(): Buffer {
    return Buffer.from(`${this.userName}:${this.password}`);
  }

  private get userName(): string {
    return `${this.tenant}|${this.email}`;
  }
}
