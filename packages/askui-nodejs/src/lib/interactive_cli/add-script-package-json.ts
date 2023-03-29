import fs from 'fs-extra';
import { logger } from '../logger';

export async function addScript(filePath: string, command: string) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      const nested = {askui: `${command}`};
      jsonData.scripts = nested;
      const jsonString = JSON.stringify(jsonData, null, 2);
      await fs.writeFile(filePath, jsonString, 'utf8');
    } catch (error: unknown) {
      logger.error(`Could write script '${command}' in file '${filePath}'`);
      logger.error((error as Error).message);
    }
  }
