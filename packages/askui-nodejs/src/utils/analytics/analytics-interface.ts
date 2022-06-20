export interface AnalyticsInterface {
  getAnalyticsHeaders(): Promise<Record<string, string>>;
}
