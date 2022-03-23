import { ControlCommand } from '../../ui-control-commands';
import { RunnerProtocolRequest } from './runner-protocol-request';

export class ControlRequest implements RunnerProtocolRequest {
  static msgName = 'CONTROL_REQUEST';

  msgName: string = ControlRequest.msgName;

  constructor(public controlCommand: ControlCommand) { }
}
