import sharp from 'sharp';
import { logger } from '../lib';
import { Base64Image } from './base_64_image/base-64-image';
import { ImageResizingError } from './image-resize-errors';
import { ResizedImage } from './resized-image-interface';

async function getLengths(originalImage: sharp.Sharp): Promise<number []> {
  const imageMetadata = await originalImage.metadata();
  const imageHeight = imageMetadata.height as number;
  const imageWidth = imageMetadata.width as number;
  const arrLengths = [imageWidth, imageHeight];

  return arrLengths;
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
  try {
    const resizeRatio = 1;
    const bufferedbase64Image = Base64Image.fromString(base64ImageString).toBuffer();
    const originalImage = sharp(bufferedbase64Image);
    const HeightandWidth = await getLengths(originalImage);
    const width = HeightandWidth[0] as number;
    const height = HeightandWidth[1] as number;

    if (Math.max(height, width) <= maxEdge) {
      return { base64Image: base64ImageString, resizeRatio };
    }

    const newImage = await originalImage.resize({
      width: width >= height ? maxEdge : undefined,
      height: height > width ? maxEdge : undefined,
      fit: sharp.fit.contain,
    }).toBuffer({ resolveWithObject: true });
    return {
      base64Image: Base64Image.fromBuffer(newImage.data).toString(),
      resizeRatio: width / newImage.info.width,
    };
  } catch (error) {
    return Promise.reject(new ImageResizingError(`A Problem has occured during the resizeing of the image. Error: ${error}`));
  }
}
