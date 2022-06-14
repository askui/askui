import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import { FluentCommand } from './dsl';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ClientConnectionState } from './client-connection-state';
import { AskuiUiControllerClient } from './askui-ui-controller-client';
import { ExecutionRuntime } from './execution-runtime';
import { InferenceClient } from './askui-inference-api';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { logger } from '../lib/logger';
import { TestStepState } from '../core/model/test-case-result-dto';
import { ClientArgs, ClientArgsWithDefaults } from './client-interface';
import { AnnotationLevel } from './annotation-level';
import { AskuiUiControllerClientError } from './client-error';
import { envCredentials } from './read-environment-credentials';

export class AskuiClient extends FluentCommand {
  private _askuiUiControllerClient?: AskuiUiControllerClient;

  private httpClient: HttpClientGot;

  constructor(
    private clientArgs?: ClientArgs,
  ) {
    super();
    this.httpClient = new HttpClientGot(
      this.clientArgs?.credentials ? this.clientArgs.credentials : envCredentials(),
    );
  }

  private get askuiUiControllerClient(): AskuiUiControllerClient {
    if (!this._askuiUiControllerClient) {
      this._askuiUiControllerClient = new AskuiUiControllerClient(
        this.clientArgsWithDefaults.uiControlServerUrl,
      );
    }
    return this._askuiUiControllerClient;
  }

  private get clientArgsWithDefaults(): ClientArgsWithDefaults {
    const defaults = {
      uiControlServerUrl: 'http://localhost:6769',
      inferenceServerUrl: 'https://inference.askui.com',
      annotationLevel: AnnotationLevel.DISABLED,
    };
    return Object.assign(defaults, this.clientArgs);
  }

  private get api(): InferenceClient {
    return new InferenceClient(this.clientArgsWithDefaults.inferenceServerUrl, this.httpClient);
  }

  private get executionRuntime(): ExecutionRuntime {
    return new ExecutionRuntime(this.askuiUiControllerClient, this.api);
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
    const connectionState: ClientConnectionState = await this.askuiUiControllerClient.connect();
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
      return Promise.reject(new AskuiUiControllerClientError(`A problem occures while executing the instruction: ${instruction}. Reason ${error}`));
    }
  }

  /**
  * closes the connection to the askui UI Controller`.
  */
  close(): void {
    this.askuiUiControllerClient.close();
  }
}
