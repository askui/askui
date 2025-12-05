export class ImageReference {
  constructor(
    public base64Image: string,
    public width: number,
    public height: number,
    public xTopLeft: number,
    public yTopLeft: number,
  ) { }

  static fromJson(json: ImageReference): ImageReference {
    if (json.base64Image === undefined) {
      throw new Error('the key "base64Image" is required');
    }
    if (json.width === undefined) {
      throw new Error('the key "width" is required');
    }
    if (json.height === undefined) {
      throw new Error('the key "height" is required');
    }
    if (json.xTopLeft === undefined) {
      throw new Error('the key "xTopLeft" is required');
    }
    if (json.yTopLeft === undefined) {
      throw new Error('the key "yTopLeft" is required');
    }
    return new ImageReference(
      json.base64Image,
      json.width,
      json.height,
      json.xTopLeft,
      json.yTopLeft,
    );
  }

  toJson(): Record<string, unknown> {
    return {
      base64Image: this.base64Image,
      height: this.height,
      width: this.width,
      xTopLeft: this.xTopLeft,
      yTopLeft: this.yTopLeft,
    };
  }
}
