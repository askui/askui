---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# Deploy and Manage Your Own AskUI Runners
The **AskUI Runner** is a self-hosted component that downloads your workflows from **AskUI Studio** and runs them on the device it is hosted at. Internally it uses the **AskUI SDK** which connects to the Remote Device Controller.

If you want to execute your workflows defined in **AskUI Studio** in your own environment instead of with AskUI-hosted runners, this page will help you set it up.

![Architecture drawing how the AskUI-Runner fits into AskUI Studio, AskUI SDK and AskUI Remote Device Controller. The AskUI-Runner fetches Workflows from AskUI Studio and uploads the results back to it. The Runner uses the AskUI SDK which passes the instructions from the workflow steps to the AskUI Remote Device Controller.](../../general/02-Components/images/askui-runner-simple-architecture.png)

## Windows

### Requirements

- Install the **AskUI Controller** with the **AskUI-Installer** first.
- Then switch into the **AskUI Development Environment** (ADE) by executing the command `askui-shell` in CMD.

### AskUI-StartRunner Command

The `Askui-StartRunner` command starts the AskUI Runner. This function accepts the following parameters:

- `Token`: Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used.
- `WorkspaceId`: Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI seings is used.
- `Port`: Specifies the port of the device controller to be used for the runner. The default is 6769.
- `WebSocketHost`: Specifies the host of the device controller to be used for the runner. The default is 127.0.0.1.
- `ForceProjectTemplateUpdate`: Specifies whether to force the update of the project template. This is helpful for debugging.
- `LogLevel`: Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The deult is 'INFO'.
- `Tags`: Specifies the tags to be set in the AskUI Runner configuration.

## Linux and macOS

:::warning
Installing and running your own **AskUI Runner** requires you to know your way around the command line and be comfortable with developer tools like Python, Node and YAML.

If you are working in an enterprise environment where your device is managed and access to internet is routed through a proxy; Our [Enterprise Checklist](https://docs.askui.com/docs/general/Getting%20Started/enterprise-checklist) will help you to set up all the requirements.

In case you need help do not hesitate to contact us!
:::

### Requirements

- Python 3.10
- Node.js

### Installation

We recommend using a virtual environment for Python. Make sure `python --version` returns 3.10 or higher:

```bash
python -m venv venv
source venv/bin/activate
```

We have not yet published the **AskUI Runner** to PyPI. For now, you can install it directly from GitHub ([link to repository](https://github.com/askui/askui-runner)):

```bash
pip install git+https://github.com/askui/askui-runner.git
```

Currently, the standard logging output of the **AskUI runner** is minimal - we are soon going to change that. But you should see the runner starting the running of workflows as soon as you schedule some runs through the AskUI Studio.

### Usage

Create a configuration file (`.y{a}ml` or `.json`) in a directory of your choosing. The configuration file should contain at least some credentials and the command with which you start the runner without the config file flag:

```yaml
credentials:
  workspace_id: <workspace id> # replace with your workspace id
  access_token: <access token> # replace with your access token
runner:
  exec: python -m askui_runner # update if your command is different
  tags: [<tag 1>, <tag 2>, ..] # replace with your own runner tags
```

:::info
Explanation for **tags:** When you create a run in **AskUI Studio** the tags determine which runner can poll a specific workflow. The runner only pulls workflows where one of the tags match.
:::

Start the runner using

```yaml
python -m askui_runner -c <path to your config file, e.g., askui-runner.config.yaml>
```

### Start UiController

If you want to run your workflows on the same system as the runner you need to start an UiController that listens on port `6769`. Please download the one for your operating system and start it:

- Please use our AskUI Installer and follow the Getting Started guide: [Windows](../../general/01-Getting%20Started/Installing%20AskUI/getting-started.md)
- [Linux](https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage)

:::warning
**macOS** After installation to `Applications` remove the quarantine flag with the following command run from a terminal: `xattr -d com.apple.quarantine /Applications/askui-ui-controller.app`
:::

- [macOS(Intel)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg)
- [macOS(Apple silicon)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg)

### Execute Workflows on a Remote System: Change UiController URL

You can change the UiController-URL so the runner can talk to a UiController that runs on a remote machine or on a different port:

```yaml
...
runner:
  ...
  controller:
    host: "127.0.0.1"
    port: 7000
```

## Running a workflow

Go back to AskUI Studio and access the workflow you intend to execute. Head over to the '**Run**' tab located in the right sidebar and choose "New Run." In the pop-up window that appears next, select "**Self-hosted**" and input one or more of the tags you previously included in the runner configuration file.
