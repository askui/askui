import { UiControllerFacade } from './ui-controller-facade';
import { UiControllerArgs } from './ui-controller-args';
import { UiControllerDarwin } from './ui-controller-darwin';
import { UiControllerLinux } from './ui-controller-linux';
import { UiControllerWin32 } from './ui-controller-win32';
import { platform } from './download-binaries';

export class UiController {
  private server: UiControllerFacade;

  constructor(private args?: UiControllerArgs) {
    switch (platform()) {
      case 'darwin':
        this.server = new UiControllerDarwin();
        break;
      case 'linux':
        this.server = new UiControllerLinux();
        break;
      case 'win32':
        this.server = new UiControllerWin32();
        break;
      default:
        throw new Error(`Platform "${platform()}" not supported.`);
    }
  }

  async start(timeoutInSeconds?:number) {
    await this.server.start(this.args, timeoutInSeconds);
  }

  async stop(forceStop?: boolean) {
    await this.server.stop(this.args, forceStop);
  }
}
