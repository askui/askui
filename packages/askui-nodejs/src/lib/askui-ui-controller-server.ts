import { ControlUiServerFacade } from './askui-ui-controller-server-facade';
import { ControlUiServerArgs } from './askui-ui-controller-server-args';
import { ControlUiServerDarwin } from './askui-ui-controller-server-darwin';
import { ControlUiServerLinux } from './askui-ui-controller-server-linux';
import { ControlUiServerWin32 } from './askui-ui-controller-server-win32';
import { platform } from './download-binaries';

export class AskuiUiController {
  private server: ControlUiServerFacade;

  constructor(private args?: ControlUiServerArgs) {
    switch (platform()) {
      case 'darwin':
        this.server = new ControlUiServerDarwin();
        break;
      case 'linux':
        this.server = new ControlUiServerLinux();
        break;
      case 'win32':
        this.server = new ControlUiServerWin32();
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
