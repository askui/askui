---
sidebar_position: 2
---

# AskUI-Installer
The AskUI-Installer guides you through installing the necessary AskUI components for your system (Currently only Windows).

It will install the following components:

* [AskUI Controller](AskUI-Controller.md)
* [AskUI Development Environment (ADE)](AskUI-Development-Environment.md)
* AskUI Development Kit (SDK)
* (optional) [AskUI Runner (Executing workflows from AskUI Studio)](AskUI-Runner.md)

<span id="askui-installer-download-link">
[Download the installer here 🤖](https://files.askui.com/releases/Installer/24.01.01/askui-full-installer.exe)
</span>

## Prerequisites

* Administrator privileges on your machine

## Installation via UI
Upon launching the executable, you will engage with a series of dialogs for the installation process.

### Welcome Dialog
In this initial step, you can choose their preferred installer mode:

- **Simple Installer:** Installs default components without any configuration.
- **Advanced Installer:** Provides you with the option to select specific components and configure settings, such as proxy addresses.

![Welcome Dialog. Choose between Simple and Advanced Installer.](./images/askui-installer-ui-welcome.png)

### License Agreement
You must accept the terms in the license agreement and agree to the privacy policy before proceeding with the installation.

![License Agreement and Privacy Policy Agreement.](./images/askui-installer-ui-license-agreement.png)

### Installation Folder
You can choose the installation folder for the application.

![Select the installation by typing into the textfield or browse.](./images/askui-installer-ui-select-installation-folder.png)

### Advanced Mode Dialog
The following dialogs are displayed only if you opt for the **Advanced Mode**.

#### Configure Components
You can choose which components you want to install additionally to the **AskUI Controller**.

![Choose between the components. AskUI Controller only or also AskUI Development Environment with Node and AskUI Runner. And Windows Firewall Configuration.](./images/askui-installer-ui-features.png)

#### Proxy Configuration 
This dialog is shown only if the **Advanced Mode** includes the installation of _ADE_. You can set up internet access proxies, which will become part of the default AskUI settings.

![Checkbox with value "Set proxy for internet access". Textfields for HTTP(s) Proxy Addresses.](./images/askui-installer-ui-proxy-configuration.png)

#### Shortcuts
You can set preferences for shortcuts.

![Select boxes for Desktop and Start Menu Programs folder](./images/askui-installer-ui-configure-shortcuts.png)

#### Start Menu Shortcuts Folder
This dialog appears when _Start Menu Programs folder_ was selected in the previous dialog.

![Textfield for Start Menu Shortcuts Folder](./images/askui-installer-ui-start-menu-shortcuts.png)

### Start Installation
Now you are ready to start the installation.

![Ready to install dialog where you can click the _Install_ button to start the installation.](./images/askui-installer-ui-ready-to-install.png)

### Installation Completed
You receive confirmation that the installation is successfully completed. You can select to start the AskUI Controller if you want to use AskUI immediately.

![Installation complete setup dialog. Checkbox for "Launch AskUI Controller". Click "Finish" to finish the installation.](./images/askui-installer-ui-installation-completed.png)

## Installation via Terminal (Silent Mode)
Use the downloaded executable file (**.exe**) for silent installation, which allows you to choose the installation directory and components. To install silently, run the following command terminal (Application **CMD**) with Administrator privileges:

```shell
"<installer_path>" /qn
```

**Options:**

- `/l*v "<log_file_path>"`: Set the installer log file path.
- `APPDIR="<installation_directory>"`: Specify the installation directory.
- `INSTALL_ADK="NO"`: Skip AskUI Development Environment installation.
    - `INSTALL_NODE="NO"`: Skip Isolated Node environment installation.
    - `INSTALL_ASKUI_RUNNER="NO"`: Skip AskUI Runner installation.
    - `HTTP_ADDRESS="<proxy_http_address>"`: Set the HTTP proxy address.
    - `HTTPS_ADDRESS="<proxy_https_address>"`: Set the HTTPS proxy address.
- `CONFIGURE_WINDOWS_FIREWALL="NO"`: Skip Windows Firewall configuration.

### Example
This command installs all components silently and sets the HTTP proxy address to http://proxy.example.com:

```shell
"<installer_path>" /qn HTTP_ADDRESS="http://proxy.example.com"
```
