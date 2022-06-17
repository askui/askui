import { exec } from 'child_process';
import { promisify } from 'util';
import { UiControllerFacade } from './ui-controller-facade';
import { logger } from './logger';
import { WaylandError } from './wayland-error';
import { LibfuseError } from './libfuse-error';

export class UiControllerLinux extends UiControllerFacade {
  // eslint-disable-next-line class-methods-use-this
  protected override makeBinaryExecutable(): void {
    exec(`chmod +x "${this.binaryPath}"`, (_exception, stdout) => logger.debug(stdout));
  }

  // eslint-disable-next-line class-methods-use-this
  protected override async preStartChecks(): Promise<void> {
    const runCommand = promisify(exec);
    const waylandStatus = await runCommand('echo $WAYLAND_DISPLAY');

    if (waylandStatus.stdout.trim().includes('wayland')) {
      throw new WaylandError('Wayland is not supported: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems#wayland');
    }

    try {
      await runCommand('dpkg --version');
    } catch (err) {
      return;
    }

    try {
      await runCommand('dpkg -s libfuse2 | grep Status');
    } catch {
      throw new LibfuseError('Libfuse2 package is missing: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems#libfuse2');
    }
  }
}
