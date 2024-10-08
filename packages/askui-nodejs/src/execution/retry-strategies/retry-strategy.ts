/**
 * Interface representing a retry strategy for operations.
 */
export interface RetryStrategy {
  /**
   * The base delay in milliseconds before the first retry.
   */
  baseDelayMs: number;

  /**
   * The maximum number of retry attempts.
   */
  retryCount: number;

  /**
   * Function to calculate the delay before the next retry attempt.
   * @param attempt - The current retry attempt number (0-based).
   * @returns The delay in milliseconds for the next retry.
   */
  getDelay(attempt: number): number;
}
