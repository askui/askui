import process from 'process';
import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import { FluentCommand } from './dsl';
import { HttpClientGot } from '../utils/http/http-client-got';
import { TestStepResultDto } from '../core/model/test-case-result-dto/test-step-result-dto';
import { ClientConnectionState } from './client-connection-state';
import { ControlYourUiClient } from './control-your-ui-client';
import { ExecutionRuntime } from './execution-runtime';
import { ControlYourUiApi } from './control-your-ui-api';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { logger } from '../lib/logger';
import { TestStepState } from '../core/model/test-case-result-dto';
import { ClientArgs, ClientArgsWithDefaults } from './client-interface';

export class Client extends FluentCommand {
  private httpClient = new HttpClientGot();

  private _client?: ControlYourUiClient;

  private serverPidNumber?: number;

  constructor(
    private clientArgs?: ClientArgs,
  ) {
    super();
  }

  private get client(): ControlYourUiClient {
    if (!this._client) {
      this._client = new ControlYourUiClient(this.clientArgsWithDefaults.controlServerUrl);
    }
    return this._client;
  }

  private get clientArgsWithDefaults(): ClientArgsWithDefaults {
    const defaults = {
      controlServerUrl: 'http://localhost:6769',
      controlYourUiApi: 'https://controlui-api-dev.askui.com',
      annotationLevel: 'disabled',
    };
    return Object.assign(defaults, this.clientArgs);
  }

  private get api(): ControlYourUiApi {
    return new ControlYourUiApi(this.clientArgsWithDefaults.controlYourUiApi, this.httpClient);
  }

  private get executionRuntime(): ExecutionRuntime {
    return new ExecutionRuntime(this.client, this.api);
  }

  private async annotateByDefault(
    testStepState: TestStepState,
    customElements: CustomElement[] = [],
  ) {
    switch (testStepState) {
      case 'PASSED':
        if (this.clientArgsWithDefaults.annotationLevel === 'all') {
          await this.annotate(
            { customElements },
          );
        }
        return;
      case 'FAILED':
        if (this.clientArgsWithDefaults.annotationLevel !== 'disabled') {
          await this.annotate(
            {
              customElements,
              fileNamePrefix: 'failed_testStep_annotation',
            },
          );
        }
        return;
      default:
        throw new Error(`"${testStepState}" not supported.`);
    }
  }

  async start(): Promise<ClientConnectionState> {
    const connectionState: ClientConnectionState = await this.client.openConnectionToServer();
    this.serverPidNumber = (await this.client.getServerPid()).data.pidNumber;
    return connectionState;
  }

  async annotate(
    annotationRequest: AnnotationRequest = {},
  ): Promise<Annotation> {
    const annotation = await this.executionRuntime.annotateImage(
      annotationRequest.imagePath,
      annotationRequest.customElements,
    );
    AnnotationWriter.write(
      annotation.toHtml(),
      annotationRequest.outputPath,
      annotationRequest.fileNamePrefix,
    );
    return annotation;
  }

  async annotateInteractively(): Promise<void> {
    try {
      await this.executionRuntime.annotateInteractively();
    } catch (err) {
      logger.error(err);
    }
  }

  async exec(
    instruction: string,
    customElementJson?: CustomElementJson[],
  ): Promise<TestStepResultDto> {
    let customElements: CustomElement[] = [];
    if (customElementJson !== undefined) {
      customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    }
    const testCaseResult = await this.executionRuntime.executeTestStep({
      instruction,
      customElements,
    });
    await this.annotateByDefault(testCaseResult.state, customElements);
    return Promise.resolve(testCaseResult);
  }

  /**
  * closes the connection to the controlui-server`.
  */
  closeConnectionToServer(): void {
    this.client.closeConnectionToServer();
  }

  /**
  * stops the controlui-server`.
  */
  stopServer(): void {
    if (!(this.serverPidNumber)) {
      throw new Error('An error occurred during the closing of the controlui server');
    }
    process.kill(this.serverPidNumber);
  }

  /**
  * Stops the controlui-server and closes the connection to the controlui-server
  */
  stop(): void {
    this.stopServer();
    this.closeConnectionToServer();
  }
}
