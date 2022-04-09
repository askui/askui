import { exec } from 'child_process';
import { ControlUiServerFacade } from './control-ui-server-facade';
import { logger } from './logger';

export class ControlUiServerLinux extends ControlUiServerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x ${this.binaryPath}`, (_exception, stdout) => logger.debug(stdout));
  }
}
