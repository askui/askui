import got, { OptionsOfJSONResponseBody } from 'got';
import { Credentials, CredentialArgs } from './credentials';
import { httpClientErrorHandler } from './custom-errors';
import { RequestHeaders } from './request-headers';

export class HttpClientGot {
  private credentials: Credentials | undefined;

  constructor(
    private readonly credentialArgs?: CredentialArgs,
    private readonly libEnvironment?: string,
  ) {
    this.credentials = this.credentialArgs ? new Credentials(this.credentialArgs) : undefined;
  }

  private get headers() {
    const headers: RequestHeaders = {};
    headers.AskuiLibEnvironment = '';
    if (this.credentialArgs) {
      headers.Authorization = `Basic ${this.credentials?.base64Encoded}`;
    }
    if (this.libEnvironment) {
      headers.AskuiLibEnvironment = this.libEnvironment;
    }
    return { ...headers };
  }

  private injectAuthHeader(options: OptionsOfJSONResponseBody) {
    return { ...options, headers: this.headers };
  }

  async post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T> {
    const options = this.injectAuthHeader({ json: data, responseType: 'json', throwHttpErrors: false });
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
    const response = await got.get<T>(url, this.injectAuthHeader(options));
    return response.body;
  }
}
