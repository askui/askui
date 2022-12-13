# Windows

## askui UI Controller 

On Windows, the askui UI Controller may not terminate after test execution. This may lead to problems when using the askui UI Controller in a pipeline like a pipeline's run not coming to an end. There are two ways to deal with this issue:

- you can force Jest to exit as described on our [Jest-Troubleshooting page](jest.md)

- try to stop the askui UI Controller. The stop method of the class `UiController` has an optional `forceStop` parameter. If we pass `true` to the stop method we kill the process of the askui UI Controller port and force a termination.

```typescript
await uiController.stop(true);
```
 