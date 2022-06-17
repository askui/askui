import got, { OptionsOfJSONResponseBody } from 'got';
import { Credentials, CredentialArgs } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private headers: Record<string, string> = {};

  constructor(
    readonly credentialArgs?: CredentialArgs,
    readonly customHeaders?: Record<string, string>,
  ) {
    this.initHeaders(credentialArgs, customHeaders);
  }

  private initHeaders(credentialArgs?: CredentialArgs, customHeaders: Record<string, string> = {}) {
    const credentials = credentialArgs ? new Credentials(credentialArgs) : undefined;
    this.headers = {
      ...(credentials ? { Authorization: `Basic ${credentials?.base64Encoded}` } : {}),
      ...customHeaders,
    };
  }

  private injectHeaders(options: OptionsOfJSONResponseBody) {
    return { ...options, headers: this.headers };
  }

  async post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T> {
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
