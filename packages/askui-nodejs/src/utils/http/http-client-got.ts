import got, { OptionsOfJSONResponseBody } from 'got';
import { Credentials, CredentialArgs } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private credentials: Credentials | undefined;

  private headers:Record<string, string> = {};

  constructor(
    private readonly credentialArgs?: CredentialArgs,
    private readonly customHeaders?: Record<string, string>,
  ) {
    this.credentials = this.credentialArgs ? new Credentials(this.credentialArgs) : undefined;
  }

  private defineHeaders() {
    if (this.credentialArgs) {
      this.injectIntoHeaders({ Authorization: `Basic ${this.credentials?.base64Encoded}` });
    }
    if (this.customHeaders) {
      this.injectIntoHeaders(this.customHeaders);
    }
  }

  private injectIntoHeaders(newObject: Record<string, string>) {
    this.headers = { ...this.headers, ...newObject };
  }

  private injectHeaders(options: OptionsOfJSONResponseBody) {
    return { ...options, headers: this.headers };
  }

  async post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T> {
    this.defineHeaders();
    const options = this.injectHeaders({ json: data, responseType: 'json', throwHttpErrors: false });
    const { body, statusCode } = await got.post<T>(url, options);
    if (statusCode !== 200) {
      throw httpClientErrorHandler(
        statusCode,
        JSON.stringify(body),
      );
    }
    return body;
  }

  async get<T>(url: string, options: OptionsOfJSONResponseBody = { responseType: 'json' }): Promise<T> {
    const response = await got.get<T>(url, this.injectHeaders(options));
    return response.body;
  }
}
