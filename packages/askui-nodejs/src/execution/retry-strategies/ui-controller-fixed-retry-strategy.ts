import { RetryStrategy } from '../retry-strategy';

/**
 * FixedRetryStrategy implements a retry strategy that uses a constant delay for each retry attempt.
 */
export class FixedRetryStrategy implements RetryStrategy {
  baseDelayMs: number;

  retryCount: number;

  /**
   * @param baseDelayMs - The constant delay before each retry (default is 1000ms)
   * @param retryCount - The maximum number of retries (default is 3)
   */
  constructor(baseDelayMs = 1000, retryCount = 3) {
    this.baseDelayMs = baseDelayMs;
    this.retryCount = retryCount;
  }

  /**
   * Returns the fixed delay for each retry attempt.
   * @param _attempt - The current retry attempt number (not used in this strategy)
   * @returns The fixed delay in milliseconds for the current attempt
   */
  getDelay(_attempt: number): number {
    return this.baseDelayMs;
  }
}
