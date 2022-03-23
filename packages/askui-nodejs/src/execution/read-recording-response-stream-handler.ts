import {
  ReadRecordingEndResponse,
  ReadRecordingPartResponse,
} from '../core/runner-protocol';

export class ReadRecordingResponseStreamHandler {
  videoChunks: string[] = [];

  constructor(
    private resolve: (
      value: ReadRecordingPartResponse | PromiseLike<ReadRecordingPartResponse>
    ) => void,
    private reject: (reason?: unknown) => void,
  ) { }

  onMessage(data: ReadRecordingPartResponse | ReadRecordingEndResponse) {
    if (data.msgName === 'READ_RECORDING_PART_RESPONSE') {
      this.videoChunks.push(data.data.video);
      return;
    }
    if (data.msgName === 'READ_RECORDING_END_RESPONSE') {
      this.resolve({
        msgName: 'READ_RECORDING_PART_RESPONSE',
        data: { video: this.videoChunks.join('') },
      });
      return;
    }
    this.reject(`Wrong message: ${data}`);
  }

  onError(err: unknown) { this.reject(err); }
}
