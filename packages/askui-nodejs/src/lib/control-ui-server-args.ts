import { LogLevels } from '../shared/log-levels';

/**
 * @param display You can choose on which display you want to excecute all tests.
 * 0 is your main monitor.
 * If you want to use your second monitor you can change
 * the value to `1` (`2` for your third monitor etc.).
 * @param binaryVersion Choose the version of the askui UI Controller Server.
 * @param port The port the askui UI Controller is running on.
 * @param host The host the askui UI Controller is running on.
 * @param minimize askui UI Controller will be started as minimized window.
 * @param overWriteBinary Download the provided Version of askui UI Controller.
 * If a version is already downloaded. This version will be overwritten
 * @param logLevel You can use different types of Log Level.
 * Options: "fatal", "error", "warn", "info", "debug", "trace", "silent", "verbose".
 * @param logFilePath It is possible to specify a path for your log files.
 * Per default we create the askui-server.log file and askui folder in your temp folder.
 */
export interface ControlUiServerArgs {
  readonly display?: number;
  readonly binaryVersion?: string,
  readonly port?: number;
  readonly host?: string;
  readonly minimize?: boolean;
  readonly overWriteBinary?: boolean;
  readonly logLevel?: LogLevels;
  readonly logFilePath?: string;
}

export interface ControlUiServerArgsWithDefaults extends ControlUiServerArgs {
  readonly display: number;
  readonly binaryVersion: string;
  readonly overWriteBinary: boolean;
  readonly port: number;
  readonly host: string;
  readonly logLevel?: LogLevels;

}

export function createArgsWithDefaults(
  args?: ControlUiServerArgs,
): ControlUiServerArgsWithDefaults {
  const defaults = {
    binaryVersion: 'latest',
    display: 0,
    overWriteBinary: false,
    minimize: true,
    port: 6769,
    host: '127.0.0.1',
    logLevel: 'debug',
  };
  return Object.assign(defaults, args);
}

export function createCliFlagsFromArgs(args: ControlUiServerArgsWithDefaults): string[] {
  return [
    `-d ${args.display.toString()}`,
    args?.port ? `-p ${args.port.toString()}` : '',
    args?.host ? `--host ${args.host}` : '',
    args?.minimize ? '-m ' : '',
    args?.logLevel ? `--log-level ${args.logLevel}` : '',
    args?.logFilePath ? `--log-file ${args.logFilePath}` : '',
  ].filter((arg) => !!arg);
}
