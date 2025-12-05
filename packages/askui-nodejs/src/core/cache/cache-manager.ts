import { ControlCommand } from '../ui-control-commands';
import { InputEvent } from '../ui-control-commands/input-event';
import { Base64Image } from '../../utils/base_64_image/base-64-image';
import { logger } from '../../lib';
import { CacheInterface } from './cache-interface';
import { CacheEntry } from './cache-entry';
import { CacheConfig, ValidationType } from './cache-config';
import { ImageReference } from './image-reference';
import { CacheEntryReference } from './cache-entry-reference';
import { CacheFile, CacheDataByInstruction } from './cahe-file';

export class CacheManager implements CacheInterface {
  private relevantData: CacheDataByInstruction = {};

  public validationType: ValidationType;

  private cacheFile: CacheFile;

  private readonly referenceWidth = 32;

  private readonly referenceHeight = 16;

  private readonly defaultValidationType: ValidationType = 'PixelPerfect';

  constructor(config: CacheConfig) {
    this.validationType = config.validationType ?? this.defaultValidationType;
    this.cacheFile = new CacheFile(config.cacheFilePath);
  }

  loadFromFile(): void {
    this.cacheFile.loadFromFile();
    this.relevantData = this.cacheFile.getDataForValidationType(this.validationType);
  }

  saveToFile(): void {
    this.cacheFile.saveToFile(this.validationType, this.relevantData);
  }

  add(key: string, value: CacheEntry): void {
    logger.debug(
      `Adding cache entry for instruction: ${key}, AlwaysValid: ${value.alwaysValid}, `
      + `hasImageReference: ${value.reference?.image !== undefined}`,
    );
    if (this.relevantData[key] === undefined) {
      this.relevantData[key] = [] as CacheEntry[];
    }

    this.relevantData[key].push(value);
  }

  async addCacheEntryFromControlCommand(
    instruction: string,
    controlCommand: ControlCommand,
    image?: string,
  ): Promise<void> {
    logger.debug(`Adding cache entry for instruction: '${instruction}'`);
    let imageReference: ImageReference | undefined;
    if (image !== undefined) {
      const moveAction = controlCommand.actions.find(
        (action) => action.inputEvent === InputEvent.MOUSE_MOVE,
      );
      const x = moveAction?.position.x;
      const y = moveAction?.position.y;
      if (x !== undefined && y !== undefined) {
        const xTopLeft = Math.max(0, (x - this.referenceWidth / 2));
        const yTopLeft = Math.max(0, (y - this.referenceHeight / 2));
        const base64Image = await Base64Image.fromString(image);
        const croppedImage = await base64Image.cropRegion(
          xTopLeft,
          yTopLeft,
          this.referenceWidth,
          this.referenceHeight,
        );
        imageReference = new ImageReference(
          croppedImage.toString(true),
          this.referenceWidth,
          this.referenceHeight,
          xTopLeft,
          yTopLeft,
        );
      }
    }

    const cacheEntry = new CacheEntry(
      image === undefined,
      controlCommand,
      new CacheEntryReference(imageReference),
    );
    this.add(instruction, cacheEntry);
  }

  isImageRequired(instruction: string): boolean | undefined {
    logger.debug(`Checking if image is required for instruction: '${instruction}'`);
    const cacheEntries = this.getCacheEntriesForInstruction(instruction);
    if (cacheEntries.length === 0) {
      return undefined;
    }
    logger.debug(`Cache entries found: ${cacheEntries.length}`);
    return cacheEntries.find((entry) => entry.alwaysValid === false) !== undefined;
  }

  async getCachedControlCommand(
    instruction: string,
    image?: string,
  ): Promise<ControlCommand | undefined> {
    logger.debug(
      `Looking up cached control command for instruction: '${instruction}', `
      + `hasImage: ${image !== undefined}`,
    );
    const cacheEntry = await this.getValidCacheEntryForInstruction(instruction, image);
    logger.debug(
      `Cache entry found: ${cacheEntry !== undefined}`,
    );
    if (cacheEntry === undefined) {
      logger.debug(`Cache miss for instruction: '${instruction}'`);
      return undefined;
    }
    logger.debug(`Cache hit for instruction: '${instruction}', AlwaysValid: ${cacheEntry.alwaysValid}`);
    return cacheEntry.controlCommand;
  }

  private getCacheEntriesForInstruction(instruction: string): CacheEntry[] {
    logger.debug(`Getting cache entries for instruction: ${instruction}`);
    if (this.relevantData[instruction] === undefined) {
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

  private async getValidCacheEntryForInstruction(
    instruction: string,
    screenshot?: string,
  ): Promise<CacheEntry | undefined> {
    logger.debug(`Getting valid cache entry for instruction: ${instruction}`);
    const cacheEntries = this.getCacheEntriesForInstruction(instruction);
    logger.debug(`Cache entries found: ${cacheEntries.length}`);
    logger.debug(
      `Found ${cacheEntries.length} cache entries for instruction: ${instruction}`,
    );
    if (cacheEntries.length === 0) {
      return undefined;
    }
    if (this.validationType === 'PixelPerfect') {
      logger.debug(
        `Validating ${cacheEntries.length} cache entries using PixelPerfect validation`,
      );
      /* eslint-disable no-restricted-syntax, no-await-in-loop */
      for (const cacheEntry of cacheEntries) {
        const isValid = await this.validateAccordingToPixelPerfect(cacheEntry, screenshot);
        logger.debug(`Cache entry validation result: ${isValid}`);
        if (isValid) {
          logger.debug(`Valid cache entry found for instruction: ${instruction}`);
          /* eslint-enable no-restricted-syntax, no-await-in-loop */
          return cacheEntry;
        }
      }
      /* eslint-enable no-restricted-syntax, no-await-in-loop */
      logger.debug(`No valid cache entry found after validating all ${cacheEntries.length} entries`);
    }
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  private async validateAccordingToPixelPerfect(
    cacheEntry: CacheEntry,
    screenshot?: string,
  ): Promise<boolean> {
    if (cacheEntry.alwaysValid) {
      logger.debug('Cache entry is AlwaysValid, skipping pixel validation');
      return true;
    }

    if (screenshot === undefined) {
      logger.debug('Pixel validation failed: screenshot is undefined');
      return false;
    }
    if (cacheEntry.reference?.image === undefined) {
      logger.debug('Pixel validation failed: cache entry has no image reference');
      return false;
    }

    try {
      logger.debug(
        `Performing pixel-perfect validation at position (${cacheEntry.reference.image.x}, `
        + `${cacheEntry.reference.image.y}) with size ${cacheEntry.reference.image.width}`
        + `x${cacheEntry.reference.image.height}`,
      );
      const referenceImage = await Base64Image.fromString(screenshot);
      const croppedScreenshot = await referenceImage.cropRegion(
        cacheEntry.reference.image.x,
        cacheEntry.reference.image.y,
        cacheEntry.reference.image.width,
        cacheEntry.reference.image.height,
      );
      const croppedReferenceImageString = croppedScreenshot.toString(true);
      const isValid = croppedReferenceImageString === cacheEntry.reference.image.base64Image;
      logger.debug(`Pixel-perfect validation result: ${isValid}`);
      return isValid;
    } catch (error) {
      logger.debug(`Pixel validation error: ${error instanceof Error ? error.message : String(error)}`);
      return false;
    }
  }
}
