import { CustomElement } from '../core/model/custom-element';
import { CustomElementJson } from '../core/model/custom-element-json';
import {
  Exec, Executable, FluentFilters, ApiCommands, Separators,
  PC_AND_MODIFIER_KEY,
} from './dsl';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { ExecutionRuntime } from './execution-runtime';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationWriter } from '../core/annotation/annotation-writer';
import { AnnotationRequest } from '../core/model/annotation-result/annotation-interface';
import { logger } from '../lib/logger';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { ClientArgs } from './ui-controller-client-interface';
import { UiControlClientDependencyBuilder } from './ui-control-client-dependency-builder';
import { Instruction, StepReporter } from '../core/reporting';

export class UiControlClient extends ApiCommands {
  private constructor(
    private executionRuntime: ExecutionRuntime,
    private stepReporter: StepReporter,
  ) {
    super();
  }

  static async build(clientArgs: ClientArgs = {}): Promise<UiControlClient> {
    const builder = UiControlClientDependencyBuilder;
    const clientArgsWithDefaults = await builder.getClientArgsWithDefaults(clientArgs);
    const { executionRuntime, stepReporter } = await builder.build(clientArgsWithDefaults);
    return new UiControlClient(
      executionRuntime,
      stepReporter,
    );
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

  async startVideoRecording(): Promise<void> {
    await this.executionRuntime.startVideoRecording();
  }

  async stopVideoRecording(): Promise<void> {
    await this.executionRuntime.stopVideoRecording();
  }

  async readVideoRecording(): Promise<string> {
    return this.executionRuntime.readVideoRecording();
  }

  private shouldAnnotateAfterCommandExecution(error?: Error): boolean {
    return (this.stepReporter.config.withDetectedElements === 'onFailure' && error !== undefined)
      || (this.stepReporter.config.withDetectedElements === 'always');
  }

  private async afterCommandExecution(instruction: Instruction, error?: Error): Promise<void> {
    const createdAt = new Date();
    let annotation: Annotation | undefined;
    let screenshot: string | undefined;
    if (this.shouldAnnotateAfterCommandExecution(error)) {
      annotation = await this.executionRuntime.annotateImage(
        undefined,
        instruction.customElements,
      );
    }
    if (annotation !== undefined || this.stepReporter.config.withScreenshots === 'always') {
      screenshot = annotation?.image ?? await this.executionRuntime.getScreenshot();
    }
    await this.stepReporter.onStepEnd({
      createdAt,
      detectedElements: annotation?.detected_elements,
      screenshot,
    }, error);
  }

  async annotate(
    annotationRequest: AnnotationRequest = {},
  ): Promise<Annotation> {
    const annotation = await this.executionRuntime.annotateImage(
      annotationRequest.imagePath,
      annotationRequest.customElements,
      annotationRequest.elements,
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

  private async buildInstruction(
    instructionString: string,
    customElementJson: CustomElementJson[] = [],
  ): Promise<Instruction> {
    return {
      customElements: await CustomElement.fromJsonListWithImagePathOrImage(customElementJson),
      value: instructionString,
      secretText: this.getAndResetSecretText(),
      valueHumanReadable: this.escapeSeparatorString(instructionString),
    };
  }

  async fluentCommandExecutor(
    instructionString: string,
    customElementJson: CustomElementJson[] = [],
  ): Promise<void> {
    const instruction = await this.buildInstruction(instructionString, customElementJson);
    logger.debug(instruction);
    try {
      await this.stepReporter.resetStep(instruction);
      await this.executionRuntime.executeInstruction(instruction);
      await this.afterCommandExecution(instruction);
      return await Promise.resolve();
    } catch (error) {
      await this.afterCommandExecution(
        instruction,
        error instanceof Error ? error : new Error(String(error)),
      );
      return Promise.reject(error);
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
  override typeIn(text: string, { isSecret = false, secretMask = '****' }: { isSecret?: boolean; secretMask?: string; } = {}): FluentFilters {
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
  override type(text: string, { isSecret = false, secretMask = '****' }: { isSecret?: boolean; secretMask?: string; } = {}): Exec {
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
   * Press a key multiple times. At least two times.
   *
   * @param {PC_AND_MODIFIER_KEY} key
   *
   * @param {number} times
   */
  async pressKeyNTimes(key: PC_AND_MODIFIER_KEY, times = 2) {
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < times; i += 1) {
      await this.pressKey(key).exec();
    }
  }

  /**
   * Press an array of keys one after another.
   *
   * For example press the following keys: right, left, enter.
   *
   * pressKeys(['right', 'left', 'enter'])
   *
   * @param {PC_AND_MODIFIER_KEY[]} keys
   */
  async pressKeys(keys: PC_AND_MODIFIER_KEY[]) {
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < keys.length; i += 1) {
      await this.pressKey(keys[i] as PC_AND_MODIFIER_KEY).exec();
    }
  }

  /**
   * Searches for a text element and clicks it when found.
   *
   * @param {string} text - A text to be searched.
   */
  async clickText(text: string) {
    await this.click().text(text).exec();
  }

  /**
   * Searches for text elements and clicks them
   * one after another when found.
   *
   * @param {string[]} texts - An array of texts to be searched.
   */
  async clickTexts(texts: string[]) {
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < texts.length; i += 1) {
      await this.click().text(texts[i] as string).exec();
    }
  }

  /**
   * Searches for an element of type button
   * with a label and clicks it when found.
   *
   * @param {string} label - The buttons label.
   */
  async clickButton(label: string) {
    await this.click().button().withText(label).exec();
  }

  /**
   * Searches for an element of type textfield with a specific placeholder text.
   * If found, clicks it.
   *
   * @param {string} placeholder - The textfields placeholder text.
   */
  async clickTextfield(placeholder: string) {
    await this.click().textfield().contains().text()
      .withText(placeholder)
      .exec();
  }

  /**
   * Clicks an icon based on a description.
   *
   * @param {string} description
   */
  async clickIcon(description: string) {
    await this.click().icon().matching(description).exec();
  }

  /**
   * Wait until an AskUICommand does not fail.
   *
   * Use it to wait for an element to appear like this:
   *
   * await waitUntil(
   *     aui.expect().text('Github').exists()
   *   );
   *
   * @param {Executable} AskUICommand - For example: aui.moveMouse(0, 0)
   * @param {number} maxTry - Number of maximum retries
   * @param {number} waitTime - Time in milliseconds
   */
  async waitUntil(AskUICommand: Executable, maxTry = 5, waitTime = 2000) {
    try {
      await AskUICommand.exec();
    } catch (error) {
      if (maxTry === 0) {
        throw error;
      }
      await this.waitFor(waitTime).exec();
      await this.waitUntil(AskUICommand, maxTry - 1);
    }
  }
}
