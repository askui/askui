import { ServerHttpClientError } from './server-http-client-error';
import { AuthenticationHttpClientError } from './authentication-http-client-error';
import { ClientHttpClientError } from './client-http-client-error';
import { HttpClientError } from './http-client-error';
import { UnkownHttpClientError } from './unkown-http-client-error';

export { GeneralHttpClientError } from './general-http-client-error';

export function httpClientErrorHandler(
  responseCode: number,
  errorMessage: string,
): HttpClientError {
  const diplayedMessage = `response code: ${responseCode}. Message:${errorMessage}`;
  if (responseCode >= 400 && responseCode < 500) {
    if (responseCode === 401 || responseCode === 403) {
      return new AuthenticationHttpClientError(diplayedMessage);
    }
    return new ClientHttpClientError(diplayedMessage);
  }
  if (responseCode >= 500 && responseCode < 600) {
    return new ServerHttpClientError(diplayedMessage);
  }
  return new UnkownHttpClientError(diplayedMessage);
}
