export interface AnalyticsInterface {
  getAnalyticsHeader(): Promise<Record<string, string>>;
}
