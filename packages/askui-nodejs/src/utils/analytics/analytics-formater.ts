import os from 'os';
import { AnalyticsFormaterInterface } from './analytics-formater-interface';
import { UserIdentifierInterface } from './user-identifier-interface';
import { UserIdentifier } from './user-identifier';

export class AnalyticsFormater implements AnalyticsFormaterInterface {
  // eslint-disable-next-line class-methods-use-this
  private get userIdentifier(): UserIdentifierInterface {
    return new UserIdentifier();
  }

  async getLibEnvironment(): Promise<string> {
    const userID: string = await this.userIdentifier.userId();
    return `user_id:${userID};os:${os.platform()};arch:${os.arch()}`;
  }
}
