import { CustomElement } from '../model/custom-element';
import { ControlCommand } from '../ui-control-commands';
import { CacheEntry } from './cache-entry';

export interface CacheInterface {
  loadFromFile(): void;
  saveToFile(): void;
  add(key: string, value: CacheEntry): void;
  addCacheEntryFromControlCommand(
    instruction: string,
    controlCommand: ControlCommand,
    customElements: CustomElement[],
    image?: string,
  ): Promise<void>;
  isImageRequired(instruction: string, customElements: CustomElement[]): boolean | undefined;
  getCachedControlCommand(
    instruction: string,
    customElements: CustomElement[],
    image?: string,
  ): Promise<ControlCommand | undefined>;
}
