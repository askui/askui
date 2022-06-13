import { exec, execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { ControlUiServerFacade } from './control-ui-server-facade';
import { logger } from './logger';

export class ControlUiServerDarwin extends ControlUiServerFacade {
  protected override makeBinaryExecutable(): void {
    this.makeDiskImageExecutable();
  }

  protected override getStartingCommand(): string {
    return `${path.dirname(this.binaryPath)}/askui-ui-controller.app/Contents/MacOS/askui-ui-controller`;
  }

  private makeDiskImageExecutable() {
    const mountPoint = '/Volumes/askui-ui-controller.dmg';
    execSync([
      'hdiutil attach',
      '-nobrowse',
      '-quiet',
      '-noautofsck',
      '-noautoopen',
      `-mountpoint ${mountPoint}`,
      this.binaryPath,
    ].join(' '));
    const appBaseName = 'askui-ui-controller.app';
    const appSrcPath = `${mountPoint}/${appBaseName}`;
    const appDestPath = `${path.dirname(this.binaryPath)}/${appBaseName}`;
    fs.removeSync(appDestPath);
    fs.copySync(appSrcPath, appDestPath);
    exec(`hdiutil detach ${mountPoint}`, (_exception, stdout) => logger.debug(stdout));
  }
}
