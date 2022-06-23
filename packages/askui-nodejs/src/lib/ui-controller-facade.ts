import { spawn } from 'child_process';
import fs from 'fs-extra';
import waitPort from 'wait-port';
import fkill from 'fkill';
import os from 'os';
import path from 'path';
import {
  UiControllerArgs,
  UiControllerArgsWithDefaults,
  createArgsWithDefaults,
  createCliFlagsFromArgs,
} from './ui-controller-args';
import { downloadServerBinaries, getBinaryPath } from './download-binaries';
import { logger } from './logger';
import { TimeoutError } from './timeout-error';
import { UnkownError } from './unkown-error';

export abstract class UiControllerFacade {
  protected binaryPath = getBinaryPath('latest');

  protected serverLogFile!: string;

  protected readonly DefaultmaxWaitingForStartingInMs = 30 * 1000;

  async start(args?: UiControllerArgs, maxWaitingForStartingInSeconds?: number) {
    await this.runPreStartChecks();
    const argsWithDefaults = createArgsWithDefaults(args);
    const argsWithLogPath = this.serverLogFilePath(argsWithDefaults);
    this.binaryPath = getBinaryPath(argsWithLogPath.binaryVersion);
    await this.getBinary(argsWithLogPath.binaryVersion, argsWithLogPath.overWriteBinary);
    this.makeBinaryExecutable();
    logger.debug(`UI Controller log path "${this.serverLogFile}"`);
    await this.startWithDefaults(argsWithLogPath, maxWaitingForStartingInSeconds);
  }

  async stop(args?: UiControllerArgs, forceStop?: boolean): Promise<void> {
    try {
      const argsWithDefaults = createArgsWithDefaults(args);
      await this.killPort(argsWithDefaults.port, forceStop);
    } catch (err) {
      throw new Error(`An unknown error occured while closing of the UI Controller. Log file: "${this.serverLogFile}". ErrorReason: ${err}`);
    }
  }

  protected serverLogFilePath(
    args?: UiControllerArgsWithDefaults,
  ): UiControllerArgsWithDefaults {
    if (args?.logFilePath) {
      this.serverLogFile = args.logFilePath;
      return args;
    }
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'askui'));
    this.serverLogFile = path.join(tmpDir, 'askui-ui-controller.log');
    const argPath = { logFilePath: this.serverLogFile };
    return Object.assign(argPath, args);
  }

  // eslint-disable-next-line class-methods-use-this
  protected killPort(port: number, forceStop?: boolean): Promise<void> {
    return fkill(
      `:${port}`,
      {
        force: forceStop || false,
        silent: true,
      },
    );
  }

  protected getStartingCommand(): string {
    return `"${this.binaryPath}"`;
  }

  // eslint-disable-next-line class-methods-use-this
  protected makeBinaryExecutable() {
    /* Executable out of the box */
  }

  // eslint-disable-next-line class-methods-use-this
  protected runPreStartChecks(): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  protected waitUntilStarted(
    args: UiControllerArgsWithDefaults,
    maxWaitingForStartingInSeconds?: number,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const timeoutInMs = maxWaitingForStartingInSeconds
          ? maxWaitingForStartingInSeconds * 1000 : this.DefaultmaxWaitingForStartingInMs;
        waitPort({
          host: args.host,
          port: args.port,
          timeout: timeoutInMs,
          output: process?.env['LOG_LEVEL'] === 'verbose' ? 'dots' : 'silent',
        }).then((open: boolean) => {
          if (open) {
            logger.info('The Control UI Server has been started.');
            return resolve();
          }
          return reject(new TimeoutError('Starting time limit has been reached'));
        });
      } catch (err) {
        reject(new UnkownError(`An unknown error occured while waiting for the UI Controller: ${err}`));
      }
    });
  }

  private isBinaryValid(): boolean {
    const sizeThresholdInMB = 100;
    const binarysizeInMB = fs.statSync(this.binaryPath).size / (1024 * 1024);
    return binarysizeInMB > sizeThresholdInMB;
  }

  private async getBinary(binaryVersion: string, overWriteBinary = false): Promise<void> {
    if (!fs.existsSync(this.binaryPath) || overWriteBinary || !this.isBinaryValid()) {
      logger.debug(`Currently, no binary of the UI Controller is available at "${this.binaryPath}"`);
      await downloadServerBinaries(binaryVersion);
    } else {
      logger.debug(`Binary of UI Controller is already present at "${this.binaryPath}".`);
    }
  }

  private async startWithDefaults(
    args: UiControllerArgsWithDefaults,
    maxWaitingForStartingInSeconds?: number,
  ) {
    try {
      logger.debug('Starting the UI Controller...');
      spawn(
        this.getStartingCommand(),
        createCliFlagsFromArgs(args),
        { shell: true },
      );
      await this.waitUntilStarted(args, maxWaitingForStartingInSeconds);
    } catch (err) {
      throw new Error(`The UI Controller could not be started. Log file :  ${this.serverLogFile}. ErrorReason: ${err}
      Check this website for more information: https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller-starting-problems`);
    }
  }
}
