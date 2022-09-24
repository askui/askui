import got, { OptionsOfJSONResponseBody } from 'got';
import { CookieJar } from 'tough-cookie';
import { Credentials } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private headers: Record<string, string> = {};

  constructor(
    readonly token?: string,
    readonly customHeaders?: Record<string, string>,
    private readonly cookies: Record<string, string> = {},
  ) {
    this.initHeaders(token, customHeaders);
  }

  private initHeaders(token?: string, customHeaders: Record<string, string> = {}) {
    const credentials = token ? new Credentials(token) : undefined;
    this.headers = {
      ...(credentials ? { Authorization: `Basic ${credentials?.base64Encoded}` } : {}),
      ...customHeaders,
    };
  }

  private injectHeadersAndCookies(url: string, options: OptionsOfJSONResponseBody) {
    const cookieJar = new CookieJar();
    Object.keys(this.cookies).map((key) => `${key}=${this.cookies[key]}`).forEach((cookie) => {
      cookieJar.setCookieSync(cookie, url);
    });
    return { ...options, headers: this.headers, cookieJar };
  }

  async post<T>(url: string, data: Record<string | number | symbol, unknown>): Promise<T> {
    const options = this.injectHeadersAndCookies(url, { json: data, responseType: 'json', throwHttpErrors: false });
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
    const response = await got.get<T>(url, this.injectHeadersAndCookies(url, options));
    return response.body;
  }
}
