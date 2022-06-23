import sharp from 'sharp';
import { Base64ImageStringError } from './base-64-image-string-error';

export class Base64Image {
  static readonly strPrefix = 'data:image/png;base64,';

  private data: Buffer;

  private constructor(data: Buffer) {
    this.data = data;
  }

  static async fromPathOrString(pathOrStr: string): Promise<Base64Image> {
    try {
      return Base64Image.fromString(pathOrStr);
    } catch (error) {
      // Is path
    }
    return Base64Image.fromPath(pathOrStr);
  }

  static async fromPath(path: string): Promise<Base64Image> {
    const data = await sharp(path).toBuffer();
    return new Base64Image(data);
  }

  static fromString(str: string): Base64Image {
    if (!str.startsWith(Base64Image.strPrefix)) {
      throw new Base64ImageStringError(str, Base64Image.strPrefix);
    }
    const data = str.substring(Base64Image.strPrefix.length);
    return new Base64Image(Buffer.from(data, 'base64'));
  }

  static fromBuffer(data: Buffer): Base64Image {
    return new Base64Image(data);
  }

  toString(): string {
    return `${Base64Image.strPrefix}${this.data.toString('base64')}`;
  }

  toBuffer(): Buffer {
    return this.data;
  }
}
