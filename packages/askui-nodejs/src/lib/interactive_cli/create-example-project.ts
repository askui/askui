import path from 'path';
import fs from 'fs-extra';
import { promisify } from 'util';
import { exec } from 'child_process';
import Listr from 'listr';
import chalk from 'chalk';
import { getPathToNodeModulesRoot } from '../../utils/path';
import { CliOptions } from './cli-options-interface';
import { replaceStringInFile } from './replace-string-in-file';
import { addScript } from './add-script-package-json';

export class CreateExampleProject {
  private distexampleFolderPath: string;

  private askuiHelperFilePath: string;

  private exampleFolderName: string;

  private baseDirPath: string;

  private proxyDocUrl: string;

  constructor(readonly cliOptions: CliOptions) {
    this.baseDirPath = process.cwd();
    this.exampleFolderName = 'askui_example';
    this.distexampleFolderPath = path.join(this.baseDirPath, this.exampleFolderName);
    this.askuiHelperFilePath = path.join(this.distexampleFolderPath, 'helpers', 'askui-helper.ts');
    this.proxyDocUrl = 'https://docs.askui.com/docs/general/Troubleshooting/proxy';
  }

  private async copyTemplateProject(): Promise<Listr.ListrTask<unknown>[]> {
    const exampleProjectPath = path.join(
      'example_projects_templates',
      this.cliOptions.progLanguage,
      this.exampleFolderName,
    );

    const runCommand = promisify(exec);

    return [{
      title: 'Copy project files',
      task: async () => fs.copy(
        path.join(getPathToNodeModulesRoot(), exampleProjectPath),
        this.distexampleFolderPath,
      ),
    },
    {
      title: 'Install askui dependency',
      task: async () => runCommand('npm i -D askui '),
    }];
  }

  private async copyTestFrameworkConfig() {
    const frameworkConfigs = {
      jest: 'jest.config.ts',
      jasmine: 'jasmine.config.json',
    };
    const configFilePath = path.join(
      getPathToNodeModulesRoot(),
      'example_projects_templates',
      'configs',
      frameworkConfigs[this.cliOptions.testFramework],
    );
    await fs.copyFile(configFilePath, path.join(
      this.distexampleFolderPath,
      frameworkConfigs[this.cliOptions.testFramework],
    ));
  }

  private async addTestFrameWorkTimeout() {
    const frameworkTimeoutstring = {
      jest: 'jest.setTimeout(60 * 1000 * 60);',
      jasmine: 'jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;',
    };
    await replaceStringInFile(
      this.askuiHelperFilePath,
      '// timeout_placeholder',
      frameworkTimeoutstring[this.cliOptions.testFramework],
    );
  }

  private async addAskuiRunCommand() {
    const frameworkExecutionCommand = {
      jest: `jest --config ./${this.exampleFolderName}/jest.config.ts`,
      jasmine: `jasmine --config=${this.exampleFolderName}/jasmine.config.json`,
    };
    await addScript(
      `${this.baseDirPath}/package.json`,
      'askui',
      frameworkExecutionCommand[this.cliOptions.testFramework],
    );
  }

  private async addESLintRunCommand() {
    await addScript(
      `${this.baseDirPath}/package.json`,
      'lint',
      'eslint . --ext .ts',
    );
  }

  private async setupTestFrameWork() {
    return [{
      title: 'Setup Test framework',
      task: async () => new Listr([
        {
          title: `Install ${this.cliOptions.testFramework}`,
          task: async () => this.installTestFrameworkPackages(),
        },
        {
          title: 'Copy config file',
          task: async () => this.copyTestFrameworkConfig(),
        },
        {
          title: 'Add timeout',
          task: async () => this.addTestFrameWorkTimeout(),
        },
        {
          title: 'Add askui run command',
          task: async () => this.addAskuiRunCommand(),
        },
        {
          title: 'Add eslint run command',
          task: async () => this.addESLintRunCommand(),
        },
      ]),
    }];
  }

  private async installTestFrameworkPackages(): Promise<void> {
    const runCommand = promisify(exec);
    const frameworkDepencies = {
      jest: 'npm i -D typescript ts-node @types/jest ts-jest jest eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-askui',
      jasmine: 'npm i -D typescript ts-node @types/jasmine jasmine @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-askui',
    };
    await runCommand(frameworkDepencies[this.cliOptions.testFramework]);
  }

  private async addUserCredentails() {
    return [{
      title: 'Add user credentails',
      task: async () => new Listr([
        {
          title: 'Add workspace id ',
          task: async () => replaceStringInFile(this.askuiHelperFilePath, '<your workspace id>', this.cliOptions.workspaceId),
        },
        {
          title: 'Add access token',
          task: async () => replaceStringInFile(this.askuiHelperFilePath, '<your access token>', this.cliOptions.accessToken),
        },
      ]),
    }];
  }

  private async copyESLintConfigFiles(): Promise<Listr.ListrTask<unknown>[]> {
    const esLintRcFilePath = path.join('example_projects_templates', this.cliOptions.progLanguage, '.eslintrc.json');
    const esLintIgnoreFilePath = path.join('example_projects_templates', this.cliOptions.progLanguage, '.eslintignore');

    return [{
      title: 'Copy ESLint config files',
      task: async () => new Listr([
        {
          title: 'Add eslintrc.json',
          task: async () => fs.copyFile(
            path.join(getPathToNodeModulesRoot(), esLintRcFilePath),
            path.join(this.baseDirPath, '.eslintrc.json'),
          ),
        },
        {
          title: 'Add .eslintignore',
          task: async () => fs.copyFile(
            path.join(getPathToNodeModulesRoot(), esLintIgnoreFilePath),
            path.join(this.baseDirPath, '.eslintignore'),
          ),
        },
      ]),
    }];
  }

  private async copyTsConfigFile(): Promise<Listr.ListrTask<unknown>[]> {
    const tsConfigFilePath = path.join('example_projects_templates', this.cliOptions.progLanguage, 'tsconfig.json');

    return [{
      title: 'Copy ts config file',
      enabled: () => this.cliOptions.typescriptConfig,
      task: async () => fs.copyFile(
        path.join(getPathToNodeModulesRoot(), tsConfigFilePath),
        path.join(this.baseDirPath, 'tsconfig.json'),
      ),
    }];
  }

  private async installProxy(): Promise<Listr.ListrTask<unknown>[]> {
    const runCommand = promisify(exec);

    return [{
      title: 'Install Proxy',
      enabled: () => this.cliOptions.usingProxy,
      task: async () => runCommand('npm install --save-dev hpagent '),
    }];
  }

  private normalizeCliOptions() {
    let useProxy: boolean | string = this.cliOptions.usingProxy;
    if (typeof useProxy !== 'boolean') {
      useProxy = (useProxy === 'true');
    }

    let { typescriptConfig } = this.cliOptions;
    if (typeof typescriptConfig !== 'boolean') {
      typescriptConfig = (typescriptConfig === 'true');
    }
    this.cliOptions.typescriptConfig = typescriptConfig;
  }

  public async createExampleProject(): Promise<void> {
    const tasks = new Listr();

    this.normalizeCliOptions();

    tasks.add([
      ...await this.copyTemplateProject(),
      ...await this.setupTestFrameWork(),
      ...await this.copyESLintConfigFiles(),
      ...await this.copyTsConfigFile(),
      ...await this.addUserCredentails(),
      ...await this.installProxy(),
    ]);

    await tasks.run();
    /* eslint-disable no-console */
    if (this.cliOptions.usingProxy) {
      console.log(chalk.redBright('Since you are using a Proxy. Please don\'t forgot to configure it!!'));
      console.log(chalk.gray(`You can find more information under ${this.proxyDocUrl}`));
    }
    console.log(chalk.greenBright('Congratulations!'));
    console.log(`askui example was created under ${chalk.gray(this.distexampleFolderPath)}`);
    console.log(`You can start your automation with this command ${chalk.green('npm run askui')}`);
    /* eslint-enable no-console */
  }
}
