---
sidebar_position: 3
---

# AskUI Development Environment (ADE)
After installation, the **ADE** is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands which will assist you with AskUI product usage.

Start by typing `askui` in the terminal and this will make all ADE commands available.

## Settings Management
ADE comprises three types of settings:

1. **Global Settings:**
    - Created by the installer.
    - Available for all users.
    - Includes configurations set during installation (e.g., proxy settings).
2. **User Settings:**
    - Located in **`<USER_HOME_DIR>/.askui/Settings/AskuiEnvironmentSettings.json`**.
    - Applied to all new projects.
3. **Project Settings:**
    - Located in **`<PROJECT_DIR>/.askui/Settings/AskuiEnvironmentSettings.json`**.

:::info
Project settings override user settings, and user settings override default settings.
:::

### `Askui-SetSettings` Command
The `Askui-SetSettings` command configures ADE settings. It allows you to set parameters like proxy addresses, `access token`, and `workspace id`. This function updates environment variables in both user and project configurations. Accepted parameters:

- `ProxyHttpAddress`: HTTP proxy address for AskUI configuration.
- `ProxyHttpsAddress`: HTTPS proxy address for AskUI configuration.
- `AskuiToken`: AskUI token for AskUI configuration.
- `AskuiWorkspaceId`: AskUI workspace ID for AskUI configuration.
- `LogLevel`: Log level for AskUI configuration.
- `Location`: Specifies the settings to be updated (User or Project). Default is User.

#### Example

```shell
# Set HTTP proxy address and AskUI token.
Askui-SetSettings -ProxyHttpAddress "<http://proxy.example.com>" -AskuiToken "askui_token"

# Set both HTTP and HTTPS proxy addresses, and AskUI workspace ID.
Askui-SetSettings -ProxyHttpAddress "<http://proxy.example.com>" -ProxyHttpsAddress "<https://proxy.example.com>" -AskuiWorkspaceId "your_workspace_id"
```

### `Askui-ShowSettings` Command
The `Askui-ShowSettings` function retrieves and displays the AskUI configuration.

## Project Management

### `Askui-NewProject` Command
The `Askui-NewProject` command creates a new AskUI project with customizable options. Use the following parameters:

- `ProjectName`: Specifies the project name.
- `AskUIWorkspaceID`: Provides the AskUI workspace ID.
- `AskUIToken`: Inputs the AskUI Token.
- `AskUINodeJsVersion`: Determines the version of AskUI Node.js to install (defaults to the latest).
- `SkipChangingPathUserPrompt`: Skips the prompt to change the project directory (defaults to false).
- `TestFramework`: Chooses the test framework: 'jest' or 'jasmine'.
- `UsingProxy`: Use a proxy: 'true' or 'false'.
- `TypeScriptConfig`: Overwrite `tsconfig.json`: 'true' or 'false'.

#### Example

```powershell
Askui-NewProject -ProjectName MyProject -AskUIWorkspaceID <Workspace_id> -AskUIToken <Token> -SkipChangingPathUserPrompt true
```

### `Askui-RunProject` Command
The `Askui-RunProject` command executes an AskUI project. Note:

- This command is applicable only for projects created by `Askui-NewProject`.
- Navigate to the project directory before running the command.

## AskUI Controller Management
The AskUI Controller a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system.

See the dedicated [AskUI Controller docs](AskUI-Controller.md) on how to configure it.

## AskUI Runner Management
The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at.

See the dedicated [AskUI Runner docs](AskUI-Runner.md) on how to configure it.


## ADE + VSCode IDE

The ADE is build to work seamlessly with (VSCode)[https://code.visualstudio.com/] together. Therefore we create (VScode Workspace Settings)[https://code.visualstudio.com/docs/getstarted/settings#_settingsjson]

**Note: Only compatible with windows**

1. Create a `<project>/.vscode` folder with `mkdir .vscode`

### Configure the askui-shell

2. Create the `<project>/.vscode/settings.json` with following content:
```json
{
    "livePreview.customExternalBrowser": "Default",
    "terminal.integrated.profiles.windows":{   
        "askui-shell": {    
            "path": ["C:\\Program Files\\AskUI GmbH\\Tools\\askui-shell.cmd"],
            "args": [
               "activate"
            ],
            "icon": "terminal-bash",
        },        
        "Git Bash": null,        
        "Command Prompt": null,        
        "PowerShell": null,        
        "JavaScript Debug Terminal": null
    },
    "terminal.integrated.defaultProfile.windows": "askui-shell"
}
```
- `terminal.integrated.profiles.windows`: Configures the `askui-shell` and deactivate other shells
- `terminal.integrated.defaultProfile.windows`: Set the `askui-shell` as default

Then the `askui-shell` is configured for as the default terminal like this:
![askui logo](./docs/static/img/vs-code/askui_shell.png)


### Configure Jest Runner, ESLint & Live View

Add the recommended extenstions for VSCode by adding `<project>/.vscode/extensions.json` with following content:

```json
{
    "recommendations": ["ms-vscode.live-server", "firsttris.vscode-jest-runner", "dbaeumer.vscode-eslint"]
}
```
- `ms-vscode.live-server`: HTML [Live Viewer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) for annotations.
- `firsttris.vscode-jest-runner`: [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) to start single test out of the IDE.
- `dbaeumer.vscode-eslint`: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin to show missing `exec()`.

Then you can install the extenstion by clicking on `Install` under:
![askui logo](./docs/static/img/vs-code/recommended_extensions.png)

### Use Jest Runner

You can start a workflow by clicking on `Run` inside a `test.ts`-file: 
![askui logo](./docs/static/img/vs-code/jestrunner.png)


### Use ESLint

ESList Plugin is showing you if you forgot an `exec()`:
![askui logo](./docs/static/img/vs-code/eslint-missing-exec.png)


### Use Live Viewer

The Live Viewer can show you the annotation without leaving the VSCode:
![askui logo](./docs/static/img/vs-code/annotation-live-viewer.png)








