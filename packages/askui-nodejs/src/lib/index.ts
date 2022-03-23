import { ControlUiServer } from './control-ui-server';
import { ControlUiServerArgs } from './control-ui-server-args';
import { ControlUiServerDarwin } from './control-ui-server-darwin';
import { ControlUiServerLinux } from './control-ui-server-linux';
import { ControlUiServerWin32 } from './control-ui-server-win32';
import { platform } from './download-binaries';

function createControlUiServer(): ControlUiServer {
  switch (platform()) {
    case 'darwin':
      return new ControlUiServerDarwin();
    case 'linux':
      return new ControlUiServerLinux();
    case 'win32':
      return new ControlUiServerWin32();
    default:
      throw new Error(`Platform "${platform()}" not supported.`);
  }
}
/**
* download and start the controlui-server`.
*/
export async function startAskuiServer(args?: ControlUiServerArgs) {
  const server = createControlUiServer();
  await server.start(args);
}
