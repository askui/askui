import { exec, execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { UiControllerFacade } from './ui-controller-facade';
import { logger } from './logger';

export class UiControllerDarwin extends UiControllerFacade {
  protected override makeBinaryExecutable(): void {
    this.makeDiskImageExecutable();
  }

  protected override getStartingCommand(): string {
    return `"${path.dirname(this.binaryFilePath)}/askui-ui-controller.app/Contents/MacOS/askui-ui-controller"`;
  }

  private makeDiskImageExecutable() {
    const mountPoint = '/Volumes/askui-ui-controller.dmg';
    execSync([
      'hdiutil attach',
      '-nobrowse',
      '-quiet',
      '-noautofsck',
      '-noautoopen',
      `-mountpoint "${mountPoint}"`,
      `"${this.binaryFilePath}"`,
    ].join(' '));
    const appBaseName = 'askui-ui-controller.app';
    const appSrcPath = `${mountPoint}/${appBaseName}`;
    const appDestPath = `${path.dirname(this.binaryFilePath)}/${appBaseName}`;
    fs.removeSync(appDestPath);
    fs.copySync(appSrcPath, appDestPath);
    exec(`hdiutil detach "${mountPoint}"`, (_exception, stdout) => logger.debug(stdout));
  }
}
