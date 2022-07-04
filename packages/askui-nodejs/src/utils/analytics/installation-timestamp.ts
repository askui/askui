import fs from 'fs';
import path from 'path';
import { logger } from '../../lib';
import { InstallationTimestampCreateError } from './installation-timestamp-create-error';
import { InstallationTimestampGetError } from './installation-timestamp-get-error';
import { getPathToNodeModulesRoot } from '../path';

export abstract class InstallationTimestamp {
  private static fileName = path.join(
    getPathToNodeModulesRoot(),
    'install-timestamp',
  );

  private static value?: Date | null;

  static async create(): Promise<void> {
    const timestamp = new Date().toISOString();
    return new Promise((resolve, reject) => {
      fs.writeFile(InstallationTimestamp.fileName, timestamp, { encoding: 'utf-8' }, (err) => {
        if (err) {
          reject(new InstallationTimestampCreateError(err));
        } else {
          resolve();
        }
      });
    });
  }

  static async get(): Promise<Date | null> {
    if (InstallationTimestamp.value === undefined) {
      try {
        InstallationTimestamp.value = await this.getFromFile();
      } catch (err) {
        InstallationTimestamp.value = null;
        logger.warn((err as InstallationTimestampGetError).message);
      }
    }
    return InstallationTimestamp.value;
  }

  private static async getFromFile(): Promise<Date> {
    return new Promise((resolve, reject) => {
      fs.readFile(InstallationTimestamp.fileName, 'utf-8', (err, isoDateStr) => {
        if (err) {
          reject(new InstallationTimestampGetError(err));
        } else {
          resolve(new Date(isoDateStr));
        }
      });
    });
  }
}
