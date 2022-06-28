import os from 'os';
import { AnalyticsInterface } from './analytics-interface';
import { UserIdentifierInterface } from './user-identifier-interface';
import { UserIdentifier } from './user-identifier';
import { InstallationTimestamp } from './installation-timestamp';

export class Analytics implements AnalyticsInterface {
  private userIdentifier: UserIdentifierInterface = new UserIdentifier();

  async getAnalyticsHeaders(): Promise<Record<string, string>> {
    const userID = await this.userIdentifier.userId();
    const headers: Record<string, string> = {
      'askui-user-id': userID,
      'askui-user-agent': `os:${os.platform()};arch:${os.arch()}`,
    };

    const askuiInstalledAt = await InstallationTimestamp.get();
    if (askuiInstalledAt) {
      headers['askui-installed-at'] = askuiInstalledAt.toISOString();
    }

    return headers;
  }
}
