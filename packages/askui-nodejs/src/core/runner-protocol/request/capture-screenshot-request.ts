import { RunnerProtocolRequest } from './runner-protocol-request';

export class CaptureScreenshotRequest implements RunnerProtocolRequest {
  static msgName = 'CAPTURE_SCREENSHOT_REQUEST';

  msgName: string = CaptureScreenshotRequest.msgName;
}
