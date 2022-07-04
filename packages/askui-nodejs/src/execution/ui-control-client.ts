import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import {
  Exec, Executable, FluentCommand, FluentFilters,
} from './dsl';
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
    customElementJson: CustomElementJson[] = [],
  ): Promise<void> {
    const customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    const { secretText } = this;
    try {
      await this.executionRuntime.executeTestStep({
        instruction,
        customElements,
        secretText,
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

  private secretText: string | undefined = undefined;

  /**
   * Types a text inside the filtered element.
   *
   * By default, the `text` is included in the logs and sent over to the askui Inference server to
   * predict in which context the typing has to occur. You can exclude the `text` from the logs
   * and the request to the askui Inference server setting `options.isSecret` to `true`.
   * This should not change the quality of the prediction of the askui Inference server. In this
   * case, `options.secretMask` is included in logs and sent over instead of the `text`.
   *
   * @param {string} text - A text to type.
   * @param {Object} [options]
   * @param {boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
   *   logs of askui nor sent over to askui Inference for prediction.
   * @param {string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this
   *   is included in logs and sent over to askui Inference for prediction instead of the `text`.
   *
   * @return {FluentFilters}
   */
  override typeIn(text: string, { isSecret = false, secretMask = '****' } = {}): FluentFilters {
    if (isSecret) {
      this.secretText = text;
      return super.typeIn(secretMask);
    }

    return super.typeIn(text);
  }

  /**
   * Types a text at the current position.
   *
   * By default, the `text` is included in the logs and sent over to the askui Inference server to
   * predict in which context the typing has to occur. You can exclude the `text` from the logs
   * and the request to the askui Inference server setting `options.isSecret` to `true`.
   * This should not change the quality of the prediction of the askui Inference server. In this
   * case, `options.secretMask` is included in logs and sent over instead of the `text`.
   *
   * @param {string} text - A text to type.
   * @param {Object} options
   * @param {boolean} [options.isSecret = false] - If set to `true`, `text` is neither included in
   *   logs of askui nor sent over to askui Inference for prediction.
   * @param {string} [options.secretMask = '****'] - If `options.isSecret` is set to `true`, this
   *   is included in logs and sent over to askui Inference for prediction instead of the `text`.
   *
   * @return {Exec}
   */
  override type(text: string, { isSecret = false, secretMask = '****' } = {}): Exec {
    if (isSecret) {
      this.secretText = text;
      return super.type(secretMask);
    }

    return super.type(text);
  }

  /**
   * Waits for `<delayInMs>` ms, e.g., 1000 ms. The exact delay may be a little longer
   * than `<delayInMs>` but never shorter than that.
   *
   * @param {number} delayInMs - The delay in ms to wait for.
   *
   * @return {Executable}
   */
  // eslint-disable-next-line class-methods-use-this
  waitFor(delayInMs: number): Executable {
    return {
      exec(): Promise<void> {
        logger.debug(`Wait for ${delayInMs} ms`);
        return new Promise((resolve) => { setTimeout(() => resolve(), delayInMs); });
      },
    };
  }

  /**
  * closes the connection to the controlui-server`.
  */
  close(): void {
    this.uiControllerClient.close();
  }
}
