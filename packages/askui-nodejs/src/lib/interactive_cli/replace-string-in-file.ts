import fs from 'fs-extra';
import { logger } from '../logger';

export async function replaceStringInFile(filePath: string, replace: string, replacement: string) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const result = data.replace(replace, replacement);
    await fs.writeFile(filePath, result, 'utf8');
  } catch (error: unknown) {
    logger.error(`Could not replace '${replace}' with '${replacement}' in file '${filePath}'`);
    logger.error((error as Error).message);
  }
}
