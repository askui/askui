export class ImageReference {
  constructor(
    public base64Image: string,
    public width: number,
    public height: number,
    public x: number,
    public y: number,
  ) { }

  static fromJson(json: ImageReference): ImageReference {
    if (json.base64Image === undefined) {
      throw new Error('Base64 image is required');
    }
    if (json.width === undefined) {
      throw new Error('Width is required');
    }
    if (json.height === undefined) {
      throw new Error('Height is required');
    }
    if (json.x === undefined) {
      throw new Error('X is required');
    }
    if (json.y === undefined) {
      throw new Error('Y is required');
    }
    return new ImageReference(
      json.base64Image,
      json.width,
      json.height,
      json.x,
      json.y,
    );
  }

  toJson(): object {
    return {
      base64Image: this.base64Image,
      height: this.height,
      width: this.width,
      x: this.x,
      y: this.y,
    };
  }
}
