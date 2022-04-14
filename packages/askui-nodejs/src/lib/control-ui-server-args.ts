import { LogLevels } from '../shared/log-levels';

export interface ControlUiServerArgs {
  readonly display?: number;
  readonly binaryVersion?: string,
  readonly port?: number;
  readonly host?: string;
  readonly minimize?: boolean;
  readonly overWriteBinary?: boolean;
  readonly logLevel?: LogLevels;
  readonly logPath?: string;
}

export interface ControlUiServerArgsWithDefaults extends ControlUiServerArgs {
  readonly display: number;
  readonly binaryVersion: string;
  readonly overWriteBinary: boolean;
  readonly port: number;
  readonly host: string;
  readonly logLevel: LogLevels;
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
    logLevel: 'info',
  };
  return Object.assign(defaults, args);
}

export function createCliFlagsFromArgs(args: ControlUiServerArgsWithDefaults): string[] {
  return [
    `-d ${args.display.toString()}`,
    args?.port ? `-p ${args.port.toString()}` : '',
    args?.host ? `--host ${args.host}` : '',
    args?.minimize ? '-m ' : '',
    args?.logLevel ? `--logLevel ${args.logLevel}` : '',
    args?.logPath ? `--log-file=${args.logPath}` : '',
  ].filter((arg) => !!arg);
}
