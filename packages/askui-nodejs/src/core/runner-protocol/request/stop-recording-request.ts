import { RunnerProtocolRequest } from './runner-protocol-request';

export class StopRecordingRequest implements RunnerProtocolRequest {
  static msgName = 'STOP_RECORDING_REQUEST';

  msgName: string = StopRecordingRequest.msgName;
}
