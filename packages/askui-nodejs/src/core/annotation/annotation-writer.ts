import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { logger } from '../../lib/logger';

export abstract class AnnotationWriter {
  static write(html: JSDOM, outputFolder = 'report', fileNamePrefix = 'annotation') {
    const currentDateTime = new Date();
    const formattedTime = `${currentDateTime.getDay()}-${currentDateTime.getMonth()}`
      + `-${currentDateTime.getFullYear()}_${currentDateTime.getHours()}`
      + `-${currentDateTime.getMinutes()}-${currentDateTime.getSeconds()}`;
    const fileName = `${fileNamePrefix}_${formattedTime}.html`;
    const outputFilePath = path.join(outputFolder, fileName);
    if (!(fs.existsSync(outputFolder))) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    fs.writeFileSync(outputFilePath, html.serialize());
    logger.info(`Annotation saved under "${outputFilePath}".`);
  }
}
