import inquirer, { QuestionCollection } from 'inquirer';
import { Command, Option, OptionValues } from 'commander';
import { CreateExampleProject } from './create-example-project';
import { CliOptions } from './cli-options-interface';

const nonEmpty = (subject: string) => (input: string) => (input.trim().length > 0) || `${subject} is required.`;

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'operatingSystem',
    message: 'Which operating system are you on?',
    choices: ['windows', 'linux', 'macos'],
  },
  {
    type: 'list',
    name: 'progLanguage',
    message: 'Which language do you prefer?',
    choices: ['typescript'],
  },
  {
    type: 'list',
    name: 'testFramework',
    message: 'Which framework do you prefer',
    choices: ['jest', 'jasmine'],
  },
  {
    type: 'input',
    name: 'workspaceId',
    message: 'Your workspace id',
    validate: nonEmpty('workspace id'),
  },
  {
    type: 'password',
    name: 'accessToken',
    message: 'Your access token',
    mask: '*',
    validate: nonEmpty('access token'),
  },
  {
    type: 'confirm',
    name: 'usingProxy',
    message: 'Are you using a proxy?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'typescriptConfig',
    message: 'Do you want to add the tsconfig.json file? This action will overwrite the file if it exists. Default True ',
    default: true,
  },
];

const options = [
  {
    option: '-s, --operating-system <value>',
    choices: ['windows', 'linux', 'macos'],
    description: 'the operating system',
  },
  {
    option: '-l, --prog-language <value>',
    choices: ['typescript'],
    description: 'the programming language',
  },
  {
    option: '-f, --test-framework <value>',
    choices: ['jasmine', 'jest'],
    description: 'the test framework to use',
  },
  {
    option: '-w, --workspace-id <value>',
    choices: [],
    description: 'a workspace id',
  },
  {
    option: '-a, --access-token <value>',
    choices: [],
    description: 'an access token for the workspace with the id',
  },
  {
    option: '-p, --using-proxy <value>',
    choices: ['true', 'false'],
    description: 'use a proxy',
  },
  {
    option: '-t, --typescript-config <value>',
    choices: ['true', 'false'],
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
  programInit.description('Creates a askui example project');

  // Loop through the options object and register each option with the program
  options.forEach((opt) => {
    const tempOption = new Option(opt.option, opt.description);
    if (opt.choices.length > 0) {
      tempOption.choices(opt.choices);
    }
    programInit.addOption(tempOption);
  });

  programInit.usage('[-s windows] [-l typescript] [-f test_framework] [-w workspace_id] [-a access_token] [-p boolean] [-t boolean]');

  programInit
    .action(async (_opts: OptionValues) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userAnswers: { [key: string]: any } = {};

      // Check which options are provided via command line arguments
      Object.entries(programInit.opts()).forEach((element) => {
        const [name, value] = element;
        userAnswers[name] = value;
      });

      // Check which options are missing and prompt the user for them
      const missingOptions = Object.entries(questions)
        .filter((entry) => !(entry[1].name in userAnswers))
        .map((entry) => ({
          type: entry[1].type,
          name: entry[1].name,
          message: entry[1].message,
          choices: entry[1].choices,
          default: entry[1].default,
          validate: entry[1].validate,
        }));

      if (missingOptions.length > 0) {
        inquirer.prompt(missingOptions)
          .then(async (answers) => {
            Object.assign(userAnswers, answers);
            await (new CreateExampleProject(userAnswers as CliOptions)).createExampleProject();
          });
      } else {
        await (new CreateExampleProject(userAnswers as CliOptions)).createExampleProject();
      }
    });
  return program.parse(args);
}
