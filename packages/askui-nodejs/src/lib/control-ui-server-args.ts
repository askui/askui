import { LogLevels } from '../shared/log-levels';

export interface ControlUiServerArgs {
  /* You can choose on which display you want to excecute all tests. 0 is your main monitor.
  If you want to use your second monitor you can change
  the value to `1` (`2` for your third monitor etc.). */
  readonly display?: number;
  // Choose the version of the askui UI Controller Server.
  readonly binaryVersion?: string,
  // The port the askui UI Controller is running on.
  readonly port?: number;
  // The host the askui UI Controller is running on.
  readonly host?: string;
  // Askui UI Controller will be started as minimized window.
  readonly minimize?: boolean;
  /* Download the provided Version of askui UI Controller.
  If a version is already downloaded. This version will be overwritten. */
  readonly overWriteBinary?: boolean;
  /* You can use different types of Log Level. Options:
  options: "fatal", "error", "warn", "info", "debug", "trace", "silent", "verbose".
  */
  readonly logLevel?: LogLevels;
  /* It is possible to specify a path for your log files.
  Logs are written to the stdout per default. */
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
