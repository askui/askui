import { AskuiUiControllerServerFacade } from './askui-ui-controller-server-facade';
import { AskuiUiControllerServerArgs } from './askui-ui-controller-server-args';
import { AskuiUiControllerServerDarwin } from './askui-ui-controller-server-darwin';
import { AskuiUiControllerServerLinux } from './askui-ui-controller-server-linux';
import { AskuiUiControllerServerWin32 } from './askui-ui-controller-server-win32';
import { platform } from './download-binaries';

export class AskuiUiController {
  private server: AskuiUiControllerServerFacade;

  constructor(private args?: AskuiUiControllerServerArgs) {
    switch (platform()) {
      case 'darwin':
        this.server = new AskuiUiControllerServerDarwin();
        break;
      case 'linux':
        this.server = new AskuiUiControllerServerLinux();
        break;
      case 'win32':
        this.server = new AskuiUiControllerServerWin32();
        break;
      default:
        throw new Error(`Platform "${platform()}" not supported.`);
    }
  }

  async start(timeoutInSeconds?: number) {
    await this.server.start(this.args, timeoutInSeconds);
  }

  async stop(forceStop?: boolean) {
    await this.server.stop(this.args, forceStop);
  }
}
