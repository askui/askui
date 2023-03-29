---
sidebar_position: 2
---

# Jest

## Termination Error

Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:

```shell
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations 
that weren't stopped in your tests. 
Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

As described in the error message Jest has problems stopping because of some processes which are still running.
This can cause problems in your CI/CD pipeline because your pipeline can't continue after 
getting this error.

A solution is to force Jest to stop. For this case Jest provides the `--forceExit` flag: 

```shell
npx jest --config ./test/jest.config.ts --forceExit
```