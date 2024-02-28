---
sidebar_position: 3
---

# AskUI Development Environment (ADE)
After installation, the **ADE** is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands which will assist you with AskUI product usage.

Start by typing `askui-shell` in the terminal and this will make all ADE commands available.

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

### `AskUI-SetSettings` Command
The `AskUI-SetSettings` command configures ADE settings. It allows you to set parameters like proxy addresses, `AskUI access token`, and `workspace ID`. This function updates environment variables in both user and project configurations. Accepted parameters:

- `HttpProxy`: HTTP proxy address for AskUI configuration.
- `HttpsProxy`: HTTPS proxy address for AskUI configuration.
- `Token`: AskUI token for AskUI configuration.
- `WorkspaceId`: AskUI workspace ID for AskUI configuration.
- `LogLevel`: Log level for AskUI configuration.
- `Location`: Specifies the settings to be updated (User or Project). Default is User.

#### Example

```powershell
# Set HTTP proxy address and AskUI token.
AskUI-SetSettings -HttpProxy "http://proxy.example.com" -Token "askui_token"
```

```powershell
# Set both HTTP and HTTPS proxy addresses, and AskUI workspace ID.
AskUI-SetSettings -HttpProxy "http://proxy.example.com" -HttpsProxy "https://proxy.example.com" -WorkspaceId "your_workspace_id"
```

### `AskUI-ShowSettings` Command
The `AskUI-ShowSettings` command retrieves and displays the AskUI configuration. 

Parameters:

- **`Location`**: Specifies the settings to be displayed (Merged or User or Project or Default). Default is Merged.

**Example:**

```powershell
# Get and display AskUI Merged Settings.
  AskUI-ShowSettings
```

```powershell
# Get and display AskUI User Settings.
  AskUI-ShowSettings -Location User
```

### `AskUI-RemoveSettings` Command

The `AskUI-RemoveSettings` command is used to configure AskUI settings, allowing you to unset parameters such as proxy addresses, AskUI token, and workspace ID. The function has the following parameters:

- `HttpProxy`: Removes the HTTP proxy address from the AskUI Settings.
- `HttpsProxy`: Removes the HTTPS proxy address from the AskUI Settings.
- `Token`: Removes the AskUI token from the AskUI Settings.
- `WorkspaceId`: Removes the AskUI workspace ID from the AskUI Settings.
- `LogLevel`: Removes the log level from the AskUI Settings.
- `Credentials`: Removes the complete credentials from the AskUI Settings.
- `EnvironmentVariables`: Removes the complete environment variables from the AskUI Settings.
- `Location`: Specifies the settings to be updated (User or Project). Default is User.

**Example:**

```powershell
# Removes the HTTP proxy address and AskUI token.
  AskUI-RemoveSettings -HttpProxy -Token
```

```powershell
# Removes the complete credentials.
  AskUI-RemoveSettings -Credentials
```

## Project Management

### `AskUI-NewProject` Command
The `AskUI-NewProject` command creates a new AskUI project with customizable options. Use the following parameters:

- `ProjectName`: Specifies the project name.
- `WorkspaceID`: Provides the AskUI workspace ID.
- `Token`: Inputs the AskUI Token.
- `AskUINodeJsVersion`: Determines the version of AskUI Node.js to install (defaults to the latest).
- `SkipChangingPathUserPrompt`: Skips the prompt to change the project directory (defaults to false).
- `TestFramework`: Chooses the test framework: 'jest' or 'jasmine'.
- `UsingProxy`: Use a proxy: 'true' or 'false'.
- `TypeScriptConfig`: Overwrite `tsconfig.json`: 'true' or 'false'.

#### Example

```powershell
#This Command will create a new project in the current directory with the name `MyProject` and will skip the prompt to change the project directory.
AskUI-NewProject -ProjectName MyProject -WorkspaceId <Workspace_id> -Token <Token> -SkipChangingPathUserPrompt true
```

### `AskUI-RunProject` Command
The `AskUI-RunProject` command executes an AskUI project. Note:

- This command is applicable only for projects created by `AskUI-NewProject`.
- Navigate to the project directory before running the command.

```powershell
AskUI-RunProject
```

## AskUI Controller Management
The AskUI Controller a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system.

### `AskUI-StartController` Command

The `AskUI-StartController` command is used to launch the AskUI Remote Device Controller with the following customizable options:

- `DisplayNum`: Select a display number, default 0.
- `Maximize`: Start the app as a Maximized window.
- `Runtime`: Select the runtime (desktop, android). default desktop.
- `Port`: Port of the web socket port server to connect via the runner-protocol. (Default: 6769)
- `ActionWaitTime`: Waits x milliseconds after each action. This can be used to slow down or speed up the execution. (Default: 1000)
- `WebSocketHost`: Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)
- `LogFile`: Output path for generated logs.
- `LogLevel`: Log level. (Default: debug)
- `RunInBackground`: Start the app in background mode.

**Example:**

```powershell
# This Command will start the AskUI Controller in background with all default options.
AskUI-StartController -RunInBackground
```

```powershell
#This Command will start the AskUI Controller in the background with the following options: DisplayNum: 0, Maximize: true, Runtime: desktop, Port: 6769, ActionWaitTime: 1000, WebSocketHost: 127.0.0.1
AskUI-StartController -DisplayNum 0 -Maximize -Runtime desktop -Port 6769 -ActionWaitTime 1000 -WebSocketHost 127.0.0.1 -LogFile "C:/Logs/remote_device_log.txt" -LogLevel debug -RunInBackground
```
:::info
Note: Adjust the parameters as needed for your specific use case.
:::

Also see the dedicated [AskUI Controller docs](AskUI-Controller.md) for more information.

## AskUI Runner Management
The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at.


### `AskUI-StartRunner` Command
The `AskUI-StartRunner` command starts the AskUI Runner. This function accepts the following parameters:

- `Token`: Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used.
- `WorkspaceId`: Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used.
- `Port`: Port of the web socket port server to connect via the runner-protocol. (Default: 6769)
- `WebSocketHost`: Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)
- `ForceProjectTemplateUpdate`: Specifies whether to force the update of the project template. This is helpful for debugging.
- `LogLevel`: Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'.
- `Tags`: Specifies the tags to be set in the AskUI runner configuration.

**Example:**

```powershell
# Start the AskUI runner with default configuration.
AskUI-StartRunner
```

```powershell
# Start the AskUI runner with the specified tags.
AskUI-StartRunner -Tags "tag1,tag2"
```
:::info
Note: Adjust the parameters as needed for your specific configuration.
:::

See also the dedicated [AskUI Runner docs](AskUI-Runner.md) for more information.


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
            "path": ["C:\\Program Files\\AskUI GmbH\\AskUI Suite\\Tools\\askui-shell.cmd"],
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
- `terminal.integrated.profiles.windows`: Configures the `askui-shell` and deactivates other shells
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