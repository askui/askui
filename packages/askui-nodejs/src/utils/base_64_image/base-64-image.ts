import sharp from 'sharp';
import { Base64ImageStringError } from './base-64-image-string-error';

export class Base64Image {
  static readonly strPrefix = 'data:image/png;base64,';

  private constructor(
    private readonly aSharp: sharp.Sharp,
    private info: sharp.OutputInfo,
    private buffer: Buffer,
  ) {}

  private static async fromSharp(s: sharp.Sharp): Promise<Base64Image> {
    const { info, data } = await s.toBuffer({ resolveWithObject: true });
    return new Base64Image(s, info, data);
  }

  static async fromPathOrString(pathOrStr: string): Promise<Base64Image> {
    try {
      return await Base64Image.fromString(pathOrStr);
    } catch (error) {
      if (!(error instanceof Base64ImageStringError)) {
        throw error;
      }
    }
    return Base64Image.fromPath(pathOrStr);
  }

  static async fromPath(path: string): Promise<Base64Image> {
    return Base64Image.fromSharp(sharp(path));
  }

  static async fromString(str: string): Promise<Base64Image> {
    if (!str.startsWith(Base64Image.strPrefix)) {
      throw new Base64ImageStringError(str, Base64Image.strPrefix);
    }
    const data = str.substring(Base64Image.strPrefix.length);
    return Base64Image.fromSharp(sharp(Buffer.from(data, 'base64')));
  }

  static async fromBuffer(buffer: Buffer): Promise<Base64Image> {
    return Base64Image.fromSharp(sharp(buffer));
  }

  get width(): number {
    return this.info.width;
  }

  get height(): number {
    return this.info.height;
  }

  async resizeToFitInto(dimension: number): Promise<Base64Image> {
    const buffer = await this.aSharp.resize({
      width: this.width >= this.height ? dimension : undefined,
      height: this.height > this.width ? dimension : undefined,
      fit: sharp.fit.contain,
    }).toBuffer();

    return Base64Image.fromBuffer(buffer);
  }

  toString(): string {
    return `${Base64Image.strPrefix}${this.buffer.toString('base64')}`;
  }

  toBuffer(): Buffer {
    return this.buffer;
  }
}
