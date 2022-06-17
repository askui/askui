import os from 'os';
import { AnalyticsInterface } from './analytics-interface';
import { UserIdentifierInterface } from './user-identifier-interface';
import { UserIdentifier } from './user-identifier';

export class Analytics implements AnalyticsInterface {
  private userIdentifier: UserIdentifierInterface = new UserIdentifier();

  async getAnalyticsHeaders(): Promise<Record<string, string>> {
    const userID = await this.userIdentifier.userId();
    return {
      'askui-user-id': userID,
      'askui-user-agen': `os:${os.platform()};arch:${os.arch()}`,
    };
  }
}
