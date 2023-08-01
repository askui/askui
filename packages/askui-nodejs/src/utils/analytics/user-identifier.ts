import { machineId } from 'node-machine-id';
import { UserIdentifierInterface } from './user-identifier-interface';
import { logger } from '../../lib';

export class UserIdentifier implements UserIdentifierInterface {
  // eslint-disable-next-line class-methods-use-this
  async userId(): Promise<string> {
    try {
      return await machineId();
    } catch (error) {
      logger.debug("Can't retrieve user id!", error);
      return Promise.resolve('undefined');
    }
  }
}
