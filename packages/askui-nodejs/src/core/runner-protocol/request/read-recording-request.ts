import { RunnerProtocolRequest } from './runner-protocol-request';

export class ReadRecordingRequest implements RunnerProtocolRequest {
  static msgName = 'READ_RECORDING_REQUEST';

  msgName: string = ReadRecordingRequest.msgName;
}
