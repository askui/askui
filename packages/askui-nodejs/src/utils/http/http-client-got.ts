import got, {
  ExtendOptions,
  Got,
  OptionsOfJSONResponseBody,
  RequestError,
  TimeoutError,
} from 'got';
import { CookieJar } from 'tough-cookie';
import http from 'http';
import https from 'https';
import { logger } from '../../lib';
import { Credentials } from './credentials';
import { httpClientErrorHandler } from './custom-errors';

export class HttpClientGot {
  private headers: Record<string, string> = {};

  private askuiGot: Got;

  urlsToRetry: string[] = [];

  constructor(
    readonly token?: string,
    readonly customHeaders?: Record<string, string>,
    private readonly cookies: Record<string, string> = {},
    readonly proxyAgents?: { http: http.Agent; https: https.Agent },
  ) {
    this.initHeaders(token, customHeaders);
    const gotExtendOptions = this.buildGotExtendOptions(proxyAgents);
    this.askuiGot = got.extend(gotExtendOptions);
  }

  private buildGotExtendOptions(
    proxyAgents?: { http: http.Agent; https: https.Agent } | undefined,
  ): ExtendOptions {
    const gotExtendOptions: ExtendOptions = {
      retry: {
        limit: 5,
        methods: ['POST', 'GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
        statusCodes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
        errorCodes: [
          'ETIMEDOUT',
          'ECONNRESET',
          'EADDRINUSE',
          'ECONNREFUSED',
          'EPIPE',
          'ENOTFOUND',
          'ENETUNREACH',
          'EAI_AGAIN',
        ],
        calculateDelay: ({
          attemptCount,
          retryOptions,
          error,
          computedValue,
        }) => {
          if (
            attemptCount > retryOptions.limit
            || !this.shouldRetryOnError(error)
          ) {
            return 0;
          }

          if (
            error.response !== undefined
            && error.response.headers['retry-after'] === undefined
          ) {
            logger.debug(`Request to ${error.request?.requestUrl} failed with status code ${error.response?.statusCode}.\n${error.message}\nRetrying... (attempt ${attemptCount})`);
            return Math.min(
              1000 * 2 ** (attemptCount - 1) + Math.random() * 100,
              Number.MAX_SAFE_INTEGER,
            );
          }

          logger.debug(`Request to ${error.request?.requestUrl} failed.\n${error.message}\nRetrying... (attempt ${attemptCount})`);
          return computedValue;
        },
      },
    };
    if (proxyAgents) {
      gotExtendOptions.agent = proxyAgents;
    }
    return gotExtendOptions;
  }

  private shouldRetryOnError(error: TimeoutError | RequestError): boolean {
    return (
      error.request?.options.method !== 'POST'
      || this.shouldRetryPostRequest(error.request)
    );
  }

  private shouldRetryPostRequest(
    request: { requestUrl: string } | undefined,
  ): boolean {
    return (
      request !== undefined && this.urlsToRetry.includes(request.requestUrl)
    );
  }

  private initHeaders(
    token?: string,
    customHeaders: Record<string, string> = {},
  ) {
    const credentials = token ? new Credentials(token) : undefined;
    this.headers = {
      ...(credentials
        ? { Authorization: `Basic ${credentials?.base64Encoded}` }
        : {}),
      ...customHeaders,
    };
  }

  private injectHeadersAndCookies(
    url: string,
    options: OptionsOfJSONResponseBody,
  ) {
    const cookieJar = new CookieJar();
    Object.keys(this.cookies)
      .map((key) => `${key}=${this.cookies[key]}`)
      .forEach((cookie) => {
        cookieJar.setCookieSync(cookie, url);
      });
    return { ...options, headers: this.headers, cookieJar };
  }

  async post<T>(
    url: string,
    data: Record<string | number | symbol, unknown>,
  ): Promise<{ headers: http.IncomingHttpHeaders; body: T }> {
    const options = this.injectHeadersAndCookies(url, {
      json: data,
      responseType: 'json',
      throwHttpErrors: false,
    });
    const { body, statusCode, headers } = await this.askuiGot.post<T>(
      url,
      options,
    );
    if (headers['deprecation'] !== undefined) {
      logger.warn(headers['deprecation']);
    }
    if (statusCode !== 200) {
      throw httpClientErrorHandler(statusCode, JSON.stringify(body));
    }
    return { headers, body };
  }

  async get<T>(
    url: string,
    options: OptionsOfJSONResponseBody = { responseType: 'json' },
  ): Promise<T> {
    const response = await this.askuiGot.get<T>(
      url,
      this.injectHeadersAndCookies(url, options),
    );
    return response.body;
  }
}
