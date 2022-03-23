import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import fs from 'fs-extra';
import {
  ControlUiServerArgs,
  ControlUiServerArgsWithDefaults,
  createArgsWithDefaults,
  createCliFlagsFromArgs,
} from './control-ui-server-args';
import { downloadServerBinaries, getBinaryPath } from './download-binaries';
import { logger } from './logger';

export abstract class ControlUiServer {
  protected binaryPath = getBinaryPath('latest');

  protected readonly maxWaitingForStartingInMs = 30 * 1000;

  async start(args?: ControlUiServerArgs) {
    const argsWithDefaults = createArgsWithDefaults(args);
    this.binaryPath = getBinaryPath(argsWithDefaults.binaryVersion);
    await this.getBinary(argsWithDefaults.binaryVersion, argsWithDefaults.overWriteBinary);
    this.makeBinaryExecutable();
    await this.startWithDefaults(argsWithDefaults);
  }

  protected getStartingCommand(): string {
    return this.binaryPath;
  }

  // eslint-disable-next-line class-methods-use-this
  protected makeBinaryExecutable() {
    /* Executable out of the box */
  }

  // eslint-disable-next-line class-methods-use-this
  protected async hasStarted(process: ChildProcessWithoutNullStreams): Promise<void> {
    return new Promise((resolve, reject) => {
      process.stdout.on('data', (data) => {
        if (data.toString().includes('controlyourui successfully started!')) {
          resolve();
        }
      });
      process.on('error', (err) => reject(err));
      setTimeout(() => reject(new Error('Starting time limit has been reached')), this.maxWaitingForStartingInMs);
    });
  }

  private isBinaryValid(): boolean {
    const sizeThresholdInMB = 100;
    const binarysizeInMB = fs.statSync(this.binaryPath).size / (1024 * 1024);
    return binarysizeInMB > sizeThresholdInMB;
  }

  private async getBinary(binaryVersion: string, overWriteBinary = false): Promise<void> {
    if (!fs.existsSync(this.binaryPath) || overWriteBinary || !this.isBinaryValid()) {
      logger.debug(`Currently, no binary of the Control UI Server is available at "${this.binaryPath}"`);
      await downloadServerBinaries(binaryVersion);
    } else {
      logger.debug(`Binary of Control UI Server is already present at "${this.binaryPath}".`);
    }
  }

  private async startWithDefaults(args: ControlUiServerArgsWithDefaults) {
    logger.debug('Starting the Control UI Server...');
    const process = spawn(this.getStartingCommand(), createCliFlagsFromArgs(args), { shell: true });
    try {
      await this.hasStarted(process);
      logger.debug('The Control UI Server has been started.');
    } catch (err) {
      throw new Error(`The Control UI Server could not be started. Reason: ${err}`);
    }
  }
}
