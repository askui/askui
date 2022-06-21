import fs from 'fs';
import sharp from 'sharp';
import { logger } from '../lib';
import { ImageResizingError, InvalidBase64Image } from './image-resize-errors';
import { ResizedImage } from './resized-image-interface';

export async function toBase64Image(imagePath: string): Promise<string> {
  if (!(fs.existsSync(imagePath))) {
    throw new Error(`the image ${imagePath} does not exists!`);
  }
  const image = sharp(imagePath);
  return `data:image/png;base64,${(await image.toBuffer()).toString('base64')}`;
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
    let resizeRatio = 1;
    const orignalImage = sharp(Buffer.from(base64ImageString.replace(/^data:image\/png;base64,/, ''), 'base64'));
    const imageMetadata = await orignalImage.metadata();
    const imageHeight = imageMetadata.height;
    const imageWidth = imageMetadata.width;

    if (Math.max(imageHeight as number, imageWidth as number) <= maxEdge) {
      return await Promise.resolve({ base64Image: base64ImageString, resizeRatio });
    }

    const imageRatio = (imageHeight as number) / (imageWidth as number);
    const isHeigthBiggerThanWidth = imageRatio > 1;
    const newHeigh = isHeigthBiggerThanWidth ? maxEdge : maxEdge * imageRatio;
    const newWidth = isHeigthBiggerThanWidth ? maxEdge / imageRatio : maxEdge;
    const newImage = orignalImage.resize(newWidth, newHeigh);
    resizeRatio = (imageHeight as number) / newHeigh;
    const newImageBase64 = `data:image/png;base64,${(await newImage.toBuffer()).toString('base64')}`;
    return await Promise.resolve({ base64Image: newImageBase64, resizeRatio });
  } catch (error) {
    return Promise.reject(new ImageResizingError(`A Problem has occured during the resizeing of the image. Error: ${error}`));
  }
}
