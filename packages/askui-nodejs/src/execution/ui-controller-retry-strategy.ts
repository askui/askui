export interface RetryStrategy {
  baseDelayMs: number;
  retryCount: number;
  getDelay(attempt: number): number;
}
