import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import { FluentCommand } from './dsl';
import { HttpClientGot } from '../utils/http/http-client-got';
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
import { AnnotationLevel } from './annotation-level';
import { ControlUiClientError } from './client-error';
import { envCredentials } from './read-environment-credentials';

export class AskuiClient extends FluentCommand {
  private _controlYourUiClient?: ControlYourUiClient;

  private httpClient: HttpClientGot;

  constructor(
    private clientArgs?: ClientArgs,
  ) {
    super();
    this.httpClient = new HttpClientGot(
      this.clientArgs?.credentials ? this.clientArgs.credentials : envCredentials(),
    );
  }

  private get controlYourUiClient(): ControlYourUiClient {
    if (!this._controlYourUiClient) {
      this._controlYourUiClient = new ControlYourUiClient(
        this.clientArgsWithDefaults.controlServerUrl,
      );
    }
    return this._controlYourUiClient;
  }

  private get clientArgsWithDefaults(): ClientArgsWithDefaults {
    const defaults = {
      controlServerUrl: 'http://localhost:6769',
      controlYourUiApi: 'https://inference.askui.com',
      annotationLevel: AnnotationLevel.DISABLED,
    };
    return Object.assign(defaults, this.clientArgs);
  }

  private get api(): ControlYourUiApi {
    return new ControlYourUiApi(this.clientArgsWithDefaults.controlYourUiApi, this.httpClient);
  }

  private get executionRuntime(): ExecutionRuntime {
    return new ExecutionRuntime(this.controlYourUiClient, this.api);
  }

  private async annotateByDefault(
    testStepState: TestStepState,
    customElements: CustomElement[] = [],
  ) {
    if ((testStepState === TestStepState.FAILED
      && this.clientArgsWithDefaults.annotationLevel === AnnotationLevel.DISABLED)
      || (testStepState === TestStepState.PASSED
        && this.clientArgsWithDefaults.annotationLevel !== AnnotationLevel.ALL)) {
      return;
    }
    await this.annotate(
      {
        customElements,
        fileNamePrefix: `${testStepState.toLowerCase()}_testStep_annotation`,
      },
    );
  }

  async connect(): Promise<ClientConnectionState> {
    const connectionState: ClientConnectionState = await this.controlYourUiClient.connect();
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
  ): Promise<void> {
    let customElements: CustomElement[] = [];
    if (customElementJson !== undefined) {
      customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    }
    try {
      await this.executionRuntime.executeTestStep({
        instruction,
        customElements,
      });
      await this.annotateByDefault(TestStepState.PASSED, customElements);
      return await Promise.resolve();
    } catch (error) {
      await this.annotateByDefault(TestStepState.FAILED, customElements);
      return Promise.reject(new ControlUiClientError(`A problem occures while executing the instruction: ${instruction}. Reason ${error}`));
    }
  }

  /**
  * closes the connection to the controlui-server`.
  */
  close(): void {
    this.controlYourUiClient.close();
  }
}
