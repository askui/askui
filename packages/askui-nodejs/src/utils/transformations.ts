import { logger } from '../lib';
import { Base64Image } from './base_64_image/base-64-image';
import { ImageResizingError } from './image-resize-errors';
import { ResizedImage } from './resized-image-interface';

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
    const image = await Base64Image.fromString(base64ImageString);
    if (image.height <= maxEdge && image.width <= maxEdge) {
      return { base64Image: base64ImageString, resizeRatio: 1 };
    }

    const resizedImage = await image.resizeToFitInto(maxEdge);
    return {
      base64Image: resizedImage.toString(),
      resizeRatio: image.width / resizedImage.width,
    };
  } catch (error) {
    throw new ImageResizingError(`A Problem has occured during the resizing of the image. Error: ${error}`);
  }
}
