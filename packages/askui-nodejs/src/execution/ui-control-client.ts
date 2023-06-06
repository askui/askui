import { CustomElement, CustomElementJson } from '../core/model/test-case-dto';
import {
  Exec, Executable, FluentFilters, ApiCommands, Separators,
} from './dsl';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { ExecutionRuntime } from './execution-runtime';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { logger } from '../lib/logger';
import { TestStepState } from '../core/model/test-case-result-dto';
import { AnnotationLevel } from './annotation-level';
import { UiControlClientError } from './ui-control-client-error';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { ClientArgs, UiControlClientConfig } from './ui-controller-client-interface';
import { UiControlClientDependencyBuilder } from './ui-control-client-dependency-builder';

export class UiControlClient extends ApiCommands {
  private constructor(
    private executionRuntime: ExecutionRuntime,
    private config: UiControlClientConfig,
  ) {
    super();
  }

  static async build(clientArgs: ClientArgs = {}): Promise<UiControlClient> {
    const builder = UiControlClientDependencyBuilder;
    const clientArgsWithDefaults = await builder.getClientArgsWithDefaults(clientArgs);
    const { executionRuntime } = await builder.build(clientArgsWithDefaults);
    return new UiControlClient(executionRuntime, {
      annotationLevel: clientArgsWithDefaults.annotationLevel,
    });
  }

  /**
   * Connects to the askui UI Controller.
   */
  async connect(): Promise<UiControllerClientConnectionState> {
    return this.executionRuntime.connect();
  }

  /**
   * Disconnects from the askui UI Controller.
   */
  disconnect(): void {
    this.executionRuntime.disconnect();
  }

  /**
   * Disconnects from the askui UI Controller.
   *
   * @deprecated Use {@link disconnect} instead.
   */
  close(): void {
    this.disconnect();
  }

  async startRecording(): Promise<void> {
    await this.executionRuntime.startRecording();
  }

  async stopRecording(): Promise<void> {
    await this.executionRuntime.stopRecording();
  }

  async readRecording(): Promise<string> {
    return this.executionRuntime.readRecording();
  }

  private shouldAnnotateByDefault(testStepState: TestStepState): boolean {
    return this.config.annotationLevel === AnnotationLevel.ALL
      || (testStepState === TestStepState.FAILED
        && this.config.annotationLevel === AnnotationLevel.ON_FAILURE);
  }

  private async annotateByDefault(
    testStepState: TestStepState,
    customElements: CustomElement[] = [],
  ) {
    if (this.shouldAnnotateByDefault(testStepState)) {
      await this.annotate(
        {
          customElements,
          fileNamePrefix: `${testStepState.toLowerCase()}_testStep_annotation`,
        },
      );
    }
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

  // eslint-disable-next-line class-methods-use-this
  private escapeSeparatorString(instruction: string): string {
    return instruction.split(Separators.STRING).join('"');
  }

  async fluentCommandExecutor(
    instruction: string,
    customElementJson: CustomElementJson[] = [],
  ): Promise<void> {
    const secretText = this.getAndResetSecretText();
    const customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    const readableInstruction = this.escapeSeparatorString(instruction);
    logger.debug(readableInstruction);
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
        new UiControlClientError(`A problem occurred while executing the instruction: ${readableInstruction}. Reason ${error}`),
      );
    }
  }

  async getterExecutor(
    instruction: string,
    customElementJson: CustomElementJson[] = [],
  ): Promise<DetectedElement[]> {
    const customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    const stringWithoutSeparators = this.escapeSeparatorString(instruction);
    logger.debug(stringWithoutSeparators);
    return this.executionRuntime.getDetectedElements(instruction, customElements);
  }

  private secretText: string | undefined = undefined;

  private getAndResetSecretText(): string | undefined {
    const { secretText } = this;
    this.secretText = undefined;
    return secretText;
  }

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
}
