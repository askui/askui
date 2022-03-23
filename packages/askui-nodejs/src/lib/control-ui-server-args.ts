export interface ControlUiServerArgs {
  readonly display?: number;
  readonly binaryVersion?: string,
  readonly port?: number;
  readonly host?: string;
  readonly minimize?: true;
  readonly overWriteBinary?: boolean;
}

export interface ControlUiServerArgsWithDefaults extends ControlUiServerArgs {
  readonly display: number;
  readonly binaryVersion: string;
  readonly overWriteBinary: boolean;
}

export function createArgsWithDefaults(
  args?: ControlUiServerArgs,
): ControlUiServerArgsWithDefaults {
  const defaults = {
    binaryVersion: 'latest',
    display: 0,
    overWriteBinary: false,
  };
  return Object.assign(defaults, args);
}

export function createCliFlagsFromArgs(args: ControlUiServerArgsWithDefaults): string[] {
  return [
    `-d ${args.display.toString()}`,
    args?.port ? `-p ${args.port.toString()}` : '',
    args?.host ? `--host ${args.host}` : '',
    args?.minimize ? '-m ' : '',
  ].filter((arg) => !!arg);
}
