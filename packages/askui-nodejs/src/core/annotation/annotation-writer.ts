import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { logger } from '../../lib/logger';

export abstract class AnnotationWriter {
  static write(html: JSDOM, outputFolder = 'report', fileNamePrefix = 'annotation') {
    const currentDateTime = new Date();
    const currentTimeStringOnlyNumbers = currentDateTime.toISOString().replace(/\D/g, '');
    const fileName = `${currentTimeStringOnlyNumbers}_${fileNamePrefix}.html`;
    const outputFilePath = path.join(outputFolder, fileName);
    if (!(fs.existsSync(outputFolder))) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    fs.writeFileSync(outputFilePath, html.serialize());
    logger.info(`Annotation saved under "${outputFilePath}".`);
  }
}
