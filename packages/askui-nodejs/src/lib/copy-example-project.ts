import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import { getPathToNodeModulesRoot } from '../utils/path';

const createProgram = () => {
  const program = new Command('askui');
  program.usage('<command> [options]');
  return program;
};
function copyExampleProject() {
  const exampleProjectPath = path.join('example_projects_templates', 'typescript_jest');
  fs.copySync(path.join(getPathToNodeModulesRoot(), exampleProjectPath), '.');
}

export function init(argv: string[]): Command {
  const args = argv || process.argv;
  const program = createProgram();
  program
    .command('init')
    .description('creates a typescript example project')
    .action(() => { copyExampleProject(); });
  return program.parse(args);
}
