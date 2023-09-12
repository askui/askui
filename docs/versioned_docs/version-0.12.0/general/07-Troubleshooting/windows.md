---
sidebar_position: 4
---

# Windows

## AskUI UI Controller 

On Windows, the AskUI UI Controller may not terminate after each execution. This may lead to problems when using the AskUI UI Controller in a pipeline like a pipeline's run not coming to an end.

In this case you can force termination of the AskUI UI Controller. The `UiController.stop()` takes an optional boolean argument which is set to `false` by default. If we pass `true` to the `UiController.stop()` method, e.g., `uiController.stop(true)`, we kill the AskUI UI Controller process. 

```typescript
await uiController.stop(true);
```

If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our [Jest-Troubleshooting page](jest.md). This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the AskUI UI Controller. 


 