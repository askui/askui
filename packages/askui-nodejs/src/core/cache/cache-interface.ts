import { ControlCommand } from '../ui-control-commands';
import { CacheEntry } from './cache-entry';

export interface CacheInterface {
  loadFromFile(): void;
  saveToFile(): void;
  addCacheEntry(instruction: string, cacheEntry: CacheEntry): void;
  addCacheEntryFromControlCommand(
    instruction: string,
    inferenceResponse: ControlCommand,
    image?: string,
  ): Promise<void>;
  isImageRequired(instruction: string): boolean | undefined;
  getCachedInferenceResponse(
    instruction: string,
    image?: string,
  ): Promise<ControlCommand | undefined>;
}
