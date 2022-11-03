import { Command, OptionValues } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import { getPathToNodeModulesRoot } from '../utils/path';
import { logger } from './logger';

const createProgram = () => {
  const program = new Command('askui');
  program.usage('<command> [options]');
  return program;
};

async function replaceStringInFile(filePath: string, replace: string, replacement: string) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const result = data.replace(replace, replacement);
    await fs.writeFile(filePath, result, 'utf8');
  } catch (error: unknown) {
    logger.error(`Could not replace '${replace}' with '${replacement}' in file '${path}'`);
    logger.error((error as Error).message);
  }
}

async function copyExampleProject(options: OptionValues) {
  const exampleProjectPath = path.join('example_projects_templates', 'typescript_jest');
  fs.copySync(path.join(getPathToNodeModulesRoot(), exampleProjectPath), '.');

  if (options['workspaceId']) {
    await replaceStringInFile('./test/helper/jest.setup.ts', '<your workspace id>', options['workspaceId']);
  }

  if (options['accessToken']) {
    await replaceStringInFile('./test/helper/jest.setup.ts', '<your access token>', options['accessToken']);
  }
}

export function init(argv: string[]): Command {
  const args = argv || process.argv;
  const program = createProgram();

  program
    .command('init')
    .description('creates a typescript example project')
    .option('-w, --workspace-id <value>', 'a workspace id')
    .option('-a, --access-token <value>', 'an access token for the workspace with the id')
    .usage('[-w workspace_id] [-a access_token]')
    .action(async (opts: OptionValues) => {
      await copyExampleProject(opts);
    });
  return program.parse(args);
}
