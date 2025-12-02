import { CacheInterface } from './cache-interface';
import { CacheEntry } from './cache-entry';
import { ControlCommand } from '../ui-control-commands';

export class DummyCacheManager implements CacheInterface {
  // eslint-disable-next-line class-methods-use-this
  addCacheEntry(_instruction: string, _cacheEntry: CacheEntry): void {
  }

  // eslint-disable-next-line class-methods-use-this
  addCacheEntryFromControlCommand(
    _instruction: string,
    _inferenceResponse: ControlCommand,
    _image?: string,
  ): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  isImageRequired(_instruction: string): boolean | undefined {
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  getCachedInferenceResponse(
    _instruction: string,
    _image?: string,
  ): Promise<ControlCommand | undefined> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line class-methods-use-this
  loadFromFile(): void {
  }

  // eslint-disable-next-line class-methods-use-this
  saveToFile(): void {
  }
}
