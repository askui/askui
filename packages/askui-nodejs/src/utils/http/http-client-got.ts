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

function buildRetryLog(
  requestUrl: string | undefined,
  errorCode: string | undefined,
  statusCode: number | undefined,
  errorMessage: string | undefined,
  delayInMs: number,
  delayReason: 'retry-after header' | 'exponential backoff',
  attemptCount: number,
): string {
  const failureReasons = [];
  if (statusCode !== undefined && statusCode >= 400) {
    failureReasons.push(`status code ${statusCode}`);
  }
  if (errorCode !== undefined) {
    failureReasons.push(`error code ${errorCode}`);
  }
  if (failureReasons.length === 0) {
    failureReasons.push('unknown error');
  }
  const requestText = requestUrl ? `Request to ${requestUrl}` : 'Request';
  return (
    `${requestText} failed with ${failureReasons.join(', ')}.`
    + ` Retrying in ${delayInMs} ms... (based on ${delayReason}; attempt ${attemptCount})`
    + `\nFull message:\n${errorMessage}`
  );
}

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
        calculateDelay: ({
          attemptCount,
          retryOptions,
          error,
          retryAfter,
        }): number | Promise<number> => {
          if (!this.shouldRetryOnError(error)) {
            return 0;
          }

          if (attemptCount > retryOptions.limit) {
            return 0;
          }

          const hasMethod = retryOptions.methods.includes(error.options.method);
          const hasErrorCode = retryOptions.errorCodes.includes(error.code);
          const hasStatusCode = error.response
            && retryOptions.statusCodes.includes(error.response.statusCode);
          if (!hasMethod || (!hasErrorCode && !hasStatusCode)) {
            return 0;
          }

          if (error.response) {
            if (retryAfter) {
              if (
                retryOptions.maxRetryAfter === undefined
                || retryAfter > retryOptions.maxRetryAfter
              ) {
                return 0;
              }

              logger.debug(
                buildRetryLog(
                  error.request?.requestUrl,
                  error.code,
                  error.response.statusCode,
                  error.message,
                  retryAfter,
                  'retry-after header',
                  attemptCount,
                ),
              );
              return retryAfter;
            }

            if (error.response.statusCode === 413) {
              return 0;
            }
          }

          const baseDelayInMs = 1000;
          const noiseToPreventCollisions = Math.random() * 100;
          const delayInMs = Math.min(
            2 ** (attemptCount - 1) * baseDelayInMs + noiseToPreventCollisions,
            Number.MAX_SAFE_INTEGER,
          );
          logger.debug(
            buildRetryLog(
              error.request?.requestUrl,
              error.code,
              error.response?.statusCode,
              error.message,
              delayInMs,
              'retry-after header',
              attemptCount,
            ),
          );
          return delayInMs;
        },
        limit: 5,
        maxRetryAfter: 10 * 60,
        methods: ['POST', 'GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
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
    return { ...options, cookieJar, headers: this.headers };
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
    return { body, headers };
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
