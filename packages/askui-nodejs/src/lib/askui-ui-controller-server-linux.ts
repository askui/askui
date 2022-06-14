import { exec } from 'child_process';
import { AskuiUiControllerServerFacade } from './askui-ui-controller-server-facade';
import { logger } from './logger';

export class AskuiUiControllerServerLinux extends AskuiUiControllerServerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x "${this.binaryPath}"`, (_exception, stdout) => logger.debug(stdout));
  }
}
