export interface RunnerProtocolResponse {
  data: { error?: string }
  msgName: string
}

export interface CaptureScreenshotFailureResponse extends RunnerProtocolResponse {
  data: { error: string }
  msgName: 'CAPTURE_SCREENSHOT_FAILURE_RESPONSE'
}

export interface CaptureScreenshotResponse extends RunnerProtocolResponse {
  data: { error?: string; image: string }
  msgName: 'CAPTURE_SCREENSHOT_RESPONSE'
}

export interface ControlFailureResponse extends RunnerProtocolResponse {
  data: { error: string }
  msgName: 'CONTROL_FAILURE_RESPONSE'
}

export interface ControlResponse extends RunnerProtocolResponse {
  data: { error?: string; msg: string }
  msgName: 'CONTROL_RESPONSE'
}

export interface ReadRecordingEndResponse extends RunnerProtocolResponse {
  data: { error?: string }
  msgName: 'READ_RECORDING_END_RESPONSE'
}

export interface ReadRecordingFailureResponse extends RunnerProtocolResponse {
  data: { error: string }
  msgName: 'READ_RECORDING_FAILURE_RESPONSE'
}

export interface ReadRecordingPartResponse extends RunnerProtocolResponse {
  data: { error?: string; video: string }
  msgName: 'READ_RECORDING_PART_RESPONSE'
}

export interface StartRecordingFailureResponse extends RunnerProtocolResponse {
  data: { error: string }
  msgName: 'START_RECORDING_FAILURE_RESPONSE'
}

export interface StartRecordingResponse extends RunnerProtocolResponse {
  data: { error?: string }
  msgName: 'START_RECORDING_RESPONSE'
}

export interface StopRecordingFailureResponse extends RunnerProtocolResponse {
  data: { error: string; }
  msgName: 'STOP_RECORDING_FAILURE_RESPONSE'
}

export interface StopRecordingResponse extends RunnerProtocolResponse {
  data: { error?: string }
  msgName: 'STOP_RECORDING_RESPONSE'
}

export interface InteractiveAnnotationFailureResponse {
  data: { error?: string; data: string }
  msgName: 'START_INTERACTIVE_ANNOTATION_FAILURE_RESPONSE';
}

export interface InteractiveAnnotationResponse {
  data: { error?: string; data: string }
  msgName: 'START_INTERACTIVE_ANNOTATION_RESPONSE';
}

export interface GetProcessPidFailureResponse {
  data: { error: string }
  msgName: 'GET_PROCESS_PID_FAILURE_RESPONSE';
}

export interface GetProcessPidResponse {
  data: { error?: string; pidNumber: number }
  msgName: 'GET_PROCESS_PID_RESPONSE';
}
