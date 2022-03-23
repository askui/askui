import fs from 'fs';
import { read } from 'jimp';

export async function toBase64Image(imagePath: string): Promise<string> {
  if (!(fs.existsSync(imagePath))) {
    throw new Error(`the image ${imagePath} does not exists!`);
  }
  const image = await read(imagePath);
  return image.getBase64Async('image/png');
}

export async function toBase64ImageIfNeeded(pngPathOrBase64Image: string): Promise<string> {
  const isBase64Image = pngPathOrBase64Image.startsWith('data:image');
  if (!isBase64Image) {
    return toBase64Image(pngPathOrBase64Image);
  }
  return pngPathOrBase64Image;
}
