---
sidebar_position: 5
---

# AskUI Runner
The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at. Internally it uses the AskUI SDK which connects to the AskUI Controller.

If you want to execute your workflows defined in __AskUI Studio__ in your own environment instead of with AskUI hosted runners, this page will help you to set it up.

![Architecture drawing how the AskUI Runner fits into AskUI Studio, AskUI SDK and AskUI Controller. The AskUI Runner fetches Workflows from AskUI Studio and uploads the results back to it. The Runner uses the AskUI SDK which passes the instructions from the workflow steps to the AskUI Controller.](./images/askui-runner-simple-architecture.png)

## Windows

### Requirements
* Install the **AskUI Controller** with the [AskUI Installer](../01-Getting%20Started/Installing%20AskUI/getting-started.md) first.
* Then switch into the [AskUI Development Environment (ADE)](AskUI-Development-Environment.md) by executing the command `askui` in CMD.

### `AskUI-StartRunner` Command
The `AskUI-StartRunner` command starts the AskUI Runner. This function accepts the following parameters:

- `AskuiToken`: Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used.
- `AskuiWorkspaceId`: Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used.
- `DeviceControllerPort`: Specifies the __port__ of the device controller to be used for the runner. The default is 6769.
- `DeviceControllerHost`: Specifies the __host__ of the device controller to be used for the runner. The default is 127.0.0.1.
- `ForceProjectTemplateUpdate`: Specifies whether to force the update of the project template. This is helpful for debugging.
- `LogLevel`: Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'.

## Linux and macOS
For Linux and macOS we do not provide an Installer yet. Thus you have to install the AskUI Runner from source ([GitHub-Repository](https://github.com/askui/askui-runner)).

### Requirements

- Python 3.10 or higher
- Node.js 16 or higher

### Installation

We recommend using a virtual environment for Python. Make sure `python --version` returns 3.10 or higher:

```bash
python -m venv venv
source venv/bin/activate
```

We have not yet published the __AskUI Runner__ to PyPI. For now, you can install it directly from GitHub:

```bash
pip install git+https://github.com/askui/askui-runner.git
```

Currently, the standard logging output of the __AskUI runner__ is minimal - we are soon going to change that. But you should see the runner starting the running of workflows as soon as you schedule some runs through the AskUI Studio.

### Usage

Create a configuration file (`.y{a}ml` or `.json`) in a directory of your choosing. The configuration file should contain at least some credentials and the command with which you start the runner without the config file flag:

```yml
credentials:
  workspace_id: <workspace id> # replace with your workspace id
  access_token: <access token> # replace with your access token
runner:
  exec: python -m askui_runner # update if your command is different
  tags: [<tag 1>, <tag 2>, ..] # replace with your own runner tags
```

See [Generating up-to-date Configuration Schema](#generating-up-to-date-configuration-schema)

Start the runner using

```bash
python -m askui_runner -c <path to your config file, e.g., askui-runner.config.yaml>
```

### Start AskUI Controller
If you want to run your workflows on the same system as the runner you need to start an AskUI Controller that listens on port `6769`. Please download the one for your operating system and start it:

* [Windows](https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe)
* [Windows (new version - beta release)](https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe) [More about the new version](AskUI-Controller.md)
* [Linux](https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage)

:::info
**macOS** After installation to `Applications` remove the quarantine flag with the following command run from a terminal: `xattr -d com.apple.quarantine /Applications/askui-ui-controller.app`
:::

* [macOS(Intel)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg)
* [macOS(Apple silicon)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg)

### Execute Workflows on a Remote System: Change AskUI Controller URL
You can change the AskUI Controller-URL so the runner can talk to a AskUI Controller that runs on a remote machine or on a different port: 

```yml
...
runner:
  ...
  controller:
    host: "127.0.0.1"
    port: 7000
```

### Generating up-to-date Configuration Schema

Requirements:
- [PDM](https://pdm.fming.dev/latest/) 2.8 or higher for contributing and creating the JSON schema of the config

Find out about all configuration options by taking a look at the JSON schema of the configuration. You can generate an up-to-date JSON schema by cloning this repository and running the following commands.

```bash
## Install and initialize pdm
pip install pdm
pdm install

pdm run python -m scripts.generate_config_schema_json
```

## Running a workflow
Go back to AskUI Studio and access the workflow you intend to execute. Head over to the '**Run**' tab located in the right sidebar and choose "New Run." In the pop-up window that appears next, select "**Self-hosted**" and input one or more of the tags you previously included in the runner configuration file.
