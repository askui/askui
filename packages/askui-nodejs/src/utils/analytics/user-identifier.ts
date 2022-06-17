import { machineId } from 'node-machine-id';
import { UserIdentifierInterface } from './user-identifier-interface';

export class UserIdentifier implements UserIdentifierInterface {
  // eslint-disable-next-line class-methods-use-this
  async userId(): Promise<string> {
    return machineId();
  }
}
