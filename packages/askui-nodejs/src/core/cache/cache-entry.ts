import { ControlCommand } from '../ui-control-commands';
import { CacheEntryReference } from './cache-entry-reference';
import { logger } from '../../lib';

export class CacheEntry {
  constructor(
    public alwaysValid: boolean,
    public controlCommand: ControlCommand,
    public reference?: CacheEntryReference,
    public createdAt: Date = new Date(),
  ) { }

  static fromJson(json: CacheEntry): CacheEntry | undefined {
    try {
      if (json === undefined) {
        throw new Error('Cache entry is undefined');
      }
      if (json.controlCommand === undefined) {
        throw new Error('the key "controlCommand" is required');
      }
      if (json.createdAt === undefined) {
        throw new Error('the key "createdAt" is required');
      }
      if (json.alwaysValid === undefined) {
        throw new Error('the key "alwaysValid" is required');
      }
      return new CacheEntry(
        json.alwaysValid,
        ControlCommand.fromJson(json.controlCommand),
        json.reference ? CacheEntryReference.fromJson(json.reference) : undefined,
        new Date(json.createdAt),
      );
    } catch (error) {
      logger.error(`Error deserializing cache entry: ${error}`);
      return undefined;
    }
  }

  toJson(): Record<string, unknown> {
    const jsonObject: Record<string, unknown> = {
      alwaysValid: this.alwaysValid,
      controlCommand: this.controlCommand.toJson(),
      createdAt: this.createdAt,
    };
    if (this.reference !== undefined) {
      jsonObject['reference'] = this.reference.toJson();
    }

    return jsonObject;
  }
}
