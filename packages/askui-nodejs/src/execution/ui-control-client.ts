import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import { FluentCommand } from './dsl';
import { HttpClientGot } from '../utils/http/http-client-got';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { UiControllerClient } from './ui-controller-client';
import { ExecutionRuntime } from './execution-runtime';
import { InferenceClient } from './inference-client';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { logger } from '../lib/logger';
import { TestStepState } from '../core/model/test-case-result-dto';
import { ClientArgs, ClientArgsWithDefaults } from './ui-controller-client-interface';
import { AnnotationLevel } from './annotation-level';
import { UiControlClientError } from './ui-control-client-error';
import { envCredentials } from './read-environment-credentials';
import { Analytics } from '../utils/analytics';

const getClientArgsWithDefaults = (clientArgs: ClientArgs = {}): ClientArgsWithDefaults => ({
  uiControllerUrl: 'http://localhost:6769',
  inferenceServerUrl: 'https://inference.askui.com',
  annotationLevel: AnnotationLevel.DISABLED,
  ...clientArgs,
});

export class UiControlClient extends FluentCommand {
  private _uiControllerClient?: UiControllerClient;

  private constructor(
    private httpClient: HttpClientGot,
    private clientArgs: ClientArgsWithDefaults,
  ) {
    super();
  }

  static async build(clientArgs?: ClientArgs): Promise<UiControlClient> {
    const analytics = new Analytics();
    const analyticsHeaders = await analytics.getAnalyticsHeaders();
    const cas = getClientArgsWithDefaults(clientArgs);
    const httpClient = new HttpClientGot(
      cas.credentials || envCredentials(),
      analyticsHeaders,
    );
    return new UiControlClient(httpClient, cas);
  }

  private get uiControllerClient(): UiControllerClient {
    if (!this._uiControllerClient) {
      this._uiControllerClient = new UiControllerClient(
        this.clientArgs.uiControllerUrl,
      );
    }
    return this._uiControllerClient;
  }

  private get inferenceClient(): InferenceClient {
    return new InferenceClient(this.clientArgs.inferenceServerUrl, this.httpClient);
  }

  private get executionRuntime(): ExecutionRuntime {
    return new ExecutionRuntime(this.uiControllerClient, this.inferenceClient);
  }

  private async annotateByDefault(
    testStepState: TestStepState,
    customElements: CustomElement[] = [],
  ) {
    if ((testStepState === TestStepState.FAILED
      && this.clientArgs.annotationLevel === AnnotationLevel.DISABLED)
      || (testStepState === TestStepState.PASSED
        && this.clientArgs.annotationLevel !== AnnotationLevel.ALL)) {
      return;
    }
    await this.annotate(
      {
        customElements,
        fileNamePrefix: `${testStepState.toLowerCase()}_testStep_annotation`,
      },
    );
  }

  async connect(): Promise<UiControllerClientConnectionState> {
    const connectionState = await this.uiControllerClient.connect();
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
      return Promise.reject(
        new UiControlClientError(`A problem occures while executing the instruction: ${instruction}. Reason ${error}`),
      );
    }
  }

  /**
  * closes the connection to the controlui-server`.
  */
  close(): void {
    this.uiControllerClient.close();
  }
}
