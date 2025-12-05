import { ControlCommand } from '../ui-control-commands';
import { CacheEntry } from './cache-entry';

export interface CacheInterface {
  loadFromFile(): void;
  saveToFile(): void;
  add(key: string, value: CacheEntry): void;
  addCacheEntryFromControlCommand(
    instruction: string,
    controlCommand: ControlCommand,
    image?: string,
  ): Promise<void>;
  isImageRequired(instruction: string): boolean | undefined;
  getCachedControlCommand(
    instruction: string,
    image?: string,
  ): Promise<ControlCommand | undefined>;
}
