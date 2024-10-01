import { RetryStrategy } from './retry-strategy';

/**
 * LinearRetryStrategy implements a retry strategy that uses a linear backoff algorithm.
 */
export class LinearRetryStrategy implements RetryStrategy {
  baseDelayMs: number;

  retryCount: number;

  /**
   * @param baseDelayMs - The initial delay before the first retry (default is 1000ms)
   * @param retryCount - The maximum number of retries (default is 3)
   */
  constructor(baseDelayMs = 1000, retryCount = 3) {
    this.baseDelayMs = baseDelayMs;
    this.retryCount = retryCount;
  }

  /**
   * Calculates the delay for a given retry attempt using linear backoff.
   * @param attempt - The current retry attempt number (1-based)
   * @returns The delay in milliseconds for the current attempt
   */
  getDelay(attempt: number): number {
    return this.baseDelayMs * attempt;
  }
}
