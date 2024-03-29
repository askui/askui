import fs from 'fs-extra';
import { logger } from '../logger';

export async function addScript(filePath: string, name: string, command: string) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    if (jsonData.scripts === undefined) {
      jsonData.scripts = { [name]: `${command}` };
    } else {
      jsonData.scripts[name] = command;
    }
    const jsonString = JSON.stringify(jsonData, null, 2);
    await fs.writeFile(filePath, jsonString, 'utf8');
  } catch (error: unknown) {
    logger.error(`Could not write script '${command}' in file '${filePath}'`);
    logger.error((error as Error).message);
  }
}

export async function removeScript(filePath: string, name: string) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    if (jsonData.scripts === undefined) {
      return;
    }

    delete jsonData.scripts[name];

    const jsonString = JSON.stringify(jsonData, null, 2);
    await fs.writeFile(filePath, jsonString, 'utf8');
  } catch (error: unknown) {
    logger.error(`Could not remove script '${name}' in file '${filePath}'`);
    logger.error((error as Error).message);
  }
}
