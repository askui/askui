import got, { OptionsOfJSONResponseBody } from 'got';
import { Credentials, CredentialArgs } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private credentials: Credentials | undefined;

  constructor(private credential?: CredentialArgs) {
    this.credentials = this.credential ? new Credentials(this.credential) : undefined;
  }

  private get headers() {
    return {
      Authorization: `Basic ${this.credentials?.base64Encoded}`,
    };
  }

  private injectAuthHeader(options: OptionsOfJSONResponseBody) {
    return this.credentials ? { ...options, headers: this.headers } : options;
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
