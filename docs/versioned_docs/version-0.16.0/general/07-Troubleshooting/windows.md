---
sidebar_position: 4
---

# Windows

## AskUI Controller Not Responding to Instructions
A possible solution is to start the **AskUI Controller** as administrator:

* Right-Click the application and click **Run as administrator**

_Background: When you start the **AskUI Controller** and during the execution another process is started AND it is an admin process, the controller stops executing instructions._

## Execution Policy in PowerShell Blocks Commands
When you try to execute commands inside _PowerShell_ it may not be possible due to a restrictive [_Execution Policy_](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4).

You can set the _Execution Policy_ inside the PowerShell with the following command if you have the necessary permissions:

```shell
Set-ExecutionPolicy unrestricted
```

## AskUI Controller 

On Windows, the AskUI Controller may not terminate after each execution. This may lead to problems when using the AskUI Controller in a pipeline like a pipeline's run not coming to an end.

In this case you can force termination of the AskUI Controller. The `UiController.stop()` takes an optional boolean argument which is set to `false` by default. If we pass `true` to the `UiController.stop()` method, e.g., `uiController.stop(true)`, we kill the AskUI Controller process. 

```typescript
await uiController.stop(true);
```

If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our [Jest-Troubleshooting page](jest.md). This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the AskUI Controller. 
