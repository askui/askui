---
sidebar_position: 5
pagination_next: general/Getting Started/write-your-first-instruction
---

# AskUI on Linux

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- __npm__ in version 7.10 or above (usually comes with the Node.js installation)
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- :warning: [Information for Wayland](../../07-Troubleshooting/linux.md#wayland).

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (for free).

Please [fill out this form](https://xa5a040gvfz.typeform.com/to/Ndh2NkV6) to schedule a demonstration or [request a trial](https://xa5a040gvfz.typeform.com/to/IHdr0qY5) to obtain access to __AskUI Studio__.

## Installation

Open a directory where you would like to place the AskUI setup and run this command. The command will ask you a few questions on how to customize your setup. If you are unsure which value to select press the `Enter`-key to select the default value. Also keep your `workspace id` and your `access token` ready which you [created just before](#access-token) (We hope so 😉).

```shell
npx askui@latest init
```

:::note

To create and serve a static HTML-Report you have to install [Allure](https://github.com/allure-framework/allure2#download) and then call `allure serve ./allure-results` from your root-directory.

:::

## (Optional) Store Your Credentials in `.env`-File 
Your credentials (_Access Token_ and _Workspace ID_) get stored in plain text in the file (`askui_example/helpers/askui-helper.ts`). Storing credentials in plain text increases their risk to be leacked by pushing them to a remote repository.

To load them from the `.env` file that gets created you have to remove the `credentials` property from `UiControlClient` in `askui_example/helpers/askui-helper.ts` and activate the `dotenv`-environment by uncommenting the import at the start of the same file:

```typescript
aui = await UiControlClient.build({
    // Remove the credentials property to
    // load credentials from .env file
    credentials: {
      workspaceId: '< your_workspace_id >',
      token: '{{ your_access_token }}',
    },
    reporter: new AskUIAllureStepReporter(),
  });
```

The resulting file looks like this:

```typescript
...
import 'dotenv/config';

...

  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter(),
  });

...
```
