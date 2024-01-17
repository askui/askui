import path from 'path';
import fs from 'fs-extra';
import { promisify } from 'util';
import { exec } from 'child_process';
import Listr from 'listr';
import chalk from 'chalk';
import nunjucks from 'nunjucks';
import { getPathToNodeModulesRoot } from '../../utils/path';
import { CliOptions } from './cli-options-interface';
import { addScript } from './add-script-package-json';

export class CreateExampleProject {
  private distexampleFolderPath: string;

  private exampleFolderName: string;

  private baseDirPath: string;

  private proxyDocUrl: string;

  private helperTemplateConfig: { [key: string]: string };

  constructor(readonly cliOptions: CliOptions) {
    this.baseDirPath = process.cwd();
    this.exampleFolderName = 'askui_example';
    this.distexampleFolderPath = path.join(this.baseDirPath, this.exampleFolderName);
    this.proxyDocUrl = 'https://docs.askui.com/docs/general/Troubleshooting/proxy';
    this.helperTemplateConfig = {};
  }

  private async copyTemplateProject(): Promise<Listr.ListrTask<unknown>[]> {
    const exampleProjectPath = path.join(
      'example_projects_templates',
      'typescript',
      this.exampleFolderName,
    );

    const runCommand = promisify(exec);

    return [
      {
        title: 'Copy project files',
        task: async () => fs.copy(
          path.join(getPathToNodeModulesRoot(), exampleProjectPath),
          this.distexampleFolderPath,
        ),
      },
      {
        title: 'Install askui dependency',
        task: async () => runCommand('npm i -D askui '),
      },
    ];
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
    this.helperTemplateConfig['timeout_placeholder'] = frameworkTimeoutstring[this.cliOptions.testFramework];
  }

  private async addReporterConfig() {
    if (this.cliOptions.testFramework === 'jest') {
      this.helperTemplateConfig['allure_stepreporter_import'] = "import { AskUIAllureStepReporter } from '@askui/askui-reporters';";
      this.helperTemplateConfig['reporter_placeholder'] = 'reporter: new AskUIAllureStepReporter(),';
      this.helperTemplateConfig['start_video_placeholder'] = `beforeEach(async () => {
        await aui.startVideoRecording();
      });`;
      this.helperTemplateConfig['stop_video_placeholder'] = `afterEach(async () => {
        await aui.stopVideoRecording();
        const video = await aui.readVideoRecording();
        await AskUIAllureStepReporter.attachVideo(video);
      });`;
    }
  }

  private async addAskuiRunCommand() {
    const frameworkExecutionCommand = {
      jest: `jest --config ./${this.exampleFolderName}/jest.config.ts --runInBand`,
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

  private async createAskUIHelperFromTemplate() {
    return [{
      title: 'Write askui config',
      task: async () => new Listr([
        {
          title: 'Create askui-helper.ts ',
          task: async () => {
            const askuiHelperTemplateFilePath = path.join(
              getPathToNodeModulesRoot(),
              'example_projects_templates',
              'templates',
            );

            const templateFileName = 'askui-helper.nj';
            nunjucks.configure(askuiHelperTemplateFilePath, { autoescape: false });
            const result = nunjucks.render(templateFileName, this.helperTemplateConfig);
            const filePath = path.join(this.distexampleFolderPath, 'helpers', 'askui-helper.ts');
            await fs.mkdir(path.join(this.distexampleFolderPath, 'helpers'));
            await fs.writeFile(filePath, result, 'utf8');
          },
        },
      ]),
    }];
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
          title: 'Add reporter (only Jest)',
          task: async () => this.addReporterConfig(),
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
      jest: 'npm i -D @askui/askui-reporters typescript ts-node @types/jest ts-jest jest eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-askui',
      jasmine: 'npm i -D @askui/askui-reporters typescript ts-node @types/jasmine jasmine @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-askui',
    };
    await runCommand(frameworkDepencies[this.cliOptions.testFramework]);
  }

  private async addUserCredentails() {
    return [{
      title: 'Add user credentails',
      task: async () => new Listr([
        {
          title: 'Add workspace id ',
          task: async () => { this.helperTemplateConfig['workspace_id'] = this.cliOptions.workspaceId; },
        },
        {
          title: 'Add access token',
          task: async () => { this.helperTemplateConfig['access_token'] = this.cliOptions.accessToken; },
        },
      ]),
    }];
  }

  private async copyESLintConfigFiles(): Promise<Listr.ListrTask<unknown>[]> {
    const esLintRcFilePath = path.join('example_projects_templates', 'typescript', '.eslintrc.json-template');
    const esLintIgnoreFilePath = path.join('example_projects_templates', 'typescript', '.eslintignore-template');

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
    const tsConfigFilePath = path.join('example_projects_templates', 'typescript', 'tsconfig.json');

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
    let useProxy = this.cliOptions.usingProxy;
    if (typeof useProxy !== 'boolean') {
      useProxy = (useProxy === 'true');
    }
    this.cliOptions.usingProxy = useProxy;

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
      ...await this.createAskUIHelperFromTemplate(),
      ...await this.installProxy(),
    ]);

    await tasks.run();
    /* eslint-disable no-console */
    if (this.cliOptions.usingProxy) {
      console.log(chalk.redBright('Since you are using a Proxy. Please don\'t forget to configure it!'));
      console.log(chalk.gray(`You can find more information under ${this.proxyDocUrl}`));
    }
    console.log(chalk.greenBright('\nCongratulations!'));
    console.log(`askui example was created under ${chalk.gray(this.distexampleFolderPath)}`);

    console.log(`You can start your automation with this command ${chalk.green('npm run askui')}`);
    /* eslint-enable no-console */
  }
}
