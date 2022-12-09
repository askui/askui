# Windows

## askui Controller 

On windows the problem occurs that the askui Controller doesn't terminate after test execution.
Jest can't execute if processes are still running. If you are using askui in a CI/CD pipeline
this can prevent the pipeline to proceed.
[Here](jest.md) is already a possible solution where you force Jest to exit.

But you could also try to stop the askui Controller. This can be done by passing `true` to
the stop method:

```typescript
await uiController.stop(true);
```
