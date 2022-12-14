# Windows

## askui UI Controller 

On Windows, the askui UI Controller may not terminate after test execution. This may lead to problems when using the askui UI Controller in a pipeline like a pipeline's run not coming to an end. There are two ways to deal with this issue:

- you can force Jest to exit as described on our [Jest-Troubleshooting page](jest.md)

- force termination of the askui UI Controller. The `UiController.stop()` takes an optional boolean argument which is set to `false` by default. If we pass `true` to the `UiController.stop()` method, e.g., `uiController.stop(true)`,  we kill the askui UI Controller process. 
This option explicitly stops the askui UI Controller. The first option terminates all processes which were set up by test code and didn't close properly.  

```typescript
await uiController.stop(true);
```
 