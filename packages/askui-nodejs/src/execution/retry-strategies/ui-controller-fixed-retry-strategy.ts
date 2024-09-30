import { RetryStrategy } from '../ui-controller-retry-strategy';

export class FixedRetryStrategy implements RetryStrategy {
  baseDelayMs: number;

  retryCount: number;

  constructor(baseDelayMs = 1000, retryCount = 3) {
    this.baseDelayMs = baseDelayMs;
    this.retryCount = retryCount;
  }

  getDelay(_attempt: number): number {
    return this.baseDelayMs;
  }
}
