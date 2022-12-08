# Jest

## Termination Error

Jest sometimes has problems to terminate correctly. If this happens, you can see following error message:

```shell
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations 
that weren't stopped in your tests. 
Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

As described in the error message Jest has problems to stop because of some processes which are still running.
This can cause problems in your CI/CD pipeline because your pipeline can't continue after 
getting this error.

One solution could be forcing the askui Controller to stop. This can be done by passing `true` to
the stop method:

```typescript
await uiController.stop(true);
```

Another solution is to force Jest to stop. For this case Jest provides the `--forceExit` flag: 

```shell
npx jest --config ./test/jest.config.ts --forceExit
```