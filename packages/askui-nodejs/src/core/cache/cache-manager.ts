/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';
import path from 'path';
import { ControlCommand } from '../ui-control-commands';
import { InputEvent } from '../ui-control-commands/input-event';
import { Base64Image } from '../../utils/base_64_image/base-64-image';
import { logger } from '../../lib';
import { CacheInterface } from './cache-interface';
import { CacheEntry } from './cache-entry';
import { CacheConfig, ValidationType } from './cache-config';
import { ImageReference } from './image-reference';
import { CacheEntryReference } from './cache-entry-reference';

export class CacheManager implements CacheInterface {
  public createAt: Date = new Date();

  public version = 1;

  public type = 'AskUI-Cache';

  public data: Record<string, Record<string, CacheEntry[]>> = {};

  private relevantData: Record<string, CacheEntry[]> = {};

  private cacheFilePath: string | undefined;

  public validationType: ValidationType;

  private referenceWidth = 32;

  private referenceHeight = 16;

  private readonly defaultValidationType: ValidationType = 'PixelPerfect';

  constructor(config: CacheConfig) {
    this.cacheFilePath = config.cacheFilePath;
    this.validationType = config.validationType ?? this.defaultValidationType;
  }

  loadFromFileVersion1(json: Record<string, any>) {
    if (json['version'] !== 1) {
      throw new Error(`Unsupported cache file version: ${json['version']}. Only version 1 is supported.`);
    }
    if (json['data'] === undefined) {
      throw new Error('Data is required');
    }
    if (json['createAt'] === undefined) {
      throw new Error('Create at is required');
    }
    if (json['version'] === undefined) {
      throw new Error('Version is required');
    }
    if (json['type'] !== 'AskUI-Cache') {
      throw new Error(`Unsupported cache file type: ${json['type']}. Only 'AskUI-Cache' is supported.`);
    }

    this.createAt = new Date(json['createAt']);
    this.version = json['version'];
    this.type = json['type'];
    this.data = Object.keys(json['data']).reduce((acc, validationType) => {
      const nextAcc = { ...acc };
      nextAcc[validationType] = Object.keys(json['data'][validationType]).reduce((innerAcc, instruction) => {
        const nextInnerAcc = { ...innerAcc };
        nextInnerAcc[instruction] = json['data'][validationType][instruction].map((entry: CacheEntry) => CacheEntry.fromJson(entry)).filter((entry: CacheEntry | undefined) => entry !== undefined) as CacheEntry[];
        return nextInnerAcc;
      }, {} as Record<string, CacheEntry[]>);
      return nextAcc;
    }, {} as Record<string, Record<string, CacheEntry[]>>);
  }

  loadFromFile() {
    if (this.cacheFilePath === undefined) {
      logger.debug('Cache file path is not set. Skipping cache load.');
      return;
    }

    logger.debug(`Loading cache from file: ${this.cacheFilePath}`);
    if (!fs.existsSync(this.cacheFilePath)) {
      logger.warn(`Cache file does not exist: ${this.cacheFilePath}. Skipping cache load.`);
      return;
    }
    const data = fs.readFileSync(this.cacheFilePath, 'utf8');
    const json = JSON.parse(data);
    if (json.version !== 1) {
      throw new Error(`Unsupported cache file version: ${json.version}`);
    }
    this.loadFromFileVersion1(json);

    this.relevantData = this.data[this.validationType] ?? {};
  }

  saveToFile() {
    if (this.cacheFilePath === undefined) {
      logger.debug('Cache file path is not set. Skipping cache save.');
      return;
    }

    try {
      logger.debug(`Saving cache to file: ${this.cacheFilePath}`);
      const jsonObject = this.asJsonObject();
      const jsonString = JSON.stringify(jsonObject, null, 2);
      // create the directory if it doesn't exist
      if (!fs.existsSync(path.dirname(this.cacheFilePath))) {
        fs.mkdirSync(path.dirname(this.cacheFilePath), { recursive: true });
      }
      fs.writeFileSync(this.cacheFilePath, jsonString, 'utf8');
      logger.debug(`Cache saved successfully to: ${this.cacheFilePath}`);
    } catch (error) {
      logger.error(`Error saving cache to file: ${error}. Skipping cache save.`);
    }
  }

  addCacheEntry(instruction: string, cacheEntry: CacheEntry) {
    logger.debug(`Adding cache entry for instruction: ${instruction}, AlwaysValid: ${cacheEntry.alwaysValid}, hasImageReference: ${cacheEntry.reference?.image !== undefined}`);
    if (this.data[this.validationType] === undefined) {
      this.data[this.validationType] = {};
    }
    if (this.relevantData[instruction] === undefined) {
      this.relevantData[instruction] = [] as CacheEntry[];
    }

    this.relevantData[instruction].push(cacheEntry);
  }

  async addCacheEntryFromControlCommand(instruction: string, inferenceResponse: ControlCommand, image?: string) {
    logger.debug(`Adding cache entry for instruction: ${instruction}`);
    let imageReference;
    if (image !== undefined) {
      const x = inferenceResponse.actions.find((action) => action.inputEvent === InputEvent.MOUSE_MOVE)?.position.x;
      const y = inferenceResponse.actions.find((action) => action.inputEvent === InputEvent.MOUSE_MOVE)?.position.y;
      if (x !== undefined && y !== undefined) {
        const base64Image = await Base64Image.fromString(image);
        const croppedImage = await base64Image.cropRegion(x, y, this.referenceWidth, this.referenceHeight);
        imageReference = new ImageReference(croppedImage.toString(true), this.referenceWidth, this.referenceHeight, x, y);
      }
    }

    const cacheEntry = new CacheEntry(
      image === undefined,
      inferenceResponse,
      new CacheEntryReference(imageReference),
    );
    this.addCacheEntry(instruction, cacheEntry);
  }

  isImageRequired(instruction: string): boolean | undefined {
    logger.debug(`Checking if image is required for instruction: ${instruction}`);
    const cacheEntries = this.getCacheEntriesForInstruction(instruction);
    if (cacheEntries.length === 0) {
      return undefined;
    }
    logger.debug(`Cache entries found: ${cacheEntries.length}`);
    return cacheEntries.find((entry) => entry.alwaysValid === false) !== undefined;
  }

  async getCachedInferenceResponse(instruction: string, image?: string): Promise<ControlCommand | undefined> {
    logger.debug(`Looking up cached inference response for instruction: ${instruction}, hasImage: ${image !== undefined}`);
    const cacheEntry = await this.getValidCacheEntryForInstruction(instruction, image);
    logger.debug(`Cache entry found: ${cacheEntry !== undefined}`);
    if (cacheEntry === undefined) {
      logger.debug(`Cache miss for instruction: ${instruction}`);
      return Promise.resolve(undefined);
    }
    logger.debug(`Cache hit for instruction: ${instruction}, AlwaysValid: ${cacheEntry.alwaysValid}`);
    return Promise.resolve(cacheEntry.inferenceResponse);
  }

  private asJsonObject(): Record<string, any> {
    this.data[this.validationType] = this.relevantData;
    return {
      createAt: this.createAt.toISOString(),
      data: Object.keys(this.data).reduce((acc, validationType) => {
        const validationData = this.data[validationType];
        if (validationData === undefined) {
          return acc;
        }
        const nextAcc = { ...acc };
        nextAcc[validationType] = Object.keys(validationData).reduce((innerAcc, instruction) => {
          const entries = validationData[instruction];
          if (entries !== undefined) {
            const nextInnerAcc = { ...innerAcc };
            nextInnerAcc[instruction] = entries.map((entry) => entry.toJson());
            return nextInnerAcc;
          }
          return innerAcc;
        }, {} as Record<string, any[]>);
        return nextAcc;
      }, {} as Record<string, Record<string, any[]>>),
      type: this.type,
      version: this.version,
    };
  }

  private getCacheEntriesForInstruction(instruction: string): CacheEntry[] {
    logger.debug(`Getting cache entries for instruction: ${instruction}`);
    if (this.data[this.validationType] === undefined || this.relevantData[instruction] === undefined) {
      logger.debug(`No cache entries found for instruction: ${instruction}`);
      return [] as CacheEntry[];
    }
    logger.debug(`Cache entries found: ${this.relevantData[instruction].length}`);
    const entries = this.relevantData[instruction];
    if (entries === undefined) {
      return [] as CacheEntry[];
    }
    return entries;
  }

  private async getValidCacheEntryForInstruction(instruction: string, screenshot?: string): Promise<CacheEntry | undefined> {
    logger.debug(`Getting valid cache entry for instruction: ${instruction}`);
    const cacheEntries = this.getCacheEntriesForInstruction(instruction);
    logger.debug(`Cache entries found: ${cacheEntries.length}`);
    logger.debug(`Found ${cacheEntries.length} cache entries for instruction: ${instruction}`);
    if (cacheEntries.length === 0) {
      return Promise.resolve(undefined);
    }
    if (this.validationType === 'PixelPerfect') {
      logger.debug(`Validating ${cacheEntries.length} cache entries using PixelPerfect validation`);
      /* eslint-disable no-restricted-syntax, no-await-in-loop */
      for (const cacheEntry of cacheEntries) {
        const isValid = await this.validateAccordingToPixelPerfect(cacheEntry, screenshot);
        logger.debug(`Cache entry validation result: ${isValid}`);
        if (isValid) {
          logger.debug(`Valid cache entry found for instruction: ${instruction}`);
          /* eslint-enable no-restricted-syntax, no-await-in-loop */
          return Promise.resolve(cacheEntry);
        }
      }
      /* eslint-enable no-restricted-syntax, no-await-in-loop */
      logger.debug(`No valid cache entry found after validating all ${cacheEntries.length} entries`);
    }
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line class-methods-use-this
  private async validateAccordingToPixelPerfect(cacheEntry: CacheEntry, screenshot?: string): Promise<boolean> {
    if (cacheEntry.alwaysValid) {
      logger.debug('Cache entry is AlwaysValid, skipping pixel validation');
      return Promise.resolve(true);
    }

    if (screenshot === undefined) {
      logger.debug('Pixel validation failed: screenshot is undefined');
      return Promise.resolve(false);
    }
    if (cacheEntry.reference?.image === undefined) {
      logger.debug('Pixel validation failed: cache entry has no image reference');
      return Promise.resolve(false);
    }

    try {
      logger.debug(`Performing pixel-perfect validation at position (${cacheEntry.reference.image.x}, ${cacheEntry.reference.image.y}) with size ${cacheEntry.reference.image.width}x${cacheEntry.reference.image.height}`);
      const referenceImage = await Base64Image.fromString(screenshot);
      const croppedScreenshot = await referenceImage.cropRegion(cacheEntry.reference.image.x, cacheEntry.reference.image.y, cacheEntry.reference.image.width, cacheEntry.reference.image.height);
      const croppedReferenceImageString = croppedScreenshot.toString(true);
      const isValid = croppedReferenceImageString === cacheEntry.reference.image.base64Image;
      logger.debug(`Pixel-perfect validation result: ${isValid}`);
      return await Promise.resolve(isValid);
    } catch (error) {
      logger.debug(`Pixel validation error: ${error instanceof Error ? error.message : String(error)}`);
      return Promise.resolve(false);
    }
  }
}
