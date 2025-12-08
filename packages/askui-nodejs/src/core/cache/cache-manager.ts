import { ControlCommand } from '../ui-control-commands';
import { InputEvent } from '../ui-control-commands/input-event';
import { Base64Image } from '../../utils/base_64_image/base-64-image';
import { CacheInterface } from './cache-interface';
import { CacheEntry } from './cache-entry';
import { CacheConfig, ValidationType } from './cache-config';
import { ImageReference } from './image-reference';
import { CacheEntryReference } from './cache-entry-reference';
import { CacheFile, CacheDataByInstruction } from './cahe-file';
import { CustomElement } from '../model/custom-element';

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
    if (this.relevantData[key] === undefined) {
      this.relevantData[key] = [] as CacheEntry[];
    }

    this.relevantData[key].push(value);
  }

  async addCacheEntryFromControlCommand(
    instruction: string,
    controlCommand: ControlCommand,
    customElements: CustomElement[],
    image?: string,
  ): Promise<void> {
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

    const cacheKey = this.encodeKey(instruction, customElements);
    this.add(cacheKey, cacheEntry);
  }

  isImageRequired(instruction: string, customElements: CustomElement[]): boolean | undefined {
    const cacheKey = this.encodeKey(instruction, customElements);
    const cacheEntries = this.getCacheEntriesByKey(cacheKey);
    if (cacheEntries.length === 0) {
      return undefined;
    }
    return cacheEntries.find((entry) => entry.alwaysValid === false) !== undefined;
  }

  async getCachedControlCommand(
    instruction: string,
    customElements: CustomElement[],
    image?: string,
  ): Promise<ControlCommand | undefined> {
    const cacheKey = this.encodeKey(instruction, customElements);
    const cacheEntry = await this.getValidCacheEntry(cacheKey, image);
    if (cacheEntry === undefined) {
      return undefined;
    }
    return cacheEntry.controlCommand;
  }

  // eslint-disable-next-line class-methods-use-this
  private encodeKey(instruction: string, customElements: CustomElement[]): string {
    let key = instruction;
    if (customElements.length > 0) {
      key += ` with CustomElements:${customElements.map((element, index) => `${index}:${element.asString()}`).join(',')}`;
    }
    return key;
  }

  private getCacheEntriesByKey(key: string): CacheEntry[] {
    if (this.relevantData[key] === undefined) {
      return [] as CacheEntry[];
    }
    const entries = this.relevantData[key];
    if (entries === undefined) {
      return [] as CacheEntry[];
    }
    return entries;
  }

  private async getValidCacheEntry(
    key: string,
    screenshot?: string,
  ): Promise<CacheEntry | undefined> {
    const cacheEntries = this.getCacheEntriesByKey(key);
    if (cacheEntries.length === 0) {
      return undefined;
    }
    if (this.validationType === 'PixelPerfect') {
      /* eslint-disable no-restricted-syntax, no-await-in-loop */
      for (const cacheEntry of cacheEntries) {
        if (cacheEntry.alwaysValid) {
          return cacheEntry;
        }

        const isValid = await this.validateAccordingToPixelPerfect(cacheEntry, screenshot);
        if (isValid) {
          /* eslint-enable no-restricted-syntax, no-await-in-loop */
          return cacheEntry;
        }
      }
      /* eslint-enable no-restricted-syntax, no-await-in-loop */
    }
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  private async validateAccordingToPixelPerfect(
    cacheEntry: CacheEntry,
    screenshot?: string,
  ): Promise<boolean> {
    if (screenshot === undefined) {
      return false;
    }
    if (cacheEntry.reference?.image === undefined) {
      return false;
    }

    try {
      const referenceImage = await Base64Image.fromString(screenshot);
      const croppedScreenshot = await referenceImage.cropRegion(
        cacheEntry.reference.image.xTopLeft,
        cacheEntry.reference.image.yTopLeft,
        cacheEntry.reference.image.width,
        cacheEntry.reference.image.height,
      );
      const croppedReferenceImageString = croppedScreenshot.toString(true);
      const isValid = croppedReferenceImageString === cacheEntry.reference.image.base64Image;
      return isValid;
    } catch (error) {
      return false;
    }
  }
}
