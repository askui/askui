import inquirer from 'inquirer';
import { Command, OptionValues } from 'commander';
import { CreateExampleProject } from './create-example-project';

const questions = [
  {
    type: 'list', name: 'progLanguage', message: 'Which language do you prefer?', choices: ['typescript'],
  },
  {
    type: 'list', name: 'testFramework', message: 'Which test framework do you prefer', choices: ['jasmine', 'jest'],
  },
  { type: 'input', name: 'workspaceId', message: 'your workspace id' },
  {
    type: 'password', name: 'accessToken', message: 'your access token', mask: '*',
  },
  {
    type: 'confirm', name: 'usingProxy', message: 'are you using Proxy?', default: false,
  },
  {
    type: 'confirm',
    name: 'addTsConfig',
    message: 'Do you want to add the tsconfig.json file? This action will overwrite the file if it exists. Default True ',
    default: true,
  },

];
const createProgram = () => {
  const program = new Command('askui');
  program.usage('<command> [options]');
  return program;
};

export function init(argv: string[]): Command {
  const args = argv || process.argv;
  const program = createProgram();
  program
    .command('init')
    .action(async (_opts: OptionValues) => {
      inquirer.prompt(questions)
        .then(async (userAnswers) => {
          await (new CreateExampleProject(userAnswers)).createExampleProject();
        });
    });
  return program.parse(args);
}
