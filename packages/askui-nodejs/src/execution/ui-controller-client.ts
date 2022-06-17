import WebSocket from 'ws';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import {
  CaptureScreenshotRequest,
  CaptureScreenshotResponse,
  ControlRequest,
  ControlResponse,
  RunnerProtocolRequest,
  StartRecordingRequest,
  StartRecordingResponse,
  StopRecordingResponse,
  StopRecordingRequest,
  ReadRecordingPartResponse,
  ReadRecordingRequest,
  RunnerProtocolResponse,
  InteractiveAnnotationRequest,
  InteractiveAnnotationResponse,
  GetProcessPidRequest,
  GetProcessPidResponse,
} from '../core/runner-protocol';
import { ControlCommand } from '../core/ui-control-commands';
import { logger } from '../lib/logger';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { ReadRecordingResponseStreamHandler } from './read-recording-response-stream-handler';
import { UiControlClientError } from './ui-control-client-error';

export class UiControllerClient {
  private static readonly EMPTY_REJECT = (_reason?: unknown) => { };

  private static readonly EMPTY_RESOLVE = (_value: unknown) => { };

  private static readonly REQUEST_TIMEOUT_IN_MS = 30000;

  ws!: WebSocket;

  connectionState = UiControllerClientConnectionState.NOT_CONNECTED;

  private timeout?: NodeJS.Timeout;

  private currentReject: (reason?: unknown) => void = UiControllerClient.EMPTY_REJECT;

  private currentResolve: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
  ) => void = UiControllerClient.EMPTY_RESOLVE;

  constructor(public url: string) { }

  private clearResponse() {
    this.currentReject = UiControllerClient.EMPTY_REJECT;
    this.currentResolve = UiControllerClient.EMPTY_RESOLVE;
  }

  private onMessage(data: WebSocket.Data) {
    clearTimeout(this.timeout as NodeJS.Timeout);
    const response: RunnerProtocolResponse = JSON.parse(data.toString());
    if (response.data.error) {
      this.currentReject(response);
      this.clearResponse();
      return;
    }
    this.currentResolve(response);
    if (response.msgName === 'READ_RECORDING_PART_RESPONSE') {
      return;
    }
    this.clearResponse();
  }

  connect(): Promise<UiControllerClientConnectionState> {
    this.connectionState = UiControllerClientConnectionState.CONNECTING;
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.url);
        this.ws.on('message', (data) => { this.onMessage(data); });
        this.ws.on('open', () => {
          this.connectionState = UiControllerClientConnectionState.CONNECTED;
          resolve(this.connectionState);
        });
        this.ws.on('error', (error: WebSocket.ErrorEvent) => {
          this.connectionState = UiControllerClientConnectionState.ERROR;
          reject(new UiControlClientError(`Connection to UI Controller cannot be established,
          Probably it was not started. Makse sure you started UI Controller with this 
          Url ${this.url}. Error message  ${error.message}`));
        });
      } catch (error) {
        reject(new UiControlClientError(`Connection to UI Controller cannot be established. Reason: ${error}`));
      }
    });
  }

  close() {
    this.ws?.close();
  }

  private sendAndReceive<T extends RunnerProtocolResponse>(
    msg: RunnerProtocolRequest,
    requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.currentResolve = resolve;
      this.currentReject = reject;
      try {
        this.send(msg, requestTimeout);
        this.timeout = setTimeout(
          () => this.currentReject(`Request to UI Controller timed out.
          It seems that the UI Controller is not running. Please, make sure that it is running when executing tests.`),
          UiControllerClient.REQUEST_TIMEOUT_IN_MS,
        );
      } catch (error) {
        this.currentReject(`The communication to the UI Controller is broken. Reason: ${error}`);
      }
    });
  }

  private send(
    msg: RunnerProtocolRequest,
    _requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS,
  ) {
    if (!this.currentReject || !this.currentResolve) {
      throw Error('Request is not finished! It is not possible to have multiple requests at the same time.');
    }
    logger.debug(`Send: ${JSON.stringify(msg.msgName)}`);
    this.ws.send(JSON.stringify(msg));
  }

  requestScreenshot(): Promise<CaptureScreenshotResponse> {
    return this.sendAndReceive<CaptureScreenshotResponse>(new CaptureScreenshotRequest());
  }

  getServerPid(): Promise<GetProcessPidResponse> {
    return this.sendAndReceive<GetProcessPidResponse>(new GetProcessPidRequest());
  }

  startRecording(): Promise<StartRecordingResponse> {
    return this.sendAndReceive<StartRecordingResponse>(new StartRecordingRequest());
  }

  stopRecording(): Promise<StopRecordingResponse> {
    return this.sendAndReceive<StopRecordingResponse>(new StopRecordingRequest());
  }

  readRecording(): Promise<ReadRecordingPartResponse> {
    return new Promise<ReadRecordingPartResponse>((resolve, reject) => {
      const readRecordingStreamHandler = new ReadRecordingResponseStreamHandler(resolve, reject);
      this.currentResolve = readRecordingStreamHandler.onMessage;
      this.currentReject = readRecordingStreamHandler.onError;
      this.send(new ReadRecordingRequest(), 60 * 15 * 1000);
    });
  }

  annotateInteractively(
    boundingBoxes: DetectedElement[],
    imageString: string,
  ): Promise<InteractiveAnnotationResponse> {
    return new Promise<InteractiveAnnotationResponse>((resolve, reject) => {
      this.currentResolve = resolve;
      this.currentReject = reject;
      this.send(new InteractiveAnnotationRequest(boundingBoxes, imageString), 60 * 60 * 1000);
    });
  }

  requestControl(controlCommand: ControlCommand): Promise<ControlResponse> {
    return this.sendAndReceive<ControlResponse>(new ControlRequest(controlCommand));
  }
}
