import { exec } from 'child_process';
import { promisify } from 'util';
import { ControlUiServerFacade } from './control-ui-server-facade';
import { LibfuseError } from './libfuse-error';
import { logger } from './logger';
import { WaylandError } from './wayland-error';

export class ControlUiServerLinux extends ControlUiServerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x ${this.binaryPath}`, (_exception, stdout) => logger.debug(stdout));
  }

  // eslint-disable-next-line class-methods-use-this
  protected override async preStartChecks(): Promise<void> {
    /* eslint-disable */
      const runCommand = promisify(require('child_process').exec)
      /* eslint-enable */

    const waylandStatus = await runCommand('echo $WAYLAND_DISPLAY');

    if (waylandStatus.includes('wayland')) {
      throw new WaylandError('Wayland is not supported: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems#wayland');
    }

    const checkLinuxdistrib = await runCommand('uname -v');

    if (checkLinuxdistrib.stdout.trim().includes('Ubuntu')) {
      try {
        await runCommand('dpkg -s libfuse2 | grep Status');
      } catch {
        throw new LibfuseError('Libfuse2 package is missing: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems#libfuse2');
      }
    }
  }
}
