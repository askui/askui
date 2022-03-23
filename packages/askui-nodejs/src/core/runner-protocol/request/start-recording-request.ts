import { RunnerProtocolRequest } from './runner-protocol-request';

export class StartRecordingRequest implements RunnerProtocolRequest {
  static msgName = 'START_RECORDING_REQUEST';

  msgName: string = StartRecordingRequest.msgName;
}
