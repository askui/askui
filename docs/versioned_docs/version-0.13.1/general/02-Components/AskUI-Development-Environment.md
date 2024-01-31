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
