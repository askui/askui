import path from 'path';
import fs from 'fs-extra';
import { promisify } from 'util';
import { exec } from 'child_process';
import Listr from 'listr';
import chalk from 'chalk';
import { getPathToNodeModulesRoot } from '../../utils/path';
import { CliOptions } from './cli-options-interface';
import { replaceStringInFile } from './replace-string-in-file';

export class CreateExampleProject {
  private distexampleFolfderPath: string;

  private askuiHelperFilePath: string;

  private exampleFolfderName: string;

  private baseDirPath: string;

  private proxyDocUrl: string;

  constructor(readonly cliOptions: CliOptions) {
    this.baseDirPath = process.cwd();
    this.exampleFolfderName = 'askui_example';
    this.distexampleFolfderPath = path.join(this.baseDirPath, this.exampleFolfderName);
    this.askuiHelperFilePath = path.join(this.distexampleFolfderPath, 'helpers', 'askui-helper.ts');
    this.proxyDocUrl = 'https://docs.askui.com/docs/general/Troubleshooting/proxy';
  }

  private async copyTemplateProject(): Promise<Listr.ListrTask<unknown>[]> {
    const exampleProjectPath = path.join(
      'example_projects_templates',
      this.cliOptions.progLanguage,
      this.exampleFolfderName,
    );

    return [{
      title: 'Copy project files',
      task: async () => fs.copy(
        path.join(getPathToNodeModulesRoot(), exampleProjectPath),
        this.distexampleFolfderPath,
      ),
    }];
  }

  private async copyTestFrameworkConfig() {
    const frameworkConfigs = {
      jasmine: 'jasmine.config.json',
      jest: 'jest.config.ts',
    };
    const configFilePath = path.join(
      getPathToNodeModulesRoot(),
      'example_projects_templates',
      'configs',
      frameworkConfigs[this.cliOptions.testFramework],
    );
    await fs.copyFile(configFilePath, path.join(
      this.distexampleFolfderPath,
      frameworkConfigs[this.cliOptions.testFramework],
    ));
  }

  private async addTestFrameWorkTimeout() {
    const frameworkTimeoutstring = {
      jasmine: 'jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;',
      jest: 'jest.setTimeout(60 * 1000 * 60);',
    };
    await replaceStringInFile(
      this.askuiHelperFilePath,
      '// timeout_placeholder',
      frameworkTimeoutstring[this.cliOptions.testFramework],
    );
  }

  private async setupTestFrameWork() {
    // await this.copyTsConfigFIle();
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
      ]),
    }];
  }

  private async installTestFrameworkPackages(): Promise<void> {
    const runCommand = promisify(exec);
    const frameworkDepencies = {
      jest: 'npm i -D typescript ts-node @types/jest ts-jest jest',
      jasmine: 'npm i -D typescript ts-node @types/jasmine jasmine',
    };
    await runCommand(frameworkDepencies[this.cliOptions.testFramework]);
  }

  private async addUserCridentails() {
    return [{
      title: 'Add user cridentails',
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

  private async copyTsConfigFIle(): Promise<Listr.ListrTask<unknown>[]> {
    const tsConfigFilePath = path.join('example_projects_templates', this.cliOptions.progLanguage, 'tsconfig.json');
    return [{
      title: 'Copy ts config file',
      enabled: () => this.cliOptions.addTsConfig,
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

  private getTestFrameWorkExecCommand(): string {
    const testFrameWorkExecCommand = {
      jest: `npx jest --config ./${this.exampleFolfderName}/jest.config.ts`,
      jasmine: `npx jasmine --config=${this.exampleFolfderName}/jasmine.config.json `,
    };
    return testFrameWorkExecCommand[this.cliOptions.testFramework];
  }

  public async createExampleProject(): Promise<void> {
    const tasks = new Listr();

    tasks.add([
      ...await this.copyTemplateProject(),
      ...await this.setupTestFrameWork(),
      ...await this.copyTsConfigFIle(),
      ...await this.addUserCridentails(),
      ...await this.installProxy(),
    ]);

    await tasks.run();
    /* eslint-disable no-console */
    if (this.cliOptions.usingProxy) {
      console.log(chalk.redBright('Since you are using a Proxy. Please don\'t forgot to configre it!!'));
      console.log(chalk.gray(`You can find more information under ${this.proxyDocUrl}`));
    }
    console.log(chalk.greenBright('Congratulations!'));
    console.log(`askui test example was created under ${chalk.gray(this.distexampleFolfderPath)}`);
    console.log(`You can start your test with this command ${chalk.green(this.getTestFrameWorkExecCommand())}`);
    /* eslint-enable no-console */
  }
}
