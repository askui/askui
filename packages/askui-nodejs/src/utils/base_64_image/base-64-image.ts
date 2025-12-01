import type sharp from 'sharp';
import fs from 'fs';
import { getSharpFactory } from './sharp';
import { Base64ImageStringError } from './base-64-image-string-error';

export class Base64Image {
  static readonly strPrefix = 'data:image/png;base64,';

  private _sharp?: sharp.Sharp;

  private constructor(private buffer: Buffer) { }

  static async fromPathOrString(pathOrStr: string): Promise<Base64Image> {
    if (pathOrStr.startsWith(Base64Image.strPrefix)) {
      return Base64Image.fromString(pathOrStr);
    }
    return Base64Image.fromPath(pathOrStr);
  }

  static async fromPath(filePath: string): Promise<Base64Image> {
    const data = await fs.promises.readFile(filePath, 'base64');
    return Base64Image.fromString(`${Base64Image.strPrefix}${data}`);
  }

  static async fromString(str: string): Promise<Base64Image> {
    if (!str.startsWith(Base64Image.strPrefix)) {
      throw new Base64ImageStringError(str, Base64Image.strPrefix);
    }
    const data = str.substring(Base64Image.strPrefix.length);
    return new Base64Image(Buffer.from(data, 'base64'));
  }

  private static async fromBuffer(buffer: Buffer): Promise<Base64Image> {
    return new Base64Image(buffer);
  }

  private async getSharp(): Promise<sharp.Sharp> {
    if (this._sharp === undefined) {
      const createSharp = await getSharpFactory();
      this._sharp = createSharp(this.buffer);
    }
    return this._sharp;
  }

  async getInfo(): Promise<sharp.OutputInfo> {
    return (await this.getSharp())
      .toBuffer({ resolveWithObject: true })
      .then(({ info }) => info);
  }

  async resizeToFitInto(dimension: number): Promise<Base64Image> {
    const { width, height } = await this.getInfo();
    const buffer = await (await this.getSharp())
      .resize({
        fit: 'contain',
        height: height > width ? dimension : undefined,
        width: width >= height ? dimension : undefined,
      })
      .toBuffer();
    return Base64Image.fromBuffer(buffer);
  }

  async resizeWithSameAspectRatio(width: number, height: number): Promise<Base64Image> {
    const buffer = await (await this.getSharp())
      .resize({
        fit: 'contain',
        height,
        width,
      })
      .toBuffer();
    return Base64Image.fromBuffer(buffer);
  }

  async cropRegion(
    x: number,
    y: number,
    croppedWidth: number,
    croppedHeight: number,
  ): Promise<Base64Image> {
    const buffer = await (await this.getSharp())
      .extract({
        height: croppedHeight,
        left: x,
        top: y,
        width: croppedWidth,
      })
      .toBuffer();
    return Base64Image.fromBuffer(buffer);
  }

  toString(withPrefix = true): string {
    if (withPrefix) {
      return `${Base64Image.strPrefix}${this.buffer.toString('base64')}`;
    }
    return this.buffer.toString('base64');
  }
}
