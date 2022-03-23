import got, { OptionsOfJSONResponseBody } from 'got';
import { Credentials } from './credentials';

export class HttpClientGot {
  constructor(private credentials?: Credentials) { }

  private get headers() {
    return {
      Authorization: `Basic ${this.credentials?.base64Encoded}`,
    };
  }

  private injectAuthHeader(options: OptionsOfJSONResponseBody) {
    return this.credentials ? { ...options, headers: this.headers } : options;
  }

  async post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T> {
    const options = this.injectAuthHeader({ json: data, responseType: 'json' });
    const response = await got.post<T>(url, options);
    return response.body;
  }

  async get<T>(url: string, options: OptionsOfJSONResponseBody = { responseType: 'json' }): Promise<T> {
    const response = await got.get<T>(url, this.injectAuthHeader(options));
    return response.body;
  }
}
