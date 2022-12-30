import inquirer, { QuestionCollection } from 'inquirer';
import { Command, OptionValues } from 'commander';
import { CreateExampleProject } from './create-example-project';
import { CliOptions } from './cli-options-interface';

const nonEmpty = (subject: string) => (input: string) => (input.trim().length > 0) || `${subject} is required.`;

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'progLanguage',
    message: 'Which language do you prefer?',
    choices: ['typescript'],
  },
  {
    type: 'list',
    name: 'testFramework',
    message: 'Which test framework do you prefer',
    choices: ['jasmine', 'jest'],
  },
  {
    type: 'input',
    name: 'workspaceId',
    message: 'your workspace id',
    validate: nonEmpty('workspace id'),
  },
  {
    type: 'password',
    name: 'accessToken',
    message: 'your access token',
    mask: '*',
    validate: nonEmpty('access token'),
  },
  {
    type: 'confirm',
    name: 'usingProxy',
    message: 'are you using Proxy?',
    default: false,
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
          await (new CreateExampleProject(userAnswers as CliOptions)).createExampleProject();
        });
    });
  return program.parse(args);
}
