---
sidebar_position: 2
pagination_next: general/Getting Started/write-your-first-instruction
---

# Install AskUI Windows

## Requirements

- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- Downloaded [AskUI-Installer](https://files.askui.com/releases/Installer/24.01.01/askui-full-installer.exe)
- Administrator privileges on the machine for installation

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (for free).

Please [fill out this form](https://xa5a040gvfz.typeform.com/to/Ndh2NkV6) to schedule a demonstration or [request a trial](https://xa5a040gvfz.typeform.com/to/IHdr0qY5) to obtain access to __AskUI Studio__.

## Installation

### 1. Run Installer
Run the downloaded installer as **Administrator** (Rightclick the installer and select **Run as administrator**).

:::info
The installer prompts Windows to display a security alert. Click on `More Info` in the top left and then on `Run Anyway` in the bottom right corner of the dialog to proceed with the installation.
:::

### Activate the AskUI Development Environment (ADE)
1. Open a command prompt like *PowerShell*
2. Run the command `askui` (type it and press _Enter_). This brings you into the AskUI Development Environment (short ADE) where you can configure your installation, start the Remote Device Controller, create new AskUI-Projects and run workflows.

Initializing the ADE may take a few seconds.

### Configure AskUI
Run the following command to set your credentials. Replace `<access token>` and `<workspace id>` with the ones you obtained under [Access Token](#access-token):

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

### Start the Remote Device Controller
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

### Create a New Project
Switch to a directory where you want to initialize a new AskUI-Project and run:

```shell
Askui-NewProject -ProjectName askui_first -TestFramework jest -TypeScriptConfig true
```

### What Is Next
Your AskUI-Project is now initialized in the folder you specified, `<path you ran AskUI-NewProject>/askui_first`.
Open this folder with your IDE of choice.

You are ready to create your first workflow! Please go to the next page [Write Your First Instruction](write-your-first-instruction.md).
