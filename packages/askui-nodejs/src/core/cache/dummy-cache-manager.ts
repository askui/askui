import { CacheInterface } from './cache-interface';
import { CacheEntry } from './cache-entry';
import { ControlCommand } from '../ui-control-commands';
import { CustomElement } from '../model/custom-element';

export class DummyCacheManager implements CacheInterface {
  // eslint-disable-next-line class-methods-use-this
  add(_key: string, _value: CacheEntry): void {
  }

  // eslint-disable-next-line class-methods-use-this
  addCacheEntryFromControlCommand(
    _instruction: string,
    _controlCommand: ControlCommand,
    _customElements: CustomElement[],
    _image?: string,
  ): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  isImageRequired(_instruction: string, _customElements: CustomElement[]): boolean | undefined {
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  getCachedControlCommand(
    _instruction: string,
    _customElements: CustomElement[],
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
