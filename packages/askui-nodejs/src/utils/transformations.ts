import fs from 'fs';
import sharp from 'sharp';
import { logger } from '../lib';
import { ImageResizingError, InvalidBase64Image } from './image-resize-errors';
import { ResizedImage } from './resized-image-interface';

async function transformToBase64String(sharpImage: sharp.Sharp): Promise<string> {
  const bufferedImage = await sharpImage.toBuffer();
  const bufferedImageString = bufferedImage.toString('base64');
  const base64ImageString = `data:image/png;base64,${bufferedImageString}`;

  return base64ImageString;
}

async function bufferBase64String(base64ImageString: string): Promise<Buffer> {
  const cutBase64ImageString: string = base64ImageString.replace(/^data:image\/png;base64,/, '');
  const bufferOfImage = Buffer.from(cutBase64ImageString, 'base64');
  return bufferOfImage;
}

async function getLengths(originalImage: sharp.Sharp): Promise<number []> {
  const imageMetadata = await originalImage.metadata();
  const imageHeight = imageMetadata.height as number;
  const imageWidth = imageMetadata.width as number;
  const arrLengths = [imageWidth, imageHeight];

  return arrLengths;
}

export async function toBase64Image(imagePath: string): Promise<string> {
  if (!(fs.existsSync(imagePath))) {
    throw new Error(`the image ${imagePath} does not exists!`);
  }
  const image = sharp(imagePath);
  return transformToBase64String(image);
}

export async function toBase64ImageIfNeeded(pngPathOrBase64Image: string): Promise<string> {
  const isBase64Image = pngPathOrBase64Image.startsWith('data:image');
  if (!isBase64Image) {
    return toBase64Image(pngPathOrBase64Image);
  }
  return pngPathOrBase64Image;
}

/**
  * Resizes a base64image only when the height or the width is bigger than the maxEdge Param,so that
  * the returned image keeps the same aspect ratio but have a max size equal to the threshold.
  *
  * @param {string} base64ImageString - A base64 encoded image
  * @param {number} maxEdge - A max image height or width, if excceded, the image will be resized
  *
  * @returns {Promise<ResizedImage>} ResiziedImage Interface,
  * the true pixel values = controlui-api response * resizeRatio.
  */
export async function resizeBase64ImageWithSameRatio(
  base64ImageString: string,
  maxEdge = 1400,
): Promise<ResizedImage> {
  logger.debug('Image resizing');
  if (!(base64ImageString.startsWith('data:image'))) {
    Promise.reject(new InvalidBase64Image('Invalid base64 image string'));
  }
  try {
    const resizeRatio = 1;
    const bufferedbase64Image = await bufferBase64String(base64ImageString);
    const originalImage = sharp(bufferedbase64Image);
    const HeightandWidth = await getLengths(originalImage);
    const width = HeightandWidth[0] as number;
    const height = HeightandWidth[1] as number;

    if (Math.max(height, width) <= maxEdge) {
      return { base64Image: base64ImageString, resizeRatio };
    }

    const newImage = originalImage.resize({
      width: width > height ? maxEdge : undefined,
      height: height > width ? maxEdge : undefined,
      fit: sharp.fit.contain,
    });
    const newWidth = (await newImage.metadata()).width as number;

    return {
      base64Image: await transformToBase64String(newImage),
      resizeRatio: width / newWidth,
    };
  } catch (error) {
    return Promise.reject(new ImageResizingError(`A Problem has occured during the resizeing of the image. Error: ${error}`));
  }
}
