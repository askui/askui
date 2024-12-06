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
import { UiControllerClientError } from './ui-controller-client-error';
import { UiControllerNotConnectedError } from './ui-controller-not-connected-error';

export class UiControllerClient {
  private static readonly EMPTY_REJECT = (_reason?: unknown) => {};

  private static readonly EMPTY_RESOLVE = (_value: unknown) => {};

  private static readonly REQUEST_TIMEOUT_IN_MS = 30000;

  ws!: WebSocket;

  connectionState = UiControllerClientConnectionState.NOT_CONNECTED;

  private timeout?: NodeJS.Timeout;

  private currentReject: (reason?: unknown) => void = UiControllerClient.EMPTY_REJECT;

  private currentResolve: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) => void = UiControllerClient.EMPTY_RESOLVE;

  constructor(public url: string) {}

  private clearResponse() {
    this.currentReject = UiControllerClient.EMPTY_REJECT;
    this.currentResolve = UiControllerClient.EMPTY_RESOLVE;
  }

  private onMessage(data: WebSocket.Data) {
    logger.debug('onMessage');
    clearTimeout(this.timeout as NodeJS.Timeout);
    const response: RunnerProtocolResponse = JSON.parse(data.toString());
    if (response.data.error) {
      logger.error(response.data.error);
      this.currentReject(new UiControllerClientError(response.data.error));
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
        this.ws.on('message', (data) => {
          this.onMessage(data);
        });
        this.ws.on('open', () => {
          this.connectionState = UiControllerClientConnectionState.CONNECTED;
          resolve(this.connectionState);
        });
        this.ws.on('error', (error: WebSocket.ErrorEvent) => {
          this.connectionState = UiControllerClientConnectionState.ERROR;
          reject(
            new UiControllerClientError(`Connection to UI Controller cannot be established,
          Probably it was not started. Make sure you started UI Controller with this 
          Url ${this.url}. Cause: ${error}`),
          );
        });
      } catch (error) {
        reject(
          new UiControllerClientError(
            `Connection to UI Controller cannot be established. Cause: ${error}`,
          ),
        );
      }
    });
  }

  disconnect(): void {
    this.ws?.close();
  }

  private checkConnection(): void {
    if (this.connectionState !== UiControllerClientConnectionState.CONNECTED) {
      throw new UiControllerNotConnectedError();
    }
  }

  private sendAndReceive<T extends RunnerProtocolResponse>(
    msg: RunnerProtocolRequest,
    requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS,
  ): Promise<T> {
    this.checkConnection();
    return new Promise((resolve, reject) => {
      logger.debug(`sendAndReceive - ${JSON.stringify(msg)}`);
      this.currentResolve = resolve;
      this.currentReject = reject;
      try {
        this.send(msg, requestTimeout);
        if (this.timeout) {
          throw new UiControllerClientError(`Clear the current request before setting a new one. Check for missing await. Error: ${JSON.stringify(msg)}`);
        }
        this.timeout = setTimeout(
          () => this.currentReject(
            new UiControllerClientError(
              'Request to UI Controller timed out. It seems that the UI Controller is not running. Please, make sure that it is running when executing tests.',
            ),
          ),
          UiControllerClient.REQUEST_TIMEOUT_IN_MS,
        );
      } catch (error) {
        this.currentReject(
          new UiControllerClientError(
            `The communication to the UI Controller is broken. Cause: ${error}`,
          ),
        );
      }
    });
  }

  private send(
    msg: RunnerProtocolRequest,
    _requestTimeout = UiControllerClient.REQUEST_TIMEOUT_IN_MS,
  ) {
    this.checkConnection();
    if (!this.currentReject || !this.currentResolve) {
      throw new UiControllerClientError(
        'Request is not finished! It is not possible to have multiple requests at the same time.',
      );
    }
    logger.debug(`Send: ${JSON.stringify(msg.msgName)}`);
    this.ws.send(JSON.stringify(msg));
  }

  requestScreenshot(): Promise<CaptureScreenshotResponse> {
    return this.sendAndReceive<CaptureScreenshotResponse>(
      new CaptureScreenshotRequest(),
    );
  }

  getServerPid(): Promise<GetProcessPidResponse> {
    return this.sendAndReceive<GetProcessPidResponse>(
      new GetProcessPidRequest(),
    );
  }

  startVideoRecording(): Promise<StartRecordingResponse> {
    return this.sendAndReceive<StartRecordingResponse>(
      new StartRecordingRequest(),
    );
  }

  stopVideoRecording(): Promise<StopRecordingResponse> {
    return this.sendAndReceive<StopRecordingResponse>(
      new StopRecordingRequest(),
    );
  }

  readVideoRecording(): Promise<ReadRecordingPartResponse> {
    return new Promise<ReadRecordingPartResponse>((resolve, reject) => {
      const readRecordingStreamHandler = new ReadRecordingResponseStreamHandler(
        resolve,
        reject,
      );
      this.currentResolve = readRecordingStreamHandler.onMessage.bind(
        readRecordingStreamHandler,
      );
      this.currentReject = readRecordingStreamHandler.onError.bind(
        readRecordingStreamHandler,
      );
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
      this.send(
        new InteractiveAnnotationRequest(boundingBoxes, imageString),
        60 * 60 * 1000,
      );
    });
  }

  requestControl(controlCommand: ControlCommand): Promise<ControlResponse> {
    return this.sendAndReceive<ControlResponse>(
      new ControlRequest(controlCommand),
    );
  }
}
