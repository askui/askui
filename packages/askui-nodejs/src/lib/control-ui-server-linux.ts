import { exec } from 'child_process';
import { ControlUiServer } from './control-ui-server';
import { logger } from './logger';

export class ControlUiServerLinux extends ControlUiServer {
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x ${this.binaryPath}`, (_exception, stdout) => logger.debug(stdout));
  }
}
