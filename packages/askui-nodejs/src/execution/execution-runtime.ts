import { ControlCommand, ControlCommandCode } from '../core/ui-control-commands';
import { CustomElement, TestStep } from '../core/model/test-case-dto';
import { AskuiUiControllerClient } from './askui-ui-controller-client';
import { RepeatError } from './repeat-error';
import { delay } from './misc';
import { InferenceApi } from './askui-inference-api';
import { ControlCommandError } from './control-command-error';
import { Annotation } from '../core/annotation/annotation';
import { toBase64Image } from '../utils/transformations';
import { CustomElementJson } from '../core/model/test-case-dto/custom-element-json';
import { logger } from '../lib/logger';

export class ExecutionRuntime {
  constructor(
    private client: AskuiUiControllerClient,
    private api: InferenceApi,
  ) { }

  async executeTestStep(step: TestStep): Promise<void> {
    logger.debug(step.instruction);
    await this.executeCommand(step);
  }

  /**
   * @param {TestStep} step - Test step used for predicting command.
   */
  private async executeCommand(step: TestStep): Promise<void> {
    const controlCommand = await this.predictCommandWithRetry(step);
    if (controlCommand.code === ControlCommandCode.OK) {
      await this.client.requestControl(controlCommand);
    } else if (controlCommand.tryToRepeat) {
      await this.client.requestControl(controlCommand);
      this.executeCommandRepeatedly(step);
    } else {
      throw new ControlCommandError(controlCommand.actions[0]?.text || '');
    }
  }

  private readonly EXEC_REPETITION_COUNT = 25;

  private async executeCommandRepeatedly(step: TestStep): Promise<void> {
    /* eslint-disable no-await-in-loop */
    for (let repeatCount = this.EXEC_REPETITION_COUNT; repeatCount >= 0; repeatCount -= 1) {
      if (repeatCount === 0) {
        throw new RepeatError(
          `Max. number (${this.EXEC_REPETITION_COUNT}) of repetitions of command executions `
          + 'from a single test step reached',
        );
      }

      logger.debug('Repeat command execution....');
      const controlCommand = await this.predictCommandWithRetry(step);
      if (controlCommand.code === ControlCommandCode.OK) {
        break;
      } else if (controlCommand.tryToRepeat) {
        await this.client.requestControl(controlCommand);
      } else {
        throw new ControlCommandError(controlCommand.actions[0]?.text || '');
      }
    }
    /* eslint-enable no-await-in-loop */
  }

  private readonly PREDICT_COMMAND_RETRY_COUNT = 2;

  /**
   * Command prediction may fail, e.g., due to application still loading
   * --> retry with linear back-off
   */
  /* eslint-disable-next-line consistent-return */
  private async predictCommandWithRetry(step: TestStep): Promise<ControlCommand> {
    let command = await this.predictCommand(step);
    /* eslint-disable no-await-in-loop */
    for (let k = 0; k < this.PREDICT_COMMAND_RETRY_COUNT; k += 1) {
      if (command.code === ControlCommandCode.OK) {
        return command;
      }
      const msUntilRetry = k * 1000;
      logger.debug(`Wait ${msUntilRetry} and retry predicting command...`);
      await delay(msUntilRetry);
      command = await this.predictCommand(step);
    }
    /* eslint-enable no-await-in-loop */
    return command;
  }

  private async predictCommand(step: TestStep): Promise<ControlCommand> {
    const isImageRequired = await this.api.isImageRequired(step.instruction);
    let image: string | undefined;
    if (isImageRequired) {
      const screenshotResponse = await this.client.requestScreenshot();
      image = screenshotResponse.data.image;
    }
    return this.api.predictControlCommand(
      step.instruction,
      step.customElements,
      image,
    );
  }

  async annotateInteractively() {
    const annotationResponse = await this.annotateImage();
    await this.client.annotateInteractively(annotationResponse.objects, annotationResponse.image);
  }

  async takeScreenshotIfImageisNotProvided(imagePath?: string): Promise<string> {
    let base64Image = '';
    if (imagePath !== undefined) {
      base64Image = await toBase64Image(imagePath);
    }
    if (imagePath === undefined) {
      const screenshotResponse = await this.client.requestScreenshot();
      base64Image = screenshotResponse.data.image;
    }
    return base64Image;
  }

  async annotateImage(
    imagePath?: string,
    customElementJson?: CustomElementJson[],
  ): Promise<Annotation> {
    let customElements: CustomElement[] = [];
    const base64Image = await this.takeScreenshotIfImageisNotProvided(imagePath);
    if (customElementJson !== undefined) {
      customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    }
    return this.api.predictImageAnnotation(base64Image, customElements);
  }
}
