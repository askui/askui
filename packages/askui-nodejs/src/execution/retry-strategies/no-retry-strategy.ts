import { RetryStrategy } from './retry-strategy';

/**
 * NoRetryStrategy implements a retry strategy that does not perform any retries.
 * It is useful when you want to disable retries for certain operations.
 */
export class NoRetryStrategy implements RetryStrategy {
  baseDelayMs = 0;

  retryCount = 0;

  /**
   * Always returns 0 delay, as no retries are performed.
   * @param _attempt - The current retry attempt number (not used in this strategy)
   * @returns The delay in milliseconds for the current attempt (always 0)
   * @remarks This method is not used, but it's required by the RetryStrategy interface.
   */
  getDelay(_attempt: number): number {
    return this.baseDelayMs;
  }
}
