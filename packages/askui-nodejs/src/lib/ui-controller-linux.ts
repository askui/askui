import { exec } from 'child_process';
import { UiControllerFacade } from './ui-controller-facade';
import { logger } from './logger';

export class UiControllerLinux extends UiControllerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x "${this.binaryPath}"`, (_exception, stdout) => logger.debug(stdout));
  }
}
