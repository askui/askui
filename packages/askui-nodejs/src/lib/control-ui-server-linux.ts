import { exec } from 'child_process';

import { ControlUiServerFacade } from './control-ui-server-facade';
import { logger } from './logger';

export class ControlUiServerLinux extends ControlUiServerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x ${this.binaryPath}`, (_exception, stdout) => logger.debug(stdout));
  }

  /*
  protected override async preStartChecks() {
      const exec = promisify(require('child_process').exec)

      const waylandStatus = await exec('loginctl show-session 2 -p Type ');

      const wayState = waylandStatus.stdout.trim();

      if(wayState.includes('wayland')) {
        throw new Error('');
      }

      const libfuseStatus = await exec('dpkg -s libfuse2 | grep Status');

      const libfuseState = libfuseStatus.stdout.trim();

  }

  */
}
