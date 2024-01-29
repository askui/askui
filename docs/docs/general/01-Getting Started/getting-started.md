---
sidebar_position: 2
pagination_next: general/Getting Started/write-your-first-instruction
---

# Install AskUI on Windows

## Prerequisites

- An active AskUI account. Register for a free trial [here](https://xa5a040gvfz.typeform.com/to/IHdr0qY5).
- A text editor/IDE. We recommend [Visual Studio Code](https://code.visualstudio.com/).
- Administrator privileges on the computer, where you want to use AskUI.

## Setup

### 1. Download Installer
Download the AskUI Installer [here](https://files.askui.com/releases/Installer/24.01.01/askui-full-installer.exe).

### 2. Setup AskUI on Your Computer
Run the downloaded installer as **Administrator** (Rightclick the installer and select **Run as administrator**).

:::info
The installer prompts Windows to display a security alert. Click on `More Info` in the top left and then on `Run Anyway` in the bottom right corner of the dialog to proceed with the installation.
:::

Next, follow the instructions in the setup wizard until the end.

### 3. Activate the AskUI Development Environment (ADE)
1. Open a command prompt. We recommend using *PowerShell*.
2. Run the command `askui activate` (type it and press _Enter_). This brings you into the AskUI Development Environment (short ADE) where you can configure your installation, start the Remote Device Controller, create new AskUI-Projects and run workflows.

Activating the ADE may take a few seconds.

### 4. Connect Your AskUI Account
Run the following command to authenticate and connect your ADE to your AskUI account. Replace `<access token>` and `<workspace id>` with your real credentials.

- **Access Token** You can create a new access token inside our web app. Go to any Workspace and navigate to *Access Tokens* in the left sidebar.
- **Workspace ID** Navigate to your workspace's settings. You can find the workspace ID under *General* below the workspace's name.

```shell
Askui-SetSettings -AskuiToken <access token> -AskuiWorkspaceId <workspace id>
```

Validate the settings with the following command: 

```shell
Askui-ShowSettings
```

#### (Optional) Configure Proxy
If you are behind a proxy you have to set the proxy address. Replace `<proxy_http_address>` and `<proxy_https_address>` with the ones for your proxy:

```shell
Askui-SetSettings -ProxyHttpAddress <proxy_http_address> -ProxyHttpsAddress <proxy_https_address>
```
If you have already configured your proxy settings in the setup wizard, you can skip this step.

:::info
Configuring proxy or firewall settings can be a challenge. If you need assistance with this task, feel free to schedule a call with our enterprise support team [here](https://calendly.com/d/3m3-myw-9z7/askui-enterprise-onboarding-assistance).
:::

### 5. Start the Controller
Start the Remote Device Controller with:

```shell
Askui-StartRemoteDeviceController
```

Open another command prompt and [activate the _ADE_](#activate-the-askui-development-environment-ade) there again.

Alternatively start the Remote Device Controller in the background to keep using the same command prompt:

```shell
Askui-StartRemoteDeviceController -RunInBackground
```

Press _Enter_ to return to the _ADE_.

### 6. Create a New Project
Switch to a directory where you want to create the new AskUI project and run:

```shell
Askui-NewProject -ProjectName askui_first -TestFramework jest -TypeScriptConfig true
```


### 7. Open Your Project
Your new AskUI project has now been created inside the folder you specified and it's path is set as your current working directory: `<path you ran AskUI-NewProject>/<your_askui_project_name>`.

Now open this folder with your IDE of choice.

If you are using Visual Studio Code, you can run the following command in the same command prompt:

```shell
code .
```
On the left, in your file explorer, you should see the files that make up your AskUI project.
1. .askui\Settings // Global Project Settings
2. allure-results // AskUI reporter files will be generated here
3. askui_example // Workflow Files
    a. helpers // Helper functions for your project
    b. jest.config.ts // Jest Automation Framework Settings
    c. my-first-askui-test-suite.ts // An example workflow file
4. node_modules // Packages needed to make AskUI work
5. report // Annotations will be generated here
..

![AskUI ProjectVisual Studio Code](docs/docs/general/01-Getting Started/Visual_Studio_Code.png)

### 8. Open a Workflow
The workflow files are where you will write your automations scripts.
To find them, navigate to the `askui_example` folder. This is the place, where you can store your workflow files.

To add a new workflow, create a file in this folder, ending in `.test.ts`

The project comes with one **template workflow**, which is called `my-first-askui-test-suite.ts`.
On the next page, you will dive deeper on how to write instructions in the AskUI automation framwork.

## Next Steps

You are now ready to create your first workflow! Please go to the next page [Write Your First Instruction](write-your-first-instruction.md).
