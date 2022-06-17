import { LogLevels } from '../shared/log-levels';

export interface UiControllerArgs {
  readonly display?: number;
  readonly binaryVersion?: string,
  readonly port?: number;
  readonly host?: string;
  readonly minimize?: boolean;
  readonly overWriteBinary?: boolean;
  readonly logLevel?: LogLevels;
  readonly logFilePath?: string;
}

export interface UiControllerArgsWithDefaults extends UiControllerArgs {
  readonly display: number;
  readonly binaryVersion: string;
  readonly overWriteBinary: boolean;
  readonly port: number;
  readonly host: string;
  readonly logLevel?: LogLevels;

}

export function createArgsWithDefaults(
  args?: UiControllerArgs,
): UiControllerArgsWithDefaults {
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

export function createCliFlagsFromArgs(args: UiControllerArgsWithDefaults): string[] {
  return [
    `-d ${args.display.toString()}`,
    args?.port ? `-p ${args.port.toString()}` : '',
    args?.host ? `--host ${args.host}` : '',
    args?.minimize ? '-m ' : '',
    args?.logLevel ? `--log-level ${args.logLevel}` : '',
    args?.logFilePath ? `--log-file ${args.logFilePath}` : '',
  ].filter((arg) => !!arg);
}
