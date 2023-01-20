import fs from 'fs';
import got from 'got';
import os from 'os';
import path from 'path';
import http from 'http';
import https from 'https';
import { promisify } from 'util';
import stream from 'stream';
import { getPathToNodeModulesRoot } from '../utils/path';
import { logger } from './logger';

enum SupportedPlatform {
  LINUX = 'linux',
  DARWIN = 'darwin',
  WIN32 = 'win32',
}

const binarySubPathsByPlatform = {
  linux: ['linux', 'askui-ui-controller.AppImage'],
  darwin: ['darwin', 'askui-ui-controller.dmg'],
  win32: ['windows', 'askui-ui-controller.exe'],
} as const;

function isSupportedPlatform(value: string): value is SupportedPlatform {
  return Object.values<string>(SupportedPlatform).includes(value);
}

export function platform(): SupportedPlatform {
  const pf = os.platform();
  if (isSupportedPlatform(pf)) {
    return pf;
  }
  throw new Error(`Platform "${pf}" is not supported.`);
}

function buildBinaryNotAvailableError(binaryVersion: string): Error {
  return new Error(`There was an error during downloading and creating the askui UI Controller. You can try a fresh install.
   If you specified a binary version it is possible that the askui UI Controller version "${binaryVersion}" 
   for your system "${platform()} ${os.arch}" is not available. 
   If this problem still occurs, please contact us at info@askui.com for more information`);
}

export function getBinaryFilePath(version: string): string {
  return path.join(getPathToNodeModulesRoot(), 'release', version, ...binarySubPathsByPlatform[platform()]);
}

function getBinaryDownloadUrl(binaryVersion: string): string {
  const baseUrl = `https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/${binaryVersion}`;
  const arch = os.arch();
  return `${baseUrl}/${platform()}/${arch}/${binarySubPathsByPlatform[platform()][1]}`;
}

export async function downloadServerBinaries(
  binaryVersion: string,
  proxyAgent?: { http: http.Agent, https: https.Agent },
): Promise<void> {
  logger.info(`Start downloading UI Controller version "${binaryVersion}"`);
  const url = getBinaryDownloadUrl(binaryVersion);
  const binaryFilePath = getBinaryFilePath(binaryVersion);
  const binaryFolderPath = path.dirname(binaryFilePath);
  const tempFilePath = path.join(binaryFolderPath, 'askui-ui-controller.temp');
  const pipeline = promisify(stream.pipeline);
  const downloadStream = got.stream(url, proxyAgent ? { agent: proxyAgent } : {});
  const fileWriterStream = fs.createWriteStream(tempFilePath);

  if (!(fs.existsSync(binaryFolderPath))) {
    fs.mkdirSync(binaryFolderPath, { recursive: true });
  }

  try {
    await pipeline(downloadStream, fileWriterStream);
    if (fs.existsSync(binaryFilePath)) {
      fs.unlink(binaryFilePath, (err) => { logger.error(err); });
    }
    fs.rename(tempFilePath, binaryFilePath, () => {
      logger.info(`UI Controller version ${binaryVersion} for your system "${platform()} ${os.arch}" was downloaded`);
      logger.debug(`Binary of UI Controller is located at "${binaryFilePath}".`);
    });
  } catch (error) {
    logger.error(error);
    fs.unlink(tempFilePath, (err) => { logger.error(err); });
    throw buildBinaryNotAvailableError(binaryVersion);
  }

  return Promise.resolve();
}
