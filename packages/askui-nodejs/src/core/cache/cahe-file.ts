import fs from 'fs';
import path from 'path';
import { logger } from '../../lib';
import { CacheEntry } from './cache-entry';
import { ValidationType } from './cache-config';

export type CacheDataByInstruction = Record<string, CacheEntry[]>;
export type CacheDataByValidationType = Record<string, CacheDataByInstruction>;

export class CacheFile {
  private createAt: Date = new Date();

  private version = 1;

  private type = 'AskUI-Cache';

  private data: CacheDataByValidationType = {};

  private filePath: string | undefined;

  constructor(filePath?: string) {
    this.filePath = filePath;
  }

  loadFromFileVersion1(json: CacheFile) {
    if (json.version !== 1) {
      throw new Error(`Unsupported key 'version' in the cache file: '${json.version}'. Only version 1 is supported.`);
    }
    if (json.data === undefined) {
      throw new Error("Key 'data' is required in the cache file.");
    }
    if (json.createAt === undefined) {
      throw new Error("Key 'createAt' is required in the cache file.");
    }
    if (json.version === undefined) {
      throw new Error("Key 'version' is required in the cache file.");
    }
    if (json.type !== 'AskUI-Cache') {
      throw new Error(`Unsupported key 'type' in the cache file: '${json.type}'. Only 'AskUI-Cache' is supported.`);
    }

    this.createAt = new Date(json.createAt);
    this.version = json.version;
    this.type = json.type;
    this.data = Object.keys(json.data).reduce((acc, validationType) => {
      const nextAcc = { ...acc };
      const validationEntries = json.data?.[validationType] ?? {};
      nextAcc[validationType] = Object.keys(validationEntries).reduce((innerAcc, instruction) => {
        const nextInnerAcc = { ...innerAcc };
        const rawEntries = validationEntries[instruction] ?? [];
        nextInnerAcc[instruction] = rawEntries
          .map((entry) => CacheEntry.fromJson(entry))
          .filter((entry: CacheEntry | undefined): entry is CacheEntry => entry !== undefined);
        return nextInnerAcc;
      }, {} as CacheDataByInstruction);
      return nextAcc;
    }, {} as CacheDataByValidationType);
  }

  loadFromFile(): void {
    if (this.filePath === undefined) {
      logger.debug('The cache file path is not set. Skipping the cache load.');
      return;
    }

    logger.debug(`Loading the cache from file '${this.filePath}'.`);
    if (!fs.existsSync(this.filePath)) {
      logger.warn(`The cache file does not exist: '${this.filePath}'. Skipping the cache load.`);
      return;
    }
    const data = fs.readFileSync(this.filePath, 'utf8');
    const json = JSON.parse(data);
    if (json.version !== 1) {
      throw new Error(`Unsupported key 'version' in the cache file: '${json.version}'. Only version 1 is supported.`);
    }
    this.loadFromFileVersion1(json);
  }

  getDataForValidationType(validationType: ValidationType): CacheDataByInstruction {
    return this.data[validationType] ?? {};
  }

  getData(): CacheDataByValidationType {
    return this.data;
  }

  saveToFile(validationType: ValidationType, relevantData: CacheDataByInstruction): void {
    if (this.filePath === undefined) {
      logger.debug('The cache file path is not set. Skipping the cache save.');
      return;
    }

    try {
      logger.debug(`Saving the cache to file '${this.filePath}'.`);
      this.setRelevantData(validationType, relevantData);
      const jsonObject = this.asJsonObject();
      const jsonString = JSON.stringify(jsonObject, null, 2);
      // create the directory if it doesn't exist
      if (!fs.existsSync(path.dirname(this.filePath))) {
        fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      }
      fs.writeFileSync(this.filePath, jsonString, 'utf8');
      logger.info(`The cache was saved successfully to '${this.filePath}'.`);
    } catch (error) {
      logger.error(`An error occurred while saving the cache to file '${this.filePath}': '${error}'`);
      throw error;
    }
  }

  private setRelevantData(
    validationType: ValidationType,
    relevantData: CacheDataByInstruction,
  ): void {
    this.data[validationType] = relevantData;
  }

  private asJsonObject(): Record<string, unknown> {
    return {
      createAt: this.createAt.toISOString(),
      data: Object.keys(this.data).reduce((acc: CacheDataByValidationType, validationType) => {
        const validationData = this.data[validationType] as CacheDataByInstruction | undefined;
        if (validationData === undefined) {
          return acc;
        }
        const nextAcc = { ...acc };
        nextAcc[validationType] = Object.keys(validationData).reduce((innerAcc, instruction) => {
          const entries = validationData[instruction];
          if (entries !== undefined) {
            const nextInnerAcc = { ...innerAcc };
            nextInnerAcc[instruction] = entries;
            return nextInnerAcc;
          }
          return innerAcc;
        }, {} as CacheDataByInstruction);
        return nextAcc;
      }, {} as CacheDataByValidationType),
      type: this.type,
      version: this.version,
    };
  }
}
