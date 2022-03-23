import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { logger } from '../../lib/logger';

export abstract class AnnotationWriter {
  static async write(html: JSDOM, outputFolder = 'report', fileNamePrefix = 'annotation') {
    const fileName = `${fileNamePrefix}_${(new Date().toJSON().slice(0, 16))}.html`.replace(':', '-');
    const outputFilePath = path.join(outputFolder, fileName);
    if (!(fs.existsSync(outputFolder))) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    fs.writeFileSync(outputFilePath, html.serialize());
    logger.info(`Annotation saved under "${outputFilePath}".`);
  }
}
