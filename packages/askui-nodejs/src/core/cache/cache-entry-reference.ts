import { ImageReference } from './image-reference';

export class CacheEntryReference {
  constructor(
    public image?: ImageReference,
  ) { }

  static fromJson(json: CacheEntryReference): CacheEntryReference {
    return new CacheEntryReference(
      json.image ? ImageReference.fromJson(json.image) : undefined,
    );
  }

  toJson(): Record<string, unknown> {
    const jsonObject: Record<string, unknown> = {};
    if (this.image !== undefined) {
      jsonObject['image'] = this.image.toJson();
    }
    return jsonObject;
  }
}
