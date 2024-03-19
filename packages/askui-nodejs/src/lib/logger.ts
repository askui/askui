import pino from 'pino';
import pretty from 'pino-pretty';

const SupportedLogValues = [
  'info',
  'verbose',
  'debug',
  'error',
];

function isProcessEnvLogLevelValid(): boolean {
  return SupportedLogValues.includes(process.env['LOG_LEVEL'] as string);
}
const stream = pretty({
  colorize: true,
  ignore: 'pid,hostname,filename',
  translateTime: 'SYS:standard',
});
const defaultLogLevel = 'info';
const pinoLevel: string = isProcessEnvLogLevelValid() ? process.env['LOG_LEVEL'] as string : defaultLogLevel;
const logger = pino(
  {
    customLevels: {
      verbose: 5,
    },
    level: pinoLevel,
    name: 'askuiUiControlClient',
  },
  stream,
);
if (!(isProcessEnvLogLevelValid()) && process.env['LOG_LEVEL'] !== undefined) {
  logger.warn(`"${process.env['LOG_LEVEL']}" is not supported as log level. Supported log levels: ${SupportedLogValues.join(', ')}`);
  logger.warn(`Starting with the default LOG_LEVEL value "${defaultLogLevel}"`);
}

export { logger };
