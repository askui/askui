import got, { Got, OptionsOfJSONResponseBody } from 'got';
import { CookieJar } from 'tough-cookie';
import http from 'http';
import https from 'https';
import { logger } from '../../lib';
import { Credentials } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private headers: Record<string, string> = {};

  private askuiGot: Got;

  constructor(
    readonly token?: string,
    readonly customHeaders?: Record<string, string>,
    private readonly cookies: Record<string, string> = {},
    readonly proxyAgents?: { http: http.Agent, https: https.Agent },
  ) {
    this.initHeaders(token, customHeaders);
    this.askuiGot = got.extend(proxyAgents ? { agent: proxyAgents } : {});
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
    const { body, statusCode, headers } = await this.askuiGot.post<T>(url, options);
    if (headers['deprecation'] !== undefined) {
      logger.warn(headers['deprecation']);
    }
    if (statusCode !== 200) {
      throw httpClientErrorHandler(
        statusCode,
        JSON.stringify(body),
      );
    }
    return body;
  }

  async get<T>(url: string, options: OptionsOfJSONResponseBody = { responseType: 'json' }): Promise<T> {
    const response = await this.askuiGot.get<T>(url, this.injectHeadersAndCookies(url, options));
    return response.body;
  }
}
