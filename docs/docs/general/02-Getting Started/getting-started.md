---
sidebar_position: 2
pagination_next: general/Getting Started/write-your-first-instruction
---

# Install AskUI Windows

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- __npm__ in version 7.10 or above (usually comes with the Node.js installation)
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (for free).

Please [fill out this form](https://xa5a040gvfz.typeform.com/to/Ndh2NkV6) to schedule a demonstration or [request a trial](https://xa5a040gvfz.typeform.com/to/IHdr0qY5) to obtain access to __AskUI Studio__.

## Installation

Open a directory where you would like to place the AskUI setup and run this command. Answer all the questions:

```shell
npx askui@latest init -s windows
```

:::note

To create and serve a static HTML-Report you have to install [Allure](https://github.com/allure-framework/allure2#download) and then call `allure serve ./allure-results` from your root-directory.

:::

## Download Remote Device Controller
Download the installer [here](https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe). Start it and follow the installation process.

Start the installed __Remote Device Controller__ manually and select the screen you want to use. 
> Note: Either through the start menu, desktop shortcut or the executable in the install directory.