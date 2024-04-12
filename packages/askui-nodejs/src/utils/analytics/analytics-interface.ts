import { Context } from '@/execution/context';

export interface AnalyticsInterface {
  getAnalyticsHeaders(context: Context): Promise<Record<string, string>>;
}
