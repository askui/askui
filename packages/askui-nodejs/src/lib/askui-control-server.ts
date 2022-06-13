import { ControlUiServerFacade } from './control-ui-server-facade';
import { ControlUiServerArgs } from './control-ui-server-args';
import { ControlUiServerDarwin } from './control-ui-server-darwin';
import { ControlUiServerLinux } from './control-ui-server-linux';
import { ControlUiServerWin32 } from './control-ui-server-win32';
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
