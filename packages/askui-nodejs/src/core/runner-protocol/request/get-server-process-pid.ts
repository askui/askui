import { RunnerProtocolRequest } from './runner-protocol-request';

export class GetProcessPidRequest implements RunnerProtocolRequest {
  static msgName = 'GET_PROCESS_PID_REQUEST';

  msgName: string = GetProcessPidRequest.msgName;
}
