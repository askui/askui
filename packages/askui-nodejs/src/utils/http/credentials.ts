export class Credentials {
  constructor(
    private token: string,
  ) { }

  get base64Encoded(): string {
    return this.buffered.toString('base64');
  }

  private get buffered(): Buffer {
    return Buffer.from(`${this.token}`);
  }
}
