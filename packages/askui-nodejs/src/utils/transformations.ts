import fs from 'fs';
import { read } from 'jimp';
import { CustomElement } from '../core/model/test-case-dto';
import { logger } from '../lib';
import { ImageResizingError, InvalidBase64Image } from './image-resize-errors';
import { ResizedImage } from './resized-image-interface';

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
async function resizeBase64ImageWithSameRatio(
  base64ImageString: string,
  maxEdge = 1400,
): Promise<ResizedImage> {
  logger.debug('Image resizing');
  if (!(base64ImageString.startsWith('data:image'))) {
    Promise.reject(new InvalidBase64Image('Invalid base64 image string'));
  }
  try {
    let resizeRatio = 1;
    const orignalImage = await read(Buffer.from(base64ImageString.replace(/^data:image\/png;base64,/, ''), 'base64'));
    const imageHeight = orignalImage.getHeight();
    const imageWidth = orignalImage.getWidth();

    if (Math.max(imageHeight, imageWidth) <= maxEdge) {
      return await Promise.resolve({ base64Image: base64ImageString, resizeRatio });
    }

    const imageRatio = imageHeight / imageWidth;
    const isHeigthBiggerThanWidth = imageRatio > 1;
    const newHeigh = isHeigthBiggerThanWidth ? maxEdge : maxEdge * imageRatio;
    const newWidth = isHeigthBiggerThanWidth ? maxEdge / imageRatio : maxEdge;
    const newImage = orignalImage.resize(newWidth, newHeigh);
    resizeRatio = imageHeight / newHeigh;
    const newImageBase64 = await newImage.getBase64Async('image/png');

    return await Promise.resolve({ base64Image: newImageBase64, resizeRatio });
  } catch (error) {
    return Promise.reject(new ImageResizingError(`A Problem has occured during the resizeing of the image. Error: ${error}`));
  }
}

export async function resizeIfNeeded(customElements: CustomElement[], image?: string) {
  if (!(image) || customElements.length > 0) {
    return { base64Image: image, resizeRatio: 1 };
  }
  return resizeBase64ImageWithSameRatio(image);
}
