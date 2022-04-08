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
import { ClientConnectionState } from './client-connection-state';
import { ReadRecordingResponseStreamHandler } from './read-recording-response-stream-handler';
import { ControlUiClientError } from './client-error';

export class ControlYourUiClient {
  private static readonly EMPTY_REJECT = (_reason?: unknown) => { };

  private static readonly EMPTY_RESOLVE = (_value: unknown) => { };

  private static readonly REQUEST_TIMEOUT_IN_MS = 30000;

  ws!: WebSocket;

  connectionState: ClientConnectionState = ClientConnectionState.NOT_CONNECTED;

  private timeout?: NodeJS.Timeout;

  private currentReject: (reason?: unknown) => void = ControlYourUiClient.EMPTY_REJECT;

  private currentResolve: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
  ) => void = ControlYourUiClient.EMPTY_RESOLVE;

  constructor(public controlServerUrl: string) { }

  private clearResponse() {
    this.currentReject = ControlYourUiClient.EMPTY_REJECT;
    this.currentResolve = ControlYourUiClient.EMPTY_RESOLVE;
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

  openConnectionToServer(): Promise<ClientConnectionState> {
    this.connectionState = ClientConnectionState.CONNECTING;
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.controlServerUrl);
        this.ws.on('message', (data) => { this.onMessage(data); });
        this.ws.on('open', () => {
          this.connectionState = ClientConnectionState.CONNECTED;
          resolve(this.connectionState);
        });
        this.ws.on('error', (error: WebSocket.ErrorEvent) => {
          this.connectionState = ClientConnectionState.ERROR;
          reject(new ControlUiClientError(`Connection to Control UI Server cannot be established,
          Probably it was not started. Makse sure you started the server with this 
          Url ${this.controlServerUrl}. Error message  ${error.message}`));
        });
      } catch (error) {
        reject(new ControlUiClientError(`Connection to Control UI Server cannot be established. Reason: ${error}`));
      }
    });
  }

  closeConnectionToServer() {
    if (!(this.ws)) {
      throw new ControlUiClientError("Please connect to the controlui-server first with 'start' before you try to close it");
    }
    this.ws.close();
  }

  private sendAndReceive<T extends RunnerProtocolResponse>(
    msg: RunnerProtocolRequest,
    requestTimeout = ControlYourUiClient.REQUEST_TIMEOUT_IN_MS,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.currentResolve = resolve;
      this.currentReject = reject;
      try {
        this.send(msg, requestTimeout);
        this.timeout = setTimeout(
          () => this.currentReject(`Request to Control UI Server timed out.
          it seems that the server is down, Please make sure the server is up`),
          ControlYourUiClient.REQUEST_TIMEOUT_IN_MS,
        );
      } catch (error) {
        this.currentReject(`The communication to the ControlUI Server is broken. Reason: ${error}`);
      }
    });
  }

  private send(
    msg: RunnerProtocolRequest,
    _requestTimeout = ControlYourUiClient.REQUEST_TIMEOUT_IN_MS,
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
