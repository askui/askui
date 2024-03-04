import inquirer from 'inquirer';
import { Command, Option, OptionValues } from 'commander';
import fs from 'fs-extra';
import { CreateExampleProject } from './create-example-project';
import { CliOptions } from './cli-options-interface';

const nonEmpty = (subject: string) => (input: string) => input.trim().length > 0 || `${subject} is required.`;

const questions = [
  {
    type: 'list',
    name: 'testFramework',
    message: 'Which framework do you prefer?:',
    choices: ['jest'],
  },
  {
    type: 'input',
    name: 'workspaceId',
    message: 'Your workspace id:',
    validate: nonEmpty('workspace id'),
    when: (answers: CliOptions) => !answers.skipCredentials,
  },
  {
    type: 'password',
    name: 'accessToken',
    message: 'Your access token:',
    mask: '*',
    validate: nonEmpty('access token'),
    when: (answers: CliOptions) => !answers.skipCredentials,
  },
  {
    type: 'confirm',
    name: 'typescriptConfig',
    message: 'Do you want to overwrite the tsconfig.json file? Default No:',
    default: false,
    when: (_answers: CliOptions) => fs.existsSync('tsconfig.json'),
  },
];

const options = [
  {
    option: '-f, --test-framework <value>',
    choices: ['jest'],
    description: 'the test framework to use.',
    default: 'jest',
  },
  {
    option: '-sc, --skip-credentials',
    choices: [],
    description: 'skip the credentials setup.',
    default: false,
  },
  {
    option: '-w, --workspace-id <value>',
    choices: [],
    description: 'a workspace id.',
  },
  {
    option: '-a, --access-token <value>',
    choices: [],
    description: 'an access token for the workspace with the id.',
  },
  {
    option: '-t, --typescript-config',
    choices: [],
    description: 'overwrite tsconfig.json flag',
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
  const programInit = program.command('init');

  // To Ensure Backwards Compatibility
  programInit.allowUnknownOption(true);

  programInit.description('Creates an AskUI example project:');

  // Loop through the options object and register each option with the program
  options.forEach((opt) => {
    const tempOption = new Option(opt.option, opt.description);
    if (opt.choices.length > 0) {
      tempOption.choices(opt.choices);
    }

    if (opt.default) {
      tempOption.default(opt.default);
    }

    programInit.addOption(tempOption);
  });

  programInit.usage('[options]');

  programInit.action(async (_opts: OptionValues) => {
    const userAnswers = programInit.opts<CliOptions>();
    inquirer.prompt(questions, userAnswers).then(async (answers) => {
      await new CreateExampleProject({
        ...userAnswers,
        ...answers,
      }).createExampleProject();
    });
  });

  return program.parse(args);
}
