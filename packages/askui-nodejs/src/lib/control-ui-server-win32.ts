import { ChildProcessWithoutNullStreams } from 'child_process';
import { ControlUiServer } from './control-ui-server';

export class ControlUiServerWin32 extends ControlUiServer {
  // eslint-disable-next-line class-methods-use-this
  protected override async hasStarted(process: ChildProcessWithoutNullStreams): Promise<void> {
    return new Promise((resolve, reject) => {
      process.on('error', (err) => reject(err));
      setTimeout(() => resolve(), this.maxWaitingForStartingInMs);
    });
  }
}
